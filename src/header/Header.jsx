import "./header.css";
import headerImg from "./img2.jpeg";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <h1 className="headerTitleBlog">
          WELCOME <p className="span_toBlog">to Blog</p>
        </h1>
      </div>
      <img className="headerImg" src={headerImg} alt="" />
    </div>
  );
}

export default Header;
