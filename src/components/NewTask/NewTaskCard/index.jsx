import InputText from "../InputText";
import NewTaskBtn from "../NewTaskButtons";

const NewTaskCard = () => {
  return (
    <div className="flex flex-col items-end w-[1153px] p-8 gap-10 bg-white drop-shadow-[0px 12px 32px 0px rgba(0, 0, 0, 0.25)]">
      <div className="flex self-stretch items-center justify-between w-full h-auto">
        <div className="flex flex-row items-center gap-[13px]">
          <div className="w-4 h-4 rounded-0.5 bg-[#D9D9D9] self-center"></div>
          <div className="font-medium text-2xl text-right capitalize">
            عنوان تسک
          </div>
        </div>
        <NewTaskBtn variant={"CloseBtn"} />
      </div>
      <div className="flex self-stretch items-center justify-start gap-2 w-full h-auto">
        <div className="font-medium text-base text-right capitalize">در</div>
        <div className="flex w-[150px] px-2 pt-[5px] pb-1 justify-start items-center gap-[10px] border rounded-md border-solid border-[#E9EBF0]">
          <div className="font-medium text-base text-right capitalize">
            پروژه اول
          </div>
        </div>
        <div className="font-medium text-base text-right capitalize">برای</div>
        <NewTaskBtn variant={"ContactsBtn"} />
      </div>
      <InputText />
      <div className="flex self-stretch items-center justify-start gap-4 w-full h-auto">
        <div className="font-medium text-base text-right capitalize">
          افزودن پیوست
        </div>
        <button className="flex py-1 px-2 justify-end items-center gap-1 border rounded border-solid border-[#208D8E]">
          <div className="flex w-6 h-6 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M10.9991 14.0006L11.9525 14.954C12.703 15.7045 13.7209 16.1262 14.7822 16.1262C15.8436 16.1262 16.8614 15.7045 17.6119 14.954L20.6442 11.9218C22.4571 10.1086 22.4571 7.16918 20.6442 5.35604V5.35604C18.831 3.5431 15.8916 3.5431 14.0784 5.35604L13.1911 6.24441"
                stroke="#208D8E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.0008 10.9993L14.0474 10.0459C13.297 9.29541 12.2791 8.87378 11.2177 8.87378C10.1564 8.87378 9.13852 9.29541 8.38806 10.0459L5.35579 13.0782C3.54286 14.8913 3.54286 17.8308 5.35579 19.6439V19.6439C7.16893 21.4568 10.1084 21.4568 11.9215 19.6439L12.8089 18.7555"
                stroke="#208D8E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="font-medium text-base text-right capitalize">
            آپلود فایل
          </div>
        </button>
      </div>
      <div className="flex self-stretch items-center justify-between">
        <div className="flex justify-end items-center gap-6">
            <NewTaskBtn variant={"PriorityBtn"}/>
            <NewTaskBtn variant={"CalendarBtn"}/>
            <NewTaskBtn variant={"TagsBtn"}/>
        </div>
        <button className="flex w-[125px] h-8 px-[7px] py-1 justify-center items-center gap-[10px] rounded bg-[#208D8E] text-white text-right text-xs font-normal capitalize">ساختن تسک</button>
      </div>
    </div>
  );
};

export default NewTaskCard;
