import "../css/exterior.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setFace,setColor,setChange } from "../store";
import color from "../assets/color";

import HotSpot from "./modal/HotSpot";
import HotSpotModal from "./modal/HotspotModal";
//트림의 종류 정보-트림에 따른 컬러 정보값
//3종류샷,컬러값은 익스테리어에서만 사용됨
//인테리어와의 전환을 위해 정보 변경값은 저장하기

function Exterior({clickBtn,setClickBtn}){

  let dispatch = useDispatch();
  let hopspotModal = useSelector(state=>state.hopspotModal);

  let imgData = useSelector(state=>state.item)
  let version = useSelector(state=>state.version)
  //면 선택
  let face = useSelector(state=>state.carFace)
  //컬러 선택
  let carColor = useSelector(state=>state.carColor);
  //정,측,후면 버튼
  //버튼 선택시 바디 변경,선택 버튼 변경
  //버튼 선택을 할 때 면 선택의 번호 변경하여 저장하기
  //익스테리어와 전환이 될때는 기존에 눌렀던 정보들을 가져와 세팅하기
  let[faceBtn,setFaceBtn] = useState(["e-frontBtn-on","e-sidetBtn","e-backBtn"]);
  useEffect(()=>{
    if(face == 1){
      let faceBtnCopy = ["e-frontBtn","e-sidetBtn","e-backBtn"];
      faceBtnCopy[1] += "-on"
      setFaceBtn(faceBtnCopy)
    }
    else if(face == 2){
      let faceBtnCopy = ["e-frontBtn","e-sidetBtn","e-backBtn"];
      faceBtnCopy[2] += "-on"
      setFaceBtn(faceBtnCopy)
    }
  },[])
  useEffect(()=>{
    if(face==0){
      setClickBtn(imgData[version][carColor].front)
    }
    else if(face==1){
      setClickBtn(imgData[version][carColor].side)
    }
    else if(face==2){
      setClickBtn(imgData[version][carColor].back)
    }
  },[face,carColor,version])
  const faceChange =(i)=>{
    let faceBtnCopy = ["e-frontBtn","e-sidetBtn","e-backBtn"];
    faceBtnCopy[i] += "-on"
    setFaceBtn(faceBtnCopy)
    if(i==0){
      setClickBtn(imgData[version][carColor].front)
      dispatch(setFace(0))
    }
    else if(i==1){
      setClickBtn(imgData[version][carColor].side)
      dispatch(setFace(1))
    }
    else if(i==2){
      setClickBtn(imgData[version][carColor].back)
      dispatch(setFace(2))
    }
  }
  //핫스팟 on,off
  let[on,seton]=useState(true);

  //전체화면 모드 전환
  const [isFullscreen, setIsFullscreen] = useState(false);
  // 전체 화면 모드로 전환하는 함수
  const enterFullscreen = () => {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
      setIsFullscreen(true);
    };
  // 기본 사이즈로 돌아오는 함수
  const exitFullscreen = () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    };
  // 전체 화면 상태가 변경될 때 이벤트 리스너 추가
    useEffect(() => {
      const handleFullscreenChange = () => {
        if (
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement
        ) {
          setIsFullscreen(true);
        } else {
          setIsFullscreen(false);
        }
      };
  
      document.addEventListener('fullscreenchange', handleFullscreenChange);
      document.addEventListener('mozfullscreenchange', handleFullscreenChange);
      document.addEventListener(
        'webkitfullscreenchange',
        handleFullscreenChange
      );
      document.addEventListener('msfullscreenchange', handleFullscreenChange);
  
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      return () => {
        document.removeEventListener('fullscreenchange', handleFullscreenChange);
        document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
        document.removeEventListener(
          'webkitfullscreenchange',
          handleFullscreenChange
        );
        document.removeEventListener('msfullscreenchange', handleFullscreenChange);
      };
    }, []);
return(<main className="main e-wrapper">
      {hopspotModal ?<HotSpotModal/> :null }
      <div className="e-header" >
        <HeaderBtn 
        version={version} 
        on={on} 
        seton={seton}
        exitFullscreen={exitFullscreen}
        enterFullscreen={enterFullscreen}
        setIsFullscreen={setIsFullscreen}
        isFullscreen = {isFullscreen}
        />
      </div>
        <ExteriorBody clickBtn={clickBtn} on={on}/>
      <div className="e-footBtn">
        {faceBtn.map((btn,i)=>{return(<span key={i} onClick={()=>faceChange(i)} 
        className={`e-bottombtn cusor-over ${btn}`}></span>)})}
      </div>
  </main>)
}

function HeaderBtn({version,on,seton,exitFullscreen,enterFullscreen,isFullscreen}){
  let dispatch = useDispatch();
  let changeColor = useSelector(state=>state.carColor)
  //초기에 컬러값 가져와서 0번째 항목에는 "-on"을 붙여 노란색을 표기하기
  //선택을 하게 되면은 setColor값을 전송하고, 해당 위치를 받아와 해당 위치의 i번째에 "-on을 붙여준다."
  //기존 컬러(노란색이 붙은)값은 없앤다.
  let [selectColor,setSelectColor]=useState(color[version])
  useEffect(()=>{
    let selectColorCopy=[...color[version]];
    selectColorCopy[changeColor] += "-on"
    setSelectColor(selectColorCopy)
  },[changeColor,version])

  return(
    <div className="e-header-btn">
      <span className="e-btn set_icon"></span>
      {selectColor.map((code,i)=>(<span key={i} 
      onClick={()=>{dispatch(setColor(i))}} 
      className={`e-btn cusor-over ${code}`}></span>))}
      <span className="e-btn e-btn-bar"></span>
      <span onClick={()=>{seton(!on)}} className="e-btn cusor-over car-hotspot car-hotspot-on"></span>
      <span className="e-btn e-btn-bar"></span>
      <span onClick={()=>{dispatch(setChange())}} className="e-btn cusor-over interior-btn"></span>
      <span className="e-btn e-btn-bar"></span>
      <span onClick={isFullscreen ? exitFullscreen : enterFullscreen} className="e-btn cusor-over fullsize"></span>
    </div>
  )
}

function ExteriorBody({clickBtn,on}){
  return(
    <>
    <div className="body-wrapper">
      <span className="car-bady">
        {on? <HotSpot positionX={1}positionY={1}/>:null}
        <img src={clickBtn} className="a_1"></img>
      </span>
    </div>
    </>
  )
}


export default Exterior;