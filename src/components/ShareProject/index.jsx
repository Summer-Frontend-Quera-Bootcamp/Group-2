import EmailForm from "./components/EmailForm";

const ShareProject = () => {
  return (
    <div className="w-[470px] h-[348px] p-5 bg-[#fff] rounded-xl flex-col justify-start items-center gap-10 inline-flex ltr">
      <div className="relative rounded-xl bg-[#fff] w-full overflow-hidden flex flex-col p-5 box-border items-center justify-start gap-[40px] text-center text-[20px] text-[#1e1e1e] font-[IRANYekan]">
        <div className="w-[430px] flex flex-row items-center justify-between">
          <img
            className="relative w-6 h-6 opacity-[0]"
            alt=""
            src="/interface-essentialdelete-disabled.svg"
          />
          <div className="relative leading-[30px] capitalize font-extrabold">
            به اشتراک‌گذاری پروژه‌
          </div>
          <img
            className="relative w-6 h-6"
            alt=""
            src="/interface-essentialdelete-disabled1.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-[14px] text-[#fff]">
          <div className="w-full flex from-group">
            <button className="bg-[#208d8e] w-[91px] h-10 overflow-hidden rounded-l-lg">
              ارسال
            </button>
            <input
              type="email"
              id="email"
              placeholder=" دعوت با ایمیل"
              className="self-stretch wi relative rounded-r-lg bg-[#f0f1f3] h-10 overflow-hidden shrink-0 border-none text-right w-[76%]"
            ></input>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between text-right text-[12px] text-[#1e1e1e]">
            <div className="rounded-md bg-[#fff] overflow-hidden flex flex-row pt-[3px] px-3 pb-0.5 items-center justify-center border-[1px] border-solid border-[#e9ebf0]">
              <button className="relative capitalize">کپی لینک</button>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px] text-[14px]">
              <div className="relative capitalize">لینک خصوصی</div>
              <img
                className="relative w-5 h-5"
                alt=""
                src="/interface-essentiallinkbig.svg"
              />
            </div>
          </div>
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default ShareProject;
