import React from "react";
import "./style.css";
const TagOptions: React.FC = (): JSX.Element => {
    return (
        <div className="absolute flex p-2 flex-col items-end gap-4 rounded-lg bg-[#FFF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0,16)]">
            <div className="optionsContainer">
                <span className="option">
                    <img width={"10.24px"} height={"13px"} src="../../../assets/img/interface-essential-group.png" alt="x"/>
                    <span className="pr-[3px]">حذف</span>
                </span>
                <span className="option">
                    <img width={"10.24px"} height={"13px"} src="../../../assets/img/content-edit-group.png" alt="edit"/>
                    <span className="pr-[3px]">ویرایش تگ</span>
                </span>
                <span className="option">
                    <img width={"10.24px"} height={"13px"} src="../../../assets/img/design-tools-group.png" alt="color"/>
                    <span className="pr-[3px]">ویرایش رنگ</span>
                </span>
            </div>
        </div>
    );
};

export default TagOptions;
