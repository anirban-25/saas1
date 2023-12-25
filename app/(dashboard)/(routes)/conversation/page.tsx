"use client";

import axios from "axios";
import * as z from "zod";
import Heading from "@/components/heading";
import React, { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { ChatAlt2Icon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Form from "@radix-ui/react-form";
import { Input, TextField } from "@mui/material";
import { ChatCompletionRequestMessage } from "openai-edge";

const ConversationPage = () => {
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const [openAIResponse, setOpenAIResponse] = useState<string>("");
  const [text, setText] = useState<string>("");
  function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }
  // async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   await fetch("api/conversation", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/jso  n",
  //     },
  //     body: JSON.stringify({
  //       text: text,
  //     }),
  //   }).then(async (response: any) => {
  //     const reader = response.body?.getReader();
  //     while (true) {
  //       const { done, value } = await reader?.read();
  //       if (done) {
  //         break;
  //       }
  //       var currentChunk = new TextDecoder().decode(value);
  //       setOpenAIResponse((prev) => prev + currentChunk);
  //     }
  //   });
  // }

  //mixtral endpoint fetch
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await fetch("api/mixtral", {
      method: "POST",
      headers: {
        "Content-Type": "application/jso  n",
      },
      body: JSON.stringify({
        messages: text,
      }),
    }).then(async (response: any) => {
      const reader = response.body?.getReader();
      while (true) {
        const { done, value } = await reader?.read();
        if (done) {
          break;
        }
        var currentChunk = new TextDecoder().decode(value);
        setOpenAIResponse((prev) => prev + currentChunk);
      }
    });
  }
  return (
    <div>
      <Heading
        title="Conversation"
        description="Chat with the conversation service"
        icon={ChatAlt2Icon}
        iconColor="text-violet-500"
        bgColor="bg-gray-900"
      />
      <div className="px-4 lg:px-8">
        <div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="rounded-md border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
          >
            <div className="flex flex-col mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Start your conversation``
              </label>
              <input
                type="text"
                className="text-black text-sm border rounded-lg cursor-pointer"
                onChange={(e) => handleTextChange(e)}
              />
            </div>
            <div className="justify-center flex">
              <button type="submit" className="p-2 bg-sky-600 rounded-md mb-4">
                Submit
              </button>
            </div>
          </form>

          {openAIResponse !== "" ? (
            <div className="border-t border-gray-300 pt-4">
              <h2 className="text-xl font-bold mb-2">AI Response</h2>
              <p>{openAIResponse}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
