import { RiDeleteBin2Fill } from "react-icons/ri";
import {useContext} from "react";
import {PostList} from "../store/posts-item";

const Post = ({ post }) => {

  const {deletePost} = useContext(PostList);

  return (
    <>
      <div className="card post-card" style={{ width: "55rem" }}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
          >
            <RiDeleteBin2Fill />
          </span>
          {post.tags.map((tag) => (
            <span key = {tag} className="badge text-bg-primary tags">{tag}</span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            This Post has been reacted by {post.reactions} people.
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
