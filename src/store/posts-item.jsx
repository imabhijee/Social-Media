import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext( {
    postList:[],
    addPost: () => {},
    deletePost: () => {},
    fetching : false ,
} );

const postListReducer =(currPostList , action)=> {
        let newPostList = currPostList

        if(action.type === "DELETE_POST"){
            {newPostList = newPostList.filter((post) => post.id !== action.payload.postId)}
        }
        else if(action.type === "ADD_INITIAL_POSTS"){
            newPostList =  action.payload.posts;
        }
        else if(action.type === "ADD_POST"){
            {newPostList = [ action.payload , ...currPostList]}
        }

        return newPostList;

}

const PostListProvider = ({children}) => {

    const [postList , dispatchPostList] = useReducer(postListReducer , []);
    const [fetching , setfetching] = useState(false);


    const addPost =(post)=> {
        dispatchPostList(
            {
                type:"ADD_POST",
                payload : post,
            }
        )
    }

    const addPosts =(posts)=> {
        dispatchPostList(
            {
                type:"ADD_INITIAL_POSTS",
                payload:{
                    posts
                }
            }
        )
    }

    const deletePost =(postId)=> {
        dispatchPostList(
            {
                type:"DELETE_POST",
                payload:{postId},
            }
        )
    }

    useEffect(() => {
        setfetching(true);
        const controller = new AbortController();
        const signal = controller.signal;
    
        fetch("https://dummyjson.com/posts" , { signal })
          .then((res) => res.json())
          .then((data) => {
            addPosts(data.posts);
            setfetching(false);
          });
    
          return ()=> {
            controller.abort();
          }
      }, []);

    return <PostList.Provider value = {{ postList , addPost, deletePost , fetching }} > {children} </PostList.Provider>
};

export default PostListProvider;


 