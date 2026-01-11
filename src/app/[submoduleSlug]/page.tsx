import Link from "next/link";
import { getSubmoduleBySlug } from "@/features/content/content.service";

type PageProps = {
  params: { submoduleSlug: string };
};

export default function SubmodulePage({ params }: PageProps) {
  const submodule = getSubmoduleBySlug(params.submoduleSlug);

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-8 px-6 py-16">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">Submodule</p>
          <h1 className="text-4xl font-bold text-text">{submodule.title}</h1>
        </div>
        <Link href="/" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow">
          Home
        </Link>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {submodule.topics.map((topic) => (
          <Link
            key={topic.id}
            href={`/${submodule.slug}/${topic.slug}`}
            className="group flex flex-col overflow-hidden rounded-[24px] bg-white shadow transition hover:-translate-y-1"
          >
            <div className="aspect-[4/3] overflow-hidden bg-surface-strong">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={topic.image ?? ""} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-5">
              <h2 className="text-xl font-semibold text-text">{topic.title}</h2>
              <p className="text-sm text-muted">{topic.teach.length} slides</p>
              <span className="mt-auto text-sm font-semibold text-primary">Open topic →</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
