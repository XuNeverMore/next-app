"use client";
import nets from "@/libs/nets";
import Image from "next/image";
import Link from "next/link";
export default function NavList() {
  const list = nets.map((item) => {
    return (
      <div
        key={item.title}
        className="min-w-24 flex flex-col gap-2 items-center border-2 border-gray-200 rounded-lg p-4"
      >
        <p className="text-xl font-bold">{item.title}</p>
        {item.children.map((child) => {
          return (
            <Link
              href={child.url}
              key={child.url}
              target="_blank"
              className="w-full flex p-2 hover:bg-green-100 rounded-md items-center gap-2"
            >
              <Image
                src={child.icon}
                alt={child.title}
                width={30}
                height={30}
                className="rounded-full"
              />
              <p className="text-black-400">{child.title}</p>
            </Link>
          );
        })}
      </div>
    );
  });
  return list;
}
