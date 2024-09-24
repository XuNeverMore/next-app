"use client";

import { useEffect, useState } from "react";
import { getText } from "@/libs/loaders/text";
import Head from "next/head";

export default function Page() {
  let [text, setText] = useState<string>("");
  let [key, setKey] = useState<number>(0);
  useEffect(() => {
    // document.title = "Text";
    getText((text) => {
      // console.log("get text => ", text);
      setText(text);
      setTimeout(() => {
        setKey(key + 1);
      }, 1000);
    });
  }, [key]);
  return (
    <>
      <div className="p-2 w-screen h-screen">
        <Head>
          <title>Text111</title>
        </Head>
        <pre className="w-full h-full outline-none text-3xl whitespace-pre-line">
          {text}
        </pre>
      </div>
    </>
  );
}
