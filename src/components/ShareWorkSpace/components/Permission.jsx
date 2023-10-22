const Permission = () => {
  return (
    <div className="relative rounded-lg bg-[#fff] shadow-[0px_4px_8px_rgba(0,_0,_0,_0.2)] overflow-hidden flex flex-col p-4 box-border items-end justify-start gap-[16px] max-w-full max-h-full text-right text-[12px] text-[#1e1e1e] font-[IRANYekan]">
      <div className="flex flex-col items-end justify-start gap-[8px]">
        <div className="relative capitalize font-extrabold">دسترسی کامل</div>
        <div className="relative capitalize text-[#3d3d3d] inline-block w-[220px]">
          توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه
        </div>
      </div>
      <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-[#f4f4f4]" />
      <div className="flex flex-col items-end justify-start gap-[8px]">
        <div className="relative capitalize font-extrabold">دسترسی ویرایش</div>
        <div className="relative capitalize text-[#3d3d3d] inline-block w-[220px]">
          توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند
          پروژه را حذف یا تسک جدید بسازد.
        </div>
      </div>
      <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-[#f4f4f4]" />
      <div className="flex flex-col items-end justify-start gap-[8px]">
        <div className="relative capitalize font-extrabold">دسترسی کامنت</div>
        <div className="relative capitalize text-[#3d3d3d] inline-block w-[220px]">
          توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما
          توانایی ویرایش تنظیمات پروژه را ندارد.
        </div>
      </div>
      <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-[#f4f4f4]" />
      <div className="flex flex-col items-end justify-start gap-[8px]">
        <div className="relative capitalize font-extrabold">
          فقط دسترسی مشاهده
        </div>
        <div className="relative capitalize text-[#3d3d3d] inline-block w-[220px]">
          توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد.
        </div>
      </div>
    </div>
  );
};

export default Permission;
