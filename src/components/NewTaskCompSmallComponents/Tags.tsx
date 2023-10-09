import React from "react";
import "./style.css";
import Search from "../ShareComponent/Icons/Search";
import Input from "../ShareComponent/Input";
const Tags: React.FC = (): JSX.Element => {
    return (
        <div className="">
            <Search Classes="searchIcon" Size="5%" />
            <input
                className="peer block min-h-[auto] w-full rounded border-slate-800 bg-transparent pr-[23px] px-3 py-[0.32rem]"
                id="SearchBox"
                type="text"
                placeholder="جستجو یا ساختن تگ"
            />
        </div>
    );
};

export default Tags;
