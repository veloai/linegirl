import React, {useState, useEffect} from "react";

function Front_hooks () {
    const [number ,addNumber] = useNumber()
    return (
        <div>
            <p>{number}</p>
            <button onClick={addNumber}>
                add
            </button>
        </div>
    )
}

function useNumber() {
    const [number, setNumber] = useState(0)
    useEffect(()=>{
        document.title = number
    })
    const add = () => setNumber(number+1)
    return [number, add]
}

export default Front_hooks;