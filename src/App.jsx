import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [modalVisibility, setModalVisiblity] = useState(false);

  function showModalHandler() {
    setModalVisiblity(true);
  }

  function hideModalHandler() {
    setModalVisiblity(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList
          isPosting={modalVisibility}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;