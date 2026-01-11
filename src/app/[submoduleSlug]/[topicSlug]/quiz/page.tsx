import Link from "next/link";
import { getTopicBySlug } from "@/features/content/content.service";

type PageProps = {
  params: { submoduleSlug: string; topicSlug: string };
};

export default function QuizPage({ params }: PageProps) {
  const { submodule, topic } = getTopicBySlug(params.submoduleSlug, params.topicSlug);
  const quiz = Array.isArray(topic.quiz) ? topic.quiz : [topic.quiz];

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-8 px-6 py-16">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">{topic.title}</p>
          <h1 className="text-4xl font-bold text-text">Quiz</h1>
        </div>
        <Link href={`/${submodule.slug}/${topic.slug}`} className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
          Back
        </Link>
      </header>

      <section className="grid gap-6">
        {quiz.map((question, index) => (
          <article key={`${topic.slug}-quiz-${index}`} className="rounded-[24px] bg-white p-6 shadow">
            <h2 className="text-xl font-semibold text-text">{question.question}</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {question.options.map((option) => (
                <div key={option.text} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm font-semibold">
                  {option.text}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
