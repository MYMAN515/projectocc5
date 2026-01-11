import { z } from "zod";

export const languageCodeSchema = z.enum(["en", "ms", "zh"]);

export const teachSlideSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("video"),
    text: z.string(),
    videoUrl: z.string()
  }),
  z.object({
    type: z.literal("genderSelect"),
    text: z.string(),
    choices: z.array(
      z.object({
        gender: z.literal("male"),
        image: z.string(),
        label: z.string()
      })
    )
  }),
  z.object({
    type: z.literal("strip"),
    text: z.string(),
    steps: z.array(
      z.object({
        image: z.string(),
        label: z.string(),
        modalImages: z.record(languageCodeSchema, z.string()).optional()
      })
    )
  }),
  z.object({
    type: z.literal("image").optional(),
    text: z.string().optional(),
    image: z
      .union([
        z.string(),
        z.object({ url: z.string(), alt: z.string().optional() }),
        z.record(languageCodeSchema, z.union([z.string(), z.object({ url: z.string(), alt: z.string().optional() })])),
        z.record(z.string(), z.union([z.string(), z.object({ url: z.string(), alt: z.string().optional() })]))
      ])
      .optional(),
    icon: z.string().optional()
  })
]);

export const activitySchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("clickToReveal"),
    instruction: z.string(),
    items: z.array(z.object({ before: z.string(), after: z.string(), label: z.string() }))
  }),
  z.object({
    type: z.union([z.literal("multiSelect"), z.literal("selectMultiple")]),
    instruction: z.string(),
    items: z.array(z.object({ text: z.string(), image: z.string().optional(), correct: z.boolean().optional() }))
  }),
  z.object({
    type: z.literal("timeline"),
    instruction: z.string(),
    change: z.string(),
    changeImage: z.string(),
    timeline: z.array(z.object({ stage: z.string(), icon: z.string(), correct: z.boolean() }))
  }),
  z.object({
    type: z.literal("sequence"),
    instruction: z.string(),
    steps: z.array(z.object({ image: z.string(), visible: z.boolean(), placeholder: z.string().optional() })),
    choices: z.array(z.object({ text: z.string(), image: z.string(), correct: z.boolean() }))
  }),
  z.object({
    type: z.literal("compare"),
    instruction: z.string(),
    items: z.array(z.object({ text: z.string(), image: z.string().optional(), correct: z.boolean() }))
  }),
  z.object({
    type: z.literal("positiveTraits"),
    instruction: z.string(),
    traits: z.array(z.object({ text: z.string(), icon: z.string(), image: z.string().optional() }))
  }),
  z.object({
    type: z.literal("showerKitMatch"),
    instruction: z.string(),
    leftImage: z.string(),
    choices: z.array(z.object({ text: z.string(), image: z.string(), correct: z.boolean() }))
  })
]);

export const quizQuestionSchema = z.object({
  type: z.literal("subjective").optional(),
  question: z.string(),
  image: z.string().optional(),
  options: z.array(
    z.object({
      text: z.string(),
      correct: z.boolean().optional(),
      image: z.string().optional(),
      icon: z.string().optional()
    })
  )
});

export const topicSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  image: z.string().optional(),
  teach: z.array(teachSlideSchema),
  activity: activitySchema,
  quiz: z.union([quizQuestionSchema, z.array(quizQuestionSchema)])
});

export const submoduleSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  topics: z.array(topicSchema)
});

export const contentTreeSchema = z.record(submoduleSchema);
