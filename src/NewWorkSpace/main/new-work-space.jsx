import { Helmet } from 'react-helmet';
import { useState } from "react";
import second_page from './seconPagw/index';

function New_work_space() {
  const [openModal , setOpenModal] = useState(false);
  return (
    <>
     <second_page/>
      <Helmet>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link href='https://unpkg.com/css.gg@2.0.0/icons/css/unavailable.css' rel='stylesheet'></link>
      </Helmet>
    {/* PAGE1 */}
    <div className='mt-6 mr-6'>
    <div className="flex space-x-5">
      <h1 className="text-center font-semibold font-yekan text-3xl flex-1 w-64">
        ساختن ورک اسپیس جدید
      </h1>
      <button className="w-6 h-6 pr-0"><i className='bx bx-x'style={{fontSize: '24px' }}></i></button>
    </div>

    <div className="flex flex-col justify-items-center p-10">
      <p className="text-right font-yekan flex-1">نام ورک اسپیس</p>

      <div className="flex items-center justify-center mb-4">
      <input className="border border-[#AAAAAA] bg-[#FFFFFF] rounded-lg justify-center " style={{ width: '415px', height: '40px'}}></input>
      </div>

      </div>
      
    <div className="flex justify-center mt-2">
      <button className="text-white bg-brand-primary border border-none rounded-lg font-yekan" style={{ width: '415px', height: '40px', color:'#fff'}}
       onClick={()=>{setOpenModal(true);}}>ادامه</button>
       {openModal && <second_page/>}
      </div>
</div>
    </>
  );
}

export default New_work_space;
