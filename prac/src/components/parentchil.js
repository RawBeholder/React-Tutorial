import { ChildComponent } from "./childcomponent";

export const ParentComponent=()=>{
    const greetParent=()=>{
        alert('Hello Parent');

    }

    return<ChildComponent greetHandler={greetParent}/>
}

