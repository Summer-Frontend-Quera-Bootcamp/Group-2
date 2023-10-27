import React, { useState } from "react";
import Modal from "react-modal";
import TagComponent from "../Tag";
import Search from "../../../ShareComponent/Icons/Search";
import Close from "../../../ShareComponent/Icons/Close";
import Edit from "../../../ShareComponent/Icons/Edit";
import ColorPolette from "../../../ShareComponent/Icons/ColorPolette";
import TagColor from "../Colors";
interface Tag {
  id: number;
  name: string;
  color: string;
}

interface TagComponentProps {
  tagNameAssign: (data: string, color: string) => void;
  isTagMenuOpen: boolean;
}
const TagMenu: React.FC<TagComponentProps> = ({
  tagNameAssign,
  isTagMenuOpen = true,
}) => {
  const possible = [
    "bg-red-secondary",
    "text-red-primary",
    "bg-pink-secondary",
    "text-pink-primary",
    "bg-grape-secondary",
    "text-grape-primary",
    "bg-violet-secondary",
    "text-violet-primary",
    "bg-indigo-secondary",
    "text-indigo-primary",
    "bg-blue-secondary",
    "text-blue-primary",
    "bg-cyan-secondary",
    "text-cyan-primary",
    "bg-teal-secondary",
    "text-teal-primary",
    "bg-brand-secondary",
    "text-brand-primary",
    "bg-green-secondary",
    "text-green-primary",
    "bg-lime-secondary",
    "text-lime-primary",
    "bg-yellow-secondary",
    "text-yellow-primary",
    "bg-orange-secondary",
    "text-orange-primary",
  ];
  const [tags, setTags] = useState<Tag[]>([
    {
      id: 1,
      name: "درس",
      color: "brand",
    },
    {
      id: 2,
      name: "کار",
      color: "brand"
    },
    {
      id: 3,
      name: "پروژه",
      color: "brand",
    },
  ]);
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedTagName, setSelectedTagName] = useState("");
  const [isTagOptionOpen, setIsTagOptionOpen] = useState(false);
  const [tagEditId, setTagEditId] = useState(0);
  const [isTagNameEditOpen, setIsTagNameEditOpen] = useState(false);
  const [tagNameEdit, setTagNameEdit] = useState("");
  const [isTagColorEditOpen, setIsTagColorEditOpen] = useState(false);
  const [isNewTagOpen, setIsNewTagOpen] = useState(false);
  const [tagColorEdit, SetTagColorEdit] = useState("");
  const [lastTagID, setLastTagID] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");

  const handleTagSelect = (data: string, color: string) => {
    tagNameAssign(data, color);
  };

  const handleTagEdit = (id: number) => {
    if (tagEditId === id) {
      setIsTagOptionOpen(!isTagOptionOpen);
      setIsNewTagOpen(false);
    } else {
      setTagEditId(id);
      setIsNewTagOpen(false);
      setIsTagOptionOpen(true);
      setIsTagColorEditOpen(false);
      setIsTagNameEditOpen(false);
    }
  };

  const handleDeleteTag = () => {
    const tagToDelete = tags.find((tag) => tag.id === tagEditId);
    if (tagToDelete) {
      const updatedTags = tags.filter((tag) => tag.id !== tagEditId);
      setTags(updatedTags);
      setIsTagOptionOpen(!isTagOptionOpen);
    }
  };
  const handleTagNameEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagNameEdit(event.target.value);
  };
  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && isTagNameEditOpen) {
      event.preventDefault();
      const updatedTags = tags.map((tag) =>
        tag.id === tagEditId ? { ...tag, name: tagNameEdit } : tag
      );
      setTags(updatedTags);
      setIsTagNameEditOpen(!isTagNameEditOpen);
      setIsTagOptionOpen(!isTagOptionOpen);
    }
  };
  const handleTagColorEdit = (editColor: string) => {
    if (isTagColorEditOpen) {
      const updatedTags = tags.map((tag) =>
        tag.id === tagEditId
          ? {
            ...tag,
            color: editColor,
          }
          : tag
      );
      setTags(updatedTags);
      setIsTagColorEditOpen(!isTagColorEditOpen);
      setIsTagOptionOpen(!isTagOptionOpen);
    }
  };
  const handleNewTag = (editColor: string) => {
    if (isNewTagOpen) {
      tags.push({
        id: lastTagID + 1,
        name: tagNameEdit,
        color: editColor,
      });
      setTags(tags);
      ``;
      console.log(tags);
      setIsNewTagOpen(!isNewTagOpen);
      setTagNameEdit("");
    }
  };
  return (
    <div>
      <Modal
        isOpen={isTagMenuOpen}
        onRequestClose={() => setMenuVisible(false)}
        className="modal flex flex-col absolute items-center mt-[10px] mr-[160px]  "
        overlayClassName="overlay"
      >
        <div className="inline-flex text-[#FFF] p-2 flex-col items-start rounded-lg bg-[#FFF] shadow-[0px_4px_16px_rgba(0,0,0,0.16)] mr-[100px]">
          <div className="flex flex-col items-start gap-2">
            <button
              className="flex h-6 px-2 py-[5px] justify-center items-center gap-2 rounded-[35px] bg-[#FFE8CC]"
              onClick={() => {
                setIsNewTagOpen(!isNewTagOpen);
                setIsTagColorEditOpen(false);
                setIsTagNameEditOpen(false);
                setIsTagOptionOpen(false);
              }}
            >
              <div className="text-[#FD7E14] text-right font-IRANYekanWeb text-[12px] font-normal uppercase">
                تگ جدید
              </div>
            </button>
            <div className="flex w-[153px] px-2 py-1 justify-start items-center gap-2 rounded bg-[#E9E9E9]">
              <button className="flex w-6 h-6 justify-center items-center">
                <Search />
              </button>
              <input
                type="text"
                placeholder="جستجو تگ"
                className="text-[#534D60] text-right font-IRANYekanWeb text-[12px] font-normal uppercase h-8 w-[103px] border-hidden rounded-[4px] bg-[#E9E9E9] focus:outline-none focus:border-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="modal-content flex w-[153px] flex-col justify-center items-end gap-2">
              {tags
                .filter((tag) => tag.name.includes(searchQuery))
                .map((tag) => (
                  <TagComponent
                    key={tag.id}
                    id={tag.id}
                    name={tag.name}
                    color={tag.color}
                    tagSelected={handleTagSelect}
                    tagOption={handleTagEdit}
                  />
                ))}
            </div>
          </div>
        </div>
        <Modal
          isOpen={isTagOptionOpen}
          overlayClassName="overlay"
          className="modal flex flex-col absolute items-center mt-[100px] mr-[485px]"
        >
          <div className="modal absolute flex flex-col p-2 items-end gap-4 rounded-lg bg-[#FFF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)]">
            <div className="flex flex-col items-start gap-2 w-[75px]">
              <button
                className="flex justify-end items-center gap-1"
                onClick={handleDeleteTag}
              >
                <div className="flex w-[10px] h-[10px] justify-center items-center">
                  <Close size={11} />
                </div>
                <div className="text-[#1E1E1E] text-right font-IRANYekanWeb text-[12px] font-normal uppercase">
                  حذف
                </div>
              </button>
              <button
                className="flex justify-end items-center gap-1"
                onClick={() => {
                  setIsTagNameEditOpen(!isTagNameEditOpen);
                  setIsTagColorEditOpen(false);
                }}
              >
                <div className="flex w-[10px] h-[10px] justify-center items-center">
                  <Edit size={11} />
                </div>
                <div className="text-[#1E1E1E] text-right font-IRANYekanWeb text-[12px] font-normal uppercase">
                  ویرایش تگ
                </div>
              </button>
              <button
                className="flex justify-end items-center gap-1"
                onClick={() => {
                  setIsTagColorEditOpen(!isTagColorEditOpen);
                  setIsTagNameEditOpen(false);
                }}
              >
                <div className="flex w-[10px] h-[10px] justify-center items-center">
                  <ColorPolette size={11} />
                </div>
                <div className="text-[#1E1E1E] text-right font-IRANYekanWeb text-[12px] font-normal uppercase">
                  ویرایش رنگ
                </div>
              </button>
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={isTagNameEditOpen && isTagOptionOpen}
          overlayClassName="overlay"
          className="modal flex flex-col absolute items-center mt-[140px] mr-[545px]"
        >
          <div className="flex p-2 flex-col items-start gap-4 rounded-lg bg-[#FFF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)]">
            <input
              type="text"
              value={tagNameEdit}
              onChange={handleTagNameEdit}
              onKeyDown={handleInputKeyDown}
              placeholder="نام تگ"
              className="text-[#534D60] text-right font-IRANYekanWeb text-[12px] font-normal uppercase flex h-8 rounded-[4px] border-hidden bg-[#E9E9E9] focus:outline-none focus:border-hidden"
            />
            <div className="text-right font-IRANYekanWeb text-[12px] font-normal uppercase">
              برای ثبت تغییرات اینتر بزنید
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={isTagColorEditOpen && isTagOptionOpen}
          overlayClassName="overlay"
          className="modal flex flex-col absolute items-center mt-[140px] mr-[545px]"
        >
          <div className="flex p-2 flex-col justify-center items-start gap-[11px] rounded-lg bg-[#FFF] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.18)]">
            <div className="flex w-[132px] justify-start items-center gap-2 flex-wrap">
              <button
                onClick={() => {
                  handleTagColorEdit("brand");
                }}
              >
                <TagColor size={20} color="#208D8E" />
              </button>
              <button
                onClick={() => {
                  handleTagColorEdit("green");
                }}
              >
                <TagColor size={20} color="#40C057" />
              </button>
              <button
                onClick={() => {
                  handleTagColorEdit("lime");
                }}
              >
                <TagColor size={20} color="#82C91E" />
              </button>
              <button
                onClick={() => {
                  handleTagColorEdit("yellow");
                }}
              >
                <TagColor size={20} color="#FAB005" />
              </button>
              <button
                onClick={() => {
                  handleTagColorEdit("orange");
                }}
              >
                <TagColor size={20} color="#FD7E14" />
              </button>
              <button
                onClick={() => {
                  handleTagColorEdit("violet");
                }}
              >
                <TagColor size={20} color="#7950F2" />
              </button>
              <button
                onClick={() => {
                  handleTagColorEdit("indigo");
                }}
              >
                <TagColor size={20} color="#4C6EF5" />
              </button>
              <button
                onClick={() => {
                  handleTagColorEdit("blue");
                }}
              >
                <TagColor size={20} color="#228BE6" />
              </button>
              <button
                onClick={() => {
                  handleTagColorEdit("cyan");
                }}
              >
                <TagColor size={20} color="#15AABF" />
              </button>
              <button
                onClick={() => {
                  handleTagColorEdit("teal");
                }}
              >
                <TagColor size={20} color="#12B886" />
              </button>
              <button
                onClick={() => {
                  handleTagColorEdit("red");
                }}
              >
                <TagColor size={20} color="#FA5252" />
              </button>
              <button
                onClick={() => {
                  handleTagColorEdit("pink");
                }}
              >
                <TagColor size={20} color="#E64980" />
              </button>
              <button
                onClick={() => {
                  handleTagColorEdit("grape");
                }}
              >
                <TagColor size={20} color="#BE4BDB" />
              </button>
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={isNewTagOpen}
          overlayClassName="overlay"
          className="modal flex flex-col absolute items-center mt-[30px] mr-[440px]"
        >
          <div className="flex p-2 flex-col w-[160px] items-start gap-3 rounded-lg bg-[#FFF] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)]">
            <input
              type="text"
              value={tagNameEdit}
              onChange={handleTagNameEdit}
              placeholder="نام تگ"
              className="text-[#534D60] text-right font-IRANYekanWeb text-[12px] font-normal uppercase flex h-8 w-[145px] rounded-[4px] border-hidden bg-[#E9E9E9] focus:outline-none focus:border-hidden"
            />
            <div className="flex w-[150px] justify-start items-center gap-2 flex-wrap">
              <button
                onClick={() => {
                  handleNewTag("brand");
                }}
              >
                <TagColor size={20} color="#208D8E" />
              </button>
              <button
                onClick={() => {
                  handleNewTag("green");
                }}
              >
                <TagColor size={20} color="#40C057" />
              </button>
              <button
                onClick={() => {
                  handleNewTag("lime");
                }}
              >
                <TagColor size={20} color="#82C91E" />
              </button>
              <button
                onClick={() => {
                  handleNewTag("yellow");
                }}
              >
                <TagColor size={20} color="#FAB005" />
              </button>
              <button
                onClick={() => {
                  handleNewTag("orange");
                }}
              >
                <TagColor size={20} color="#FD7E14" />
              </button>
              <button
                onClick={() => {
                  handleNewTag("violet");
                }}
              >
                <TagColor size={20} color="#7950F2" />
              </button>
              <button
                onClick={() => {
                  handleNewTag("indigo");
                }}
              >
                <TagColor size={20} color="#4C6EF5" />
              </button>
              <button
                onClick={() => {
                  handleNewTag("blue");
                }}
              >
                <TagColor size={20} color="#228BE6" />
              </button>
              <button
                onClick={() => {
                  handleNewTag("cyan");
                }}
              >
                <TagColor size={20} color="#15AABF" />
              </button>
              <button
                onClick={() => {
                  handleNewTag("teal");
                }}
              >
                <TagColor size={20} color="#12B886" />
              </button>
              <button
                onClick={() => {
                  handleNewTag("red");
                }}
              >
                <TagColor size={20} color="#FA5252" />
              </button>
              <button
                onClick={() => {
                  handleNewTag("pink");
                }}
              >
                <TagColor size={20} color="#E64980" />
              </button>
              <button
                onClick={() => {
                  handleNewTag("grape");
                }}
              >
                <TagColor size={20} color="#BE4BDB" />
              </button>
            </div>
            <div className="text-right font-IRANYekanWeb text-[12px] font-normal uppercase">
              اول اسم تگ جدید را انتخاب سپس برای ثبت، روی رنگ مورد نظر خود کلیک
              کنید
            </div>
          </div>
        </Modal>
      </Modal>
    </div>
  );
};
export default TagMenu;
