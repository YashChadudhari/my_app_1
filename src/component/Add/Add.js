export const Add = (props) =>{
    // console.log("props",props)
    return(
        <div>
            <h1>Addition: {parseInt(props.a)+parseInt(props.b)}</h1>
        </div>
    );
}