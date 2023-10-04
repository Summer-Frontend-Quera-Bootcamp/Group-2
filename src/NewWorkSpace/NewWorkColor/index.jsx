import { Helmet } from 'react-helmet';
import { useState } from 'react';
import New_work_info from '../NewWorkInfo';
function New_work_color({closeModal}) {
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

    {/*Page2*/}
     <div style={{height: "100%" , width:"100%" , position:"fixed", display:"flex" , top:0 , backgroundColor:"white"}}></div>
    <div style={{display: "inline-flex", width:"501px",flexDirection:"column", alignItems:"center" , justifyContent:"center" , paddingLeft:"35px" , paddingBottom:"20px" , boxShadow:"rgba(0,0,0,0.35) 0px 5px 15px" , position:"fixed" , marginRight:"45px", marginTop:"-265px"}}>
  <div className='mr-10' style={{display:'flex', flexDirection:"column",  alignItems:"center"}}>
    <div className="mt-6" style={{display:"flex" , width:"453px", justifyContent:"space-between" , alignItems:"center"}}>
    <button className="w-24" onClick={()=>{closeModal(false)}}>
    <i className='bx bx-arrow-back'style={{fontSize: '24px'}}></i>
    </button>
      <h1 className="text-center font-semibold font-yekan text-3xl flex-1 w-64">
        انتخاب رنگ ورک اسپیس
      </h1>
      <button className="w-6 h-6 pr-0" onClick={()=>{closeModal(false)}}><i className='bx bx-x'style={{fontSize: '24px' }}></i></button>
    </div>
    <div className='h-20'></div>

  <div style={{display:"flex" , width:"453px" , justifyContent:"flex-end", alignItems: "flex-start" , flexDirection:"row-reverse"}}>
  <div className='pl-5'>
       <div className="bg-[#7D828C] pb-4" style={{width:'70px' , height:'70px', color:'#FFFFFF', borderRadius:'8px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
       <p className="font-yekan" style={{textTransform:"capitalize", fontSize:"24px" , marginTop:20, fontStyle:"normal" , lineHeight:"32px" , textAlign:"center"}}>ت ط</p>
      </div>
      </div>
<div className='pl-20' style={{display:"flex" , flexDirection:"column" , alignItems:"flex-end"}}>
    <div className="" style={{}}>
      <p className="font-yekan flex flex-row-reverse pr-2 pb-3">رنگ ورک اسپیس</p>
    </div>
    
    <div className="" style={{display:"flex" , width:"293px", justifyContent:"flex-end" ,alignContent:"center",alignItems:"center", gap:"10px" , flexWrap:"wrap"}}>
    <div className="pl-2 flex flex-row-reverse">
  
        <button className="flex flex-none order-0 flex-grow-0"><i className='gg-unavailable' style={{fontSize: '20px' }}></i></button> 
        <div className="w-3"></div>
        <button className="bg-[#4C6EF5] rounded-[8px] text-2xl flex flex-none order-0 flex-grow-0" style={{width:20, height:20}}></button>
        <div className="w-3"></div>
        <button className="bg-[#228BE6] rounded-[8px] text-2xl flex flex-none order-0 flex-grow-0" style={{width:20, height:20}}></button>
        <div className="w-3"></div>
        <button className="bg-[#15AABF] rounded-[8px] text-2xl flex flex-none order-0 flex-grow-0" style={{width:20, height:20}}></button>
        <div className="w-3"></div>
        <button className="bg-[#12B886] rounded-[8px] text-2xl flex flex-none order-0 flex-grow-0" style={{width:20, height:20}}></button>
        <div className="w-3"></div>
        <button className="bg-[#208D8E]  rounded-[8px] text-2xl flex flex-none order-0 flex-grow-0" style={{width:20, height:20}}></button>
        <div className="w-3"></div>
        <button className="bg-[#40C057] rounded-[8px] text-2xl flex flex-none order-0 flex-grow-0" style={{width:20, height:20}}></button>
        <div className="w-3"></div>
        <button className="bg-[#82C91E]  rounded-[8px] text-2xl flex flex-none order-0 flex-grow-0" style={{width:20, height:20}}></button>
        <div className="w-3"></div>
        <button className="bg-[#FAB005]  rounded-[8px] text-2xl flex flex-none order-0 flex-grow-0" style={{width:20, height:20}}></button>
        <div className="w-3"></div>
        <button className="bg-[#FD7E14] rounded-[8px] text-2xl flex flex-none order-0 flex-grow-0" style={{width:20, height:20}}></button>
    </div>
    
    <div className='' style={{height:10}}></div>
      <div className="pl-2 flex flex-row-reverse" style={{height:50}}>
        <button className="bg-[#FA5252] rounded-[8px] text-2xl flex flex-none order-0 flex-grow-0" style={{width:20, height:20}}></button>
        <div className="w-3"></div>
        <button className="bg-[#E64980]  rounded-[8px] text-2xl flex flex-none order-0 flex-grow-0" style={{width:20, height:20}}></button>
        <div className="w-3"></div>
        <button className="bg-[rgb(190,75,219)] rounded-[8px] text-2xl flex flex-none order-0 flex-grow-0" style={{width:20, height:20}}></button>
        <div className="w-3"></div>
        <button className=" bg-[#7950F2] rounded-[8px] text-2xl flex flex-none order-0 flex-grow-0" style={{width:20, height:20}}></button>
      </div>
</div>
</div>
</div>
</div>
<div className="flex justify-center mt-2">
      <button className="text-white bg-brand-primary border border-none rounded-lg font-yekan" style={{ width: '415px', height: '40px', color:'#fff'}} onClick={()=>{setOpenModal(true)}}>ادامه</button> 
      {openModal &&  <New_work_info  closeModal={setOpenModal}/>}
      </div>
      </div>
    </>
    );
}


export default New_work_color;