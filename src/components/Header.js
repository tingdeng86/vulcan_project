import Hamburger from './Hamburger';
import Icon from './Icon';

function Header() {

    return (
        <header className='header-phone' >
            <Icon className="icon-phone"/>
          <Hamburger />
        </header>
      )
  }
  
  export default Header;