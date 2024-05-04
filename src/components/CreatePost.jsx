import { useContext, useRef } from "react";
import { PostList } from "../store/posts-item";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const { addPost } = useContext(PostList);

  const userIdRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const reactionsRef = useRef();
  const tagsRef = useRef();

  const handleOnSubmit = (event) => {
    // event.preventDefault();
    const userId = userIdRef.current.value;
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const reactions = reactionsRef.current.value;
    const tags = tagsRef.current.value.split(" ");

    userIdRef.current.value = "";
    titleRef.current.value = "";
    contentRef.current.value = "";
    reactionsRef.current.value = "";
    tagsRef.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title :  title,
        body : content,
        reactions : reactions,
        userId : userId,
        tags : tags,           
      }),
    })
      .then((res) => res.json())
      .then((post)=>{addPost(post)});
      navigate("/Social-Media/")
  };

  return (
    <>
      <form className="createpost" onSubmit={() => handleOnSubmit()}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            UserId
          </label>
          <input
            ref={userIdRef}
            type="text"
            className="form-control"
            id="UserId"
            placeholder="Plese enter your UserId here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Post Title
          </label>
          <input
            ref={titleRef}
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling today"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Post Content
          </label>
          <textarea
            ref={contentRef}
            type="text"
            rows="3"
            className="form-control"
            id="content"
            placeholder="Tell me more about it"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Reactions" className="form-label">
            Number of Reactions
          </label>
          <input
            ref={reactionsRef}
            type="text"
            className="form-control"
            id="Reactions"
            placeholder="how many reactions your post have"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Hashtags
          </label>
          <input
            ref={tagsRef}
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter your hashtags here with space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
