import React from 'react';

function Courseitem({title, description, image}) {
    return (
        <article className="course">
            <img className="course__img" src={image} alt={title} style={{ width: "100px" }} />
            <div className="course__body">
                <div className="course__title">{title}</div>
                <div className="course__description">{description}</div>
            </div>
        </article>
    );
}
export default Courseitem;