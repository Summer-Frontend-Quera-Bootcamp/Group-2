import React, { useState } from "react";
import SearchableSelect from '../ShareComponent/SearchableSelect';
import "./style.css";
const Filter: React.FC = (): JSX.Element => {
const filtersAllOptions = ["تاریخ", "تگ", "اعضا", "اولویت"];
const tagOptions = ["درس", "کار", "پروژه", "تیم"];

    return (
        <div className="container210">
            <div className="filterTitleLayout">
                <span className="text210">فیلترها</span>
                <img src="../../assets/img/black-exit-icon.png" className="cursor-pointer" alt="x" />
            </div>
            <div className="FiltersLayout">
                <span className="textInFilterRowInfo1">تسک هایی که</span>
                <SearchableSelect _label="فیلترها" _allOptions={filtersAllOptions} _placeHolder="جستجو بین فیلترها"></SearchableSelect>
                {/* <select className="tagPickerLayout cursor-pointer">
                    <option value="1"></option>
                    <option value="2">درس</option>
                </select> */}
                <span className="textInFilterRowInfo1">آن ها</span>
                <SearchableSelect _label="تگ ها" _allOptions={tagOptions} _placeHolder="جستجو"></SearchableSelect>
                <select className="tagPickerLayout cursor-pointer my-auto">
                    <option value="1">است</option>
                    <option value="2">نیست</option>
                </select>
                <img src="../../assets/img/trash-bin-icon.png" className="my-auto cursor-pointer" alt="delete icon" />
                
            </div>
            <button className="addNewFilterText">
                افزودن فیلتر جدید
            </button>
        </div>
    );
};

export default Filter;
