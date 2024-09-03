import NavList from "@/app/ui/home/NavList";
import CalendarView from "./ui/home/CalendarView";
import NetEditor from "./ui/home/NetEditor";
export default function Home() {
  return (
    <div>
      <NetEditor></NetEditor>
      <div className="flex gap-2 p-4 w-full items-start flex-wrap justify-center">
        <CalendarView />
        <NavList isEdit={false} />
      </div>
    </div>
  );
}
