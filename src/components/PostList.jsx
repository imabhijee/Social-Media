import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/posts-item";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList , fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <LoadingSpinner /> }
      {!fetching && postList.length === 0 && <WelcomeMsg />}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
