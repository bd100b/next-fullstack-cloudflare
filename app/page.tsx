import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-10">
      <div className="flex flex-col justify-center gap-3">
        <Input placeholder="this is my input component" />
        <Button>Submit</Button>
      </div>
      <div className="p-5">
        <ul>
          <li>this is the first message.</li>
          <li>this is the second message.</li>
          <li>this is the third message.</li>
        </ul>
      </div>
    </main>
  );
}
