import { Link } from 'react-router-dom';
import './../styles/Nav.css';

const Nav = () => {
  return (
      <nav>
          <div>
              <Link to='/'>Home</Link>
          </div>
          <div>
              <Link to='/shop'>Shop</Link>
          </div>
          
      </nav>
  )
};

export default Nav;

