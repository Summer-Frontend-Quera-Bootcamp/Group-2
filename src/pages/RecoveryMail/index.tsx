
import React, { useState } from "react";
import Button from "../../components/ShareComponent/Button";
import Input from "../../components/ShareComponent/Input";
import LayoutLogin from "../../components/ShareComponent/LayoutLogin";

type FormProps = {
    EnterPass: string;
};

const RecoveryMail: React.FC = (): JSX.Element => {
  const [formValues, setFormValues] = useState<FormProps>({ EnterPass: ''});
  var isFormSubmitted = false;
  
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
     
      <div className="inpurYourPass">
        {/* اگر فرم ارسال شده باشد نمایش داده شود */}
        <p className="mb-4">لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید.</p>
        {/* فیلد رمز عبور جدید */}
        <Input LabelName="رمز عبور جدید را وارد کنید"
          LabelFor="EnterPass"
          InputType="text"
          InputName="EnterPass"
          InputValue={formValues.EnterPass}
          onChange={handleInputChange} />
        {/* دکمه تغییر رمز عبور */}
        <div className="text-center lg:text-left">
          <Button DspWidth="w-full"
            BtnValue="تغییر رمز عبور"
            BtnColor="bg-green-primary"
            onClick={handleFormSubmit} />
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default RecoveryMail;
