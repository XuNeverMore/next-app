import NavList from "@/app/ui/home/NavList";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex gap-2">
        <NavList />
      </div>
    </div>
  );
}
