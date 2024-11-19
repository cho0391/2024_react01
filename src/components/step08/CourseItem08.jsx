function HeartIconBtn({ chk = false }) {

    function handleFavorite() {
        chk = !chk;
        return alert(chk? "좋아요" : "팍씨");
    }
    
    return(
        <button className='btn' onClick={handleFavorite}>
            <img className='btn_img' src={chk ? './img/heart-fill-icon.svg' : './img/heart-icon.svg'}/>
        </button>
    );
}

function CourseItem08({title, description, image, isFavorite}) {
    return (
        <article className="course">
            <img className="course__img" src={image} alt={title} style={{ width: "100px" }} />
            <div className="course__body">
                <div className="course__title">{title}</div>
                <div className="course__description">{description}</div>
            </div>
            <div className='course_icons'>
                <HeartIconBtn chk={isFavorite} />
            </div>
        </article>
    );
}

export default CourseItem08;