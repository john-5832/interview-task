import { useMemo, useState } from "react";
import BigList from "../Biglist"

function App() {
    const [count, setCount] = useState(0);

    const items =useMemo(()=>{
        return [{ id: 1, name: "A" }];
    },[])
        
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>
                Count: {count}
            </button>
            <BigList items={items} />
        </div>
    );
}

export default App;