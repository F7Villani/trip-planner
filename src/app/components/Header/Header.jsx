import './Header.css';
import Link from "next/link";

function Header() {
  return (
    <header>
      <Link className='header-link' href={{pathname: '/'}}>
        <img className="logo" src="./trip-planner-logo.png"></img>
        <h1>Trip Planner</h1>
      </Link>
    </header>
  );
}

export default Header;