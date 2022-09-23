import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  // function that transitions to the next mode and updates history
  function transition(mode, replace = false) {
    if (replace) {
      setHistory((prev) => [...prev.slice(0, -1), mode]);
      return;
    }
    return setHistory((prev) => [...prev, mode]);
  }

  // function that transitions back ONE mode
  function back() {
    if (history.length > 1) {
      setHistory((prev) => [...prev.slice(0, -1)]);
    }
  }

  return { mode: history[history.length - 1], transition, back };
}
