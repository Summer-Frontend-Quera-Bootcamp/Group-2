import { useState, useCallback } from "react";
import Permission from "./Permission";
import PortalPopup from "./PortalPopup";

const EmailForm = () => {
  const [isPermissionOpen, setPermissionOpen] = useState(false);
  const [isPermission1Open, setPermission1Open] = useState(false);
  const [isPermission2Open, setPermission2Open] = useState(false);
  const [isPermission3Open, setPermission3Open] = useState(false);

  const openPermission = useCallback(() => {
    setPermissionOpen(true);
  }, []);

  const closePermission = useCallback(() => {
    setPermissionOpen(false);
  }, []);

  const openPermission1 = useCallback(() => {
    setPermission1Open(true);
  }, []);

  const closePermission1 = useCallback(() => {
    setPermission1Open(false);
  }, []);

  const openPermission2 = useCallback(() => {
    setPermission2Open(true);
  }, []);

  const closePermission2 = useCallback(() => {
    setPermission2Open(false);
  }, []);

  const openPermission3 = useCallback(() => {
    setPermission3Open(true);
  }, []);

  const closePermission3 = useCallback(() => {
    setPermission3Open(false);
  }, []);

  return (
    <>
      <div className="self-stretch flex flex-col items-end justify-start gap-[16px] text-center text-[14px] text-[#7d828c] font-[IRANYekan]">
        <div className="relative capitalize">اشتراک‌گذاشته شده با</div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-right text-[12px] text-[#1e1e1e]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="rounded-md bg-[#fff] overflow-hidden flex flex-row pt-[5px] px-2 pb-1 items-center justify-center border-[1px] border-solid border-[#e9ebf0]">
              <button className="relative capitalize">دسترسی کامل</button>
            </div>
            <div className="flex flex-row items-center justify-start gap-[12px] text-[#228be6]">
              <div className="rounded-md bg-[#d0ebff] flex flex-row py-1 px-2 items-center justify-center">
                <div className="relative capitalize">workspace owner</div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[7px] text-[14px] text-[#1e1e1e]">
                <div className="relative capitalize">من</div>
                <div className="rounded-[100px] w-[34px] flex flex-row pt-[9px] px-2 pb-[7px] box-border items-center justify-center bg-[url('/public/frame-32@3x.png')] bg-cover bg-no-repeat bg-[top] text-[12px">
                  <div className="relative capitalize opacity-[0]">NM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <div
                className="rounded-md bg-[#fff] overflow-hidden flex flex-row pt-[5px] px-2 pb-1 items-center justify-center gap-[10px] cursor-pointer border-[1px] border-solid border-[#e9ebf0]"
                onClick={openPermission}
              >
                <img
                  className="relative w-[18px] h-[18px]"
                  alt=""
                  src="/arrows-diagramsarrow.svg"
                />
                <div className="relative capitalize">همه پروژه‌ها</div>
              </div>
              <div
                className="rounded-md bg-[#fff] overflow-hidden flex flex-row pt-[5px] px-2 pb-1 items-center justify-center gap-[10px] cursor-pointer border-[1px] border-solid border-[#e9ebf0]"
                onClick={openPermission}
              >
                <img
                  className="relative w-[18px] h-[18px]"
                  alt=""
                  src="/arrows-diagramsarrow.svg"
                />
                <button className="relative capitalize">دسترسی کامل</button>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end text-[14px">
              <div className="flex flex-row items-center justify-start gap-[7px]">
                <div className="relative capitalize">sararahimi@gmail.com</div>
                <div className="rounded-[100px] bg-[#f27474] w-[34px] flex flex-row pt-[9px] px-2 pb-[7px] box-border items-center justify-center text-[12px]">
                  <div className="relative capitalize">SR</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div
                className="rounded-md bg-[#fff] overflow-hidden flex flex-row pt-[5px] px-2 pb-1 items-center justify-center gap-[10px] cursor-pointer border-[1px] border-solid border-[#e9ebf0]"
                onClick={openPermission}
              >
                <img
                  className="relative w-[18px] h-[18px]"
                  alt=""
                  src="/arrows-diagramsarrow.svg"
                />
                <button className="relative capitalize">پروژه اول</button>
              </div>
              <div
                className="rounded-md bg-[#fff] overflow-hidden flex flex-row pt-[5px] px-2 pb-1 items-center justify-center gap-[10px] cursor-pointer border-[1px] border-solid border-[#e9ebf0]"
                onClick={openPermission}
              >
                <img
                  className="relative w-[18px] h-[18px]"
                  alt=""
                  src="/arrows-diagramsarrow.svg"
                />
                <button className="relative capitalize">دسترسی ادیت</button>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end text-[14px">
              <div className="flex flex-row items-center justify-start gap-[7px]">
                <div className="relative capitalize">sararahimi@gmail.com</div>
                <div className="rounded-[100px] bg-[#f27474] w-[34px] flex flex-row pt-[9px] px-2 pb-[7px] box-border items-center justify-center text-[12px]">
                  <div className="relative capitalize">SR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPermissionOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePermission}
        >
          <Permission onClose={closePermission} />
        </PortalPopup>
      )}
      {isPermission1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePermission1}
        >
          <Permission onClose={closePermission1} />
        </PortalPopup>
      )}
      {isPermission2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePermission2}
        >
          <Permission onClose={closePermission2} />
        </PortalPopup>
      )}
      {isPermission3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePermission3}
        >
          <Permission onClose={closePermission3} />
        </PortalPopup>
      )}
    </>
  );
};

export default EmailForm;
