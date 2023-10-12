import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <p></p>
      <hr className="footerTop" />
      <ul className="footer">
        <li>Created Using Create React App</li>
        <li>|</li>
        <li>Code by Elizabeth "Betsy" Carter</li>
        <li>|</li>
        <li>
          <Link to="/portfolio">More Information about my Portfolio</Link>
        </li>
      </ul>
    </>
  );
}
