import "server-only";

import { db } from "@/db/client";
import { topicProgress } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function markTopicCompleted(profileId: string, topicId: number) {
  const existing = await db
    .select()
    .from(topicProgress)
    .where(eq(topicProgress.profileId, profileId))
    .limit(1);

  if (existing.length === 0) {
    await db.insert(topicProgress).values({
      profileId,
      topicId,
      completedAt: new Date()
    });
  }
}
