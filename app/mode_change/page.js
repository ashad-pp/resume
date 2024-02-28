"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award } from "lucide-react";
import React, { useEffect, useState } from "react";

const page = () => {
  const [post, setPost] = useState([]);
  const object = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await request.json();
    setPost(response);
    console.log(response);
  };
 useEffect(() => {
 object();
 
 
 }, [])
 
  return (
    <div className="grid grid-cols-4">
      {post.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{item.body}</p>
          </CardContent>
        
        </Card>
      ))}
    </div>
  );
};

export default page;
