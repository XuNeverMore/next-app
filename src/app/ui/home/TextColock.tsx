import { useState, useEffect } from "react";

export default function TextColock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <p className="font-mono text-2xl pl-4 pr-4" suppressHydrationWarning>
      {time.toLocaleDateString() + " " + time.toLocaleTimeString()}
    </p>
  );
}
