import "./Navbar.css";
export default function NavBar() {
  return (
    <nav className="nav">
      <a href="/" className="navTitle">
        Logo
      </a>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/project">Project</a>
        </li>
      </ul>
    </nav>
  );
}
