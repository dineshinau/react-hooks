import { useRef } from "react";

const Header = () => {
    const inputRef = useRef(null);

    return (
        <div className="header">
            <div className="logo">
                <img height="100px" width="100px" src="https://dineshinaublog.wordpress.com/wp-content/uploads/2026/09/food-app.png" />
            </div>
            <div className="nav-links">
              <input ref={inputRef} type="text" placeholder="Search..." />

              <button onClick={() => {inputRef.current.focus()}}>
                Focus Input
              </button>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;
