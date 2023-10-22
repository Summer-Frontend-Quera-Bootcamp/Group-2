import React, { useState } from "react";
import DotsHorizontal from "../../../ShareComponent/Icons/DotsHorizontal";
import TagOptions from "../TagOptions";

interface Tag {
  id: number;
  name: string;
  color: string;
  textColor: string;
  tagSelected: (data: string, color: string) => void;
  tagOption: (id: number)=>void;
}

const TagComponent: React.FC<Tag> = ({ id, name, color, textColor, tagSelected ,tagOption}) => {
  const handleTagOptionButton = () => {
    tagOption(id);
  };
  const handleTagSelectButton = () => {
    tagSelected(name, color);
  };
  const possible =[
    "bg-red-secondary","text-red-primary","bg-pink-secondary","text-pink-primary",
    "bg-grape-secondary","text-grape-primary","bg-violet-secondary","text-violet-primary",
    "bg-indigo-secondary","text-indigo-primary","bg-blue-secondary","text-blue-primary",
    "bg-cyan-secondary","text-cyan-primary","bg-teal-secondary","text-teal=primary",
    "bg-brand-secondary","text-brand-primary","bg-green-secondary","text-green-primary",
    "bg-lime-secondary","text-lime-primary","bg-yellow-secondary","text-yellow-primary",
    "bg-orange-secondary","text-orange-primary"
      ]
  return (
    <div className="flex justify-between items-center self-stretch">
      <div
        className={
          "flex h-6 px-2 py-0 justify-center items-center rounded-[14px] cursor-pointer " +
          color
        }
        onClick={handleTagSelectButton}
      >
        <div className={"text-right font-IRANYekanWeb text-[12px] font-extrabold uppercase " + textColor}>
          {name}
        </div>
      </div>
      <button
        type="button"
        className="flex w-5 h-5 justify-center items-center"
        onClick={handleTagOptionButton}
      >
        <DotsHorizontal />
      </button>
    </div>
  );
};

export default TagComponent;
