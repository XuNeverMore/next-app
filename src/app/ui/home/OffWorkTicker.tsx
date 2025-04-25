"use client";

import { useEffect, useState } from "react";

export default function OffWorkTicker() {
  //state of time left
  const [timeLeft, setTimeLeft] = useState("12:00:00");
  useEffect(() => {
    //周三周五18:30下班，其他上班日21:00下班
    const now = new Date();
    const day = now.getDay();
    let t = now.getTime();
    //倒计时还剩多长时间下班
    let countdown = 0;
    let endMills = 0;
    if (day === 3 || day === 5) {
      //now = 18:30
      endMills = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        18,
        30,
        0
      ).getTime();
    } else {
      //now = 21:00
      endMills = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        21,
        0,
        0
      ).getTime();
    }
    countdown = (endMills - t) / 1000;
    const timer = setInterval(() => {
      countdown -= 1;
      //将countdown毫秒数转换为时分秒
      const h = Math.floor(countdown / 3600) + "";
      const m = Math.floor((countdown % 3600) / 60) + "";
      const s = Math.floor(countdown % 60) + "";
      setTimeLeft(
        `${h.padStart(2, "0")}:${m.padStart(2, "0")}:${s.padStart(2, "0")}`
      );
      if (countdown <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  }, []);

  return <span className="font-mono">{timeLeft}</span>;
}
