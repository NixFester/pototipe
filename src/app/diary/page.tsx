'use client'
import { useState } from 'react';
import Akardia from '../component/Akardia'
import Navigasi from '../component/navigasi';

export default function Diary() {
    const [expanded, setExpanded] = useState<string | false>('panel1');
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
        };
    return(
        <div style={{paddingBottom: '56px'}} >
            <Akardia expanded={expanded} handleChange={handleChange} />
            <Navigasi />
        </div>
    )
}