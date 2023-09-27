import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { setHopspotModal } from "../../store";

function HotSpotModal(){
    let dispatch = useDispatch();

    //핫스팟 모달 데이터
    let hotspotState = useSelector(state=>state.hotspot);
    //트림 버전 
    let versionState = useSelector(state=>state.version)
    //정측후면 데이터
    let carFaceState = useSelector(state=>state.carFace);
    //선택한 모달창
    let hotspotImg = useSelector(state=>state.hotspotImg);
    //모달창 끄기
    let hotState = useSelector(state=>state.hopspotModal)
    //모달창 이미지 선택
    let [modalImg,setModalImg] = useState(hotspotState[versionState][carFaceState].img);

  
    useEffect(()=>{
      var modalImgCopy

        modalImgCopy = [...hotspotState[versionState][carFaceState].img]
        setModalImg(modalImgCopy);
    },[])

    return(
    <>
      <div className="modal">
        <div className="modal-wrapper">
      <div className="modal-bg">
      <img className="modal-title hotspot-modal-title" src={modalImg[hotspotImg].title}></img>
        <div className="spot-modal-cont-wrapper scrollBar">
          <img className="hotspot-img" src={modalImg[hotspotImg].cont}></img>
          <div className={"modal-cont"}></div>
        </div>
      </div>
        <span onClick={()=>{dispatch(setHopspotModal(!hotState))}} className="cusor-over modal-close"></span>
      </div>
      </div>
    </>
  )
}

export default HotSpotModal