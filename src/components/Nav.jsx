import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';
export { Nav };

function Nav() {
    const auth = useSelector(x => x.auth.value);
    const dispatch = useDispatch();
    const logout = () => dispatch(authActions.logout());

    // only show nav when logged in
    if (!auth) return null;
    
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
            <div className="navbar-nav">
            <NavLink to="/dashboard" className="nav-item nav-link">Dashboard</NavLink>
                <NavLink to="/home" className="nav-item nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                <button onClick={logout} className="btn btn-link nav-item nav-link">Logout</button>
            </div>
        </nav>
    );
}