import { Stack } from '@mui/material';
import IsianAkardia from './IsianAkardia';
import { useState } from 'react';

interface CustomAkardia {
  expanded: string | false
  handleChange : (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => void
  tema: string
}

export default function CustomizedAccordions({expanded, handleChange, tema}:CustomAkardia) {  

  const [EmoticonValue, setEmoticonValue] = useState("the best");
  const [sharingValue,setSharingValue] = useState("")
  const [nilaiValue,setNilaiValue]= useState<number | null>(1)
  const [alignment, setAlignment] = useState('aman');
  const [konflikVal,setKonflikVal] = useState("")
  const [negVal,setNegVal] = useState("")
  const [fikVal,setFikVal] = useState("")
  const [unkapVal, setUngkapVal] = useState("")
  const [perLapan,setPerLapan] = useState("")
  const [Diary, setDiary] = useState("")

  const handlePerlapan = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPerLapan((event.target as HTMLInputElement).value)
  }

  const arrDiary = [
    `
  Hi Diary
  Aku lagi ${EmoticonValue} nih
  Tau ngga, hari ini itu ${sharingValue}
  Oh iya, hubunganku ${alignment} bestieku nih.
  Dia itu ${konflikVal} dan aku gak suka sama ${negVal} dia. 
  Seandainya saja kita bisa kembali ke masa lalu seperti saat kita ${fikVal}
  Kalau dia ada di sini aku ingin berkata ${unkapVal} padanya
  bintang ${nilaiValue} untuk hari ini.
  Dah, terimakasih diary udah mau dengerin aku
  `,`
  Hi Diary
  Aku lagi ${EmoticonValue} nih
  Tau ngga, waktu aku kecil ${sharingValue}
  ...Saat broken home aku ${alignment}
  ${konflikVal}
  Aku ingat ketika ${negVal}
  Keluargaku sering melakukan itu karena menurutku ${fikVal}
  Saat keluargaku tidak bersatu lagi aku ${perLapan}
  Perasaanku itu ${unkapVal}
  Rasa sayang aku ke keluagaku itu ${nilaiValue} untuk hari ini.
  Dah, terimakasih diary udah mau dengerin aku
  `,
  `
  Hi Diary
  Aku lagi ${EmoticonValue} hari ini nih
  Tau ngga, ${sharingValue}
  Keinginanku menjaganya itu ${alignment}
  Aku sesayang itu padanya karena ${konflikVal}
  Harapanya sih ${negVal}
  Aku memilih untuk ${fikVal}
  Aku ingat saat ${perLapan}
  ${unkapVal}
  Rasa sayang aku ke crush ku itu ${nilaiValue} untuk hari ini.
  Dah, terimakasih diary udah mau dengerin aku
  ` ,
`
  Hi Diary
  Aku lagi ${EmoticonValue} hari ini nih
  Tau ngga, ${sharingValue}
  Sukses itu menurutku ${alignment}
  kegagalan itu menurutku ${konflikVal}
  ${negVal}
  ${fikVal}
  ${perLapan}
  ${unkapVal}
  Ratingku untuk kemungkinan masa depanku ${nilaiValue} untuk hari ini.
  Dah, terimakasih diary udah mau dengerin aku`
  ,
  ` Hi Diary
  Aku lagi ${EmoticonValue} hari ini nih
  Ratingku tentang pernikahanku ${nilaiValue} untuk hari ini.
  Tau ngga, ${sharingValue}
  ${alignment}
  Aku kesal ketika ${konflikVal}
  Aku sebel ketika${negVal}
  ${fikVal}
  ${perLapan}
  ${unkapVal}
  Dah, terimakasih diary udah mau dengerin aku
  `
]

  const templateDiary = tema==="persahabatan"?arrDiary[0]:
                        tema==="keluarga"?arrDiary[1]:
                        tema==='percintaan'?arrDiary[2]:
                        tema==='MasDes'?arrDiary[3]
                        :arrDiary[4]

  const buatDiary = ()=>{
    setDiary(templateDiary)
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
  let render = (<div></div>)

  if (tema==="persahabatan") {
    render = (
      <Stack spacing={1}>
        <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel1" 
        judul='Hei! Hari ini Apa Kabar?' Value={EmoticonValue} handleRadio={handleRadio} />
        <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel2" 
        judul='Hari ini ada cerita apa?' Value={sharingValue} handleRadio={handleText} />
        <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel3" 
        judul='Kasih rate dong untuk hari ini' valNo={nilaiValue} setNilai={setNilaiValue} />
        <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel4" 
        judul='Gimana nih hubungan kamu sama bestie mu?' Value={alignment} handleAlignment={handleAlignment} />
        <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel5" 
        judul='Apasih yang dia lakuin sampai hubungan kalian renggang?' Value={konflikVal} handleRadio={handleKonflik} />
        <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel6" 
        judul='Dibalik itu semua Apa sih yang paling kamu ga suka?' Value={negVal} handleRadio={handleNeg} />
        <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel7" 
        judul='Pasti ada dong kenangan terindah bersama bestie mu?' Value={fikVal} handleRadio={handleFik} />
        <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel8" 
        judul='👀' />
        <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel9" 
        judul='Jika teman kamu disini, apa yang ingin kamu ungkapin?' Value={unkapVal} handleRadio={handleUngkap} />
        <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel10" 
        judul='🥰' diary={Diary} setDiary={buatDiary} handleRadio={handleDiary} />
        <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel11" 
        judul='Hasil Diary Kamu' diary={Diary} setDiary={buatDiary} handleRadio={handleDiary} />
      </Stack>
    )
  }

  if (tema==="keluarga") {
    render = (
      <Stack spacing={1}>
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel1" 
      judul='Hay, kamu lagi kenapa ya?' Value={EmoticonValue} handleRadio={handleRadio} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel2" 
      judul='Critain dong permasalahan yang pernah di terjadi pada salah kmu kecil di dalam lingkaran keluarga?' Value={sharingValue} handleRadio={handleText} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel3" 
      judul='Rate seberapa sayang kamu sama keluarga kamu?' valNo={nilaiValue} setNilai={setNilaiValue} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel4" 
      judul='Bagaimana kmu saat di kondisi broken home?' Value={alignment} handleAlignment={handleAlignment} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel5" 
      judul='Apa sih yang bikin kamu ngerasakan kepada diri kmau sendiri terhadap kondisi kmu sekarang?' Value={konflikVal} handleRadio={handleKonflik} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel6" 
      judul='Ada gasih hal hal kecil / kenangan yang sering  kmu di kerjain saat kmu masih bersatu ,tapi di mata kamu bisa seneng loh/ santay/ emosi' Value={negVal} handleRadio={handleNeg} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel7" 
      judul='Menurut kamu kenapa anggota keluarga kamu sering melakukan itu terhadap kmu?' Value={fikVal} handleRadio={handleFik} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel8" 
      judul='Tapi pernah ga sih terkadang kita juga ngeselin,saat keluarga kmu udah gak bersatu lagi?' Value={perLapan} handleRadio={handlePerlapan} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel9" 
      judul='Bagaimana perasaanmu saat ada anggota keluarga kmu yang bisa membuat kmu seneng?' Value={unkapVal} handleRadio={handleUngkap} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel10" 
      judul='🥰' diary={Diary} setDiary={buatDiary} handleRadio={handleDiary} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel11" 
      judul='Hasil Diary Kamu' diary={Diary} setDiary={buatDiary} handleRadio={handleDiary} />
    </Stack>
    )
  }
  if (tema==="percintaan") {
    render = (
      <Stack spacing={1}>
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel1" 
      judul='"Gimana perasaanmu hari ini bersama crush?' Value={EmoticonValue} handleRadio={handleRadio} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel2" 
      judul='Saat ini ada problem kah dengan crush?' Value={sharingValue} handleRadio={handleText} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel3" 
      judul='Seberapa sayang sih kamu sama dia? Kasih rate dong!' valNo={nilaiValue} setNilai={setNilaiValue} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel4" 
      judul='Boleh kasih tau ga? seberapa besar keinginanmu untuk memiliki dan menjaga nya?' Value={alignment} handleAlignment={handleAlignment} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel5" 
      judul='Apa yang membuat kamu sesayang ini?' Value={konflikVal} handleRadio={handleKonflik} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel6" 
      judul='Btw apakah dia ada bayangan menjadi sosok pasangan kamu?' Value={negVal} handleRadio={handleNeg} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel7" 
      judul='Kalau kamu mau memilih,kamu lebih baik engga kenal dia dari awal? Atau memang suka bertemu dengan dia?' Value={fikVal} handleRadio={handleFik} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel8" 
      judul='Pernah engga sih ngerasa tidak di cintai?' Value={perLapan} handleRadio={handlePerlapan} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel9" 
      judul='Apakah ada keinginan untuk menyelesaikan perasaan ini?' Value={unkapVal} handleRadio={handleUngkap} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel10" 
      judul='🥰' diary={Diary} setDiary={buatDiary} handleRadio={handleDiary} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel11" 
      judul='Hasil Diary Kamu' diary={Diary} setDiary={buatDiary} handleRadio={handleDiary} />
    </Stack>
    )
  }

  if (tema==="MasDes") {
    render = (
      <Stack spacing={1}>
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel1" 
      judul='Lagi overthingking masa depan yah?' Value={EmoticonValue} handleRadio={handleRadio} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel2" 
      judul='Apa sih yg kamu yg takutkan dengan masa depan?' Value={sharingValue} handleRadio={handleText} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel4" 
      judul='Nah sekarang mimin mau tanya nih, defnisi sukses pada masa depan itu seperti apa sih' Value={alignment} handleAlignment={handleAlignment} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel5" 
      judul='mimin juga mau tanya lagi nih, menurut anda kegagalan itu adalah bagian dari keberhasilan atau awal dari jatuhnya hingar bingar masa depan?' Value={konflikVal} handleRadio={handleKonflik} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel6" 
      judul='Lantas mengapa masih oberthingking hayoo hehehe, bukanya kegagalan adalah hal yg wajar? ' Value={negVal} handleRadio={handleNeg} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel7" 
      judul='
      Selain anda, Adakah orang lain yang sangat bergantung pada keberhasilan masa depan anda?, sampai anda sangat protectif dengan keberhasilan masa depan ?' Value={fikVal} handleRadio={handleFik} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel8" 
      judul='Sekarang mimin mau tanya, Ibarat seorang publicc figure nih, kalo km diberi kesempatan buat memilih masa depan bak seorang public figure, siapa sih masa depan public fogure yg kamu idamkan? ' Value={perLapan} handleRadio={handlePerlapan} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel9" 
      judul='Ada pepatah mengatakan 10 kali kegagalan akan membukan 1000 pintu keberhasilan dalam masa depan, percayakah anda dengan hal itu? Lantas mengapa kamu mengidamkan nya ?' Value={unkapVal} handleRadio={handleUngkap} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel3" 
      judul='Rate kemungkinan kamu bisa menjadikan masa depan mu setara dia namun dengan versimu? ' valNo={nilaiValue} setNilai={setNilaiValue} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel10" 
      judul='🥰' diary={Diary} setDiary={buatDiary} handleRadio={handleDiary} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel11" 
      judul='Hasil Diary Kamu' diary={Diary} setDiary={buatDiary} handleRadio={handleDiary} />
    </Stack>
    )
  }

  if (tema==="pernikahan") {
    render = (
      <Stack spacing={1}>
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel1" 
      judul='Hay apa kabar kamu?' Value={EmoticonValue} handleRadio={handleRadio} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel3" 
      judul='Gimana kondisi pernikahan saat ini? Kasih rate dong!' valNo={nilaiValue} setNilai={setNilaiValue} />      
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel2" 
      judul='Kenapa kamu memilih rate di atas? Sharing dong' Value={sharingValue} handleRadio={handleText} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel4" 
      judul='Hari ini sudah ada yang bikin kesel belum dengan pasangan kamu?' Value={alignment} handleAlignment={handleAlignment} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel5" 
      judul='Apa sih yang bikin kamu ngerasa kesel?' Value={konflikVal} handleRadio={handleKonflik} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel6" 
      judul='Ada gasih hal hal kecil yang sering pasangan kamu sepelekan,tapi di mata kamu menyebalkan' Value={negVal} handleRadio={handleNeg} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel7" 
      judul='Seberapa sayang sih kamu sama pasangan kamu?' Value={fikVal} handleRadio={handleFik} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel8" 
      judul='Tapi pernah gasi terkadang nih kita juga ngeselin,tapi pasangan kita ternyata ga marah loh' Value={perLapan} handleRadio={handlePerlapan} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel9" 
      judul='Pernah ada engga si kebaikan pasangan yang bikin kamu tuh seneng banget?' Value={unkapVal} handleRadio={handleUngkap} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel10" 
      judul='🥰' diary={Diary} setDiary={buatDiary} handleRadio={handleDiary} />
      <IsianAkardia tema={tema} expanded={expanded} handleChange={handleChange} panel="panel11" 
      judul='Hasil Diary Kamu' diary={Diary} setDiary={buatDiary} handleRadio={handleDiary} />
    </Stack>
    )
  }

  return (
    <div>
      {render?render:''}
    </div>
  );
}