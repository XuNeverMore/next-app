"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { NetFolder, Net } from "@/libs/nets";
import iconDelete from "@/assets/images/delete.svg";
import iconNet from "@/assets/images/net.svg";

const defaultNets: NetFolder[] = [];
export default function NavList({
  isEdit = false,
  count = 0,
  onRefresh = () => {},
}) {
  const [nets, setNets] = useState(defaultNets);

  useEffect(() => {
    fetch("/api/net_list")
      .then((res) => res.json())
      .then((data) => {
        let nets = data.data as NetFolder[];
        nets = nets.map((item) => {
          item.children = item.children.filter((child) => {
            return child.visible !== false;
          });
          return item;
        });
        setNets(nets);
        console.log("fetch net_list");
      });
  }, [count]);
  const list = nets.map((item) => {
    return (
      <div
        key={item.title}
        className="min-w-24 flex flex-col gap-2 items-center border-2 border-gray-200 rounded-lg p-4"
      >
        <p className="text-xl text-blue-500">{item.title}</p>
        {item.children.map((child) => {
          return (
            <div key={child.url} className="flex w-full items-center">
              <Link
                href={child.url}
                target="_blank"
                className="w-full flex p-2 hover:bg-green-100 rounded-md items-center gap-2 flex-1"
              >
                <Image
                  src={child.icon || iconNet}
                  alt={child.title}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <p className="text-black">{child.title}</p>
              </Link>
              {isEdit && (
                <Image
                  src={iconDelete}
                  width={24}
                  className="hover:bg-blue-200 rounded-full aspect-square p-2px"
                  alt="delete"
                  onClick={() => deleteNet(item.title, child, onRefresh)}
                ></Image>
              )}
            </div>
          );
        })}
      </div>
    );
  });
  return list;
}

function deleteNet(category: string, net: Net, onSuccess?: () => void) {
  fetch("/api/net_list", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ category, net }),
  }).then((res) => {
    onSuccess && onSuccess();
  });
}
