import "../css/interior.css"
import { useDispatch, useSelector } from "react-redux";
import { setChange,setInteriorType } from "../store";
import { useEffect, useState,useRef } from "react";

import HotSpot from "./modal/HotSpot";
import HotSpotModalIN from "./modal/HotspotModalIN";


function Interior(){
  let interiorType = useSelector(state=>state.interiorType)
  let item = useSelector(state=>state.item);
  let version = useSelector(state=>state.version)
  //핫스팟
  let hopspotModal = useSelector(state=>state.hopspotModal);
  //핫스팟 on off
  let [on,seton] = useState(true)
  // 크기 조절용 스케일 세팅
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

//휠 좌표값용
  const [minX,setMinX]= useState(0)// 최소 X 위치
  const [minY,setMinY] = useState(0)//최소 Y위치
  const [maxX,setMaxX]= useState(0)// 최대 X 위치
  const [maxY,setMaxY] = useState(0)//최대 Y위치

  //console.log("minX: "+minX+"minY: "+minY+"maxX: "+"maxY: "+maxY)
  
  //휠로드래그하기
  const handleMouseUp = (e) => {
    e.preventDefault();
    setIsDragging(!isDragging);
    setDragging(false);
  };
  const handleWheel = (e) => {
    e.preventDefault();
    const newScale = scale + (e.deltaY * 0.5) * -0.01;
    console.log(newScale)

    if (newScale >= 1 && newScale < 2.5) {
      setScale(newScale);
      setMinX(-(250*scale));
      setMinY(-(200*scale));
      setMaxX((250*scale))
      setMaxY((200*scale))
    }
    else if(newScale == 0.5){
      setMinX(-0);
      setMinY(-0);
      setMaxX(0)
      setMaxY(0)
      setPosition({ x: 0, y: 0 })
    }
    setDragging(false);
  };
  const handleClick = (i) => {
    const newScale = scale + (i * 0.5) * -0.01;
    if (newScale >= 1 && newScale <= 3) {
      setScale(newScale);
    }
  };
  //마우스 드래그
  const handleMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
  };
  const handleMouseMove = (e) => {
    if (!dragging) return;
    const newX = position.x + e.movementX;
    const newY = position.y + e.movementY;

    // 위치를 제한 범위 내로 설정
    const clampedX = Math.min(maxX, Math.max(minX, newX));
    const clampedY = Math.min(maxY, Math.max(minY, newY));
    setPosition({ x: clampedX, y: clampedY });
  };

  // 패드&휴대폰 용
  const [startTouches, setStartTouches] = useState(null);
  const imageRef = useRef(null);

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const [touch1, touch2] = e.touches;
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );
      setStartTouches({ distance, scale });
    } else if (e.touches.length === 1) {
      const touch = e.touches[0];
      setStartTouches({ x: touch.clientX, y: touch.clientY, position });
    }
  };

  const handleTouchMove = (e) => {
    if (startTouches && e.touches.length === 2) {
      const [touch1, touch2] = e.touches;
      const newDistance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );
      const newScale = (newDistance / startTouches.distance) * startTouches.scale;
      if(newScale <1){
        return newScale =1;
      }
      setScale(newScale);
    } else if (startTouches && e.touches.length === 1) {
      const touch = e.touches[0];
      const deltaX = touch.clientX - startTouches.x;
      const deltaY = touch.clientY - startTouches.y;
      const newTranslate = {
        x: startTouches.position.x + deltaX,
        y: startTouches.position.y + deltaY,
      };

      // 이미지를 부모 컨테이너를 벗어나지 않도록 제한
      const containerWidth = imageRef.current.parentElement.clientWidth;
      const containerHeight = imageRef.current.parentElement.clientHeight;
      const imageWidth = imageRef.current.clientWidth * scale;
      const imageHeight = imageRef.current.clientHeight * scale;

      if (newTranslate.x > 0) newTranslate.x = 0;
      if (newTranslate.y > 0) newTranslate.y = 0;
      if (imageWidth + newTranslate.x < containerWidth)
        newTranslate.x = containerWidth - imageWidth;
      if (imageHeight + newTranslate.y < containerHeight)
        newTranslate.y = containerHeight - imageHeight ;
        setPosition(newTranslate);
    }
  };

  const handleTouchEnd = () => {
    setStartTouches(null);
  };

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


  return(
    <main className='main in-wrapper'> 
      <div className="in-header">
      <HeaderBtn 
      setScale={setScale} 
      handleClick={handleClick} 
      interiorType={interiorType} 
      on={on} 
      seton={seton}
      exitFullscreen={exitFullscreen}
      enterFullscreen={enterFullscreen}
      isFullscreen = {isFullscreen}
      setPosition={setPosition}
      />
      </div>
      {hopspotModal ?<HotSpotModalIN/> :null }
      <div 
      onMouseUp={handleMouseUp}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
        transformOrigin: 'center',
        transition: 'transform 0.7s ease-in-out',
        width: "100%"
      }}
      className="in_wrapper image-container">
        {on ? <HotSpot scale={scale} positionX={position.x}positionY={position.y}/>:null}
        {interiorType ?
        <img className="in_img"
        ref={imageRef}
        src={item[version][0].in_driver}></img>:
        <img className="in_img"
        ref={imageRef}  
        src={item[version][0].in_full}></img>}
      </div>
    </main>
  )
}

function HeaderBtn({interiorType,handleClick,setScale,on,seton,exitFullscreen,enterFullscreen,isFullscreen,setPosition}){

  let dispatch = useDispatch();
  return(
    <div className="in-header-btn">
      {interiorType?
      (<><span className="in-btn cusor-over d-seat-on"></span>
      <span onClick={()=>{dispatch(setInteriorType(!interiorType));setScale(1);setPosition({x: 0, y: 0})}} className="in-btn cusor-over f-seat"></span></>):
      (<><span onClick={()=>{dispatch(setInteriorType(!interiorType));setScale(1);setPosition({x: 0, y: 0})}} className="in-btn cusor-over d-seat"></span>
      <span className="in-btn cusor-over f-seat-on"></span></>)}
      <span onClick={()=>{handleClick(-10)}} className="in-btn  in-zoom-up"></span>
      <span onClick={()=>{handleClick(10)}} className="in-btn  in-zoom-out"></span>
      <span onClick={()=>{seton(!on)}} className="in-btn cusor-over in-hotspot"></span>
      <span onClick={()=>{dispatch(setChange())}} className="in-btn cusor-over exterior-btn"></span>
      <span onClick={isFullscreen ? exitFullscreen : enterFullscreen}  className="in-btn cusor-over in-fullsize"></span>
    </div>
  )
}
export default Interior