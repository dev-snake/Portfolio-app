import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/Pages/About";
import HomePage from "./components/Pages/Home";
import Mycv from "./components/Pages/Mycv";
import TechStack from "./components/Pages/TechStack";

const App = () => {
    return (
        <main className="w-[1300px] max-w-[100%] mx-auto">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/mycv" element={<Mycv />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/project" element={<TechStack />} />
            </Routes>
        </main>
    );
};

export default App;
