import { Routes, Route } from "react-router-dom";
import { Home, About, Profile, SignIn, SignUp } from "./pages";
import Header from "./components/Header";
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}
