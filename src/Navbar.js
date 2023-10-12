import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <ul className="navLinks">
        <li>
          <Link to="/*">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* <li>
            <Link to="/contact">Contact Me</Link>
          </li> */}
        <li>
          <Link to="/future">Future Goals</Link>
        </li>
      </ul>
      <div className="navHeader">
        <h1>Elizabeth "Betsy" Carter</h1>
      </div>
      <div className="navHeader">
        <h1>Fullstack Developer | Artist </h1>
      </div>
    </>
  );
}