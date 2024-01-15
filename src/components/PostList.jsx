import Post from "./Post";
import styles from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

function PostList(props) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  let modalContent;

  if (props.isPosting) {
    modalContent = (
      <Modal onClose={props.onStopPosting}>
        <NewPost onCancel={props.onStopPosting} onAddPost={addPostHandler} />
      </Modal>
    );
  }
  return (
    <>
      {modalContent}
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;