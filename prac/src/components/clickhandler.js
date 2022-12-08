export const Clickhanlder=()=>{
    const clickHandler=(event,count=1)=>{
        console.log('Button Clicked',event);
    }
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
            <button onClick={(event)=>clickHandler(event,5)}>Click 5</button>
        </div>
    )
}