import React from "react";
import "./style.css";
const TagOptions: React.FC = (): JSX.Element => {
    return (
        <div className="container">
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
