import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
        <div className="nav-menu">
            <ul className="nav-links">
                <li className="nav-link">
                    <NavLink to="/" exact>Home</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/" exact>My Team Page</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/team_dashboard" exact>Team Dashboard</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/judge_dashboard" exact>Judge Dashboard</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default NavLinks;