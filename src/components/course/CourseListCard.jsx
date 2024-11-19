import React from 'react';
import Courseitem from './Courseitem';

function CourseListCard(props) {
    return (
        <div className="card">
            <div className="card__header">강의 목록</div>
            <div className="card__body">
                <div className="courses">
                    <Courseitem
                        title="입문자를 위한 SpringBoot 웹개발"
                        description="SpringBoot 빡시게 굴려드립니다."
                        img="./img/test1.png"
                    />
                    <Courseitem
                        title="입문자를 위한 VSCode 웹개발"
                        description="VSCode 빡시게 굴려드립니다."
                        img="./img/test2.png"
                    />
                    <Courseitem
                        title="입문자를 위한 Java 웹개발"
                        description="Java 빡시게 굴려드립니다."
                        img="./img/test3.png" />
                    <Courseitem
                        title="입문자를 위한 HTML&CSS 웹개발"
                        description="HTML&CSS 빡시게 굴려드립니다."
                        img="./img/test4.png"
                    />
                </div>
            </div>
        </div>
    );
}

export default CourseListCard;