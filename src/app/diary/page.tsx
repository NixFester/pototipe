'use client'
import { useState } from 'react';
import Akardia from '../component/Akardia'
import Navigasi from '../component/navigasi';
import '../styles/animation.css'

export default function Diary() {
    const [expanded, setExpanded] = useState<string | false>('panel1');
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
        };
    return(
        <div style={{padding: '10px 10px 70px 10px', backgroundColor : "#FAFAF9", color : "#373954"}}  >
            <Akardia expanded={expanded} handleChange={handleChange} />
            <Navigasi />
        </div>
    )
}