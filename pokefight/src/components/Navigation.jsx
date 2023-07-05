import { NavLink } from "react-router-dom";
import "../App.css";

export default function Navigation() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pokedex">Pokedex</NavLink>
        <NavLink to="/fight">Fight</NavLink>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
      </nav>
    </div>
  );
}
