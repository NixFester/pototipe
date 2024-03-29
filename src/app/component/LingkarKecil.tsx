import { Avatar } from "@mui/material";
import { blue } from "@mui/material/colors";
import FriendSVG from "../component/FriendSVG"
import MarriageSVG from "../component/MarriageSVG"
import "../styles/animation.css";
import { FamilyRestroom, Favorite, Watch } from "@mui/icons-material";
import Link from "next/link";

export default function LingkarKecil({hoverTouch,hoverEnd,dsdot,nomor}: {hoverTouch: {(keMana:string):void}; hoverEnd :VoidFunction; dsdot: boolean; nomor:number}) {
    let namaKelas = ""
    let namaHover = ""
    let isian = null
    let sources = ""
    let href = ''
    switch (nomor) {
        case (1):
            namaKelas = "rumah satu"
            namaHover = "Keluarga"
            isian =  (<FamilyRestroom className="gede"/>)
            href= '/keluarga'
            break
        case (2):
            namaKelas = "rumah dua"
            namaHover = "Percintaan"
            isian =  (<Favorite className='gede' />)
            href = '/percintaan'
            break
        case (3):
            namaKelas = "rumah tiga"
            namaHover = "Masa Depan"
            isian =  (<Watch className="gede" />)
            href = '/masadepan'
            break
        case (4):
            namaKelas = "rumah empat"
            namaHover = "Pertemanan"
            isian = (<FriendSVG className="gede"/>)
            href ='/diary'
            break
        default:
            namaKelas = "rumah lima"
            namaHover = "Pernikahan"
            isian = (<MarriageSVG className="gede"/>)
            href = '/pernikahan'
    }
    return (
        <Link className={namaKelas}
            onTouchEnd={hoverEnd}
            onTouchStart={()=>{
              if (!dsdot) {
                hoverTouch(namaHover)
              }
             }}
             href={href}
             style={{ transform: dsdot ? "scale(0)" : "scale(1)", transition: "all 1s" }}
             >
             <Avatar
              className="dot"
              imgProps={{className : 'gedeImg'}}
              src={sources}
              sx={{ }}
            >
              {isian}
              </Avatar>
             </Link>
    )

    
    
    
}