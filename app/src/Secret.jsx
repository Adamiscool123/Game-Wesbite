import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../public/site.css";

const categories = [
  { name: "Arcade", href: "/s1/index.html" },
  { name: "Strategy", href: "/s2/index.html" },
  { name: "Racing", href: "/s3/index.html" },
  { name: "Puzzles", href: "/s4/index.html" },
];

function Secret() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("site-body");
    return () => document.body.classList.remove("site-body");
  }, []);

  return (
    <main className="site-page">
      <Link to="/" className="back-link">← Math Links</Link>
      <h1>Choose a category</h1>
      <ul className="category-grid">
        {categories.map((c) => (
          <li key={c.name}>
            <a href={c.href} className="card">
              <h2>{c.name}</h2>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Secret;
