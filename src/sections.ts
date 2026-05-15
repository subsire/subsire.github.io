export type SectionId = "research" | "dev-diary" | "wiki";

export interface SectionConfig {
  id: SectionId;
  label: string;
  title: string;
  subtitle: string;
  accent: string;
  accentSoft: string;
}

export const sections: Record<SectionId, SectionConfig> = {
  research: {
    id: "research",
    label: "Research",
    title: "Research",
    subtitle: "Appunti, articoli e ricerche. Un file markdown per ogni voce.",
    accent: "#171717",
    accentSoft: "#f5f5f5",
  },
  "dev-diary": {
    id: "dev-diary",
    label: "Dev Diary",
    title: "Dev Diary",
    subtitle: "Note di sviluppo, decisioni tecniche e cose imparate strada facendo.",
    accent: "#b45309",
    accentSoft: "#fef3c7",
  },
  wiki: {
    id: "wiki",
    label: "Wiki",
    title: "Wiki",
    subtitle: "Voci di riferimento, definizioni, glossario. Un argomento per pagina.",
    accent: "#15803d",
    accentSoft: "#dcfce7",
  },
};

export const sectionOrder: SectionId[] = ["research", "dev-diary", "wiki"];

export const sectionList: SectionConfig[] = sectionOrder.map((id) => sections[id]);
