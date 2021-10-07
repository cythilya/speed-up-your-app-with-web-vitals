import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className='nav'>
        <li className='nav-item'>
          <Link to='/'>首頁</Link>
        </li>
        <li className='nav-item'>
          <Link to='/news'>新聞</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
