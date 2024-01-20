'use client'
import Navigasi from "../component/navigasi"
import Jurnalnya from "../component/Jurnalnya"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Jurnal() {
    const isian = localStorage.getItem('diary1')
    const [diaryArr,setDiaryArr] = useState<(string|null)[]>()
    const router = useRouter()
    const Refresh = ()=>{
        router.refresh()
    }
    useEffect(()=>{
        let arrIni = []
        let arrNomor = []
        let nomornya = 1
        while (localStorage.getItem(`diary${nomornya}`)) {
            arrIni.push(localStorage.getItem(`diary${nomornya}`))
            nomornya++
        }
        setDiaryArr(arrIni)

    },[])
    
    return(
        <div style={{ marginBottom: '56px'}}>
            {diaryArr?.map((isinya, i)=>{
                return (
                    <Jurnalnya refresh={Refresh} key={i} isiDiary={isinya?isinya:''} noDiary={i+1} />
                )
            })}
            <Navigasi />
        </div>
    )
}