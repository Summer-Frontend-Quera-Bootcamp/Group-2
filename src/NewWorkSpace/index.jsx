import { Helmet } from 'react-helmet';
import { useState } from "react";
import New_work_color from './NewWorkColor';

function New_work_space() {
  const [openModal , setOpenModal] = useState(false);
  return (
    <>
      <Helmet>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link href='https://unpkg.com/css.gg@2.0.0/icons/css/unavailable.css' rel='stylesheet'></link>
      </Helmet>
    {/* PAGE1 */}
    <div className='mt-6'>
      <div style={{display:"flex" , flexDirection: "column" , alignItems:"center"}}>
    <div className="" style={{display:"flex" ,justifyContent:"space-around" , alignItems:"flex-start" , width:"452px" , height:"32px" , marginLeft:"80px"}}>
      <h1 className="font-semibold font-yekan" style={{fontSize:"24px" , fontStyle:"normal" , fontWeight:"800px" , lineHeight:"32px", textTransform:"capitalize",textAlign:"center"}}>
        ساختن ورک اسپیس جدید
      </h1>
      <button className=""><i className='bx bx-x'style={{fontSize: '24px' }}></i></button>
    </div>

    <div className="flex flex-col justify-items-center p-10" style={{ display: "flex", flexDirection:"column" , alignItems:"flex-end"}}>
      <p className="text-right font-yekan flex-1">نام ورک اسپیس</p>

      <div className="flex items-center justify-center mb-4">
      <input className="border border-[#AAAAAA] bg-[#FFFFFF] rounded-lg justify-center " style={{ width: '415px', height: '40px'}}></input>
      </div>

      </div>
      </div>
      
    <div className="flex justify-center mt-2">
      <button className="text-white bg-brand-primary border border-none rounded-lg font-yekan" style={{ width: '415px', height: '40px', color:'#fff'}}
       onClick={()=>{setOpenModal(true);}}>ادامه</button>
       {openModal &&  <New_work_color />}
      </div>
</div>
    </>
  );
}

export default New_work_space;
