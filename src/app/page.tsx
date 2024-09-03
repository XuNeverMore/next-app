"use client";
import NavList from "@/app/ui/home/NavList";
import CalendarView from "./ui/home/CalendarView";
import NetEditor from "./ui/home/NetEditor";
import { useState } from "react";
export default function Home() {
  const [count, setCount] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <NetEditor
        isEdit={isEdit}
        onClick={() => setIsEdit(!isEdit)}
        onRefresh={() => setCount(count + 1)}
      ></NetEditor>
      <div className="flex gap-2 p-4 w-full items-start flex-wrap justify-center">
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
