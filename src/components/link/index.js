import React, { useEffect } from "react";
import "./style.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axiosInstance from "axios";

const MainPage = () => {
  const names = useRef();
  const [link, setLink] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    var id = localStorage.getItem("myid");
    if (id) {
      navigate("/allMessage");
    } else {
      navigate("/");
    }
  }, []);
  const generate = async (e) => {
    e.preventDefault();
    console.log(names.current.value);
    try {
      const resp = await axiosInstance.post("http://localhost:8000/link", {
        name: names.current.value,
      });
      console.log(resp);
      localStorage.setItem("myid", resp.data.result._id);
      setLink(`http://localhost:3000/secret/${resp.data.result._id}`);
    } catch (error) {}
  };

  return (
    
    
    <div className="form">
    <div className=" -width ">
    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter your name</label>
    <input type="text" className=" mx-1 form-control" id="exampleInputEmail1" aria-describedby="emailHelp"ref={names}/>
  </div>
 
 
  <button type="submit" className="btn btn-primary"onClick={generate}> Genrate your link</button>
</form>
</div>
<h1>{link}</h1>
</div>
  );
};

export default MainPage;
