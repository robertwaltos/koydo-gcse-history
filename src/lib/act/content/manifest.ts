// Auto-generated content manifest for Gcse History
// Question targets are 2-3x competition floor

export type ActivityType =
  | "multiple_choice" | "essay" | "cloze_deletion" | "numeric_input"
  | "whiteboard" | "reading_passage" | "audio_mcq" | "voice_explanation"
  | "flashcard_deck" | "fill_in_blank" | "data_interpretation" | "diagram_label"
  | "scenario_based" | "coding_challenge" | "case_study" | "calculation"
  | "simulation" | "gamified_quiz" | "portfolio_review" | "visual_mcq"
  | "branching_scenario" | "heading_matching" | "project_based" | "story_based"
  | "sql_challenge" | "rubric_assessment" | "peer_review" | "timeline_ordering";

export type ExamCategory =
  | "admissions" | "language_cert" | "professional" | "k12_national"
  | "trade" | "creative" | "productivity" | "language_skills" | "kids";

export interface TopicManifest {
  id: string;
  domain: string;
  title: string;
  icon: string;
  color: string;
  questionTarget: number;
  activityTypes: ActivityType[];
}

export interface ContentManifest {
  examId: string;
  examName: string;
  totalQuestions: number;
  category: ExamCategory;
  topics: TopicManifest[];
}

export const CONTENT_MANIFEST: ContentManifest = {
  examId: "gcse-history",
  examName: "Gcse History",
  totalQuestions: 2300,
  category: "k12_national",
  topics: [
  {
    id: "world-history",
    domain: "world-history",
    title: "World History",
    icon: "🌍",
    color: "#DC2626",
    questionTarget: 700,
    activityTypes: ["multiple_choice", "timeline_ordering"],
  },
  {
    id: "political-history",
    domain: "political-history",
    title: "Political History",
    icon: "🏛️",
    color: "#7C3AED",
    questionTarget: 600,
    activityTypes: ["multiple_choice", "essay"],
  },
  {
    id: "economic-history",
    domain: "economic-history",
    title: "Economic & Social History",
    icon: "📈",
    color: "#059669",
    questionTarget: 500,
    activityTypes: ["multiple_choice"],
  },
  {
    id: "sources-analysis",
    domain: "sources-analysis",
    title: "Sources & Evidence",
    icon: "📜",
    color: "#D97706",
    questionTarget: 500,
    activityTypes: ["multiple_choice", "document_analysis"],
  }
  ],
};
