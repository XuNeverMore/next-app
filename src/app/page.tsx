"use client";
import NavList from "@/app/ui/home/NavList";
import CalendarView from "./ui/home/CalendarView";
import NetEditor from "./ui/home/NetEditor";
import { useState } from "react";
import OffWorkTicker from "./ui/home/OffWorkTicker";
import iconCalendar from "@/assets/images/calendar.svg";
import Image from "next/image";
import TextColock from "./ui/home/TextColock";
export default function Home() {
  const [count, setCount] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  return (
    <div className="flex flex-col items-start w-screen h-screen p-2">
      <div className="flex w-full">
        <Image
          src={iconCalendar}
          alt="calendar"
          width={20}
          height={20}
          className="block h-6"
          onClick={() => {
            setCalendarVisible(!isCalendarVisible);
          }}
        ></Image>
        <OffWorkTicker></OffWorkTicker>
        <div className="flex-1"></div>
        <NetEditor
          isEdit={isEdit}
          onClick={() => setIsEdit(!isEdit)}
          onRefresh={() => setCount(count + 1)}
        ></NetEditor>
      </div>
      <div className="flex w-full items-center justify-center p-2">
        <TextColock></TextColock>
      </div>
      <div className="flex gap-2 w-full items-start justify-center flex-1 flex-wrap overscroll-auto">
        <NavList
          isEdit={isEdit}
          onRefresh={() => setCount(count + 1)}
          count={count}
        />
      </div>

      {isCalendarVisible && (
        <div
          className="top-0 left-0 w-screen h-screen z-50 bg-opacity-30 bg-black flex items-start justify-start fixed transition-all duration-300 pt-16"
          onClick={() => {
            setCalendarVisible(false);
          }}
        >
          <CalendarView />
        </div>
      )}
    </div>
  );
}
