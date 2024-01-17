"use client";
import MainPage from "./component/mainPage";
import Games from "./component/Games";
import "./styles/animation.css";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import StartIcon from "./component/StartIcon";
import HiScreen from "./component/HiScreen";

export default function Home() {
  const [as, setAs] = useState(true);
  const [onsec, Setonsec] = useState(false);
  const [bs, setBs] = useState(true);
  const [onBs, setOnBs] = useState(true);
  const [nama, setNama] = useState("no");
  const [change, setChange] = useState(false);
  const [dsdot,setDsdot] = useState(true);
  const [title,setTitle] = useState("Diary")
  
  const klikDs: VoidFunction = () =>{
    setDsdot((prev)=>!prev)
  }
  const changee: VoidFunction = () => {
    setChange((prev) => !prev);
    console.log(change);
  };

  const klikLanjut: VoidFunction = () => {
    setTimeout(() => {
      Setonsec((prev) => !prev);
    }, 1000);
    setAs((prev) => !prev);
  }

  const keMainPage:VoidFunction = () => {
    if (nama !== "no") {
      setTimeout(() => {
        setOnBs((prev) => !prev);
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
    if (namabuat != null) {
      setNama(namabuat);
    }
  }, []);

  /*onClick={() => {
          setTimeout(() => {
            setOnBs((prev) => !prev);
          }, 900);
          setBs((prev) => !prev);
        }}*/
  return (
    <div>
      <div style={{ display: onBs ? "none" : "block" }} className="sil1">
        <div style={change ? { display: "none" } : {}}>
          <MainPage changee={changee} klikDs={klikDs} dsdot={dsdot} hoverTouch={hoverTouch} hoverEnd={hoverEnd} title={title}  />
        </div>
        <div style={change ? {} : { display: "none" }}>
          <Games changee={changee} klikDs={klikDs} dsdot={dsdot} />
        </div>
      </div>
      <HiScreen keMainPage={keMainPage} onsec={onsec} onBs={onBs} bs={bs} nama={nama} />
      <StartIcon klikLanjut={klikLanjut} as={as} onsec={onsec} />
    </div>
  );
}
