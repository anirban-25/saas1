import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!messages) {
      return new NextResponse("Messages are reqd", { status: 400 });
    }

    const apiUrl = "https://fumesx-ohps.onrender.com/api2";

    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({
        prompt: messages,
        userId: generateRandomUserId(),
        sm: 1,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch response: ${response.status}`);
    }

    const res = await response.text();

    return new NextResponse(res, { status: 200 });
  } catch (e) {
    console.log("[CONVERSION_ERROR]", e);
    return new NextResponse("Internal Error", {
      status: 500,
    });
  }
}

function generateRandomUserId() {
  const randomId = Math.floor(Math.random() * 100000000000000);
  return String(randomId);
}
