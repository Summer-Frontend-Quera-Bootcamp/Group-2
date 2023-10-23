import React from "react";
import "./style.css";

const Comments: React.FC = (): JSX.Element => {
    return (
        <div className="container130">
            <div className="authorPicture">
                <img src="../../assets/img/frame-32.png" alt="author picture"></img>
            </div>
            <div className="CommentBox130">
                <div className="authorName">
                    <span className="name130">شما</span>
                    <span className="date130">۱۲ تیر</span>
                </div>
                <div className="commentDesc130">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. 
                </div>
            </div>
        </div>
    );
};

export default Comments;
