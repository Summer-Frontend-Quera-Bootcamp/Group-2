import React, { useState } from "react";
import "./style.css";
import FilterProps from "./FilterProps";
const Filter: React.FC = (): JSX.Element => {
    const filtersAllOptions = ["تاریخ", "تگ", "اعضا", "اولویت"];
    const tagOptions = ["درس", "کار", "پروژه", "تیم"];
    const [filterPropsList, setFilterPropsList] = useState<
        { id: number; component: JSX.Element }[]
    >([]);
    const [nextId, setNextId] = useState(0);
    const [childData, setChildData] = useState(0);

    const handleChildClick = (id: number) => {
        setChildData(id);
        console.log(childData);
        handleDeleteFilter(childData);
    };

    const handleAddFilterClick = () => {
        const newFilterPropsList = [...filterPropsList];
        // const id = nextId;
        console.log("last added id: " + nextId);
        newFilterPropsList.push({
            id: nextId,
            component: (
                <FilterProps
                    id={nextId}
                    _allOptions1={filtersAllOptions}
                    _allOptions2={tagOptions}
                    onDelete={handleChildClick}
                />
            ),
        });
        setFilterPropsList(newFilterPropsList);
        setNextId(nextId + 1);
    };

    const handleDeleteFilter = (id: number) => {
        console.log(id);
        const newFilterPropsList = filterPropsList.filter(
            (filterProps) => filterProps.id !== id
        );
        setFilterPropsList(newFilterPropsList);
    };
    return (
        <div className="container210">
            <div className="filterTitleLayout">
                <span className="text210">فیلترها</span>
                <img
                    src="../../assets/img/black-exit-icon.png"
                    className="cursor-pointer"
                    alt="x"
                />
            </div>
            {filterPropsList.map((filterProps) => (
                <React.Fragment key={filterProps.id}>
                    {filterProps.component}
                </React.Fragment>
            ))}
            {/* <FilterProps
                _allOptions1={filtersAllOptions}
                _allOptions2={tagOptions}
            ></FilterProps> */}
            <button className="addNewFilterText" onClick={handleAddFilterClick}>
                افزودن فیلتر جدید
            </button>
        </div>
    );
};

export default Filter;
