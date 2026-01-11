import Link from "next/link";
import { getTopicBySlug } from "@/features/content/content.service";
import type { MediaAsset, TeachSlide } from "@/features/content/content.types";

type PageProps = {
  params: { submoduleSlug: string; topicSlug: string };
};

const isMediaAsset = (value: unknown): value is MediaAsset => {
  if (!value || typeof value !== "object") {
    return false;
  }
  return "url" in value && typeof (value as { url?: unknown }).url === "string";
};

export default function TeachPage({ params }: PageProps) {
  const { submodule, topic } = getTopicBySlug(params.submoduleSlug, params.topicSlug);

  const resolveImageAsset = (image: TeachSlide["image"]): MediaAsset | string | undefined => {
    if (!image) {
      return undefined;
    }
    if (typeof image === "string") {
      return image;
    }
    if (isMediaAsset(image)) {
      return image;
    }
    const localized = Object.values(image).find((value) => typeof value === "string" || isMediaAsset(value));
    return localized;
  };

  const resolveImageSrc = (image: TeachSlide["image"]): string | undefined => {
    const asset = resolveImageAsset(image);
    if (!asset) {
      return undefined;
    }
    return typeof asset === "string" ? asset : asset.url;
  };

  const resolveImageAlt = (image: TeachSlide["image"]): string => {
    const asset = resolveImageAsset(image);
    if (!asset || typeof asset === "string") {
      return "";
    }
    return asset.alt ?? "";
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-8 px-6 py-16">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">{topic.title}</p>
          <h1 className="text-4xl font-bold text-text">Teach Slides</h1>
        </div>
        <Link href={`/${submodule.slug}/${topic.slug}`} className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
          Back
        </Link>
      </header>

      <section className="grid gap-6">
        {topic.teach.map((slide, index) => (
          <article key={`${topic.slug}-slide-${index}`} className="rounded-[24px] bg-white p-6 shadow">
            {slide.text && <h2 className="text-xl font-semibold text-text">{slide.text}</h2>}
            {"videoUrl" in slide ? (
              <video className="mt-4 w-full rounded-2xl" controls>
                <source src={slide.videoUrl} type="video/mp4" />
              </video>
            ) : null}
            {"image" in slide && resolveImageSrc(slide.image) ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={resolveImageSrc(slide.image)}
                alt={resolveImageAlt(slide.image)}
                className="mt-4 w-full rounded-2xl object-cover"
              />
            ) : null}
            {"choices" in slide ? (
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {slide.choices.map((choice) => (
                  <div key={choice.label} className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-center">
                    <p className="text-lg font-semibold text-text">{choice.label}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </section>
    </main>
  );
}
