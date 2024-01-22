import React, { useCallback , useEffect, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import {io} from 'socket.io-client';
const TOOLBAR_OPTIONS = [
  [{header: [1,2,3,4,5,6,false]}],
  [{font : []}],
  [{list: "ordered"} , {list: "bullet"}],
  ["bold","italic","underline"],
  [{color:[]},{background:[]}],
  [{script:"sub"},{script:"super"}],
  [{align: []}],
  ["image","blockquote","code-block"],
  ["clean"],
]

const Texteditor = () => {
    const [socket, setSocket] = useState();
    const [quil,setQuil] = useState();
    useEffect(() =>{
     const s = io("http://localhost:3001")
      setSocket(s)
     return () => {
      s.disconnect()
     }
    }, [])

    useEffect(() => {
      
    })
    
    const wrapperRef = useCallback(wrapper => {
        if (wrapper == null) return
        wrapper.innerHTML =""
    const editor = document.createElement("div");
    wrapper.append(editor)
    const q = new Quill(editor, { theme: "snow", modules: {toolbar: TOOLBAR_OPTIONS }});
    setQuil(q)
   
  }, []);
  return <div className="container" ref={wrapperRef}></div>;
};

export default Texteditor;
