import React, { useState } from "react";
import DownCircle from "../../ShareComponent/Icons/DownCircle";
import Flag from "../../ShareComponent/Icons/Flag";

interface Task {
  id: number;
  title: string;
  description: string;
  users: string[];
  deadline: string;
  priority: number;
}

interface Project {
  id: number;
  title: string;
  pendingTasks: Task[];
  inProgressTasks: Task[];
  doneTasks: Task[];
}

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPendingExpanded, setIsPendingExpanded] = useState(false);
  const [isInProgressExpanded, setIsInProgressExpanded] = useState(false);
  const [isDoneExpanded, setIsDoneExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const togglePendingExpand = () => {
    if (project.pendingTasks.length) setIsPendingExpanded(!isPendingExpanded);
  };

  const toggleInProgressExpand = () => {
    if (project.inProgressTasks.length)
      setIsInProgressExpanded(!isInProgressExpanded);
  };

  const toggleDoneExpand = () => {
    if (project.doneTasks.length) setIsDoneExpanded(!isDoneExpanded);
  };
  const getPriorityIcon = (priority: number): React.ReactNode => {
    switch (priority) {
      case 0:
        return <Flag />;
      case 1:
        return <Flag />;
      case 2:
        return <Flag />;
      default:
        return <Flag />;
    }
  };
  const descriptionState = (description: string): React.ReactNode => {
    return description;
  };
  return (
    <div className="flex flex-col items-start">
      <div
        className="inline-flex flex-start items-center gap-2 cursor-pointer mb-[31px] mr-4"
        onClick={toggleExpand}
      >

        <DownCircle size={24} />
        <div className="text-right font-IRANYekan text-[20px] font-[800px] leading-8 uppercase">
          {project.title}
        </div>
      </div>
      {isExpanded && (
        <div className="flex w-[1011px] flex-col items-end gap-10 mr-[39px]">
          <div className="flex w-[1011px] flex-col items-start gap-[19px]">
            <div className="flex justify-between items-center self-stretch">
              <div
                className="flex justify-end items-center gap-[5px]"
                onClick={togglePendingExpand}
              >
                <DownCircle size={20} />
                <div className="flex px-[6px] py-1 items-start gap-[10px] rounded bg-[#F92E8F]">
                  <div className=" text-[#FFF] text-center font-IRANYekan text-[16px] leading-normal">
                    Pending
                  </div>
                </div>
                <div className="text-right font-IRANYekan text-[12px] font-normal leading-normal uppercase">
                {project.pendingTasks.length} تسک 
                </div>
              </div>
              <div className="flex w-[473px] items-start gap-[70px] text-right font-IRANYekan text-[16px] font-medium leading-normal uppercase">
                <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px] flex-shrink-0">
                  اعضا
                </div>
                <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px] flex-shrink-0">
                  ددلاین
                </div>
                <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px] flex-shrink-0">
                  اولویت
                </div>
                <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px] flex-shrink-0">
                  توضیحات
                </div>
              </div>
            </div>
            {isPendingExpanded && (
              <div className="flex flex-col items-start gap-[19px] mr-10">
                {project.pendingTasks.map((task) => (
                  <div
                    className="flex w-[986px] py-[7px] px-0 justify-between items-center rounded bg-[#FFF]"
                    key={task.id}
                  >
                    <div className="flex items-start gap-[7px]">
                      <div className="w-4 h-4 rounded-[3px] bg-[#F92E8F]" />
                      <div className="text-[#0E0E0E] text-right font-IRANYekan text-[12px] font-normal leading-normal uppercase">
                        {task.title}
                      </div>
                    </div>
                    <div className="flex w-[490px] items-center gap-[70px]">
                      <div className="flex w-[70px] justify-center items-center gap-[-8px]">
                        {task.users.length > 0 && (
                          <p>{task.users.join(", ")}</p>
                        )}
                      </div>
                      <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px]">
                        <div className="text-[#0E0E0E] text-right font-IRANYekan text-[12px] font-normal leading-normal uppercase">
                          {task.deadline}
                        </div>
                      </div>
                      <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px]">
                        {getPriorityIcon(task.priority)}
                      </div>
                      <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px]">
                        <p className=" truncate text-[#0E0E0E] text-right font-IRANYekan text-[12px] font-normal leading-normal uppercase">{descriptionState(task.description)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex w-[1011px] flex-col items-start gap-[19px]">
            <div className="flex justify-between items-center self-stretch">
              <div
                className="flex justify-end items-center gap-[5px]"
                onClick={toggleInProgressExpand}
              >
                <DownCircle />
                <div className="flex px-[6px] py-1 items-start gap-[10px] rounded bg-[#FD7E14]">
                  <div className=" text-[#FFF] text-center font-IRANYekan text-[16px] leading-normal">
                    In Progress
                  </div>
                </div>
                <div className="text-right font-IRANYekan text-[12px] font-normal leading-normal uppercase">
                {project.inProgressTasks.length} تسک 
                </div>
              </div>
              <div className="flex w-[473px] items-start gap-[70px] text-right font-IRANYekan text-[16px] font-medium leading-normal uppercase">
                <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px] flex-shrink-0">
                  اعضا
                </div>
                <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px] flex-shrink-0">
                  ددلاین
                </div>
                <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px] flex-shrink-0">
                  اولویت
                </div>
                <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px] flex-shrink-0">
                  توضیحات
                </div>
              </div>
            </div>
            {isInProgressExpanded && (
              <div className="flex flex-col items-start gap-[19px] mr-10">
                {project.inProgressTasks.map((task) => (
                  <div
                    className="flex w-[986px] py-[7px] px-0 justify-between items-center rounded bg-[#FFF]"
                    key={task.id}
                  >
                    <div className="flex items-start gap-[7px]">
                      <div className="w-4 h-4 rounded-[3px] bg-[#FD7E14]" />
                      <div className="text-[#0E0E0E] text-right font-IRANYekan text-[12px] font-normal leading-normal uppercase">
                        {task.title}
                      </div>
                    </div>
                    <div className="flex w-[490px] items-center gap-[70px]">
                      <div className="flex w-[70px] justify-center items-center gap-[-8px]">
                        {task.users.length > 0 && <p>{task.users.join(", ")}</p>}
                      </div>
                      <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px]">
                        <div className="text-[#0E0E0E] text-right font-IRANYekan text-[12px] font-normal leading-normal uppercase">
                          {task.deadline}
                        </div>
                      </div>
                      <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px]">
                        {getPriorityIcon(task.priority)}
                      </div>
                      <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px]">
                        {descriptionState(task.description)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex w-[1011px] flex-col items-start gap-[19px]">
            <div className="flex justify-between items-center self-stretch">
              <div
                className="flex justify-end items-center gap-[5px]"
                onClick={toggleDoneExpand}
              >
                <DownCircle />
                <div className="flex px-[6px] py-1 items-start gap-[10px] rounded bg-[#40C057]">
                  <div className=" text-[#FFF] text-center font-IRANYekan text-[16px] leading-normal">
                    Done
                  </div>
                </div>
                <div className="text-right font-IRANYekan text-[12px] font-normal leading-normal uppercase">
                {project.doneTasks.length} تسک 
                </div>
              </div>
              <div className="flex w-[473px] items-start gap-[70px] text-right font-IRANYekan text-[16px] font-medium leading-normal uppercase">
                <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px] flex-shrink-0">
                  اعضا
                </div>
                <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px] flex-shrink-0">
                  ددلاین
                </div>
                <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px] flex-shrink-0">
                  اولویت
                </div>
                <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px] flex-shrink-0">
                  توضیحات
                </div>
              </div>
            </div>
            {isDoneExpanded && (
              <div className="flex flex-col items-start gap-[19px] mr-10">
                {project.doneTasks.map((task) => (
                  <div
                    className="flex w-[986px] py-[7px] px-0 justify-between items-center rounded bg-[#FFF]"
                    key={task.id}
                  >
                    <div className="flex items-start gap-[7px]">
                      <div className="w-4 h-4 rounded-[3px] bg-[#40C057]" />
                      <div className="text-[#0E0E0E] text-right font-IRANYekan text-[12px] font-normal leading-normal uppercase">
                        {task.title}
                      </div>
                    </div>
                    <div className="flex w-[490px] items-center gap-[70px]">
                      <div className="flex w-[70px] justify-center items-center gap-[-8px]">
                        {task.users.length > 0 && <p>{task.users.join(", ")}</p>}
                      </div>
                      <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px]">
                        <div className="text-[#0E0E0E] text-right font-IRANYekan text-[12px] font-normal leading-normal uppercase">
                          {task.deadline}
                        </div>
                      </div>
                      <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px]">
                        {getPriorityIcon(task.priority)}
                      </div>
                      <div className="flex w-[70px] px-[10px] py-0 justify-center items-center gap-[10px]">
                        {descriptionState(task.description)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
