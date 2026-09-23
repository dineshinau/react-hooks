import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {

        case "increment":
            return state + 1;

        case "decrement":
            return state - 1;

        case "incrementBy":
            return state + action.payload;

        case "reset":
            return 0;

        default:
            return state;
    }
}

function NewCounter() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h2>Count: {count}</h2>

            <button
                onClick={() =>
                    dispatch({ type: "increment" })
                }
            >
                +1
            </button>

            <button
                onClick={() =>
                    dispatch({ type: "decrement" })
                }
            >
                -1
            </button>

            <button
                onClick={() =>
                    dispatch({
                        type: "incrementBy",
                        payload: 5
                    })
                }
            >
                +5
            </button>

            <button
                onClick={() =>
                    dispatch({ type: "reset" })
                }
            >
                Reset
            </button>
        </div>
    );
}
export default NewCounter;
