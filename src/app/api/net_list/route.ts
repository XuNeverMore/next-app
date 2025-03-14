import { getDatabase, addNet,deleteNet } from "@/libs/db";
import { Result } from "@/libs/Result";
import { Net } from "@/libs/nets";
import { NextRequest } from "next/server";
export async function GET(req: NextRequest) {
  let db = await getDatabase();
  return Response.json(Result.success(db.data.nets));
}

export async function POST(req: Request) {
  try {
    let body = await req.json();
    console.log(body.category, body.net);
    await addNet(body.category, body.net);
    return Response.json(Result.success());
  } catch (error) {
    return Response.json(Result.error(-1, error));
  }
}

export async function DELETE(req: Request) {
  try {
    let body = await req.json();
    await deleteNet(body.category, body.net);
    return Response.json(Result.success());
  } catch (error) {
    return Response.json(Result.error(-1, error));
  }
}
