import React, { useState } from "react";
import SearchableSelect from "../../ShareComponent/SearchableSelect";
import "./style.css";

interface ISearchableProps {
    id: number;
    _allOptions1: Array<string>;
    _allOptions2: Array<string>;
    onDelete: (id: number) => void;
}

const FilterProps: React.FC<ISearchableProps> = ({
    id,
    _allOptions1,
    _allOptions2,
    onDelete,
}): JSX.Element => {
    const handleDelete = () => {
        console.log(id);
        onDelete(id);
    };

    return (
        <div className="FiltersLayout">
            <span className="textInFilterRowInfo1">تسک هایی که</span>
            <SearchableSelect
                _label="نوع فیلتر"
                _allOptions={_allOptions1}
                _placeHolder="جستجو"
            ></SearchableSelect>
            {/* <select className="tagPickerLayout cursor-pointer">
                    <option value="1"></option>
                    <option value="2">درس</option>
                </select> */}
            <span className="textInFilterRowInfo1">آن ها</span>
            <SearchableSelect
                _label="فیلتر"
                _allOptions={_allOptions2}
                _placeHolder="جستجو"
            ></SearchableSelect>
            <select className="tagPickerLayout cursor-pointer my-auto">
                <option value="1">است</option>
                <option value="2">نیست</option>
            </select>
            <img
                src="../../assets/img/trash-bin-icon.png"
                className="my-auto cursor-pointer"
                alt="delete icon"
                onClick={handleDelete}
            />
        </div>
    );
};

export default FilterProps;
