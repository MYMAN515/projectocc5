import { contentTreeSchema } from "./content.zod";
import { content } from "./content.data";

export function getContentTree() {
  return contentTreeSchema.parse(content);
}

export function getSubmoduleBySlug(slug: string) {
  const tree = getContentTree();
  const submodule = Object.values(tree).find((item) => item.slug === slug);
  if (!submodule) {
    throw new Error(`Submodule not found: ${slug}`);
  }
  return submodule;
}

export function getTopicBySlug(submoduleSlug: string, topicSlug: string) {
  const submodule = getSubmoduleBySlug(submoduleSlug);
  const topic = submodule.topics.find((item) => item.slug === topicSlug);
  if (!topic) {
    throw new Error(`Topic not found: ${topicSlug}`);
  }
  return { submodule, topic };
}
