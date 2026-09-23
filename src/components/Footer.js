import { useContext, useRef, useState, useEffect } from "react";
import UserContext from "./UserContext";

const Footer = () => {
    const [count, setCount] = useState(0);

    console.log("Footer component rendered");

    const countRef = useRef(0);

    const name = useContext(UserContext);

    console.log(countRef);

    useEffect(() => {
        countRef.current = count;
    }, [count]);

    return (
        <p style={{textAlign:"center"}} className="footer">Copyright ©️ 2000-2026 {name}
             - Previous Visit count: {countRef.current}
        <button className="clickBtn" onClick={() => {console.log(countRef); setCount(count+1) }}>
             + Increase
        </button>
         New Visit Count: {count}
        </p>
    )
}

export default Footer;
