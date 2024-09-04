"use server";

import { db } from "@/app/db/db";
import { messages } from "@/app/db/schema";
import { revalidatePath } from "next/cache";

export async function getMessagesFromDatabase() {
  const response = await db.select().from(messages);
  console.log(response, "is response from database");
  return response;
}