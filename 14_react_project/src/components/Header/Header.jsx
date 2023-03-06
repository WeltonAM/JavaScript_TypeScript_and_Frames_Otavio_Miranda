import { Nav } from './styledHeader.js';
import { FaHome, FaSignInAlt, FaUserAlt, FaPowerOff } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(actions.loginFailure());

        return navigate('/login');

    }

    return (
        <Nav>
            <Link to="/">
                <FaHome size={20} />
            </Link>

            <Link to="/register">
                <FaUserAlt size={17} />
            </Link>

            {isLoggedIn && isLoggedIn ? (
                <Link onClick={handleLogout} to="/logout">
                    <FaPowerOff size={19} />
                </Link>
            ) : (
                <Link to="/login">
                    <FaSignInAlt size={19} />
                </Link>
            )}
        </Nav>
    )
}

export default Header