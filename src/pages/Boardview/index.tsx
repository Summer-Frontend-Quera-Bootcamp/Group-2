

import TitleBord from "./TitleBord";
import React, { useState ,useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import BoardTask from "./BoardTask";
import TagTask from "./BoardTask/TagTask";
import { API_URLS } from "../../Constants/api.urls";
import { AXIOS } from "../../config/axios.config";
import ColorPicker from "../../components/ShareComponent/ColorPicker";
import Input from "../../components/ShareComponent/Input";

type FormProps = {
    BoardName?: string;
    BoardCount?: number;
    BoardColor?: string;
    children?: React.ReactNode;
    listBoards?:string
  }; 
  const Boardview:React.FC<FormProps> = ({
    BoardName, BoardCount, BoardColor,children,listBoards}):JSX.Element  =>{  
    const [state,setState] = useState();
    const [showModal, setShowModal] = useState(false);
    const [modalProperties, setModalProperties] = useState({
        LabelName: "",
        TaskNumber: 0,
        ColorTitle: "",
    });
    const [formValues, setFormValues] = useState<FormProps>({ BoardName: '' });

    const handleInputChange = (value: string, inputName: string) => {
      setFormValues(prevValues => ({
        ...prevValues,
        [inputName]: value
      }));
      console.log(formValues)
    };

    const HandelAddNewBoard =() => {   
        setShowModal(true);    
    }
    const [color, setColor] = useState("#ffffff");
    function TitleBordTag({ color, formValues}) {
        return (
            <TitleBord LabelName={formValues} TaskNumber={0} ColorTitle={color}/ >
        );
      }
      const handleSubmitFromModal = (e: React.FormEvent) => {
        e.preventDefault();
        setShowModal(false);
    
    };
    
    {/* const fetchTask = async () =>{
            const response = await AXIOS.get(API_URLS.GetTasks)    
            setState (response.data)
          }

      useEffect(() =>{
        fetchTask
      },[]) */}

      return(
    <>
    <div className="container"> 
        <div className="flex justify-center" id="listBoards">
     
            <div className="w-[250px] m-2">
              
            <TitleBord LabelName="In progress" TaskNumber={5} ColorTitle='#ff0000'/ >
            
             <BoardTask  ProjectName="پروژه اول" AbbUserName="ET" 
             PicProject="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg"
              taskDes="این یک تیتر برای این تسک است."
              colorFlag="#FA5252"             
              startday="۵ مهر - فردا"
              endDay="۲ / ۱۲" >
                <TagTask  colorTag="#BE4BDB" BgColor="#F3D9FA" tag="پروژه" />
                <TagTask  colorTag="#228BE6" BgColor="#D0EBFF"  tag="درس" />
              </BoardTask>

              <BoardTask  ProjectName="پروژه دوم" AbbUserName="ET"              
              taskDes="این یک تیتر برای این تسک است."
              colorFlag="#FA5252"             
              startday="۵ مهر - فردا"
              endDay="۲ / ۱۲" >
                <TagTask  colorTag="#BE4BDB" BgColor="#F3D9FA" tag="پروژه" />
                <TagTask  colorTag="#228BE6" BgColor="#D0EBFF"  tag="درس" />
              </BoardTask>
            </div>

            <div className="w-[250px] m-2">
            <TitleBord LabelName="Pending" TaskNumber={0} ColorTitle='#FAB005'/ >
            </div>

            <div className="w-[250px] m-2">
            <TitleBord LabelName="To do" TaskNumber={0} ColorTitle=' #FD7E14'/ >
            </div>
            
            <div className="w-[250px] m-2">
            <TitleBord LabelName="Done" TaskNumber={0} ColorTitle='#40C057'/ >
            </div>
           
            <div className="w-[250px] m-2" id="CreateBoard">
            <TitleBord LabelName="+ ساختن برد جدید"  ColorTitle="#fff"  onClick={HandelAddNewBoard}/>
            </div>
         </div>  
     </div>

     {/* add new task          */}
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl bg-[#fff]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="font-semibold">
                  افزودن بورد جدید
                  </h3>
                  <button
                    className="p-1  bg-transparent border-0 text-black opacity-8 float-right leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <form >
                <Input LabelName="نام بورد " LabelFor="BoardName" InputType="text" 
      InputName="BoardName" InputValue={formValues} onChange={handleInputChange} />                 
               
                
                <ColorPicker color={color} onChange={setColor} >
                    <div className='flex justify-center items-center'>
                    <div className='BoxColor w-5 h-5 rounded-md border-solid border border-sky-500 ml-3'
                     style={{ backgroundColor: color }}>                  </div>
                        <p>رنگ مورد نظر بورد خود را انتخاب کنید</p>
                       
                    </div>
                </ColorPicker>
        
                    {/* <button type="submit">ایجاد برد جدید</button> */}
                </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-gray-dark bg-gray-light active:bg-emerald-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    انصراف
                  </button>
                  <button
                    className="bg-green-primary  active:bg-emerald-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" id="addBoard"
                    type="button"
                    onClick={handleSubmitFromModal}
                  >
                  تایید
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" fixed inset-0 z-10 bg-[#000]/50"></div>
        </>
      ) : null}

     </>
)
}

export default Boardview;

