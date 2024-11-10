"use client";
import React from "react";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text, Video } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TipTapEditor } from "@/app/components/tipTabEditor";
import { SubmitButton } from "@/components/ui/submitButton";
import { UploadDropzone } from "@/app/components/uploadthing";
import { error } from "console";
import Image from "next/image";
const Editor = () => {
  const rules = [
    {
      id: 1,
      text: "Dont post another open-source project that is not yours",
    },
    {
      id: 2,
      text: "Be respectful to other people",
    },
    {
      id: 3,
      text: "Dont post any adult content",
    },
    {
      id: 4,
      text: "Dont spread any fake news and hatred",
    },
    {
      id: 5,
      text: "Feel free to ask any question related to open-source and collaboration",
    },
  ];
  return (
    <div className="max-w-[1000px] mx-auto flex gap-x-10 mt-14">
      <div className="w-[65%] flex flex-col gap-y-5">
        <Tabs defaultValue="post" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="post">
              <Text className="h-4 w-4 mr-2" />
              Post
            </TabsTrigger>
            <TabsTrigger value="image">
              <Video className="w-4 h-4 mr-2" />
              Image & Video
            </TabsTrigger>
          </TabsList>
          <TabsContent value="image">
            <Card>
              <CardHeader>
                <UploadDropzone
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    console.log(res);
                  }}
                  onUploadError={(error: Error) => {
                    alert("Error");
                  }}
                />
              </CardHeader>
            </Card>
          </TabsContent>

          <TabsContent value="post">
            <Card>
              <form>
                <CardHeader>
                  <Label className="font-bold text-md">Title</Label>
                  <Input required name="title" placeholder="Title" />
                  <TipTapEditor setJson={() => {}} json={null} />
                </CardHeader>
                <CardFooter>
                  <SubmitButton text="Create Post" />
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div className="w-[35%] mt-14">
        <Card className="flex flex-col p-4">
          <div className="flex items-center gap-x-2">
            <Image
              src="/pfp.png"
              className="w-10 h-10"
              alt="profile"
              width={40}
              height={40}
            />
            <h1 className="font-medium"> Posting to Open-soiurce</h1>
          </div>
          <Separator className="mt-2" />
          <div className="flex flex-col gap-y-5 mt-5">
            {rules.map((item) => (
              <div key={item.id}>
                <p className="text-sm font-bold">
                  {item.id}. {item.text}
                </p>
                <Separator className="mt-2" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Editor;
