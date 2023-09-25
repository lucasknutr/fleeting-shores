import { NextResponse } from "next/server";
import connect from "../../../libs/mongodb";
import Post from "../../../models/post";


export async function POST(request) {
    const { title, caption, body } = await request.json();
    await connect();
    await Post.create({title, caption, body});
    return NextResponse.json({ message: "SUCESSO" }, { status: 201 });
}
