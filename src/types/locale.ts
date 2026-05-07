interface ILocale {
  aside: Aside;
  profile: Profile;
  keywords: Keywords;
  aboutApp: AboutApp;
  aboutMe: AboutMe;
  projectList: ProjectList;
  workExperience: WorkExperience;
}

export type Locale = ILocale | null;

export interface Aside {
  downloadCv: string;
  lang: string;
  theme: Theme;
}

export interface Theme {
  dark: string;
  light: string;
  title: string;
}

export interface Profile {
  name: KeyValue;
  age: Age;
  city: KeyValue;
  socialMedia: SocialMedia[];
  level: KeyValue;
  english: KeyValue;
  specialization: KeyValue;
  salary: KeyValue;
  employment: KeyValue;
  location: KeyValue;
}

export interface KeyValue {
  key: string;
  value: string;
}

export interface Age {
  key: string;
  birthDate: string;
}

export interface SocialMedia {
  key: string;
  value: string;
  url: string;
}

export interface Keywords {
  title: string;
  buzzWords: BuzzWord[];
}

export interface BuzzWord {
  name: string;
  status: 'info' | 'ok' | 'error';
}

export interface AboutApp {
  title: string;
  description: string;
}

export interface AboutMe {
  title: string;
  facts: string[];
}

export interface ProjectList {
  title: string;
  items: ProjectGroup[];
}

export interface ProjectGroup {
  groupName: string;
  projects: Project[];
}

export interface Project {
  link: string;
  name: string;
  description: string;
}

export interface WorkExperience {
  title: string;
  responsibilities: string;
  techStack: string;
  list: JobExperience[];
}

export interface JobExperience {
  name: string;
  specialization: string;
  link: string;
  duration: string;
  responsibilities: string[];
  stack: string[];
}
