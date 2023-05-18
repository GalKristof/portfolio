import { Reference } from '../models/reference.interface';

export const referenceList: Reference[] = [
    // {
    //     id: 0,
    //     name: "SzentEndre Gyógyszertár",
    //     desc: "A SzentEndre Gyógyszertár egy 31 éve működő családi vállalkozás. Azzal a céllal kerestek meg, hogy a jelenlegi weboldaluk helyett szeretnének egy újat, ebben segítettem nekik.",
    //     url: "https://szentendregyogyszertar.hu/",
    //     techTags: ["angular", "html", "bootstrap", "typescript", "sass"],
    //     year: 2023,
    //     imageName: "gk",
    //     githubLink: undefined,
    // }, // pillanatnyilag készítés alatt áll
    {
        id: 1,
        hu: {
            name: "Gál Kristóf",
            desc: "A saját portfólió oldalamat is úgy döntöttem, hogy besorolom ide, mivel ezen az oldalon is rengeteg technológiát alkalmaztam és bemutatja képességeimet.",
        },
        en: {
            name: "Kristóf Gál",
            desc: "I also decided to include my portfolio page here, as I have used a lot of technology on this page as well and it shows my skills.",
        },
        url: "https://galkristof.eu/",
        techTags: ["angular", "html", "bootstrap", "typescript", "sass"],
        year: 2023,
        imageName: "gk",
        githubLink: "https://github.com/GalKristof/portfolio",
    },
    {
        id: 2,
        hu: {
            name: "Minden Ami Takarítás Kft.",
            desc: "A Minden Ami Takarítás Kft. weboldalának elkészítése volt az első komolyabb projektem, még 2021-ben. Örültem, hogy megkerestek, mert akkor kezdtem mélyebben belemerülni a webfejlesztésbe, és így az alapokat egyből tudtam alkalmazni valós környezetben.",
        },
        en: {
            name: "Minden Ami Takaritas Kft.",
            desc: "Back in 2021, creating the Minden Ami Takarítás Kft.'s website was my first serious project. I was glad that they contacted me because that's when I started to dive deeper into web development, and then I could immediately apply all of the basics that I've learnt - but in a real environment.",
        },
        url: "https://mindenamitakaritas.hu/",
        techTags: ["html", "css", "bootstrap", "javascript", "php"],
        year: 2021,
        imageName: "mat",
        githubLink: undefined,
    },
    {
        id: 3,
        hu: {
            name: "Lagzi e-meghívó",
            desc: "A legelső weboldalaim egyike. Az ötletet a CodeBerry e-tanfolyama ihlette, elsősorban az animációkra helyeztem a hangsúlyt az oldalon.",
        },
        en: {
            name: "Wedding e-invitation",
            desc: "This site is one of my very first websites. This idea was hugely inspired by the CodeBerry e-course that I took. I mainly focused on the animations when I was creating this page.",
        },
        url: "https://galkristof.eu/wedding",
        techTags: ["html", "css", "javascript", "jquery"],
        year: 2020,
        imageName: "wed",
        githubLink: undefined,
    }
];
