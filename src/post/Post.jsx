import "./post.css";
import { Link } from "react-router-dom";

function Post({ post }) {
  const PF = "http://localhost:5000/images/";

  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>

        <p className="postDesc">{post.desc}</p>

        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>

        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
