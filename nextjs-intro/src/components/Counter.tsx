// 1. This directive ensures the component is rendered on the client side (browser)
"use client";

import { useState } from "react";

function Counter() {
    // 2. useState hook to manage the counter state. useState works just like in a standard React app
    const [count, setCount] = useState(0);

    return (
        <div className="mt-4 p-4 border rounded">
            <p>You clicked {count} times</p>
            {/* 3. onClick event handler to update the state on button click */}
            <button
                className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setCount(count + 1)}
            >
                Click me
            </button>
        </div>
    );
}

export default Counter;