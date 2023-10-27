import React, { useState } from "react";
import Modal from 'react-modal';
import Flag from "../../../ShareComponent/Icons/Flag";
import Close from "../../../ShareComponent/Icons/Close";

interface priorityComponentProps {
    priorityAssign: (color: string) => void;
    isPriorityMenuOpen: boolean;
};

const PriorityMenu: React.FC<priorityComponentProps> = ({ priorityAssign, isPriorityMenuOpen = true }) => {
    const handlePriorityAssign=(color:string)=>{
        priorityAssign(color);
        
    }
    return (
        <div>
            <Modal isOpen={isPriorityMenuOpen} overlayClassName='overlay' className='z-10 modal flex flex-col absolute items-center mt-[-300px] mr-[430px]'>
                <div className="flex p-2 flex-col items-end gap-4 rounded-lg bg-[#FFF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)]">
                    <div className="flex flex-col items-start gap-2">
                        <button className="flex w-[142px] justify-start items-center gap-2" onClick={()=>{
                            handlePriorityAssign('#FB0606');
                        }}>
                            <div className="flex w-5 h-5 justify-center items-center" >
                                <Flag size={20} color="#FB0606" />
                            </div>
                            <div className="text-[#1E1E1E] text-right font-IRANYekanWeb text-[14px] font-normal uppercase">فوری</div>
                        </button>
                        <button className="flex w-[142px] justify-start items-center gap-2" onClick={()=>{
                            priorityAssign('#FFE605');
                        }}>
                            <div className="flex w-5 h-5 justify-center items-center">
                                <Flag size={20} color="#FFE605" />
                            </div>
                            <div className="text-[#1E1E1E] text-right font-IRANYekanWeb text-[14px] font-normal uppercase">بالا</div>
                        </button>
                        <button className="flex w-[142px] justify-start items-center gap-2" onClick={()=>{
                            priorityAssign('#09DBCE');
                        }}>
                            <div className="flex w-5 h-5 justify-center items-center">
                                <Flag size={20} color="#09DBCE" />
                            </div>
                            <div className="text-[#1E1E1E] text-right font-IRANYekanWeb text-[14px] font-normal uppercase">متوسط</div>
                        </button>
                        <button className="flex w-[142px] justify-start items-center gap-2" onClick={()=>{
                            priorityAssign('#B2ACAC');
                        }}>
                            <div className="flex w-5 h-5 justify-center items-center">
                                <Flag size={20} color="#B2ACAC" />
                            </div>
                            <div className="text-[#1E1E1E] text-right font-IRANYekanWeb text-[14px] font-normal uppercase">پایین</div>
                        </button>
                    </div>
                    <button className="flex w-[142px] justify-start items-center gap-2" onClick={()=>{
                            priorityAssign('#C1C1C1');
                        }}>
                        <div className="flex w-5 h-5 justify-center items-center">
                            <Close size={20} color='#C1C1C1'/>
                        </div>
                        <div className="text-[#534D60] text-right font-IRANYekanWeb text-[14px] font-normal uppercase">حذف اولویت</div>
                    </button>
                </div>
            </Modal>

        </div>
    );
};

export default PriorityMenu;
