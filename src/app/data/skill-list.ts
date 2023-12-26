import { Skill } from '../models/skill.interface';

const IconBaseURL = "assets/images/icons/";

export const skillList: Skill[] = [
    { img_url: `${IconBaseURL}dotnet.svg` , img_alt: `.NET` },
    { img_url: `${IconBaseURL}csharp.svg`, img_alt: `C#` },
    { img_url: `${IconBaseURL}signalr.svg`, img_alt: "Websocket SignalR"},
    { img_url: `${IconBaseURL}mssql.svg`, img_alt: "Microsoft SQL Server"},
    { img_url: `${IconBaseURL}aspnet.svg`, img_alt: "ASP.NET"},
    { img_url: `${IconBaseURL}nunit.svg`, img_alt: "NUnit - .NET Unit Testing"},
    { img_url: `${IconBaseURL}angular.svg`, img_alt: `Angular` },
    { img_url: `${IconBaseURL}typescript.svg`, img_alt: `TypeScript` },
    { img_url: `${IconBaseURL}bootstrap.svg`, img_alt: `Bootstrap` },
    { img_url: `${IconBaseURL}sass.svg`, img_alt: `SASS` },
    { img_url: `${IconBaseURL}jira.svg`, img_alt: `Jira` },
    { img_url: `${IconBaseURL}gitlab.svg`, img_alt: `GitLab` }
];
