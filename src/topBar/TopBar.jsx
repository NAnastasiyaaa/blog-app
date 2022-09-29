import "./topBar.css";
import girlTop from "./images/beauty.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";

function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://blog-nastya.herokuapp.com/images/";

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <p className="logo_blog">.BLOG</p>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topIcon topListItem">
            <i className="fa fa-home fa-fw" aria-hidden="true"></i>
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topIcon topListItem">
            <i className="fa fa-book fa-fw" aria-hidden="true"></i>
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          {/* <li className="topIcon topListItem">
            <Link to="/contact" className="link">
              CONTACT
            </Link>
          </li> */}
          <li className="topIcon topListItem">
            <i className="fa fa-pencil fa-fw" aria-hidden="true"></i>
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topIcon topListItem" onClick={handleLogOut}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>

      <div className="topRight">
        {user ? (
          <Link to="/settings">
            {/* <img src={PF + user.profilePic} className="topImg" alt="" /> */}
            <img src={user?.profilePic ? PF + user?.profilePic : girlTop} className="topImg" alt="" />
          </Link>
          
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>

            <li className="topListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default TopBar;
