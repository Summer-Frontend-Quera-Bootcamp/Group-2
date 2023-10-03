import { Helmet } from 'react-helmet';
function New_work_info() {
    return (
    <>
          <Helmet>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link href='https://unpkg.com/css.gg@2.0.0/icons/css/unavailable.css' rel='stylesheet'></link>
      </Helmet>

      {/* Page3 */}

       <div className='mt-6 mr-6' style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <div style={{display:"flex" , width:"453px", flexDirection:"column" , alignItems:"flex-start"}}>
       <div className="mt-6" style={{display:"flex" , width:"453px", justifyContent:"space-between", alignItems:"center"}}>
    <button className="w-24">
    <i className='bx bx-arrow-back'style={{fontSize: '24px'}}></i>
    </button>
      <h1 className="text-center font-semibold font-yekan text-3xl flex-1 w-64">
        مرور اطلاعات
      </h1>
      <button className="w-6 h-6 pr-0"><i className='bx bx-x'style={{fontSize: '24px' }}></i></button>
    </div>
    </div>
    <div className='mt-10 ml-7 border-[#AAAAAA]' style={{display:"flex" , width:"453px" , flexDirection:"column" , border:" 0.5px solid #AAA", borderRadius:"8px"}}>
      <span className="flex flex-row-reverse justify-between">
        <h6 className="font-yekan  ml-10 mr-10"style={{fontSize:"14px" , textTransform:"capitalize"}}>نام ورک اسپیس</h6>
        <h6 className="font-yekan  ml-10" style={{fontSize:"14px" , textTransform:"capitalize"}}>تیم طراحی</h6>
      </span>

      <div className="h-5"></div>

      <span className="flex flex-row-reverse justify-between">
        <h6 className="font-yekan ml-10 mr-10" style={{fontSize:"14px" , textTransform:"capitalize"}}>رنگ ورک اسپیس</h6>
        <div className="bg-[#80DC69] text-[#80DC69] rounded-[2px] text-2xl flex flex-none order-0 flex-grow-0  ml-10" style={{width:'14px' , height:'14px'}}></div>
      </span>

      <div className="h-5"></div>

      <span className="flex flex-row-reverse justify-between">
        <h6 className="font-yekan ml-10 mr-10" style={{fontSize:"14px" , textTransform:"capitalize"}}>اعضا</h6>
        <img className="w-8 h-8 flex flex-none order-0 flex-grow-0 ml-10" src="kisspng-flappy-bird-floppy-garuda-clip-art-android-5b750dc47f6072.8243652515343978925217.png" alt="Group image"></img>
      </span>
      </div>
    </div>
    <div className="flex justify-center mt-12">
      <button className="text-white bg-brand-primary border border-none rounded-lg font-yekan" style={{ width: '415px', height: '40px', color:'#fff'}}>ساختن ورک اسپیس</button>
      </div>
    </>
    );
}


export default New_work_info;