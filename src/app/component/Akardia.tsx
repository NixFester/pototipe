import IsianAkardia from './IsianAkardia';
import { useState } from 'react';

export default function CustomizedAccordions({expanded, handleChange}:{
  expanded: string | false
  handleChange : (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => void
}) {  

  const [EmoticonValue, setEmoticonValue] = useState("the best");
  const [sharingValue,setSharingValue] = useState("")
  const [nilaiValue,setNilaiValue]= useState<number | null>(1)
  const [alignment, setAlignment] = useState('aman');
  const [konflikVal,setKonflikVal] = useState("")
  const [negVal,setNegVal] = useState("")
  const [fikVal,setFikVal] = useState("")
  const [unkapVal, setUngkapVal] = useState("")
  const [Diary, setDiary] = useState("")

  const buatDiary = ()=>{
    setDiary(
      `Hi Diary
      Aku lagi ${EmoticonValue} nih
      Tau ngga, kalau ${sharingValue}
      Untuk Hari ini aku kasih bintang ${nilaiValue}
      Ah, hubunganku sekarang ${alignment} dengan bestieku.
      ${konflikVal}
      dan ${negVal}
      ... yah kenangan terindahku denganya itu ${fikVal}
      ${unkapVal}
      Dah, terimakasih diary udah mau dengerin aku`
      )
  }

  const handleDiary = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiary((event.target as HTMLInputElement).value)
  }
  const handleUngkap = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUngkapVal((event.target as HTMLInputElement).value)
  }

  const handleFik = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFikVal((event.target as HTMLInputElement).value)
  }

  const handleNeg = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNegVal((event.target as HTMLInputElement).value)
  }

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };


  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSharingValue((event.target as HTMLInputElement).value)
  }

  const handleKonflik = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKonflikVal((event.target as HTMLInputElement).value)
  }
  

  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmoticonValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <IsianAkardia expanded={expanded} handleChange={handleChange} panel="panel1" 
      judul='Hei! Hari ini Apa Kabar?' Value={EmoticonValue} handleRadio={handleRadio} />
      <IsianAkardia expanded={expanded} handleChange={handleChange} panel="panel2" 
      judul='Hari ini ada cerita apa?' Value={sharingValue} handleRadio={handleText} />
      <IsianAkardia expanded={expanded} handleChange={handleChange} panel="panel3" 
      judul='Kasih rate dong untuk hari ini' valNo={nilaiValue} setNilai={setNilaiValue} />
      <IsianAkardia expanded={expanded} handleChange={handleChange} panel="panel4" 
      judul='Gimana nih hubungan kamu sama bestie mu?' Value={alignment} handleAlignment={handleAlignment} />
      <IsianAkardia expanded={expanded} handleChange={handleChange} panel="panel5" 
      judul='Apasih yang dia lakuin sampai hubungan kalian renggang?' Value={konflikVal} handleRadio={handleKonflik} />
      <IsianAkardia expanded={expanded} handleChange={handleChange} panel="panel6" 
      judul='Dibalik itu semua Apa sih yang paling kamu ga suka?' Value={negVal} handleRadio={handleNeg} />
      <IsianAkardia expanded={expanded} handleChange={handleChange} panel="panel7" 
      judul='Pasti ada dong kenangan terindah bersama bestie mu?' Value={fikVal} handleRadio={handleFik} />
      <IsianAkardia expanded={expanded} handleChange={handleChange} panel="panel8" 
      judul='👀' />
      <IsianAkardia expanded={expanded} handleChange={handleChange} panel="panel9" 
      judul='Pasti ada dong kenangan terindah bersama bestie mu?' Value={unkapVal} handleRadio={handleUngkap} />
      <IsianAkardia expanded={expanded} handleChange={handleChange} panel="panel10" 
      judul='🥰' diary={Diary} setDiary={buatDiary} handleRadio={handleDiary} />
    </div>
  );
}