// import { getMessagesFromDatabase } from "@/actions/get-messages-from-database";
import MessageForm from "@/components/message-form";

export const runtime = "edge";

export default async function Home() {
  // const messages = await getMessagesFromDatabase();
  return (
    <main className="max-w-2xl mx-auto p-10">
      <MessageForm />
      <div className="p-5">
        <ul>
          <li>test 1</li>;
          <li>test 2</li>;
        </ul>
      </div>
    </main>
  );
}
