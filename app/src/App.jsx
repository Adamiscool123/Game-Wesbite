import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Secret from "./Secret";
import "../public/Secret.css";

const header = {
  textAlign: "center",
  color: "yellow"
}

const button = {
  borderRadius: "10%",
  width: "100px",
  height: "25px",
}

const styling = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  listStyleType: "none",
  color: "cyan",
}

const link = {
  color: "yellow"
}

const h3 = {
  color: "green"
}

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("home-background");
    return () => document.body.classList.remove("home-background");
  }, []);

  const handleClick = () => {
    navigate("/maths");
  };

  return (
    <div>
      <h1 style={header}>Math Links</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <div>
          <h3 style={h3}>Algebra 1</h3>
          <ul style={styling}>
            <li><a href="https://www.khanacademy.org/math/algebra" style={link}>Khan Academy – Algebra 1</a></li>
            <li><a href="https://www.khanacademy.org/math/get-ready-for-algebra-i" style={link}>Khan – Get Ready for Algebra 1</a></li>
            <li><a href="https://openstax.org/details/books/algebra-1/" style={link}>OpenStax – Algebra 1</a></li>
            <li><a href="https://openstax.org/books/elementary-algebra-2e/pages/1-introduction" style={link}>OpenStax – Elementary Algebra 2e</a></li>
            <li><a href="https://flexbooks.ck12.org/cbook/ck-12-interactive-algebra-1-for-ccss/" style={link}>CK-12 – Interactive Algebra 1</a></li>
            <li><a href="https://smile-pi.github.io/ck12_textbooks/books/ck12_algebra1.pdf" style={link}>CK-12 – Algebra 1 (PDF)</a></li>
            <li><a href="https://tutorial.math.lamar.edu/Classes/Alg/Alg.aspx" style={link}>Paul’s Online Math Notes – Algebra</a></li>
            <li><a href="https://artofproblemsolving.com/resources" style={link}>AoPS – Algebra Resources</a></li>
          </ul>
        </div>

        <div>
          <h3 style={h3}>Algebra 2</h3>
          <ul style={styling}>
            <li><a href="https://www.khanacademy.org/math/algebra2" style={link}>Khan Academy – Algebra 2</a></li>
            <li><a href="https://www.khanacademy.org/math/algebra2-2018" style={link}>Khan Academy – Algebra 2 (2018)</a></li>
            <li><a href="https://www.ck12.org/book/algebra-ii/" style={link}>CK-12 – Algebra 2 FlexBook</a></li>
            <li><a href="https://flexbooks.ck12.org/cbook/ck-12-interactive-algebra-2-for-ccss-2nd-edition/" style={link}>CK-12 – Interactive Algebra 2</a></li>
            <li><a href="https://www.ck12.org/book/ck-12-algebra-ii-with-trigonometry/" style={link}>CK-12 – Algebra 2 with Trig</a></li>
            <li><a href="https://openstax.org/details/books/college-algebra-2e/" style={link}>OpenStax – College Algebra</a></li>
            <li><a href="https://openstax.org/details/books/algebra-and-trigonometry-2e/" style={link}>OpenStax – Algebra & Trigonometry</a></li>
            <li><a href="https://www.ck12.org/fbbrowse/list/?Grade=High+School&Subject=Algebra" style={link}>CK-12 – HS Algebra Index</a></li>
            <li><a href="https://www.youtube.com/playlist?list=PLDesaqWTN6EQag0bMsBudwDjyPRcW5HgR" style={link}>Professor Leonard – Intermediate Algebra</a></li>
          </ul>
        </div>

        <div>
          <h3 style={h3}>Trigonometry</h3>
          <ul style={styling}>
            <li><a href="https://www.khanacademy.org/math/trigonometry" style={link}>Khan Academy – Trigonometry</a></li>
            <li><a href="https://www.khanacademy.org/math/trigonometry/unit-circle-trig-func" style={link}>Khan – Trig Functions (Unit Circle)</a></li>
            <li><a href="https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89%3Atrig" style={link}>Khan – Trig Unit (Alg 2)</a></li>
            <li><a href="https://openstax.org/details/books/algebra-and-trigonometry-2e/" style={link}>OpenStax – Algebra & Trig</a></li>
            <li><a href="https://www.ck12.org/book/ck-12-algebra-ii-with-trigonometry/" style={link}>CK-12 – Trig FlexBook</a></li>
            <li><a href="https://www.mathsisfun.com/algebra/trigonometry.html" style={link}>Math Is Fun – Trig Overview</a></li>
            <li><a href="https://www.mathsisfun.com/sine-cosine-tangent.html" style={link}>Math Is Fun – Sine/Cos/Tan</a></li>
            <li><a href="https://www.geeksforgeeks.org/maths/trigonometry-formulas/" style={link}>GeeksforGeeks – Trig Formulas</a></li>
            <li><a href="https://www.cuemath.com/trigonometry/" style={link}>Cuemath – Trig</a></li>
            <li><a href="https://tutorial.math.lamar.edu/Extras/AlgebraTrigReview/AlgebraTrigIntro.aspx" style={link}>Paul’s – Alg/Trig Review</a></li>
          </ul>
        </div>

        <div>
          <h3 style={h3}>Precalculus</h3>
          <ul style={styling}>
            <li><a href="https://www.khanacademy.org/math/precalculus" style={link}>Khan Academy – Precalculus</a></li>
            <li><a href="https://www.khanacademy.org/math/get-ready-for-precalculus" style={link}>Khan – Get Ready for Precalc</a></li>
            <li><a href="https://openstax.org/details/books/precalculus-2e/" style={link}>OpenStax – Precalculus 2e</a></li>
            <li><a href="https://open.umn.edu/opentextbooks/textbooks/197" style={link}>Open Textbook – Precalculus</a></li>
            <li><a href="https://flexbooks.ck12.org/cbook/ck-12-precalculus-concepts-2.0/" style={link}>CK-12 – Precalc Concepts</a></li>
            <li><a href="https://flexbooks.ck12.org/cbook/ck-12-college-precalculus/" style={link}>CK-12 – College Precalc</a></li>
            <li><a href="https://artofproblemsolving.com/store/online" style={link}>AoPS – Precalc Resources</a></li>
            <li><a href="https://www.youtube.com/playlist?list=PLDesaqWTN6ERiT0r1HqDpNBIqq_b-H4FP" style={link}>Professor Leonard – Precalc</a></li>
            <li><a href="https://tutorial.math.lamar.edu/Extras/AlgebraTrigReview/AlgebraTrigIntro.aspx" style={link}>Paul’s – Alg/Trig Review</a></li>
          </ul>
        </div>

        <div>
          <h3 style={h3}>Calculus</h3>
          <ul style={styling}>
            <li><a href="https://www.khanacademy.org/math/calculus-1" style={link}>Khan Academy – Calc 1</a></li>
            <li><a href="https://www.khanacademy.org/math/calculus-2" style={link}>Khan Academy – Calc 2</a></li>
            <li><a href="https://www.khanacademy.org/math/multivariable-calculus" style={link}>Khan Academy – Calc 3</a></li>
            <li><a href="https://openstax.org/details/books/calculus-volume-1/" style={link}>OpenStax – Calc Vol 1</a></li>
            <li><a href="https://openstax.org/details/books/calculus-volume-2/" style={link}>OpenStax – Calc Vol 2</a></li>
            <li><a href="https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/" style={link}>MIT OCW – 18.01</a></li>
            <li><a href="https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/" style={link}>MIT OCW – 18.01SC</a></li>
            <li><a href="https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/" style={link}>MIT OCW – 18.02</a></li>
            <li><a href="https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/" style={link}>MIT OCW – 18.02SC</a></li>
            <li><a href="https://ocw.mit.edu/courses/res-18-001-calculus-fall-2023/pages/textbook/" style={link}>MIT – Calc Textbook</a></li>
            <li><a href="https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx" style={link}>Paul’s – Calc I</a></li>
            <li><a href="https://tutorial.math.lamar.edu/Classes/CalcII/CalcII.aspx" style={link}>Paul’s – Calc II</a></li>
            <li><a href="https://tutorial.math.lamar.edu/Classes/CalcIII/CalcIII.aspx" style={link}>Paul’s – Calc III</a></li>
            <li><a href="https://www.youtube.com/playlist?list=PL63F77489E9526C5E" style={link}>PatrickJMT – Calc 1</a></li>
            <li><a href="https://www.youtube.com/playlist?list=PLDesaqWTN6EQmWw1t1X_i30lHNOsEgcxg" style={link}>Professor Leonard – Calc 1</a></li>
            <li><a href="https://www.youtube.com/playlist?list=PLDesaqWTN6EQ2J4vgsN1HyBeRADEh4Cw-" style={link}>Professor Leonard – Calc 2</a></li>
            <li><a href="https://www.youtube.com/playlist?list=PLDesaqWTN6ERd3elXO_Q5g4xH4f17UEqM" style={link}>Professor Leonard – Calc 3</a></li>
          </ul>
        </div>

        <div>
          <h3 style={h3}>Linear Algebra</h3>
          <ul style={styling}>
            <li><a href="https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" style={link}>3Blue1Brown – Essence of Linear Algebra</a></li>
            <li><a href="https://www.3blue1brown.com/topics/linear-algebra" style={link}>3Blue1Brown – Topic Page</a></li>
            <li><a href="https://www.khanacademy.org/math/linear-algebra" style={link}>Khan Academy – Linear Algebra</a></li>
            <li><a href="https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/" style={link}>MIT OCW – 18.06</a></li>
            <li><a href="https://web.mit.edu/18.06/www/" style={link}>MIT – 18.06 Index</a></li>
            <li><a href="https://open.umn.edu/opentextbooks/textbooks/213" style={link}>Open Textbook – Linear Algebra</a></li>
            <li><a href="https://open.umn.edu/opentextbooks/textbooks/188" style={link}>Open Textbook – Alt</a></li>
            <li><a href="https://brilliant.org/topics/collegemath/" style={link}>Brilliant – College Math</a></li>
          </ul>
        </div>

        <div>
          <h3 style={h3}>Statistics & Probability</h3>
          <ul style={styling}>
            <li><a href="https://www.khanacademy.org/math/statistics-probability" style={link}>Khan Academy – Statistics & Probability</a></li>
            <li><a href="https://www.khanacademy.org/math/ap-statistics/probability-ap" style={link}>Khan – AP Probability</a></li>
            <li><a href="https://www.openintro.org/book/stat/" style={link}>OpenIntro – Stats Textbooks</a></li>
            <li><a href="https://open.umn.edu/opentextbooks/textbooks/60" style={link}>OpenIntro – Statistics Text</a></li>
            <li><a href="https://openintrostat.github.io/ims/" style={link}>Intro to Modern Statistics</a></li>
            <li><a href="https://www.youtube.com/playlist?list=PLsPuUQJY-zXXSAJWF-fdVy3jHVqnuGSrb" style={link}>Khan – Complete Stats Playlist</a></li>
            <li><a href="https://www.youtube.com/playlist?list=PLDesaqWTN6EQ2J8vU2P8Wc-6C0D1f9XOv" style={link}>Professor Leonard – Statistics</a></li>
          </ul>
        </div>

        <div>
          <h3 style={h3}>General & Tools</h3>
          <ul style={styling}>
            <li><a href="https://www.khanacademy.org/math" style={link}>Khan Academy – Math Home</a></li>
            <li><a href="https://openstax.org/subjects/math/" style={link}>OpenStax – Math Subjects</a></li>
            <li><a href="https://www.ck12.org/fbbrowse/list/?Grade=All+Grades&Subject=Math" style={link}>CK-12 – Math Index</a></li>
            <li><a href="https://artofproblemsolving.com/resources" style={link}>AoPS – Resources</a></li>
            <li><a href="https://tutorial.math.lamar.edu/" style={link}>Paul’s Online Math Notes</a></li>
            <li><a href="https://brilliant.org/math/" style={link}>Brilliant – Math</a></li>
            <li><a href="https://www.3blue1brown.com/" style={link}>3Blue1Brown – Topics</a></li>
            <li><a href="https://www.youtube.com/@patrickjmt" style={link}>PatrickJMT – Channel</a></li>
            <li><a href="https://www.youtube.com/@ProfessorLeonard" style={link}>Professor Leonard – Channel</a></li>
            <li><a href="https://www.desmos.com/calculator" style={link}>Desmos – Graphing Calculator</a></li>
            <li><a href="https://www.wolframalpha.com/" style={link}>Wolfram Alpha</a></li>
            <li><a href="https://www.ixl.com/math/" style={link}>IXL – Math</a></li>
          </ul>
        </div>

        <div>
          <button onClick={handleClick} style={button}>Puzzles</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/maths" element={<Secret />} />
    </Routes>
  );
}

export default App;
