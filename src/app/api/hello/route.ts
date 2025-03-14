import { NextRequest } from "next/server";
// import ip from "node-ip";
export async function GET(req: NextRequest) {
  // let ipAddress;
  // try {
  //   ipAddress = ip.address();
  // } catch (error) {
  //   ipAddress = error;
  // }
  return Response.json({
    message: "Hello from Next.js!",
    ip: '127.0.0.1',
    code: 1,
  });
}
