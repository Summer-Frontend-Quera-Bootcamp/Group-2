import React from "react";

interface ISearchProps {
    Classes?: string;
    Size?: string;
}

const Search: React.FC<ISearchProps> = ({
    Classes,
    Size = "18",
}): JSX.Element => {
    return (
        <svg
            width={Size} // added size here
            height={Size} // added size here
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={Classes}
        >
            <circle
                cx="11.0586"
                cy="11.5587"
                r="7.06194"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.0033 20.5034L16.0517 16.5518"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Search;
