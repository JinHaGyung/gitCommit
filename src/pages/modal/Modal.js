import { useDispatch, useSelector } from "react-redux"
import { setModalChange,setVideoPlay,setvideoVersion } from "../../store";

import "../../css/modal.css"
import { useEffect } from "react";

//모달창 클릭하면 안전사양과 관련 영상에는 영상 링크(modalbiedo가 열리기)
//클릭에 따라서 영상 링크 변형하기
//x누르면 영상만 닫히게 만들기(z-index로 다른 버튼임)

function Modal(){

  let state = useSelector(state=>state.modalChange)
  let dispatch = useDispatch();
  return(
    <>
      <div className="modal">
        <div className="modal-wrapper">
      <div className="modal-bg">
            <ModalCont/>
      </div>
        <span onClick={()=>{dispatch(setModalChange(!state));}} 
        className="cusor-over modal-close"></span>
      </div>
      </div>
    </>
  )
}
function ModalCont(){
  let modalData = useSelector(state=>state.modalData);
  let modalType = useSelector(state=>state.menuModalData);
  let videoPlay =useSelector(state=>state.videoPlay)
  if(modalType<2|| modalType ===4){
    return(
      <>
        <img className="modal-title" src={modalData[modalType].title}></img>
        <div className="modal-cont-wrapper scrollBar">
          <div className={"modal-cont "+modalData[modalType].css}></div>
        </div>
    </>)
  }
  // 안전사양
  else if(modalType==2){
    return (
      <>
        {videoPlay ? <ModalClick1 modalData={modalData}/> : <ModalViedo/> }
      </>
    )
  }
  // 관련영상
  else if(modalType==3){
    return (
      <>
        {videoPlay ? <ModalClick2 modalData={modalData}/> : <ModalViedo/> }
      </>
    )
  }
  else if(modalType==5){
    return(
      <>
        <iframe src={"./pdf/Pricelist.htm"}></iframe>
      </>
    )
  }
  else if(modalType==6){
    return(
      <>
        <iframe src={"./pdf/Catalog.htm"}></iframe>
      </>
    )
  }

}


// 안전사양
function ModalClick1({modalData}){
  let safetyDispatch = useDispatch();
  let safetyState = useSelector(state=>state.videoPlay)
  
  function safety(src){
    safetyDispatch(setVideoPlay(!safetyState))
    safetyDispatch(setvideoVersion(src))
  }
  return(
    <>
    <img className="modal-title" src={modalData[2].title}></img>
    <div className="modal-cont-wrapper scrollBar">
      <div className="modal-cont modal-cont3"></div>
      <div className="modal-cont modal-cont3-1 cusor-over">
        <span onClick={()=>{safety("https://www.youtube.com/embed/0pvwxNJ19Ek")}} className="safty-click1"></span>
        <span onClick={()=>{safety("https://www.youtube.com/embed/M772UJcD6Ho")}} className="safty-click2"></span>
      </div>
      <div onClick={()=>{safety("https://youtu.be/FhdMUDq9Cug")}}className="modal-cont modal-cont3-2 cusor-over"></div>
      <div className="modal-cont modal-cont3-3"></div>
      <div className="modal-cont modal-cont3-4"></div>
      <div onClick={()=>{safety("https://www.youtube.com/embed/s-3wQ6JbCpQ")}} className="modal-cont modal-cont3-5 cusor-over"></div>
      <div className="modal-cont modal-cont3-6"></div>
    </div>
</>)
}
// 관련영상
function ModalClick2({modalData}){
  let safetyDispatch = useDispatch();
  let safetyState = useSelector(state=>state.videoPlay)
  function safety(src){
    safetyDispatch(setVideoPlay(!safetyState))
    safetyDispatch(setvideoVersion(src))
  }
  return(
    <>
     <img className="modal-title" src={modalData[3].title}></img>
       <div className="modal-cont-wrapper scrollBar">
      <div onClick={()=>{safety("https://www.youtube.com/embed/FhdMUDq9Cug")}} className="modal-cont modal-video modal-cont4-1 cusor-over"></div>
      <div onClick={()=>{safety("https://www.youtube.com/embed/nBvxi_iEiFI")}} className="modal-cont modal-video modal-cont4-2 cusor-over"></div>
      <div onClick={()=>{safety("https://www.youtube.com/embed/RWPUAu5pmKs")}} className="modal-cont modal-video modal-cont4-3 cusor-over"></div>
    </div>
    </>
  )
}

function ModalViedo(){
  let viedoDispatch = useDispatch();
  let videoVersion = useSelector(state=>state.videoVersion)
  return(
    <>
    <iframe width="1280" height="720" 
    src={videoVersion} frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <span onClick={()=>{viedoDispatch(setVideoPlay(true))}} 
     className="cusor-over modal-close viedo-btn"></span>
     </>
  )
}




export default Modal