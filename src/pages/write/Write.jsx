import "./write.css";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      categories:categories.filter(c=>c._id===selectedCategory)[0].name,

    };
    console.log(newPost);
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("https://blog-nastya.herokuapp.com/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("https://blog-nastya.herokuapp.com/api/categories");
      setCategories(res.data);
      setSelectedCategory(res.data[0]);
      console.log(res.data);
    };
    getCats();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon  fa fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          {selectedCategory && (
            <select value={selectedCategory} onChange={handleCategoryChange} className="writeInput">
              {categories.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          )}

          <input
            type="text"
            placeholder="Title.."
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>

        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
