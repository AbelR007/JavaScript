import logo from './logo.svg';
import './App.css';
import gsap from 'gsap';
import {useRef, useEffect} from "react";
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function App() {
  const imgref = useRef(null);
  useEffect(()=>{
    const el = imgref.current;
    gsap.fromTo(el,{rotation:0},{rotation:180,duration:3,scrollTrigger: {
      trigger: el
    }})
  })
  return (
    <div className="App">
        <div className="helper"></div>
        <img src={logo} className="App-logo" alt="logo" ref = {imgref}/>
    </div>
  );
}

export default App;
