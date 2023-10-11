function ForgetPassword3() {
    return (
        <>
        {/* page 3 */}
       <div style={{height: "100%" , width:"100%" , position:"fixed", display:"flex" , top:0}}>
      <div className="flex mt-10" style={{ display: "flex",
      flexDirection:"row-reverse",
    width: "1280px",
    justifyContent: "space-between",
    alignItems: "start",
    marginLeft:"100px"}}>
      
        <p style={{marginRight:"80px",background: "-webkit-linear-gradient(#118C80, #4AB7D8)", "-webkit-background-clip": "text", "-webkit-text-fill-color": "transparent", fontSize:"32px" , fontWeight:"800"}}> کوئرا تسک منیجر</p>
        <div className="w-1"></div>
        <div style={{display:"flex"}}>
        <button className="text-white bg-brand-primary border border-none rounded-lg font-yekan" style={{ width: '95px', height: '30px', color:'#fff', borderRadius:"6px"}}>ورود</button><div className="w-2"></div><p>قبلا ثبت‌نام کرده‌ای؟</p>
        </div>
      </div>
       </div>
        <div style={{display: "inline-flex", width:"501px",flexDirection:"column", alignItems:"center" , justifyContent:"center" ,paddingLeft:"45px" , paddingBottom:"20px" ,position:"fixed" , marginLeft:"475px", marginTop:"250px" , boxShadow:"rgba(0,0,0,0.35) 0px 5px 15px"}}>
        <div className='mt-6'>
          <div style={{display:"flex" , flexDirection: "column" , alignItems:"center"}}>
        <div className="" style={{display:"flex" ,justifyContent:"space-around" , alignItems:"flex-start" , width:"452px" , height:"32px" , marginLeft:"80px"}}>
          <h1 className="font-semibold font-yekan" style={{fontSize:"24px" , fontStyle:"normal" , fontWeight:"800px" , lineHeight:"32px", textTransform:"capitalize",textAlign:"center"}}>
          بازیابی رمز عبور
          </h1>
          <button className=""><i className='bx bx-x'style={{fontSize: '24px' }}></i></button>
        </div>
     <div style={{display:"flex" , flexDirection:"column"}}>
        <div className="flex flex-col justify-items-center pb-1 pr-5 pl-5" style={{ display: "flex", flexDirection:"column" , alignItems:"flex-end"}}>
          <p className="text-right font-yekan flex-1">رمز عبور جدید را وارد کنید</p>
          <div className="flex items-center justify-center mb-4">
          <input className="border border-[#AAAAAA] bg-[#FFFFFF] rounded-lg justify-center " style={{ width: '415px', height: '40px'}}></input>
          </div>
    
          </div>
      </div>
          </div>
          
        <div className="flex justify-center mt-2">
          <button className="text-white bg-brand-primary border border-none rounded-lg font-yekan" style={{ width: '415px', height: '40px', color:'#fff'}}>تغییر رمز عبور</button>
          </div>
          
    </div>
    </div>
    
    
        </>
      );
      }
    
    export default ForgetPassword3;