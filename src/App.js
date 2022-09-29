import Home from "./pages/home/Home";
import Single from "./pages/home/single/Single";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Write from "./pages/write/Write";
import TopBar from "./topBar/TopBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

          <Route path="/register" element={user ? <Navigate to='/' /> : <Register />} />

          <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />

          <Route path="/write" element={user ? <Write /> : <Navigate to='/register' />} />

          <Route path="/settings" element={user ? <Setting /> : <Navigate to='/register' />} />

          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
