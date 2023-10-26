
import React, { useState } from "react";
import Button from "../../components/ShareComponent/Button";
import Input from "../../components/ShareComponent/Input";

type FormProps = {
  YourEmail: string;
  ForgetPass: string;
};

const Forgetpassword: React.FC = (): JSX.Element => {
  const [formValues, setFormValues] = useState<FormProps>({ YourEmail: '', ForgetPass: '' });
  
  const handleInputChange = (value: string, inputName: string) => {
    setFormValues(prevValues => ({
      ...prevValues,
      [inputName]: value
    }));
  };

  const handleFormSubmit = async () => {
    // ارسال درخواست به سرور اینجا صورت می‌گیرد
    try {
      // در اینجا ارسال اطلاعات به سرور
      // اگر ارسال موفقیت‌آمیز بود:
      
    } catch (error) {
      console.error("خطا در ارسال درخواست به سرور", error);
    }
  };

  return (
    <>
        <div className="flex justify-center">
     <div className="lg:w-[50%] md:w-[80%] card  md:mt-50 mt-10">
      <div className="inputMail">
        {/* اگر فرم ارسال نشده است نمایش داده شود */}
        <h1 className="font-bold text-center">بازیابی رمز عبور</h1>
        <form>
          {/* فیلد ایمیل */}
          <Input LabelName="ایمیل خود را وارد کنید"
            LabelFor="YourEmail"
            InputType="text"
            InputName="YourEmail"
            InputValue={formValues.YourEmail}
            onChange={handleInputChange} />
          {/* دکمه ارسال فرم */}
          <div className="text-center lg:text-left">
            <Button DspWidth="w-full"
              BtnValue="دریافت ایمیل بازیابی رمز عبور"
              BtnColor="bg-green-primary"
              onClick={handleFormSubmit} />
          </div>
        </form>
      </div>

      </div>
      </div>
    </>
  );
};

export default Forgetpassword;
