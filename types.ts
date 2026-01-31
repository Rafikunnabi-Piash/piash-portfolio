
export interface Education {
  degree: string;
  institution: string;
  status?: string;
  year?: string;
  cgpa?: string;
  gpa?: string;
  group?: string;
}

export interface Experience {
  role: string;
  organization: string;
  duration: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  role?: string;
  technologies: string[];
  description: string[];
  link: string;
}

export interface SkillSet {
  programming_languages: string[];
  web_development: string[];
  database: string[];
  tools_platforms: string[];
}

export interface Certification {
  title: string;
  organization: string;
  date: string;
}
