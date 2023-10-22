import React,{useState} from 'react';
import Close from '../ShareComponent/Icons/Close'
import UserAdd from "../ShareComponent/Icons/UserAdd";
import Flag from "../ShareComponent/Icons/Flag";
import Calander from "../ShareComponent/Icons/Calender";
import Tag from "../ShareComponent/Icons/Tag";
import AttachLink from "../ShareComponent/Icons/AttachLink";
import TagMenu from './NewTaskCompSmallComponents/TagMenu';

const NewTaskCard: React.FC = () => {
  const [isTagsOpen,setIsTagsOpen] = useState(false);
  const [isPriorityOpen,setIsPriorityOpen] = useState(false);
  const [tagName,setTagName] = useState('');
  const [tagColor,setTagColor] = useState('');
  const togglePriorityMenu=()=>{
    setIsPriorityOpen(!isPriorityOpen);
  }
  const toggleTagsMenu=()=>{
    setIsTagsOpen(!isTagsOpen);
  }
  const handleTagName=(data:string , color:string)=>{
    setTagName(data);
    setTagColor(color);
    setIsTagsOpen(false);
  }
  return (
    <div className="flex flex-col items-end w-[1153px] p-8 gap-10 bg-white shadow-[0px_12px_32px_0px_rgba(0, 0, 0, 0.25)]">
      <div className="flex self-stretch items-center justify-between w-full h-auto">
        <div className="flex flex-row items-center gap-[13px]">
          <div className="w-4 h-4 rounded-0.5 bg-[#D9D9D9] self-center"></div>
          <div className="font-medium text-2xl text-right capitalize">
            عنوان تسک
          </div>
        </div>
        <button className="flex w-8 h-8 justify-center items-center">
          <Close size={32} />
        </button>
      </div>
      <div className="flex self-stretch items-center justify-start gap-2 w-full h-auto">
        <div className="font-medium text-base text-right capitalize">در</div>
        <div className="flex w-[150px] px-2 pt-[5px] pb-1 justify-start items-center gap-[10px] border rounded-md border-solid border-[#E9EBF0]">
          <div className="font-medium text-base text-right capitalize">
            پروژه اول
          </div>
        </div>
        <div className="font-medium text-base text-right capitalize">برای</div>
        <button className="flex w-[34px] h-[34px] p-[4.25px] justify-center items-center gap-[10.625px] rounded-full border-[1.063px] border-dashed border-[#C1C1C1]">
          <div className="flex w-5 h-5 justify-center items-center flex-shrink-0">
            <UserAdd size={20} color='#C1C1C1'/>
          </div>
        </button>
      </div>
      <input
        type="text"
        placeholder="توضیحاتی برای این تسک بنویسید"
        className="flex h-[191px] pt-[19px] pr-[32px] pb-[144px] pl-[826px] justify-end items-center self-stretch border rounded-2xl border-solid border-[#E2E2E2] font-medium text-base text-right capitalize"
      />
      <div className="flex self-stretch items-center justify-start gap-4 w-full h-auto">
        <div className="font-medium text-base text-right capitalize">
          افزودن پیوست
        </div>
        <button className="flex py-1 px-2 justify-end items-center gap-1 border rounded border-solid border-[#208D8E]">
          <div className="flex w-6 h-6 justify-center items-center">
            <AttachLink size={24} color='#208D8E'/>
          </div>
          <div className="font-medium text-base text-right capitalize">
            آپلود فایل
          </div>
        </button>
      </div>
      <div className="flex justify-start items-center gap-4 self-stretch">
      <div className="font-medium text-base text-right capitalize">
          افزودن کاور
        </div>
      <button className="flex py-1 px-2 justify-end items-center gap-1 border rounded border-solid border-[#208D8E]">
          <div className="flex w-6 h-6 justify-center items-center">
            <AttachLink size={24} color='#208D8E'/>
          </div>
          <div className="font-medium text-base text-right capitalize">
            آپلود فایل
          </div>
        </button>
      </div>
      <div className="flex self-stretch items-center justify-between">
        <div className="flex justify-end items-center gap-6">
          <button className="flex w-[50px] h-[50px] p-[6.667px] justify-center items-center rounded-full border-dashed border-[1.389px] border-[#C1C1C1]">
            <div className="flex w-[29.412px] h-[29.412px] justify-center items-center flex-shrink-0">
              <Flag size={30} color='#C1C1C1'/>
            </div>
          </button>
          <button className="flex w-[50px] h-[50px] p-[1.667px] justify-center items-center rounded-full border-dashed border-[1.389px] border-[#C1C1C1]">
            <div className="flex w-[30px] h-[30px] justify-center items-center flex-shrink-0">
              <Calander size={30} color='#C1C1C1'/>
            </div>
          </button>
          <button className={'flex w-[50px] h-[50px] p-[6.667px] justify-center items-center rounded-full border-dashed border-[1.389px] border-[#C1C1C1]'} onClick={toggleTagsMenu}>
            <div className={'flex w-[29.412px] h-[29.412px] justify-center items-center flex-shrink-0'}>
              {tagName==='' ? <Tag size={30} color='#C1C1C1'/> : (
                <div className={tagColor+''}>
                  {tagName}
                  </div>
              )}
            </div>
          </button>
          {isTagsOpen && (
            <TagMenu tagNameAssign={handleTagName}/>
          )}
        </div>
        <button className="flex w-[125px] h-8 px-[7px] py-1 justify-center items-center gap-[10px] rounded bg-[#208D8E] text-white text-right text-xs font-normal capitalize">ساختن تسک</button>
      </div>
    </div>
  );
};

export default NewTaskCard;
