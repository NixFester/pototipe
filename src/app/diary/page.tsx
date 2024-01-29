'use client'
import { useState } from 'react';
import Akardia from '../component/Akardia'
import Navigasi from '../component/navigasi';
import '../styles/animation.css'
import ReactPlayer from 'react-player'
import ReactAudioPlayer from 'react-audio-player';

export default function Diary() {
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