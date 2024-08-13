"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [text, setText] = useState("");
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setText(data.message);
      });
  }, []);
  return <p className="h-full w-full">{text}</p>;
}
