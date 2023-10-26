import React from "react";
import Modal from "react-modal";

interface modalOpen {
  modalIsOpen: boolean;
  closeModal: () => void;
}

const Frame: React.FC<modalOpen> = ({ modalIsOpen, closeModal }) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        overlayClassName={"overlay border-hidden"}
        onRequestClose={closeModal}
      >
        <div className="z-10 w-[436px] relative rounded-lg bg-[#fff] shadow-[0px_8px_16px_rgba(0,_0,_0,_0.2)] flex flex-col items-start justify-start p-5 gap-[32px] text-right text-[20px] text-[#c8c8c8] font-[Iran-Yekan] border-[1px] border-solid border-[#208d8e] ">
          <div className="self-stretch flex flex-row items-center justify-end gap-[8px]">
            <input
              type="text"
              placeholder="نام تسک را وارد کنید"
              className="relative capitalize font-medium text-right border-none w-full h-[28px] text-[20px] text-[black] rounded-lg"
            />

            <img
              className="relative w-6 h-6"
              alt="close tag"
              src="/interface-essentialdelete-disabled.svg"
              onClick={closeModal}
            />
          </div>
          <div className="self-stretch flex flex-row items-center justify-between text-[12px] text-[#fff] ">
            <button className="rounded bg-[#208d8e] w-[125px] h-8 shrink-0 flex flex-row items-center justify-center py-1 px-[7px] box-border text-[#fff]">
              ساختن تسک
            </button>
            <div className="flex flex-row items-center justify-end gap-[12px] text-[20px] text-[#208d8e] ">
              <div className="relative capitalize font-medium">۱۴ تیر</div>
              <div className="rounded-[138.89px] w-[50px] h-[50px] flex flex-row items-center justify-center p-[6.6px] box-border">
                <img
                  className="relative w-[29.41px] h-[29.41px]"
                  alt="flag icon"
                  src="/interface-essentialflag.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Frame;
