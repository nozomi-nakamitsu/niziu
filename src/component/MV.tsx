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
type Props = {

}

const MV = () => {
  const image_src = new Array(makeyouhappy,takeapicture,poppinshakin);
  const [num, setnum] = useState(0);
  const refDom = useRef<any | null>(null);
  const [videoopen, setvideoOpen] = useState(false);
  // 画像のスライドショー
  const ChangeImage=(num :number)=>{
    var MVimage =  document.getElementsByClassName("MVimage")
    MVimage[0].setAttribute("src", image_src[num]);
    // まるボタンの色切り替え
    if (!refDom.current) {
    var button =  document.getElementsByClassName(`button${num}`)
    refDom.current = button[0]
    }else{
      refDom.current.classList.remove("-active");
      var button =  document.getElementsByClassName(`button${num}`)
      button[0].classList.add("-active")
      refDom.current = button[0]
    }
  }
  const goBack=()=>{
    if (num == 0) {
      setnum(2) ;
    }else {
       setnum(num -1);
    }
    ChangeImage(num);
  }
  const goForward=()=>{
    if (num == 2) {
      setnum(0) ;
    }else {
       setnum(num +1);
    }
    ChangeImage(num);
  }
  const SwitchImage=(i :number)=>{
  setnum(i)
    ChangeImage(num);
  }
  


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
  <div className="ImageArea">
  <img src={makeyouhappy} alt=""  className="MVimage"/>
  <OndemandVideoRoundedIcon className="ondemandVideoRoundedIcon" style={{ fontSize: 40 , opacity:0.7}} onClick={()=>openvideoModal()}/>
  </div>

<div className="ButtonArea">
  <ArrowBackIosTwoToneIcon style={{ fontSize: 20 ,color:"#DDDDDD"}} className="leftArrow" onClick={()=>goBack()}/>
  <div className="centerButton">
  <FiberManualRecordSharpIcon style={{ fontSize: 20 }} className={`button${0}  -active` } onClick={()=>SwitchImage(0)}/>
  <FiberManualRecordSharpIcon style={{ fontSize: 20 }} className={`button${1}`} onClick={()=>SwitchImage(1)}/>
  <FiberManualRecordSharpIcon style={{ fontSize: 20 }} className={`button${2}`} onClick={()=>SwitchImage(2)}/>
  </div>
 <ArrowForwardIosTwoToneIcon style={{ fontSize: 20 ,color:" #DDDDDD"}} className="rightArrow" onClick={()=>goForward()}/>
</div>

</div>
</div>
</div>
</>






  );
}



export default MV;
