import { Link } from 'react-router-dom';
import './Menu.css';

type Props = {}

const Menu = (props: Props) => {
  return (
    <nav>
        <ul className='menu'>
            <li>
                <Link to="/" >Home</Link>
            </li>
            
            <li>
                <Link to="/about" state={'This is the state from ABOUT'}>About</Link>
            </li>
            
            <li>
                <Link to="/posts">Posts</Link>
            </li>

            <li>
                <Link to="/posts/:id">Post 10</Link>
            </li>

            <li>
                <Link to="/redirect">Redirect</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Menu