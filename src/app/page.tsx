import Link from "next/link";
import { getContentTree } from "@/features/content/content.service";

export default function HomePage() {
  const content = getContentTree();
  const submodules = Object.values(content);

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-8 px-6 py-16">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">Welcome</p>
          <h1 className="text-4xl font-bold text-text">Welcome to Puberty Buddy!</h1>
        </div>
        <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-muted shadow">
          Language: EN
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {submodules.map((submodule) => (
          <Link
            key={submodule.id}
            href={`/${submodule.slug}`}
            className="group flex flex-col overflow-hidden rounded-[24px] bg-white shadow transition hover:-translate-y-1"
          >
            <div className="aspect-[4/3] overflow-hidden bg-surface-strong">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={submodule.topics[0]?.image ?? ""} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-5">
              <h2 className="text-xl font-semibold text-text">{submodule.title}</h2>
              <p className="text-sm text-muted">{submodule.topics.length} topics</p>
              <span className="mt-auto text-sm font-semibold text-primary">Start learning →</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
