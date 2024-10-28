import { useId } from 'react'
export default function UseId() {
    const id = useId();
    return (
        <div>
            <label htmlFor={`${id}--email`}>Email</label>
            <input type='text' placeholder='email' id={`${id}--email`}></input>
        </div>
    )
}

//for every instance of this component the id will be different