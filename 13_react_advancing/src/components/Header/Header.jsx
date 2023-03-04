import { Nav } from './styledHeader.js';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

    const botaoClicado = useSelector(state => state.botaoClicado);

    return (
        <Nav>
            <Link to="/">
                <FaHome size={20} />
            </Link>
         
            <Link to="/login">
                <FaUserAlt size={17} />
            </Link>

            <Link to="/asd">
                <FaSignInAlt size={19} />
            </Link>
            {botaoClicado && botaoClicado ? 'Clicado' : 'Não clicado'}
        </Nav>
    )
}

export default Header