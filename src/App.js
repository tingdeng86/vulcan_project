import HeaderSlider from "./components/HeaderSlider";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Video from "./components/Video";
import ProductAdvisor from "./components/ProductAdvisor";
import About from "./components/About";
import Info from "./components/Info";

function App() {
  function closeNav(e) {
    if(e.target.tagName !== "HEADER" && e.target.tagName !== "SPAN" && document.body.className === "vsc-initialized show") {
      //console.log(e.target.tagName);
      document.body.classList.remove('show');
    }
  }
  return (
    <div id="wr" className="wrapper" onClick={e => closeNav(e)}>
      <Header/>
      <Nav/>
      <HeaderSlider/>
      <Gallery />
      <ProductAdvisor/>
      <About/>
      <Video />
      <Info/>
    </div>
  );
}

export default App;
