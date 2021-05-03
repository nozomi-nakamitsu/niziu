import React,{useState,useEffect}from 'react';
import styled from 'styled-components';
import './App.css';
import logo from '../image/logo.jpeg';
import mainImg from '../image/niziu_top.jpeg';
import RIO from '../image/RIO.jpeg';
import ButtonLogo from '../image/niziu_purpul.jpeg';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { NoSimOutlined } from '@material-ui/icons';
import LoadingModal from "./modal"
import MV from "./MV"
type Props = {

}

const App = () => {
  const [screenIsSmall, setScreenIsSmall] = useState(window.innerWidth);
  const [onactive, setOnActive] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener('resize', () => {
        setScreenIsSmall(window.innerWidth);
      console.log(window.innerWidth);
    });
  })
  useEffect(() => {
    (async () => {
      const res1 = await  lordingHorizen();
        window.setTimeout(function(){
          lordingPageDisplayNone()
          lordingDiamond()
          }, 1000);
        window.setTimeout(function(){
          DiamondDisplayNone()
          MainImageFadeIn()
              }, 2500);
        window.setTimeout(function(){
        openModal()
            }, 4000);
        })();
  }, []);


  const active= ()=>{
    var subbuttonList =document.getElementsByClassName("subButton")
    subbuttonList[0].classList.add("withU")
    subbuttonList[1].classList.add("Mobile")
    subbuttonList[2].classList.add("About")
    setOnActive(!onactive)
  }

  const inactive=()=>{
    var subbuttonList =document.getElementsByClassName("subButton")
    subbuttonList[0].classList.remove("withU")
    subbuttonList[1].classList.remove("Mobile")
    subbuttonList[2].classList.remove("About")
    setOnActive(!onactive)
  }
  const lordingHorizen =()=>{
    var lordingHorizen =document.getElementsByClassName("JS_ScrollAnimationItem")
    lordingHorizen[0].classList.add("isActive")
  }
  const lordingDiamond =()=>{
    var lordingHorizen =document.getElementsByClassName("diamondAction")
    lordingHorizen[0].classList.add("diamond")
  }
  const lordingPageDisplayNone =()=>{
    var LoadingPage =document.getElementsByClassName("LoadingPage")
    LoadingPage[0].classList.add("DisplayNone")
  }
  const DiamondDisplayNone =()=>{
    var LoadingPage2 =document.getElementsByClassName("LoadingPage2")
    LoadingPage2[0].classList.add("DisplayNone")
  }
  const MainImageFadeIn =()=>{
    var mainImg =document.getElementsByClassName("mainImg")
    mainImg[0].classList.add("imageAnimation")
  }



  // グループメンバー追加モーダルを表示
  const openModal=()=>{
    setOpen(true)
  }
  const closeModal=()=>{
    setOpen(false)
  }



  return (

<>
  {/* ロード画面1 */}
  <div className="LoadingPage">
  <img src={logo} alt=""/>
  <div className="Text-Span JS_ScrollAnimationItem"></div>
  {/* <div className="Text"><span className="Text-Span JS_ScrollAnimationItem"></span></div> */}
  </div>
  {/* ロード画面 2*/}
  <div className="LoadingPage2">
    <div className=" diamondAction"></div>
  </div>
<div className="container">
<LoadingModal open={open} closefunc={()=>closeModal()}></LoadingModal >
  {/* header */}
  <div className="header">
    <div className="headrLeft"><img src={logo} alt=""/></div>
    <div className="headrRight"><DragHandleIcon style={{ fontSize: 80,color:"#E41495"}}/></div>
  </div>

  {/* main */}
<div className="mainContainer">
  <img src={mainImg} alt="" className="mainImg"/>
  <div className={ screenIsSmall <= 1200 ? '' : 'textArea'}>
    <p className="AboutTile">ABOUT US</p>
    <p>
      NiziU（ニジュー）は、ソニーミュージックと韓国の大手芸能事務所JYP Entertainmentによる、日韓合同オーディションプロジェクト「Nizi Project」（通称・虹プロ）から誕生したガールズグループ。
    オーディションの模様は、HuluやYouTube、日本テレビでの番組などで伝えられた。韓国の有名プロデューサー、パク・ジニョン（J.Y. パーク）氏が総合プロデュースを手がけており、成長する姿を見せる「日本のアイドル文化」と、歌とダンスのクオリティーが完成された「韓国のアイドル文化」が融合したグループだ。
    「日本から世界へ」を掲げており、グローバルでの活躍に期待がかかっている。
    </p>
  </div>
</div>
<div className="MembersContainer">
<div className="MemberTitleArea">
  <h2 className="MemberTitle">Member</h2></div>
  <div className="memberItems">
    <div className="memberItem">
      <img src={RIO} alt="" className="memberImg"/>
      <div className="MemberName">RIO</div>
    </div>
    <div className="memberItem">
      <img src={RIO} alt="" className="memberImg"/>
      <div className="MemberName">RIO</div>
    </div>
    <div className="memberItem">
      <img src={RIO} alt="" className="memberImg"/>
      <div className="MemberName">RIO</div>
    </div>
    <div className="memberItem">
      <img src={RIO} alt="" className="memberImg"/>
      <div className="MemberName">RIO</div>
    </div>
    <div className="memberItem">
      <img src={RIO} alt="" className="memberImg"/>
      <div className="MemberName">RIO</div>
    </div>
    <div className="memberItem">
      <img src={RIO} alt="" className="memberImg"/>
      <div className="MemberName">RIO</div>
    </div>
    <div className="memberItem">
      <img src={RIO} alt="" className="memberImg"/>
      <div className="MemberName">RIO</div>
    </div>
    <div className="memberItem">
      <img src={RIO} alt="" className="memberImg"/>
      <div className="MemberName">RIO</div>
    </div>
    <div className="memberItem">
      <img src={RIO} alt="" className="memberImg"/>
      <div className="MemberName">RIO</div>
    </div>
  </div>
  </div>
<MV/>
{/* ナビゲーションボタン */}
  <div className="nabButtonComponent">
    <div className="subButtonArea">
        <div className="subButton "  style={{ backgroundColor:"#9DBCEE"}}>withU</div>
        <div className="subButton "  style={{ backgroundColor:"#EEB6D2"}} >Mobile</div>
        <div className="subButton "  style={{ backgroundColor:"#D2A8E9"}} >About</div>
        {/* <div className="subButton start"  style={{ backgroundColor:"blue"}}>start</div> */}
    </div>
    <div className="mainButtonArea">
      <div className="mainButton"  onClick={()=>onactive? active():inactive()} ><img src={ButtonLogo} alt="" className="mainButtonLogo"/></div>
      {onactive?  <AddCircleIcon className="CircleIcon" />: <RemoveCircleIcon className="CircleIcon" />}
    </div>
  </div>


  {/* ナビゲーションボタンここまで */}
</div>
</>






  );
}



export default App;

