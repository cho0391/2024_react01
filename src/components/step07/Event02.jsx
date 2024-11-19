

function AlertButton({message, children}) {
    return (
        <button onClick={()=>alert(message)}>
            {children}
        </button>
    );
}

function Event02(props) {
    return (
        <div>
            <AlertButton message="play">PlayButton</AlertButton>   
            <AlertButton message="upload">UploadButton</AlertButton>   
        </div>
    );
}

export default Event02;