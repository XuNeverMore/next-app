import { NextApiRequest } from "next";

export function GET(
    req: NextApiRequest,
  ) {
    return Response.json({ message: 'Test from Next.js!',code:1 })
  }