import { BrowserRouter , Routes , Link , Route } from "react-router-dom";
import Home from "./pages/Home";
import Student from "./pages/Student";
import Contact from "./pages/Contact";
import About from "./pages/About";
function App() {
    return(
            <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>{"/"}
                <Link to="/Student">Student</Link>{"/"}
                <Link to="/Contact">Contact</Link>{"/"}
                <Link to="/About">About</Link>{"/"}
            </nav>
            <hr/>
            <Routes>
                <Route path="/"element={<Home/>}/>
                <Route path="/Student" element={<Student/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Routes>
            </BrowserRouter>
    );
}
export default App;