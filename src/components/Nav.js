function Nav() {

    function closeNav(){
        document.body.classList.remove('show');
    }

    return (
        <nav onClick={closeNav}>
          <ul>
              <a>Home</a>
              <a>About</a>
              <a>Contact</a>
          </ul>
        </nav>
      )
  }
  
  export default Nav;