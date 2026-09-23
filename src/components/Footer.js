import { useContext, useRef, useState } from "react";
import UserContext from "./UserContext";
const Footer = () => {
    const countRef = useRef(0);
    const name = useContext(UserContext);
    console.log(countRef);
    const [count, setCount] = useState(countRef.current);

    return (
        <p style={{textAlign:"center"}} className="footer">Copyright ©️ 2000-2026 {name}
        <button onClick={() => {countRef.current = countRef.current + 1; console.log(countRef); setCount(countRef.current)}}>Click count: {count}</button>
        </p>
    )
}

export default Footer;
