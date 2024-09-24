import { Result } from "@/libs/Result";
import os from "node:os";

function getIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const devName in interfaces) {
    const iface = interfaces[devName];
    if (!iface) {
      continue;
    }
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === "IPv4" && !alias.internal) {
        return alias.address;
      }
    }
  }
  return null;
}

export async function GET(request: Request) {
  try {
    let ipAddress = getIPAddress();
    return Response.json(Result.success({ ip: ipAddress }));
  } catch (error) {
    console.log(error);
    return Response.json(Result.error(-1, error));
  }
}
