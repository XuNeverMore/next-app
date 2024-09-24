import { setCopyText, getDatabase } from "@/libs/db";
import { Result } from "@/libs/Result";


export async function POST(req: Request) {
  let object = await req.json();
  await setCopyText(object.text);
  return Response.json(Result.success());
}

export async function GET(req: Request) {
  let db = await getDatabase();
  let text = db.data.copyText;
  return Response.json(Result.success({ text: text || "" }));
}
