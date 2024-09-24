import { NextApiRequest } from "next";
import ip from "node-ip";
export async function GET(req: NextApiRequest) {
  let ipAddress;
  try {
    ipAddress = ip.address();
  } catch (error) {
    ipAddress = error;
  }
  return Response.json({
    message: "Hello from Next.js!",
    ip: ipAddress,
    code: 1,
  });
}
