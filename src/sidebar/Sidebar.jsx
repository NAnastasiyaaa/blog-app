import "./sidebar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("https://blog-nastya.herokuapp.com/api/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <h1>ADD PHOTO</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ipsam
          rerum dolor eum aperiam repellendus expedita ea atque tempore odio.
        </p>
      </div>

      <div className="sideBarItem">
        <span className="sideBarTitle">TYPES</span>
        <ul className="sideBarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sideBarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
