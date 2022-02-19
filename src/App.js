import HeaderSlider from "./components/HeaderSlider";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Nav></Nav>
      <HeaderSlider/>
      <Gallery />
    </div>
  );
}

export default App;
