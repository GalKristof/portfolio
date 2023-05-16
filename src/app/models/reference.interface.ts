export interface Reference {
    id: number;
    hu: {
        name: string;
        desc: string;
    },
    en: {
        name: string;
        desc: string;
    }
    url: string;
    techTags: string[];
    year: number;
    imageName: string;
    githubLink: string | undefined;
}