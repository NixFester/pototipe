'use client'
import { useState } from 'react';
import Akardia from '../component/Akardia'

export default function Diary() {
    const [expanded, setExpanded] = useState<string | false>('panel1');
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
        };
    return(
        <div >
            <Akardia expanded={expanded} handleChange={handleChange} />
        </div>
    )
}