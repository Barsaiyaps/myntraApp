import Footer from "../src/pages/footer";
import Navbar from "../src/pages/navbar";
import Home from "./pages/home";
import Slider from "./pages/slider";
import Slider2 from "./pages/slider2";
import "./App.css";
import Demo from "./pages/grid";


function App() {


  return (
    <div>
      <Navbar style={{ position: "fixed" }}></Navbar>
      <div
        className="container"
        style={{ margin: "auto", display: "grid",padding:"10px"}}
      >
        {/* <Home /> */}
        <Slider />
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "grey",
            padding: "30px",
          }}
        >
          Medal Worthy Brands To Bag
        </h1>
        <Slider2 />
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "grey",
            padding: "30px",
          }}
        >
          Grand Global Brands
        </h1>
        <Slider2 />
        {
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "grey",
              padding: "30px",
            }}
          >
            SHOP BY CATEGORY
          </h2>
        }
        <Demo />
      </div>
     
      <Footer></Footer>
    </div>
  );
}

export default App;
