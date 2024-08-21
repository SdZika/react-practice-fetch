import React from "react";
import { Meme } from "./components/Fatch";
import { Joke } from "./components/Async";
<<<<<<< HEAD
import { Facts } from "./components/Facts";
=======
import { MyFetch } from "./components/Fetch";
>>>>>>> a12c9a2145afb245b017b5b8ce738f26b97aad6d

function App() {
  return (
    <div className="App">
      <Meme url="https://api.imgflip.com/get_memes" />
      <Joke />
<<<<<<< HEAD
      <Facts />
=======
      <MyFetch />
>>>>>>> a12c9a2145afb245b017b5b8ce738f26b97aad6d
    </div>
  );
}

export default App;
