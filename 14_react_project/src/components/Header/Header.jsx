import { Nav } from './styledHeader.js';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <Nav>
            <Link to="/">
                <FaHome size={20} />
            </Link>
         
            <Link to="/register">
                <FaUserAlt size={17} />
            </Link>

            <Link to="/login">
                <FaSignInAlt size={19} />
            </Link>
        </Nav>
    )
}

export default Header