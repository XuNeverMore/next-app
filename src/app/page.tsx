import NavList from "@/app/ui/home/NavList";
import CalendarView from "./ui/home/CalendarView";
import NetEditor from "./ui/home/NetEditor";
export default function Home() {
  return (
    <div>
      <NetEditor></NetEditor>
      <div className="flex gap-2 p-4 w-full items-center justify-center">
        <CalendarView />
        <div className="flex gap-2">
          <NavList isEdit={false} />
        </div>
      </div>
    </div>
  );
}
