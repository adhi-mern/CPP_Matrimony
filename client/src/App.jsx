import { Route } from "react-router-dom";
import Nav from "./components/Navbar/Navbar";
import { Routes } from "react-router-dom";
import DefaultLayout from "./components/layout/Default.layout";
import MatchLayout from "./components/layout/findMatch.layout";
import Nopage from "./components/pages/Nopage";
import SignUp from "./components/pages/signup";
import SignIn from "./components/pages/signIn";

function App() {
  return(
      <>
        <Routes>
          <Route path="/" element={<DefaultLayout/>}/>
          <Route path="/findMatch" element={<MatchLayout/>}/>
          <Route path="*" element={<Nopage/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
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
