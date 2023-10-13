import React from "react";
import "./style.css";
const NewTag: React.FC = (): JSX.Element => {
    return (
        <div className="container">
            <img className="searchIcon" width={"24px"} height={"24px"} src="../../../assets/img/icons8-search-100.png" alt="Search Icon"/>
            <input
                className="searchInput peer block min-h-[auto] w-full rounded border-slate-800 bg-transparent pr-[23px] px-3 py-[0.32rem]"
                id="SearchBox"
                type="text"
                placeholder="جستجو یا ساختن تگ"
            />
            <div className="newTagText">
                برای ساختن تگ جدید اینتر بزنید
            </div>
        </div>
    );
};

export default NewTag;
