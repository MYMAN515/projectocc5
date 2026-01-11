import Link from "next/link";
import { getTopicBySlug } from "@/features/content/content.service";

type PageProps = {
  params: { submoduleSlug: string; topicSlug: string };
};

export default function TopicPage({ params }: PageProps) {
  const { submodule, topic } = getTopicBySlug(params.submoduleSlug, params.topicSlug);

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-8 px-6 py-16">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">{submodule.title}</p>
          <h1 className="text-4xl font-bold text-text">{topic.title}</h1>
        </div>
        <Link href={`/${submodule.slug}`} className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
          Topics
        </Link>
      </header>

      <section className="rounded-[24px] bg-white p-6 shadow">
        <h2 className="text-2xl font-semibold text-text">Learning flow</h2>
        <p className="mt-2 text-muted">
          Explore the teach slides, complete the activity, and finish with the quiz.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link
            href={`/${submodule.slug}/${topic.slug}/teach`}
            className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-center font-semibold text-primary"
          >
            Teach slides
          </Link>
          <Link
            href={`/${submodule.slug}/${topic.slug}/activity`}
            className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-center font-semibold text-secondary"
          >
            Activity
          </Link>
          <Link
            href={`/${submodule.slug}/${topic.slug}/quiz`}
            className="rounded-2xl border border-purple-100 bg-purple-50 p-4 text-center font-semibold text-purple-700"
          >
            Quiz
          </Link>
        </div>
      </section>
    </main>
  );
}
