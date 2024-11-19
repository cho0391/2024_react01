import React from 'react';

function Item({ name, isPacked }) {
    // 방법 1)
    // if (isPacked) {
    //     return <li> {name} ✅ </li>
    // }else{
    //     return <li> {name} </li>
    // }

    // 방법 2)
    // return (
    //     <li>
    //         {isPacked ? name + ' ✅' : null}
    //     </li>
    // );


    // && 연산자
    // 참이면  ✅표시, 거짓이면 표시하지 않음
    // return(
    //     <li> {name} { isPacked && ' ✅'}</li>
    // );

    let itemContent = name;
    if (isPacked) {
        itemContent = name + " ✅";
    }
    return (
        <li>{itemContent}</li>
    );
}

export default Item;