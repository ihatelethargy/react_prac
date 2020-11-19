import React, {useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom";

const useTitle = (initialTitle) =>{
  const [title, setTitle] = useState(initialTitle);
  const titleUpdator = () =>{
    const titleHtml = document.querySelector('title');
    titleHtml.innerText = title;
  }
  useEffect(titleUpdator, [title]);
  return setTitle;
}

const App = () =>{
  const titleUpdate = useTitle("Loading...");
  setTimeout(()=>titleUpdate("home"),3000);
  return(
    <> 
      <h1>hi</h1>
    </>
  );
}



export default App;







