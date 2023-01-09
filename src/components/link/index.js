import React, { useEffect } from "react";
import "./style.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {CopyToClipboard} from 'react-copy-to-clipboard';

import axiosInstance from "axios";

const MainPage = () => {
  const names = useRef();
  const [link, setLink] = useState("first generate your link"); 
  const [copy,setCopy] =useState(false);
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
      const resp = await axiosInstance.post("https://secret-api-service.onrender.com/link", {
        name: names.current.value,
      });
      console.log(resp);
      localStorage.setItem("myid", resp.data.result._id);
      const domain = window.location.host;
      console.log(domain);
      setLink(`http://${domain}/secret/${resp.data.result._id}`);
    } catch (error) {}
  };

  return (
    
    
    <div className="form container">
    <div className=" -width ">
    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Enter your name</label>
    <input type="text" className=" mx-1 form-control" id="exampleInputEmail1" aria-describedby="emailHelp"ref={names}/>
  </div>
 
 
  <button type="submit" className="btn btn-primary"onClick={generate}> Genrate your link</button>
</form>
</div>
<div className=" mx-2 mt-2">
<div className=" mx-2 card mt-2 ">
          <div className="card-body ">
            <p className="card-text">{link}</p>
          </div>
        </div>
<CopyToClipboard text={link}
 onCopy={() => setCopy(true)}
          >
          <button className=" mt-3 btn btn-primary">{copy? "copied":"copy link"}</button>
        </CopyToClipboard>
        </div>

</div>
  );
};

export default MainPage;
