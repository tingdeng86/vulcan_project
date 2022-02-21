import HeaderSlider from "./components/HeaderSlider";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

function App() {
  function dosth(e) {
    if(e.target.tagName !== "HEADER" && e.target.tagName !== "SPAN" && document.body.className === "vsc-initialized show") {
      console.log(e.target.tagName);
      document.body.classList.remove('show');
    }
  }
  return (
    <div id="wr" className="wrapper" onClick={e => dosth(e)}>
      <Header></Header>
      <Nav></Nav>
      <HeaderSlider/>
      <Gallery />
    </div>
  );
}

export default App;
