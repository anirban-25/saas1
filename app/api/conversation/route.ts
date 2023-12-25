import { auth } from "@clerk/nextjs";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import {Configuration , OpenAIApi} from "openai-edge";

export const runtime =  'edge';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration);


export async function POST(
    req: Request
){
    try{
        const {userId} = auth();
        const body = await req.json();
        const {messages} = body;

        if(!userId) {
           return new NextResponse("Unauthorized",  {status: 401});
        }

        if(!configuration.apiKey) {
           return new NextResponse("OpenAi api key not found",  {status: 500});
        }
        
        if(!messages){
            return new NextResponse("Messages are reqd",  {status: 400});
        }

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            stream: true,
            messages
        });
        
        const stream = OpenAIStream(response);
        return new StreamingTextResponse(stream);
        
    }catch(e){
        console.log("[CONVERSION_ERROR]", e);
        return new NextResponse("Internal Error", {
            status: 500
        });
    }
}
