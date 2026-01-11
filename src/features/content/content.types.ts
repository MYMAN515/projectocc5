export type LanguageCode = "en" | "ms" | "zh";

export type MediaAsset = {
  url: string;
  alt?: string;
};

export type TeachSlide =
  | {
      type?: "image";
      text?: string;
      image?:
        | MediaAsset
        | string
        | Record<LanguageCode, MediaAsset | string>
        | Record<string, MediaAsset | string>;
      icon?: string;
    }
  | {
      type: "video";
      text: string;
      videoUrl: string;
    }
  | {
      type: "genderSelect";
      text: string;
      choices: Array<{ gender: "male"; image: string; label: string }>;
    }
  | {
      type: "strip";
      text: string;
      steps: Array<{
        image: string;
        label: string;
        modalImages?: Record<LanguageCode, string>;
      }>;
    };

export type Activity =
  | {
      type: "clickToReveal";
      instruction: string;
      items: Array<{ before: string; after: string; label: string }>;
    }
  | {
      type: "multiSelect" | "selectMultiple";
      instruction: string;
      items: Array<{ text: string; image?: string; correct?: boolean }>;
    }
  | {
      type: "timeline";
      instruction: string;
      change: string;
      changeImage: string;
      timeline: Array<{ stage: string; icon: string; correct: boolean }>;
    }
  | {
      type: "sequence";
      instruction: string;
      steps: Array<{ image: string; visible: boolean; placeholder?: string }>;
      choices: Array<{ text: string; image: string; correct: boolean }>;
    }
  | {
      type: "compare";
      instruction: string;
      items: Array<{ text: string; image?: string; correct: boolean }>;
    }
  | {
      type: "positiveTraits";
      instruction: string;
      traits: Array<{ text: string; icon: string; image?: string }>;
    }
  | {
      type: "showerKitMatch";
      instruction: string;
      leftImage: string;
      choices: Array<{ text: string; image: string; correct: boolean }>;
    };

export type QuizQuestion = {
  type?: "subjective";
  question: string;
  image?: string;
  options: Array<{
    text: string;
    correct?: boolean;
    image?: string;
    icon?: string;
  }>;
};

export type Topic = {
  id: number;
  slug: string;
  title: string;
  image?: string;
  teach: TeachSlide[];
  activity: Activity;
  quiz: QuizQuestion | QuizQuestion[];
};

export type Submodule = {
  id: number;
  slug: string;
  title: string;
  topics: Topic[];
};

export type ContentTree = Record<string, Submodule>;
