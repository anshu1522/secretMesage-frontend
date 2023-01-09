import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axiosInstance from "axios";

import "./style.css";
import MainPage from "../link";

function Messages() {
  const navigate = useNavigate();

  const [obtain, setObtain] = useState([]);
  const [mess, setMess] = useState("");
  let { id } = useParams();
  const secret = (props) => {
    setMess(props.target.value);
  };
  const funs = async () => {
    // console.log(id,mess);
    try {
      const resp = await axiosInstance.put(
        `https://secret-api-service.onrender.com/message/${id}`,
        { msg: mess }
      );
      // console.log(resp);
      setMess("");

      if (resp) {
        navigate("/thanks");
      }
    } catch (error) {}
  };

  return (
    <div className="head2">
    <div className=" msgbody">
      <div className="  card mx-5  ">
        <div className="card-body">
          <h1> Message Board</h1>
          <div>Let's play and have fun with me.</div>
          <div>Send your Message secretly to me.</div>
          <div> I wil never know who message.</div>
        
            <textarea value={mess} className=" box form-control mt-2 " placeholder="enter your thoughts" 
            id="floatingTextarea2" onChange={secret}/>

            

          <br />
          <div className="btn btn-primary w-100" onClick={funs}>
            Send
          </div>
        </div>
      </div>
      
    </div>
    </div>
  );
}
export default Messages;
