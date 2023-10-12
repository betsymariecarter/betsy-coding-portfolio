import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <main className="website">
      <h2>About My Portfolio</h2>
      <h3>Languages: HTML, CSS, Javascript</h3>
      <h3>Solo Project</h3>
      <p>A react based portfolio of my coding work, featuring the following:</p>
      <ul>
        <li>React Routing</li>
        <li>Create React App Framework</li>
      </ul>
      <p>
        If you would like to learn more about planned features, please visit the{" "}
        <Link to="/future">Future Goals</Link> tab.
      </p>
      {/* <a href="https://github.com/betsymariecarter/the-code-portfolio">
        Portfolio Github
      </a> */}
    </main>
  );
}