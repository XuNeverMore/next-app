"use client";
import Image from "next/image";
import iconSetting from "@/assets/images/setting.svg";
import { useState } from "react";
import { categorys, Net } from "@/libs/nets";
import { addNet } from "@/libs/db";
export default function NetEditor() {
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState(categorys[0]);
  const [net, setNet] = useState("");
  return (
    <div className="p-2 w-full flex-col items-end">
      <Image
        src={iconSetting}
        alt="setting"
        width={20}
        height={20}
        className="block"
        onClick={() => {
          setVisible(!visible);
        }}
      ></Image>
      <div hidden={!visible} className="flex items-center justify-center">
        <select onChange={(e) => setCategory(e.target.value)} value={category} className="bg-slate-300 p-2">
          {categorys.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
        <textarea
          className=" bg-slate-200 w-1/3"
          placeholder="please input net info"
          onChange={(e) => {
            setNet(e.target.value);
          }}
        ></textarea>
        <button
          type="button"
          onClick={() => {
            // fetch(
            //   "https://open.feishu.cn/open-apis/bot/v2/hook/a5d5bd4d-f042-41c2-b1c7-345b66532ac2",
            //   {
            //     method: "POST",
            //     body: JSON.stringify({
            //       msg_type: "text",
            //       content: {
            //         text: "This is Form react button.",
            //       },
            //     }),
            //   }
            // ).then((data) => {
            //   console.log("webhook", data);
            // });

            if (net) {
              try {
                let netInfo: Net = JSON.parse(net);
                fetch("/api/net_list", {
                  method: "POST",
                  body: JSON.stringify({
                    category: category,
                    net: netInfo,
                  }),
                }).then((data) => {
                  alert(`success:${data}`);
                  location.reload();
                  console.log(data);
                });
              } catch (error) {
                console.error(error);
              }
            }
          }}
          className="bg-blue-500 rounded-xl text-white px-6 py-2"
        >
          Add
        </button>
      </div>
    </div>
  );
}
