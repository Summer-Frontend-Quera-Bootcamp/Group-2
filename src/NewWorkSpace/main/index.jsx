import { Helmet } from 'react-helmet';
function second_page() {
    return (
    <>
        <Helmet>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link href='https://unpkg.com/css.gg@2.0.0/icons/css/unavailable.css' rel='stylesheet'></link>
      </Helmet>
         <div className='mt-6 mr-6'>
    <div className="flex space-x-5">
    <button className="w-24">
    <i className='bx bx-arrow-back'style={{fontSize: '24px' }}></i>
    </button>
      <h1 className="text-center font-semibold font-yekan text-3xl flex-1 w-64">
        انتخاب رنگ ورک اسپیس
      </h1>
      <button className="w-6 h-6 pr-0"><i className='bx bx-x'style={{fontSize: '24px' }}></i></button>
    </div>
    </div>

    <div className='flex flex-row-reverse p-10'>
       <div className="bg-[#7D828C] pb-4" style={{width:'70px' , height:'70px', color:'#FFFFFF', borderRadius:'8px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
       <p className="flex content-center font-yekan" style={{width:"46px" , height:"37" , fontSize:"25px" , marginTop:20 , marginLeft:5}}>ت ط</p>
      </div>
    </div>  

<div className='' style={{boxSizing:'border-box'}}>
    <div className="p-8 pl-6" style={{left:10 , lineHeight:'16.41px'}}>
      <p className="font-yekan flex flex-row-reverse">رنگ ورک اسپیس</p>
    </div>
    
    <div className="pl-8 box-content flex flex-col items-center">
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
<div className="flex justify-center mt-2">
      <button className="text-white bg-brand-primary border border-none rounded-lg font-yekan" style={{ width: '415px', height: '40px', color:'#fff'}}>ادامه</button>
      </div>
    </>
    );
}


export default second_page;