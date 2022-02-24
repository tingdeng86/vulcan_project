import HeaderSlider from "./components/HeaderSlider";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Video from "./components/Video";

function App() {
  function closeNav(e) {
    if(e.target.tagName !== "HEADER" && e.target.tagName !== "SPAN" && document.body.className === "vsc-initialized show") {
      console.log(e.target.tagName);
      document.body.classList.remove('show');
    }
  }
  return (
    <div id="wr" className="wrapper" onClick={e => closeNav(e)}>
      <Header></Header>
      <Nav></Nav>
      <HeaderSlider/>
      <Gallery />
      <Video />
    </div>
  );
}

export default App;
