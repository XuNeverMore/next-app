export interface Net {
  icon: string;
  title: string;
  url: string;
  visible?: boolean;
}

export interface NetFolder {
  title: string;
  children: Array<Net>;
}

export const categorys = ["Technology", "Work", "AI Tools", "Design"];
