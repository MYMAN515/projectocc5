import { sql } from "drizzle-orm";
import {
  integer,
  sqliteTable,
  text
} from "drizzle-orm/sqlite-core";

export const languages = sqliteTable("languages", {
  code: text("code").primaryKey(),
  label: text("label").notNull()
});

export const i18nKeys = sqliteTable("i18n_keys", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  defaultText: text("default_text").notNull()
});

export const i18nTranslations = sqliteTable("i18n_translations", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  keyId: integer("key_id")
    .references(() => i18nKeys.id)
    .notNull(),
  languageCode: text("language_code")
    .references(() => languages.code)
    .notNull(),
  text: text("text").notNull()
});

export const mediaAssets = sqliteTable("media_assets", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  type: text("type").notNull(),
  url: text("url").notNull(),
  altKeyId: integer("alt_key_id").references(() => i18nKeys.id)
});

export const submodules = sqliteTable("submodules", {
  id: integer("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  order: integer("order").notNull(),
  titleKeyId: integer("title_key_id")
    .references(() => i18nKeys.id)
    .notNull(),
  imageUrl: text("image_url")
});

export const topics = sqliteTable("topics", {
  id: integer("id").primaryKey(),
  submoduleId: integer("submodule_id")
    .references(() => submodules.id)
    .notNull(),
  slug: text("slug").notNull(),
  order: integer("order").notNull(),
  titleKeyId: integer("title_key_id")
    .references(() => i18nKeys.id)
    .notNull(),
  imageUrl: text("image_url")
});

export const teachSlides = sqliteTable("teach_slides", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  topicId: integer("topic_id")
    .references(() => topics.id)
    .notNull(),
  order: integer("order").notNull(),
  type: text("type").notNull().default("image"),
  textKeyId: integer("text_key_id").references(() => i18nKeys.id),
  mediaAssetId: integer("media_asset_id").references(() => mediaAssets.id),
  dataJson: text("data_json").notNull().default("{}")
});

export const activities = sqliteTable("activities", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  topicId: integer("topic_id")
    .references(() => topics.id)
    .notNull(),
  type: text("type").notNull(),
  instructionKeyId: integer("instruction_key_id").references(() => i18nKeys.id),
  dataJson: text("data_json").notNull().default("{}")
});

export const quizzes = sqliteTable("quizzes", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  topicId: integer("topic_id")
    .references(() => topics.id)
    .notNull()
});

export const quizQuestions = sqliteTable("quiz_questions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  quizId: integer("quiz_id")
    .references(() => quizzes.id)
    .notNull(),
  order: integer("order").notNull(),
  type: text("type"),
  questionKeyId: integer("question_key_id")
    .references(() => i18nKeys.id)
    .notNull(),
  mediaAssetId: integer("media_asset_id").references(() => mediaAssets.id),
  dataJson: text("data_json").notNull().default("{}")
});

export const quizOptions = sqliteTable("quiz_options", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  questionId: integer("question_id")
    .references(() => quizQuestions.id)
    .notNull(),
  order: integer("order").notNull(),
  textKeyId: integer("text_key_id").references(() => i18nKeys.id),
  mediaAssetId: integer("media_asset_id").references(() => mediaAssets.id),
  icon: text("icon"),
  correct: integer("correct", { mode: "boolean" }).default(false)
});

export const profiles = sqliteTable("profiles", {
  id: text("id").primaryKey(),
  deviceId: text("device_id").unique(),
  preferredLanguageCode: text("preferred_language_code").references(() => languages.code),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`)
});

export const topicProgress = sqliteTable("topic_progress", {
  profileId: text("profile_id")
    .references(() => profiles.id)
    .notNull(),
  topicId: integer("topic_id")
    .references(() => topics.id)
    .notNull(),
  completedAt: text("completed_at").notNull()
});
