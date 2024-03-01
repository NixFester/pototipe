'use client'
import Navigasi from "../component/navigasi"
import Jurnalnya from "../component/Jurnalnya"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import '../styles/animation.css'
import { App } from '@capacitor/app'

export default function Jurnal() {
    useEffect(() => {
        App.addListener('appUrlOpen', (event) => {
          const slug = event.url.split('.app').pop()
          if (slug)
            window.location.href = slug
    
        })
      }, [])
    const [diaryArr,setDiaryArr] = useState<(string|null)[]>()
    const router = useRouter()
    const Refresh = ()=>{
        router.refresh()
    }
    useEffect(()=>{
        let arrIni = []
        let nomornya = 1
        while (localStorage.getItem(`diary${nomornya}`)) {
            arrIni.push(localStorage.getItem(`diary${nomornya}`))
            nomornya++
        }
        setDiaryArr(arrIni)

    },[])
    
    return(
        <div style={{ marginBottom: '56px', padding: '10px'}} className="backgrund">
            {diaryArr?.map((isinya, i)=>{
                return (
                    <Jurnalnya refresh={Refresh} key={i} isiDiary={isinya?isinya:''} noDiary={i+1} />
                )
            })}
            <Navigasi navGate={0} />
        </div>
    )
}