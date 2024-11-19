import React from 'react';
import Comment from './Comment';

// 나중에 DB처리 하는 방법이 될거임
const comments = [
    {
        name : "홍길동",
        comment : "방가방가"
    },
    {
        name : "둘리",
        comment : "호이~호이~"
    },
    {
        name : "도우너",
        comment : "깐따삐야~"
    },
    {
        name : "희동이",
        comment : "응애~응애~"
    }
];

function CommentList(props) {
    return (
        <div>
            {
                comments.map((k) => {
                    return(
                        <Comment name={k.name} comment={k.comment}/>
                    );
                })
            }
        </div>
    );
}


export default CommentList;