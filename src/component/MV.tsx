import React,{useState,useRef}from 'react';
import styled from 'styled-components';
import './App.css';
import makeyouhappy from '../image/maxresdefault.jpeg';
import takeapicture from '../image/takeapicture.jpeg';
import poppinshakin from '../image/poppi shakin.jpeg';
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';
import ArrowBackIosTwoToneIcon from '@material-ui/icons/ArrowBackIosTwoTone';
import ArrowForwardIosTwoToneIcon from '@material-ui/icons/ArrowForwardIosTwoTone';
import OndemandVideoRoundedIcon from '@material-ui/icons/OndemandVideoRounded';
import VideoModal from "./VideoModal"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
// import Swiper core and required modules
import SwiperCore, {
  Keyboard,Pagination,Navigation
} from 'swiper/core';
import { pink } from '@material-ui/core/colors';

// install Swiper modules
SwiperCore.use([Keyboard,Pagination,Navigation]);
type Props = {

}

const MV = () => {
  const image_src = new Array(makeyouhappy,takeapicture,poppinshakin);
  const [num, setnum] = useState(0);
  const refDom = useRef<any | null>(null);
  const [videoopen, setvideoOpen] = useState(false);
  // 画像のスライドショー
  // const ChangeImage=(num :number)=>{
  //   var MVimage =  document.getElementsByClassName("MVimage")
  //   MVimage[0].setAttribute("src", image_src[num]);
  //   // まるボタンの色切り替え
  //   if (!refDom.current) {
  //   var button =  document.getElementsByClassName(`button${num}`)
  //   refDom.current = button[0]
  //   }else{
  //     refDom.current.classList.remove("-active");
  //     var button =  document.getElementsByClassName(`button${num}`)
  //     button[0].classList.add("-active")
  //     refDom.current = button[0]
  //   }
  // }
  // const goBack=()=>{
  //   if (num == 0) {
  //     setnum(2) ;
  //   }else {
  //      setnum(num -1);
  //   }
  //   ChangeImage(num);
  // }
  // const goForward=()=>{
  //   if (num == 2) {
  //     setnum(0) ;
  //   }else {
  //      setnum(num +1);
  //   }
  //   ChangeImage(num);
  // }
  // const SwitchImage=(i :number)=>{
  // setnum(i)
  //   ChangeImage(num);
  // }
  


  // ビデオモーダルを表示
  const openvideoModal=()=>{
    setvideoOpen(true)
  }
  const closevideoModal=()=>{
    setvideoOpen(false)
  }

  return (

<>
<VideoModal videoopen={videoopen} videoclosefunc={()=>closevideoModal()}/>
<div><h2 className="MemberTitle" style={{ marginLeft: 30}}>MUSIC VIDEO</h2></div>
<div className="MV">
<div className="MVCopntainer">
<div id="main">
<OndemandVideoRoundedIcon className="ondemandVideoRoundedIcon" style={{ fontSize: 40 , opacity:0.7}} onClick={()=>openvideoModal()}/>
<Swiper slidesPerView={1} spaceBetween={30} keyboard={{
  "enabled": true
}} pagination={{
  "clickable": true
}} navigation={true} className="mySwiper">
  <SwiperSlide> <img src={makeyouhappy} alt=""/></SwiperSlide><SwiperSlide><img src={takeapicture} alt=""/></SwiperSlide><SwiperSlide><img src={poppinshakin} alt=""/></SwiperSlide>
  </Swiper>

</div>
</div>
</div>

</>






  );
}



export default MV;
