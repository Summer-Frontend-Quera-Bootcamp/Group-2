import React from "react";
import "./style.css";
const PriorityOptions: React.FC = (): JSX.Element => {
    return (
        <div className="container">
            <div className="priorityContainer">
                <div className="item">
                    <div className="pIcon">
                        <img
                            width={"20px"}
                            height={"20px"}
                            src="../../../assets/img/interface-essential-group-red.png"
                            alt="upper"
                        />
                    </div>
                    <span>فوری</span>
                </div>
                <div className="item">
                    <div className="pIcon">
                        <img
                            width={"20px"}
                            height={"20px"}
                            src="../../../assets/img/interface-essential-group-yellow.png"
                            alt="upper"
                        />
                    </div>
                    <span>بالا</span>
                </div>
                <div className="item">
                    <div className="pIcon">
                        <img
                            width={"20px"}
                            height={"20px"}
                            src="../../../assets/img/interface-essential-group-green.png"
                            alt="upper"
                        />
                    </div>
                    <span>متوسط</span>
                </div>
                <div className="item">
                    <div className="pIcon">
                        <img
                            width={"20px"}
                            height={"20px"}
                            src="../../../assets/img/interface-essential-group-gray.png"
                            alt="upper"
                        />
                    </div>
                    <span>پایین</span>
                </div>
                <div className="item mt-[12px]">
                    <div className="pIcon">
                        <img
                            width={"20px"}
                            height={"20px"}
                            src="../../../assets/img/interface-essential-group-exit.png"
                            alt="upper"
                        />
                    </div>
                    <span>حذف اولویت</span>
                </div>
            </div>
        </div>
    );
};

export default PriorityOptions;
