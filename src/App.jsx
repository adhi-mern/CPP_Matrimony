import { Route } from "react-router-dom";
import Nav from "./components/Navbar/Navbar";
import { Routes } from "react-router-dom";
import DefaultLayout from "./components/layout/Default.layout";

import Nopage from "./components/Nopage";
function App() {
  return(
      <>
        <Routes>
          <Route path="/" element={<DefaultLayout/>}/>
          <Route path="*" element={<Nopage/>}/>
        </Routes>
      </>
  );
  // return (
  //   <div className="App">
  //     <Nav/>
  //   </div>
  // );
}

export default App;
