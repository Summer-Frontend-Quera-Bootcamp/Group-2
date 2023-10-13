import React from "react";
import "./style.css";
const NewTagView: React.FC = (): JSX.Element => {
    return (
        <div className="container">
            <div className="tagListContainer">
                <div className="tagItemRowContainer w-full">
                    <span className="tagItem">تگ جدید</span>
                    <span className="tagItemDotsMenu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15.4189 10.0001C15.4189 10.2303 15.2323 10.4169 15.002 10.4169C14.7718 10.4169 14.5852 10.2303 14.5852 10.0001C14.5852 9.76988 14.7718 9.58325 15.002 9.58325C15.2323 9.58325 15.4189 9.76988 15.4189 10.0001" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.4168 10.0001C10.4168 10.2303 10.2302 10.4169 9.99997 10.4169C9.76976 10.4169 9.58313 10.2303 9.58313 10.0001C9.58313 9.76988 9.76976 9.58325 9.99997 9.58325C10.2302 9.58325 10.4168 9.76988 10.4168 10.0001" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.41474 10.0001C5.41474 10.2303 5.22811 10.4169 4.99789 10.4169C4.76768 10.4169 4.58105 10.2303 4.58105 10.0001C4.58105 9.76988 4.76768 9.58325 4.99789 9.58325C5.22811 9.58325 5.41474 9.76988 5.41474 10.0001" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
            </div>
            <img className="searchIcon" width={"24px"} height={"24px"} src="../../../assets/img/icons8-search-100.png" alt="Search Icon"/>
            <input
                className="searchInput peer block min-h-[auto] w-full rounded border-slate-800 bg-transparent pr-[23px] px-3 py-[0.32rem]"
                id="SearchBox"
                type="text"
                placeholder="جستجو یا ساختن تگ"
            />
            <div className="tagListContainer">
                <div className="tagItemRowContainer w-full">
                    <span className="tagItem">درس</span>
                    <span className="tagItemDotsMenu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15.4189 10.0001C15.4189 10.2303 15.2323 10.4169 15.002 10.4169C14.7718 10.4169 14.5852 10.2303 14.5852 10.0001C14.5852 9.76988 14.7718 9.58325 15.002 9.58325C15.2323 9.58325 15.4189 9.76988 15.4189 10.0001" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.4168 10.0001C10.4168 10.2303 10.2302 10.4169 9.99997 10.4169C9.76976 10.4169 9.58313 10.2303 9.58313 10.0001C9.58313 9.76988 9.76976 9.58325 9.99997 9.58325C10.2302 9.58325 10.4168 9.76988 10.4168 10.0001" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.41474 10.0001C5.41474 10.2303 5.22811 10.4169 4.99789 10.4169C4.76768 10.4169 4.58105 10.2303 4.58105 10.0001C4.58105 9.76988 4.76768 9.58325 4.99789 9.58325C5.22811 9.58325 5.41474 9.76988 5.41474 10.0001" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
                <div className="tagItemRowContainer w-full">
                    <span className="tagItem">کار</span>
                    <span className="tagItemDotsMenu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15.4189 10.0001C15.4189 10.2303 15.2323 10.4169 15.002 10.4169C14.7718 10.4169 14.5852 10.2303 14.5852 10.0001C14.5852 9.76988 14.7718 9.58325 15.002 9.58325C15.2323 9.58325 15.4189 9.76988 15.4189 10.0001" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.4168 10.0001C10.4168 10.2303 10.2302 10.4169 9.99997 10.4169C9.76976 10.4169 9.58313 10.2303 9.58313 10.0001C9.58313 9.76988 9.76976 9.58325 9.99997 9.58325C10.2302 9.58325 10.4168 9.76988 10.4168 10.0001" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.41474 10.0001C5.41474 10.2303 5.22811 10.4169 4.99789 10.4169C4.76768 10.4169 4.58105 10.2303 4.58105 10.0001C4.58105 9.76988 4.76768 9.58325 4.99789 9.58325C5.22811 9.58325 5.41474 9.76988 5.41474 10.0001" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
                <div className="tagItemRowContainer w-full">
                    <span className="tagItem">پروژه</span>
                    <span className="tagItemDotsMenu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15.4189 10.0001C15.4189 10.2303 15.2323 10.4169 15.002 10.4169C14.7718 10.4169 14.5852 10.2303 14.5852 10.0001C14.5852 9.76988 14.7718 9.58325 15.002 9.58325C15.2323 9.58325 15.4189 9.76988 15.4189 10.0001" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.4168 10.0001C10.4168 10.2303 10.2302 10.4169 9.99997 10.4169C9.76976 10.4169 9.58313 10.2303 9.58313 10.0001C9.58313 9.76988 9.76976 9.58325 9.99997 9.58325C10.2302 9.58325 10.4168 9.76988 10.4168 10.0001" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.41474 10.0001C5.41474 10.2303 5.22811 10.4169 4.99789 10.4169C4.76768 10.4169 4.58105 10.2303 4.58105 10.0001C4.58105 9.76988 4.76768 9.58325 4.99789 9.58325C5.22811 9.58325 5.41474 9.76988 5.41474 10.0001" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NewTagView;
