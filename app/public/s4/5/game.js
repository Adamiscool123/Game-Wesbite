const ROWS = 6;
const COLS = 5;
const STATS_KEY = "wg-stats";
const RANK = { absent: 1, present: 2, correct: 3 };

const boardEl = document.getElementById("board");
const messageEl = document.getElementById("message");
const newBtn = document.getElementById("new");
const keyboardEl = document.getElementById("keyboard");
const statsEl = document.getElementById("stats");

const tiles = [];
const keys = {};
let answer, row, guess, over, messageTimer;

function score(word, target) {
  const result = Array(COLS).fill("absent");
  const remaining = {};
  for (let i = 0; i < COLS; i++) {
    if (word[i] === target[i]) result[i] = "correct";
    else remaining[target[i]] = (remaining[target[i]] || 0) + 1;
  }
  for (let i = 0; i < COLS; i++) {
    if (result[i] !== "correct" && remaining[word[i]] > 0) {
      result[i] = "present";
      remaining[word[i]]--;
    }
  }
  return result;
}

function buildBoard() {
  for (let r = 0; r < ROWS; r++) {
    const rowEl = document.createElement("div");
    rowEl.className = "wg-row";
    tiles.push([]);
    for (let c = 0; c < COLS; c++) {
      const tile = document.createElement("div");
      tile.className = "wg-tile";
      rowEl.appendChild(tile);
      tiles[r].push(tile);
    }
    boardEl.appendChild(rowEl);
  }
}

function buildKeyboard() {
  for (const line of ["qwertyuiop", "asdfghjkl", "+zxcvbnm-"]) {
    const rowEl = document.createElement("div");
    rowEl.className = "wg-krow";
    for (const ch of line) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "wg-key";
      if (ch === "+") {
        btn.textContent = "Enter";
        btn.dataset.key = "enter";
        btn.classList.add("wide");
      } else if (ch === "-") {
        btn.textContent = "⌫";
        btn.setAttribute("aria-label", "Backspace");
        btn.dataset.key = "backspace";
        btn.classList.add("wide");
      } else {
        btn.textContent = ch;
        btn.dataset.key = ch;
        keys[ch] = btn;
      }
      btn.addEventListener("click", () => {
        btn.blur();
        handleKey(btn.dataset.key);
      });
      rowEl.appendChild(btn);
    }
    keyboardEl.appendChild(rowEl);
  }
}

function loadStats() {
  try {
    return JSON.parse(localStorage.getItem(STATS_KEY)) || { played: 0, won: 0, streak: 0 };
  } catch {
    return { played: 0, won: 0, streak: 0 };
  }
}

function renderStats() {
  const s = loadStats();
  statsEl.textContent = s.played ? `Won ${s.won}/${s.played} · Streak ${s.streak}` : "";
}

function recordResult(won) {
  const s = loadStats();
  s.played++;
  if (won) {
    s.won++;
    s.streak++;
  } else {
    s.streak = 0;
  }
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(s));
  } catch {}
  renderStats();
}

function showMessage(text, sticky) {
  clearTimeout(messageTimer);
  messageEl.textContent = text;
  if (!sticky) messageTimer = setTimeout(() => (messageEl.textContent = ""), 1500);
}

function renderRow() {
  for (let c = 0; c < COLS; c++) {
    tiles[row][c].textContent = guess[c] || "";
    tiles[row][c].classList.toggle("filled", Boolean(guess[c]));
  }
}

function newGame() {
  answer = ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
  row = 0;
  guess = "";
  over = false;
  for (const line of tiles) {
    for (const tile of line) {
      tile.textContent = "";
      tile.className = "wg-tile";
    }
  }
  for (const btn of Object.values(keys)) {
    btn.className = "wg-key";
    delete btn.dataset.state;
  }
  showMessage("", true);
  newBtn.hidden = true;
}

function finish(won) {
  over = true;
  showMessage(won ? `Solved in ${row + 1}/${ROWS}!` : `The word was ${answer.toUpperCase()}.`, true);
  newBtn.hidden = false;
  recordResult(won);
}

function submit() {
  if (guess.length < COLS) return showMessage("Not enough letters");
  if (!VALID.has(guess)) return showMessage("Not in word list");
  const result = score(guess, answer);
  result.forEach((state, c) => {
    tiles[row][c].classList.add(state);
    const btn = keys[guess[c]];
    if (!btn.dataset.state || RANK[state] > RANK[btn.dataset.state]) {
      btn.dataset.state = state;
      btn.className = `wg-key ${state}`;
    }
  });
  if (guess === answer) return finish(true);
  if (row === ROWS - 1) return finish(false);
  row++;
  guess = "";
}

function handleKey(key) {
  if (over) return;
  if (key === "enter") submit();
  else if (key === "backspace") {
    guess = guess.slice(0, -1);
    renderRow();
  } else if (/^[a-z]$/.test(key) && guess.length < COLS) {
    guess += key;
    renderRow();
  }
}

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.key === "Enter") {
    e.preventDefault();
    if (over) newGame();
    else handleKey("enter");
  } else if (e.key === "Backspace") {
    e.preventDefault();
    handleKey("backspace");
  } else if (/^[a-zA-Z]$/.test(e.key)) {
    handleKey(e.key.toLowerCase());
  }
});

newBtn.addEventListener("click", () => {
  newBtn.blur();
  newGame();
});

buildBoard();
buildKeyboard();
renderStats();
newGame();
