import { NextRequest, NextResponse } from "next/server";
import { users } from "@/data/users";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const user = users.find(item => item.id === parseInt(params.id));

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
}
