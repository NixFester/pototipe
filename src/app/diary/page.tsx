'use client'
import { useState } from 'react';
import Akardia from '../component/Akardia'
import Navigasi from '../component/navigasi';
import '../styles/animation.css'
import ReactAudioPlayer from 'react-audio-player';
import { useEffect } from "react";
import { App } from '@capacitor/app'

export default function Diary() {
    useEffect(() => {
        App.addListener('appUrlOpen', (event) => {
          const slug = event.url.split('.app').pop()
          if (slug)
            window.location.href = slug
    
        })
      }, [])
    const [expanded, setExpanded] = useState<string | false>('panel1');
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
        };
    return(
        <div style={{padding: '10px 10px 70px 10px'}} className='backgrund'  >
            <ReactAudioPlayer src={'/audioPertemanan.mp3'} autoPlay={true} loop preload={'none'} />
            <Akardia tema='persahabatan' expanded={expanded} handleChange={handleChange} />
            <Navigasi />
        </div>
    )
}