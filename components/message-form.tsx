"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function MessageForm() {
  const [message, setMessage] = useState("");

  async function handleAddMessageToDatabase() {
    const response = await fetch('https://oddsvers-tg-server-public.odvers1.workers.dev?env=stage&id=football-39&timestamp=1721847374');
    const data = await response.json();
    console.log(data);
    
    if (response.ok) {
      setMessage(data);
    }
  }
  return (
    <div className="flex flex-col justify-center gap-3">
      <Input
        placeholder="add a message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <Button onClick={handleAddMessageToDatabase}>Submit</Button>
    </div>
  );
}