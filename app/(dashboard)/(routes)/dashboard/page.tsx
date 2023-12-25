"use client";
import {
  UserGroupIcon,
  ChatAlt2Icon,
  PhotographIcon,
  VideoCameraIcon,
  CodeIcon,
  MusicNoteIcon,
  CogIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";
const tools = [
  {
    label: "Conversation",
    icon: ChatAlt2Icon,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-black/20",
  },
  {
    label: "Image Generation",
    icon: PhotographIcon,
    href: "/image",
    color: "text-pink-500",
    bgColor: "bg-black/20",
  },
  {
    label: "Video Generation",
    icon: VideoCameraIcon,
    href: "/video",
    color: "text-orange-500",
    bgColor: "bg-black/20",
  },
  {
    label: "Music Generation",
    icon: MusicNoteIcon,
    href: "/music",
    color: "text-emerald-400",
    bgColor: "bg-black/20",
  },
  {
    label: "Code Generation",
    icon: CodeIcon,
    href: "/code",
    color: "text-green-700",
    bgColor: "bg-black/20",
  },
];
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Card } from "@mui/material";
import { useRouter } from "next/navigation";
const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-white/70 font-light text-sm md:text-lg text-center">
          Chat with the smartest AI- based on GPT 3.5
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href} 
            className="p-4 border-black/5 flex items-center justify-between shadow-white hover:bg-gray-100 transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={`p-2 w-fit rounded-md ${tool.bgColor}`}>
                <tool.icon className={`w-8 h-8 ${tool.color}`} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowNarrowRightIcon className="w-8 h-8" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
