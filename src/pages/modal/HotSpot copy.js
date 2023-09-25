import { useDispatch, useSelector } from "react-redux";
import "../../css/hotspot.css"
import { useEffect, useRef, useState } from "react";
import { setHopspotModal,setHotspotImg} from "../../store";


//핫스팟 데이터(모달 아이콘 넘버 css 가져와서 map 돌리기)
//필요 데이터:트림 버전,정측후면(익스테리어),인테리어 전환 및 드라이브 풀샷

function HotSpot({scale,positionX,positionY}){
  let dispatch = useDispatch();
  //핫스팟 모달 데이터
  let hotspotState = useSelector(state=>state.hotspot);

  //트림 버전 
  let versionState = useSelector(state=>state.version)
  //정측후면 데이터
  let carFaceState = useSelector(state=>state.carFace);
  //인,아웃 전환
  let outInChangeState = useSelector(state=>state.outInChange)
  //인테리어 내부 샷 변환
  let interiorType = useSelector(state=>state.interiorType)
  let [madalYCss,setModalYCss] = useState([]);
  let [modalYInfo,setModalYInfo] = useState([]);
  const modalImg =(i)=>{
    dispatch(setHopspotModal(i));
    dispatch(setHotspotImg(i))
  }
  useEffect(()=>{
    let madalYCssCopy;
    let modalYInfoCopy;

    if(outInChangeState == true){
      madalYCssCopy = [...hotspotState[versionState][carFaceState].css]
      modalYInfoCopy = [...hotspotState[versionState][carFaceState].intro]
      setModalYCss(madalYCssCopy);
      setModalYInfo(modalYInfoCopy);
    }
    else{
      if(interiorType == true){
        madalYCssCopy = [...hotspotState[versionState][3].css]
        modalYInfoCopy = [...hotspotState[versionState][3].intro]
        setModalYCss(madalYCssCopy);
        setModalYInfo(modalYInfoCopy);
      }
      else{
        {
          madalYCssCopy = [...hotspotState[versionState][4].css]
          modalYInfoCopy = [...hotspotState[versionState][4].intro]
          setModalYCss(madalYCssCopy);
          setModalYInfo(modalYInfoCopy);
        }
      }
    }
    
  },[hotspotState,versionState,carFaceState,outInChangeState,interiorType])

  //핫스팟 설명
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState([{top:0,left:0}]);
  const [hotInfo,setHotInfo] = useState();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (i,e) => {
    setIsHovered(true);
    setHotInfo(i)
    //팝업 설명 위치 잡기
    // const { clientX, clientY } = e;
    // console.log(clientX)
    //  setMousePosition({ x: clientX/(scale*0.5)-positionY, y: clientY/(scale*0.5)-positionY });
    const rect = e.target.getBoundingClientRect();
    const position = {
      top: rect.top,
      left: rect.left,
    };
    setTooltipPosition({top:position.top,left:position.left});
    // console.log("position.top: "+position.top)
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(()=>{

  },[isHovered])
  return(
    <>
      <div className="hotSpot-wrapper">
      {madalYCss.map((css,i)=>{
      return(
      <div 
        onClick={()=>{modalImg(i)}} 
        onMouseEnter={(e)=>{handleMouseEnter(i,e)}}
        onMouseLeave={handleMouseLeave}
        key={i} 
        className={`hotspot-y cusor-over ${css}`}>
      </div>
        )})}
        
       {isHovered && (<span className="tooltip"
          style={{ 
          position: "absolute",
          // left: mousePosition.x, top: mousePosition.y
          top:(tooltipPosition.top)+60,
          left:(tooltipPosition.left)
          }}>
          {modalYInfo[hotInfo]}</span>)}
      </div>
    </>
  )
}

export default HotSpot;