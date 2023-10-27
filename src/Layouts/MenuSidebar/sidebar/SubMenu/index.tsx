import React, { useState } from "react";
import MenuSideBar from "../..";
import { SidebarItem } from "../..";
import Calendar from "../../../../components/Calendar"
import Share from "../../../../components/ShareComponent/Icons/Share"
import ChekList from "../../../../components/ShareComponent/Icons/ChekList"
import Layout from "../../../../components/ShareComponent/Icons/Layout";
import Calender from "../../../../components/ShareComponent/Icons/Calender"
import Boardview from "../../../../pages/Boardview";
import ProjectList from "../../../../components/listview/ProjectList"
import MainHeader from "../../../../components/MainHeader";
import PlusSquare from "../../../../components/ShareComponent/Icons/PlusSquare"
import NewTaskCard from "../../../../components/NewTask";
import Search from "../../../../components/ShareComponent/Icons/Search"
import Filter from '../../../../components/ShareComponent/Icons/Filter'
import ShareProject from "../../../../components/ShareProject";

function SubMenu() {
  const [isListviewOpen, setIsListviewOpen] = useState(true);
  const [isBoardviewOpen, setIsBoardviewOpen] = useState(false);
  const [isCalendarviewOpen, setIsCalendarviewOpen] = useState(false);
  const [isNewTaskCardOpen,setIsNewTaskCardOpen] = useState(false);
  const [isShareProjectCardOpen,setIsShareProjectCardOpen] = useState(false);
  return (
    <>
      <NewTaskCard isNewTaskOpen={isNewTaskCardOpen} closeNewTask={()=>{setIsNewTaskCardOpen(false)}}/>
      <ShareProject isShareProjectOpen={isShareProjectCardOpen} closeShareProject={()=>{
        setIsShareProjectCardOpen(false);
      }}/>
      <MenuSideBar>
        <li style={{ direction: "ltr" }}>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch"
          }}>
            <button>icons</button>
            <div style={{
              color: "var(--Black, #1E1E1E)",
              textAlign: "right",
              fontFamily: "IRANYekanWeb",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "800",
              lineHeight: "normal",
              textTransform: "capitalize"
            }}>ورک‌اسپیس‌ها</div>
          </div>

          {/* space between each switch */}
          <div style={{
            display: "flex",
            padding: "8px 15px 8px 164px",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "6px",
            alignSelf: "stretch",
          }}>
          </div>


          <div>
            <input placeholder="جستجو کنید" style={{
              display: "flex",
              padding: "8px 15px 8px 164px",
              justifyContent: "flex-end",
              alignItems: "center",
              alignSelf: "stretch",
              gap: "6px",
              background: "#F6F7F9",
              borderRadius: "4px",
              width: "274px",
              textAlign: "right"
            }}></input>
          </div>

          {/* space between each switch */}
          <div style={{
            display: "flex",
            padding: "8px 15px 8px 164px",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "6px",
            alignSelf: "stretch",
          }}>
          </div>

          <div style={{
            display: "flex",
            height: "var(--L, 32px)",
            padding: "10px",
            justifyContent: "center",
            gap: "4px",
            alignItems: "center",
            alignSelf: "stretch",
            background: "#D3D3D3",
            borderRadius: "6px",
          }}>
            <p>ساختن ورک اسپیس جدید</p>
            <button style={{
              width: "var(--M, 24px)",
              height: "var(--M, 24px)",
              flexShrink: "0",
            }}></button>

          </div>

        </li>
        <SidebarItem
          colorBox={" var(--green-primary, #40C057)"}
          text="درس مدیریت پروژه"

        />
        <SidebarItem
          colorBox={" var(--yellow-primary, #FAB005)"}
          text="کارهای شخصی"

        />

        <SidebarItem
          colorBox={" var(--red-primary, #FA5252)"}
          text="درس کامپایلر"
        />
        <div className="flex justify-center mt-2">
          <button className="text-[#208D8E] bg-[#fff] border rounded-lg font-IRANYekanWeb" style={{ width: "274px", height: '36px', borderRadius: "var(--XS, 8px)", padding: "4px" }}>ساختن پروژه جدید</button>
        </div>


        <SidebarItem
          colorBox={"var(--blue-primary, #228BE6)"}
          text="درس طراحی الگوریتم"
        />

      </MenuSideBar>
      <div className="flex flex-col gap-[20px] mr-5">
        <div className="flex w-[screenpx] py-4 px-0 justify-between items-center mr-[310px] pl-10">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-[5px] text-[#1E1E1E] text-right font-IRANYekanWeb text-[20px] font-extrabold leading-8 uppercase">پروژه</button>
            <div className="w-[1px] h-[22px] bg-[#999]"></div>
            <button className="flex items-center gap-[5px]" onClick={() => {
              setIsListviewOpen(true);
              setIsBoardviewOpen(false);
              setIsCalendarviewOpen(false);
            }}>
              <ChekList size={24} />
              <div className="text-[#1E1E1E] text-right font-IRANYekanWeb text-[16px] font-medium uppercase">نمایش لیستی</div>
            </button>
            <div className="w-[1px] h-[22px] bg-[#999]"></div>
            <button className="flex items-center gap-[5px]" onClick={() => {
              setIsListviewOpen(false);
              setIsBoardviewOpen(true);
              setIsCalendarviewOpen(false);
            }}>
              <Layout size={24} />
              <div className="text-[#1E1E1E] text-right font-IRANYekanWeb text-[16px] font-medium uppercase">نمایش ستونی</div>
            </button>
            <div className="w-[1px] h-[22px] bg-[#999]"></div>
            <button className="flex items-center gap-[5px]" onClick={() => {
              setIsListviewOpen(false);
              setIsBoardviewOpen(false);
              setIsCalendarviewOpen(true);
            }}>
              <Calender size={24} />
              <div className="text-[#1E1E1E] text-right font-IRANYekanWeb text-[16px] font-medium uppercase">تقویم</div>
            </button>
            <div className="w-[1px] h-[22px] bg-[#999]"></div>
          </div>
          <button className="flex items-center gap-[5px]" onClick={()=>{
            setIsShareProjectCardOpen(true);
          }}>
            <Share size={24} />
            <div className="text-[#1E1E1E] text-right font-IRANYekanWeb text-[16px] font-medium uppercase">اشتراک گذاری</div>
          </button>
        </div>
        <div className="h-[0.5px] mr-[300px] ml-8 mb-1 bg-[#AAA]" />
        <div className='flex justify-end items-center gap-9 self-stretch h-2 pl-10'>
            <div className="flex w-[200px] justify-end items-center gap-1">
                <button><Search size={24} /></button>
                <input className="text-[#959595] text-right font-IRANYekanWeb text-[12px] font-normal uppercase border-hidden rounded-xl"
                    placeholder='جستجو بین تسک‌ها'/>
            </div>
            <div className="w-[1px] h-[22px] bg-[#999]" />
            <div className="flex w-[1290px] justify-between items-center">
                <div className="flex justify-center items-end gap-4">
                    <button className="flex justify-end items-center gap-[6px]">
                        <Filter size={24} />
                        <div className="text-[#1E1E1E] text-right font-IRANYekanWeb text-[12px] font-normal uppercase">فیلترها</div>
                    </button>
                    <div className="flex px-3 py-1 justify-center items-center rounded bg-blue-secondary">
                        <div className=" text-blue-primary text-right font-IRANYekanWeb text-[12px] font-normal uppercase">دسته‌بندی‌شده با: وضعیت</div>
                    </div>
                </div>
                <div className="flex px-2 py-1 justify-end items-center gap-[6px] rounded-lg border border-solid border-[#208D8E]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M12.1251 18.0584C15.7001 17.1167 18.3334 13.8667 18.3334 10.0001C18.3334 5.40008 14.6334 1.66675 10.0001 1.66675C4.44175 1.66675 1.66675 6.30008 1.66675 6.30008M1.66675 6.30008V2.50008M1.66675 6.30008H3.34175H5.36675" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.66675 10C1.66675 14.6 5.40008 18.3333 10.0001 18.3333" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3" />
                    </svg>
                    <div className="text-[#1E1E1E] text-right font-IRANYekanWeb text-[12px] font-normal uppercase">بازگردانی تسک های آرشیو شده</div>
                </div>
            </div>
        </div>
        <div className="h-[0.5px] mr-[300px] ml-8 mt-1 bg-[#AAA]" />
      </div>
      {isCalendarviewOpen && (<div className="mr-[300px] mt-[30px]">
        <Calendar />
      </div>)}
      {isBoardviewOpen && (<div className="mr-[210px] mt-[30px]">
        <Boardview />
      </div>)}
      {isListviewOpen && (<div className="mr-[310px] mt-[30px] absolute">
        <ProjectList />
      </div>)}
      {isListviewOpen &&(
          <button className="flex w-[118px] px-3 py-2 justify-center items-center gap-1 rounded-[6px] bg-brand-primary mr-[1750px] mt-[920px]" onClick={()=>{
            setIsNewTaskCardOpen(true);
          }}>
            <PlusSquare color="white"/>
            <div className="text-[#FFF] text-right font-IRANYekanWeb text-[14px] font-extrabold uppercase"> تسک جدید</div>
            </button>
      )
      }
    </>
  );
}

export default SubMenu;





