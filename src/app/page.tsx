"use client";
import MainPage from "./component/mainPage";
import "./styles/animation.css";
import { useEffect, useState } from "react";
import StartIcon from "./component/StartIcon";
import HiScreen from "./component/HiScreen";
import Navigasi from "./component/navigasi";
import { Paper } from "@mui/material";

export default function Home() {
  const [as, setAs] = useState(true);
  const [onsec, Setonsec] = useState(false);
  const [bs, setBs] = useState(true);
  const [onBs, setOnBs] = useState(true);
  const [nama, setNama] = useState("no");
  const [dsdot,setDsdot] = useState(true);
  const [title,setTitle] = useState("Diary")
  const jam = new Date()

  
  const klikDs: VoidFunction = () =>{
    setDsdot((prev)=>!prev)
  }

  const klikLanjut: VoidFunction = () => {
    setTimeout(() => {
      Setonsec((prev) => !prev);
    }, 1000);
    setAs((prev) => !prev);
  }

  const keMainPage:VoidFunction = () => {
    if (nama !== "no" ) {
      setTimeout(() => {
        setOnBs((prev) => !prev);
        localStorage.setItem('tgl', `${jam.getHours() + 1}`)
      }, 900);
      setBs((prev) => !prev);
    }
  }

  const hoverTouch: {(keMana:string):void} = (keMana:string)=>{
    setTitle(keMana)
  }

  const hoverEnd : VoidFunction = ()=>{
    setTitle("Diary")
  }

  useEffect(() => {
    const namabuat = localStorage.getItem("nama");
    if (namabuat) {
      setNama(namabuat);
    }
    const tgl = new Date()
    const tglKunjungan = localStorage.getItem('tgl')
    if (tglKunjungan && Number(tglKunjungan) < tgl.getHours()) {
        localStorage.removeItem('tgl')
    } else if (tglKunjungan && Number(tglKunjungan) >= tgl.getHours()) {
      setBs(false)
      setAs(false)
      setOnBs(false)
      Setonsec(true)
    }
    
  }, []);

  

  /*onClick={() => {
          setTimeout(() => {
            setOnBs((prev) => !prev);
          }, 900);
          setBs((prev) => !prev);
        }}*/
  return (
    <div className="backgrund">
      <div style={onBs?{display:'none'}:{}} className="sil1">
          <MainPage klikDs={klikDs} dsdot={dsdot} hoverTouch={hoverTouch} hoverEnd={hoverEnd} title={title}  />
          <Navigasi />

      </div>
      <HiScreen keMainPage={keMainPage} onsec={onsec} onBs={onBs} bs={bs} nama={nama} />
      <StartIcon klikLanjut={klikLanjut} as={as} onsec={onsec} />
      
    </div>
  );
}
