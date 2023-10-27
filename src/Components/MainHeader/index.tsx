import React from 'react'
import Search from "../ShareComponent/Icons/Search"
import Filter from '../ShareComponent/Icons/Filter'

const MainHeader = () => {
    return (
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
    )
}

export default MainHeader