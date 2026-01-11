import Link from "next/link";
import { getTopicBySlug } from "@/features/content/content.service";

type PageProps = {
  params: { submoduleSlug: string; topicSlug: string };
};

export default function ActivityPage({ params }: PageProps) {
  const { submodule, topic } = getTopicBySlug(params.submoduleSlug, params.topicSlug);
  const activity = topic.activity;

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-8 px-6 py-16">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">{topic.title}</p>
          <h1 className="text-4xl font-bold text-text">Activity</h1>
        </div>
        <Link href={`/${submodule.slug}/${topic.slug}`} className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
          Back
        </Link>
      </header>

      <section className="rounded-[24px] bg-white p-6 shadow">
        <h2 className="text-2xl font-semibold text-text">{activity.instruction}</h2>
        <p className="mt-2 text-muted">Activity type: {activity.type}</p>
      </section>
    </main>
  );
}
