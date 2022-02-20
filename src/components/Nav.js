function Nav() {

    function closeNav(){
        document.body.classList.remove('show');
    }

    return (
        <nav onClick={closeNav}>
          <ul>
              <a href="/">ABOUT</a>
              <a href="/">PRODUCTS</a>
              <a href="/">SERVICES</a>
              <a href="/">PARTS</a>
              <a href="/">NEWS</a>
              <a href="/">CONTACT</a>
              <a href="/">INSTALLATION MAP</a>
              <a href="/">PRODUCT LITERATURE</a>
          </ul>
        </nav>
      )
  }
  
  export default Nav;