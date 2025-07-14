export interface ProfessionalWork {
    description: string;
    projects: Project[];
}

export interface Project {
    title: string;
    description: string;
    workedOn: ProjectItem[];
}

export interface ProjectItem {
    title: string;
    description: string;
}


