import { useDispatch, useSelector } from "react-redux"
import "./css/leftbar.css"
import { setVersion,setColor,setModalChange,setMenuModalData } from "./store";

function Menubar(){
  let dispatch = useDispatch();
  let modalState = useSelector(state=>state.modalChange);
  let version = useSelector(state=>state.version)
  //트림 종류에 따른 즉각 변경
  const clickVersion = (i)=>{
    dispatch(setColor(0))
    dispatch(setVersion(i))
  }
  //모달창 열기
  const clickModal = (i)=>{
    dispatch(setModalChange(!modalState))
    dispatch(setMenuModalData(i))
  }

  return(
    <div className="menubar-wrapper">
        <div onClick={()=>{clickModal(0)}} className="bar cusor-over bar1"></div>
        <div onClick={()=>{clickModal(1)}} className="bar cusor-over bar2"></div>
        <div onClick={()=>{clickVersion(0)}} className={`bar cusor-over bar3 ${version==0&&"bar-click"}`}></div>
        <div onClick={()=>{clickVersion(1)}} className={`bar cusor-over bar6 ${version==1&&"bar-click"}`}></div>
        <div onClick={()=>{clickVersion(2)}} className={`bar cusor-over bar4 ${version==2&&"bar-click"}`}></div>
        <div onClick={()=>{clickVersion(3)}} className={`bar cusor-over bar5 ${version==3&&"bar-click"}`}></div>
        <div onClick={()=>{clickModal(5)}} className="bar cusor-over bar7"></div>
        <div onClick={()=>{clickModal(6)}} className="bar cusor-over bar8"></div>
        <div onClick={()=>{clickModal(2)}} className="bar cusor-over bar9"></div>
        <div onClick={()=>{clickModal(3)}} className="bar cusor-over bar10"></div>
        <div onClick={()=>{clickModal(4)}} className="bar cusor-over bar11"></div>
    </div>
  )
}

export default Menubar