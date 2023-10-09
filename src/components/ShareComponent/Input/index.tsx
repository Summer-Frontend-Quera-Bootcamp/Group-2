interface IInputProps {
    LabelName?: string;
    InputId: string;
    InputType: string;
    InputValue?: any;
    InputWidth?: string;
    InputPlaceHolder?: string;
}
import React from "react";

const Input: React.FC<IInputProps> = ({
    LabelName,
    InputId,
    InputType,
    InputValue,
    InputWidth = "w-full",
    InputPlaceHolder,
}): JSX.Element => {
    return (
        <div className="relative mb-6" data-te-input-wrapper-init>
            <label htmlFor={InputId} className={`mt-1 block ${InputWidth}`}>
                {LabelName}
            </label>
            <input
                type={InputType}
                className={`peer block min-h-[auto] ${InputWidth} rounded border-slate-800 bg-transparent px-3 py-[0.32rem]`}
                id={InputId}
                value={InputValue}
                placeholder={InputPlaceHolder}
            />
        </div>
    );
};

export default Input;
