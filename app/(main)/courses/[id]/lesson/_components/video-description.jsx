"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function VideoDescription({ description }) {
  return (
    <div className="mt-4">
      Description
      <div className="pt-3">{description}</div>
    </div>
  );
}

export default VideoDescription;
