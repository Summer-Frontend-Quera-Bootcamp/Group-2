import React from "react";
import "./style.css";

interface ICommentProps {
    onClose: () => void;
}

const Comment: React.FC<ICommentProps> = ({ onClose }): JSX.Element => {
    return (
        <div className="container120">
            <div className="taskDescriptionBox">
                <textarea rows={5} id="td" className="taskDesc120" placeholder="کامنت"></textarea>
            </div>
            <div className="btnBox120">
                <div className="optionBtnLayout">
                    <img src="../../assets/img/emails-group-1.png" alt="email"></img>
                    <img src="../../assets/img/interface-essential-group-link.png" alt="link"></img>
                    <img src="../../assets/img/files-group.png" alt="file"></img>
                    <img src="../../assets/img/smileys-group.png" alt="smile"></img>
                </div>
                <div className="submitBtnLayout">
                    <button className="submitBtn" onClick={onClose}>ثبت کامنت</button>
                </div>
            </div>
        </div>
    );
};

export default Comment;
