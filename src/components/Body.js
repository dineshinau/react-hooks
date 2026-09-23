import RestoCard from "./RestoCard";
import Stopwatch from "./Stopwatch";

const Body = () => {
    return (
        <div className="rest-container">
            <Stopwatch />
            <RestoCard restName="BMW" cuisine="North Indian, Chineese, Sweets" rating="4.01" delivery="30 minutes" />
            <RestoCard restName="KFC" cuisine="Burger, Pizza" rating="4.05" delivery="25 minutes" />
        </div>
    )
}
export default Body;
