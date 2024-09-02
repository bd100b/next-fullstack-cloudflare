"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function MessageForm() {
  const [message, setMessage] = useState("");


  return (
    <div className="flex flex-col justify-center gap-3">
      <Input
        placeholder="add a message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <Button>Submit</Button>
    </div>
  );
}
