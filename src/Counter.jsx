import { useEffect, useState } from "react";

export default function Counter() {
    let [counterX, setCounterX] = useState(0);
    let [counterY, setCounterY] = useState(0);

    let incCountX = () => {
        setCounterX(counterX+1);
    }

    let incCountY = () => {
        setCounterY(counterY+1);
    }

    useEffect(function sideEffect() {
        console.log("this is side effect")
    }, []);

    return(
        <div>
            <p>countX {counterX}</p>
            <button onClick={incCountX}>+1</button>

            <p>countY {counterY}</p>
            <button onClick={incCountY}>+1</button>
        </div>

        
    );

    
}