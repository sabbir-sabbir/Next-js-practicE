import { NextRequest, NextResponse } from "next/server";
import { users } from "@/data/users";


// Dynamic Get Route
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const user = users.find(item => item.id === parseInt(params.id));

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
}


// Dynamic Patch Request



export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    const { name } = await request.json(); 
    const user = users.find(item => item.id === parseInt(params.id));

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }


    user.name = hello;

    return NextResponse.json({ message: "User updated successfully", user }, { status: 200 });
}
