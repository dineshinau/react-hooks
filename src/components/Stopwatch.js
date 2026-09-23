import { useRef, useState } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);

  const timerRef = useRef(null);

  function start() {
    if (timerRef.current !== null) {
      return;
    }

    timerRef.current = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
  }

  function stop() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function reset() {
    stop();
    setSeconds(0);
  }

  return (
    <div>
      <h2>{seconds}</h2>

      <button onClick={start}>
        Start
      </button>

      <button onClick={stop}>
        Stop
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}
export default Stopwatch;
