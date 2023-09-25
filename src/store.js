import { configureStore, createSlice } from '@reduxjs/toolkit'
import data from './assets/data'
import menuModal from './assets/menuModal'
import hotspotdata from './assets/hotspotData'

//핫스팟 이미지 짤때 고려사항
//트림버전(O),인테리어 익스테리어 전환(o),정측후면 변경(o)
//트림별>샷별/트림별>인테리어 내부 드라이브 or 풀샷여부

// 이미지 데이터
let item = createSlice({
  name:"item",
  initialState: data
})
//모달 데이터
let modalData = createSlice({
  name:"modalData",
  initialState:menuModal
})
//핫스팟 데이터
let hotspot = createSlice({
  name:"hotspot",
  initialState:hotspotdata
})

// 트림 버전
let version = createSlice({
  name:"version",
  initialState: 0,
  //버전 변경
  reducers:{
    setVersion(state,action){return state = action.payload;}
  }
})
export let{setVersion}= version.actions
//인테리어,익스테리어 전환
let outInChange = createSlice({
  name:"outInChange",
  initialState: true,
  //버전 변경
  reducers:{
    setChange(state){return !state}
  }
})
export let {setChange} = outInChange.actions
//인테리어 화면 변경
let interiorType = createSlice({
  name:"interiorType",
  initialState: true,
  //버전 변경
  reducers:{
    setInteriorType(state){return !state}
  }
})
export let {setInteriorType} = interiorType.actions
//정.측.후면 변경
let carFace = createSlice({
  name:"carFace",
  initialState: 0,
  //샷 변경
  reducers:{
    setFace(state,action){return state = action.payload;}
  }
})
export let{setFace} = carFace.actions
//컬러변경
let carColor = createSlice({
  name:"carColor",
  initialState: 0,
  //샷 변경
  reducers:{
    setColor(state,action){return state = action.payload;}
  }
})
export let{setColor} = carColor.actions
//모달여부 적용
let modalChange = createSlice({
  name:"modalChange",
  initialState: false,
  //버전 변경
  reducers:{
    setModalChange(state){return !state}
  }
})
export let {setModalChange} = modalChange.actions
//메뉴에서 모달바 데이터 넘기기
let menuModalData = createSlice({
  name:"menuModalData",
  initialState: 0,
  //버전 변경
  reducers:{
    setMenuModalData(state,action){return state = action.payload}
  }
})
export let {setMenuModalData} = menuModalData.actions

//비디오 플레이
let videoPlay = createSlice({
  name:"videoPlay",
  initialState: true,
  //버전 변경
  reducers:{
    setVideoPlay(state){return !state}
  }
})
export let {setVideoPlay} = videoPlay.actions
// //모달창에서 상세 비디오 링크 받아오기
let videoVersion = createSlice({
  name:"videoVersion",
  initialState: 0,
  //버전 변경
  reducers:{
    setvideoVersion(state,action){return state = action.payload}
  }
})
export let {setvideoVersion} = videoVersion.actions
//핫스팟 on/off 
let hopspotOn = createSlice({
  name:"hopspotOn",
  initialState: true,
  //버전 변경
  reducers:{
    setHopspotOn(state){return !state}
  }
})
export let {setHopspotOn} = hopspotOn.actions
//핫스팟 모달 보기
let hopspotModal = createSlice({
  name:"hopspotModal",
  initialState: false,
  //버전 변경
  reducers:{
    setHopspotModal(state){return !state}
  }
})
export let {setHopspotModal} = hopspotModal.actions
//핫스팟 모달이미지 데이터 넘기기
let hotspotImg = createSlice({
  name:"hotspotImg",
  initialState: 0,
  //데이터 변경
  reducers:{
    setHotspotImg(state,action){return state = action.payload}
  }
})
export let {setHotspotImg} = hotspotImg.actions

export default configureStore({
  reducer: { 
    item : item.reducer,
    modalData:modalData.reducer,
    outInChange: outInChange.reducer,
    interiorType:interiorType.reducer,
    version:version.reducer,
    carFace:carFace.reducer,
    carColor:carColor.reducer,
    modalChange:modalChange.reducer,
    menuModalData:menuModalData.reducer,
    videoPlay:videoPlay.reducer,
    videoVersion:videoVersion.reducer,
    hotspot:hotspot.reducer,
    hopspotOn:hopspotOn.reducer,
    hopspotModal:hopspotModal.reducer,
    hotspotImg:hotspotImg.reducer
  }
}) 