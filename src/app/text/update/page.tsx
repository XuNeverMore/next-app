"use client";

import { useState, useEffect } from "react";
import { getText, saveText } from "@/libs/loaders/text";
import { getIPAddress } from "@/libs/loaders/load_ip";
import Link from "next/link";
import { qrCodetoDataURL } from "@/libs/utils";
import Image from "next/image";
import Head from "next/head";
export default function Page() {
  //text state
  const [text, setText] = useState<string>("");
  //ip state
  const [address, setIp] = useState<string>("");
  //qrcode state
  const [qrcode, setQrcode] = useState<string>("");
  useEffect(() => {
    async function getIp() {
      let ip = await getIPAddress();
      let add = `http://${ip}:3000/text`;
      console.log(ip);
      setIp(add);
      qrCodetoDataURL(add, (error, data) => {
        console.log("qrcode", data);
        setQrcode(data);
      });
    }
    getIp();
  }, []);
  useEffect(() => {
    getText((txt) => {
      setText(txt);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Update Text</title>
      </Head>
      <div className="p-2 w-full h-screen">
        <div className="flex justify-end w-full items-center">
          {qrcode && (
            <Image src={qrcode} alt="qrcode" width={80} height={80}></Image>
          )}
          <Link
            href="/text"
            target="_blank"
            className="text-blue-500 underline text-xl h-auto pl-2"
          >
            {address}
          </Link>
        </div>
        <textarea
          title="update text"
          defaultValue={text}
          onChange={(e) => saveText(e.target.value)}
          className="w-full h-full outline-none text-3xl"
        ></textarea>
      </div>
    </>
  );
}
