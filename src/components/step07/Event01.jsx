import React from 'react';

// 이벤트 핸들러는 사용자가 마우스를 클릭하거나 입력상자에서 키보드를 타이핑하는 등 
// 사용자와의 상호작용에 따라 실행되는 사용자 정의 함수

function Event01(props) {
    // 사용자 정의 함수(이벤트 핸들러)
    function handleClick() {
        alert("눌렀네")
    }

    return (
        <>
        <button onClick={handleClick}>Click me</button>
        <button onClick={function handleClick2() {
            alert("누울러었네에")            
        }}>Click me2</button>
        <button onClick={() => {alert("누우우울러어었구나아아")}}>Click me3</button>
        </>
    );
}

export default Event01;