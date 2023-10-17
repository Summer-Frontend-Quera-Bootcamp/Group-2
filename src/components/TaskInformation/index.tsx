import React from "react";
import "./style.css";
const TaskInformation: React.FC = (): JSX.Element => {
    return (
        <div className="container">
            <div className="btnBox">
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
        </div>
    );
};

export default TaskInformation;
