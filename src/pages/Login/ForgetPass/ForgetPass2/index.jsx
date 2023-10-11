function ForgetPassword2() {
    return (
        <>
        {/* page 2*/}
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
          فراموشی رمز عبور
          </h1>
          <button className=""><i className='bx bx-x'style={{fontSize: '24px' }}></i></button>
        </div>
          </div>
          
        <div className="flex justify-center mt-2">
          <p className="text-white font-yekan" style={{ width: '450px', height: '40px', color:'#000'}}>لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید</p>
          </div>
          
    </div>
    </div>
    
    
        </>
      );
      }
    
    export default ForgetPassword2;