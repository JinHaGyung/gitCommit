//css
import { useState } from 'react';
import './App.css'
//components
import Menubar from './Menubar';
import Exterior from './pages/Exterior';
import Interior from './pages/Interior';
import Modal from './pages/modal/Modal';
import { useSelector } from 'react-redux';


function App() {
  let store = useSelector(state=>state);

  let[clickBtn,setClickBtn]= useState(store.item[store.version][store.carColor].front);

  return (
    <div className="App">
      {store.modalChange ? <Modal/> : null}
      {store.outInChange ? <Exterior clickBtn={clickBtn} setClickBtn={setClickBtn}/>:<Interior/>}
       <Menubar/>
    </div>
  );
}

export default App;
