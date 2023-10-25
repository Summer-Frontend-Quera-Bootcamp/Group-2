import React, { useState } from "react";
import Comment from "./Comment";
import Comments from "./Comments";
import "./style.css";
const TaskInformation: React.FC = (): JSX.Element => {
    const [isModalVisible, setModalVisible] = useState(false);

    const handleCommentLabelClick = () => {
        setModalVisible(true);
    };
    
    return (
        <div className="container">
            <div className="rightContainer">
                <div className="btnContainer">
                    <div className="openBtnBox">
                        <button className="openBtn">Open</button>
                        <div className="addMemberBox">
                            <img
                                className="addedMemberImg"
                                src="../../assets/img/frame-32.png"
                                alt="member"
                            ></img>
                            <img
                                className="addMemberImg"
                                src="../../assets/img/user-group.png"
                                alt="plusMember"
                            ></img>
                        </div>
                        <div className="addMemberBox">
                            <img
                                className="flagImg"
                                src="../../assets/img/interface-essential-group-red.png"
                                alt="flag"
                            ></img>
                        </div>
                    </div>
                    <div className="shareBtn">
                        <img src="../../assets/img/Group.png" className="shareImg" alt="share"></img>
                        <span>اشتراک گذاری</span>
                    </div>
                </div>
                <div className="descriptionContainer">
                    <img
                        className="tagImg"
                        src="../../assets/img/interface-essential-group-g.png"
                        alt="tag"
                    ></img>
                    <div className="descriptionBox">
                        <h5 className="taskTitle">عنوان تسک</h5>
                        <div className="taskDescriptionBox">
                            <textarea rows={5} id="td" className="taskDesc" placeholder=""></textarea>
                        </div>
                    </div>
                    <div className="attachmentBox">
                        <img
                            className="attachImg"
                            src="../../assets/img/interface-essential-group-attach.png"
                            alt="attach"
                        ></img>
                        <span className="attachmentTitle">اضافه کردن پیوست</span>
                    </div>
                </div>
            </div>
            {/*onClick={() => { if(isModalVisible) { setModalVisible(false) }}}*/}
            <div className="leftContainer" >
                <div className="infoContainer">
                    <div className="infoBox">
                        <div className="info">
                            <div className="dateInfo">
                                <span className="infoLabel">ساخته شده در</span>
                                <span className="infoTitle">۱ اردیبهشت ۱۴۰۲</span>
                            </div>
                            <div className="deadLineInfo">
                                <span className="infoLabel">ددلاین</span>
                                <span className="infoTitle">پس فردا</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="insertedCommentContainer">
                    <Comments/>
                </div>
                {!isModalVisible && <div className="commentContainer">
                    <span className="yourCommentLabel" onClick={handleCommentLabelClick}>کامنت شما</span>
                    <img src="../../assets/img/interface-essential-group-message.png" alt="commentIcon"></img>
                </div>}
                {/* Render the CommentModal component */}
                {isModalVisible && <Comment onClose={() => setModalVisible(false)} />}
            </div>
        </div>
    );
};

export default TaskInformation;
