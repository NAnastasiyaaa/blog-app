import Home from "./pages/home/Home";
import Single from "./pages/home/single/Single";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Write from "./pages/write/Write";
import TopBar from "./topBar/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user}=useContext(Context);

  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/register" element={user ? <Home /> : <Register />} />

          <Route path="/login" element={user ? <Home /> : <Login />} />

          <Route path="/write" element={user ? <Write /> : <Register />} />

          <Route path="/settings" element={user ? <Setting /> : <Register />} />

          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
