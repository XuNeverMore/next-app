"use client";
import NavList from "@/app/ui/home/NavList";
import CalendarView from "./ui/home/CalendarView";
import NetEditor from "./ui/home/NetEditor";
import { useState } from "react";
import OffWorkTicker from "./ui/home/OffWorkTicker";
export default function Home() {
  const [count, setCount] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="flex flex-col w-screen h-screen p-2 fixed top-0 left-0">
      <div className="position-fixed top-0 left-0">
        <OffWorkTicker></OffWorkTicker>
      </div>
      <NetEditor
        isEdit={isEdit}
        onClick={() => setIsEdit(!isEdit)}
        onRefresh={() => setCount(count + 1)}
      ></NetEditor>
      <div className="flex gap-2 w-full items-start justify-center flex-1">
        <CalendarView />
        <NavList
          isEdit={isEdit}
          onRefresh={() => setCount(count + 1)}
          count={count}
        />
      </div>
    </div>
  );
}
