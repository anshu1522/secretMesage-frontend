import React from "react";
import { useState, useEffect } from "react";
import axiosInstance from "axios";
import "./style.css";

const ViewMsg = () => {
  const [allMsg, setAllMsg] = useState([]);

  useEffect(() => {
    const getMsg = async () => {
      var id = localStorage.getItem("myid");
     
      try {
        const resp = await axiosInstance.get(
          `https://secret-api-service.onrender.com/message/${id}`
        );
        // console.log(resp);
        setAllMsg(resp.data.message);
        // console.log(allMsg);
      } catch (error) {}
    };
    getMsg();
  }, []);

  return (
    <div className="container">
      <h1>Message Board</h1>

      {allMsg.map((msg, indx) => (
        <div className="card mt-2 ">
          <div className="card-body ">
            <p className="card-text">{msg}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewMsg;
