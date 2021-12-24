import React, { useEffect, useState } from 'react';
import './Postview.css';
import camera from  "./image/camera.svg";
import insta from './image/insta.svg';


const Postview=()=> {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3004/user")
    .then(request=>request.json())
    .then(response=>setData(response))
  },[])
  return (
    <>
      <div className="site-container">
        <div className='header'>
          <div className='insta-icon'>
            {<img src={insta} alt="insta-icon" className="camera-image"/>}
            <h1>InstaClone</h1>
          </div>
          <div className="cam-img">
          {<img src={camera} alt="insta-icon" className="camera-image"/>}

          </div>

        </div>
    <div>

    {data.map((val,i)=>{
      return (
        <>
        <div className="main">
        <div key={i} className="post">
          <div className="post-top">
            <h4 className="name">{val.name}</h4>
            <p className="location">{val.location}</p>
          </div>
          <div>
            <p className='three-dot'><strong>...</strong></p>
          </div>
        </div>
        <div >
          <img src={val.PostImage} alt="Post-img" className='post-img' />
        </div>
        <div>
        <div className='post-bottom'>
          <div>
            <i class="far fa-heart"></i>
            <i class="fab fa-telegram-plane"></i>
          </div>
          <div>
            <p className='date'> {val.date}</p>
          </div>
        </div>
        <div>
          <p class="like">{val.likes} likes</p>
          <p className='des'>{val.description}</p>
        </div>
        </div>
        </div>
        </>
      );
    })}
    </div>
    </div>
    </>
  );
}
export default Postview;