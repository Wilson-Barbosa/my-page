import { ProfessionalWork, Project } from "./models";

const coursePlataform: Project = {

    title: "Educational platform",
    description: "website with coding classes, including Angular and Spring Frameworks as well as SQL.",

    workedOn: [
        {
            title: "Certificate emission",
            description: "I Implemented a system where students could request and receive a certificate upon course completion. The document's design was also created by me using JasperReports. To prevent falsifications a validation feature was implemented as well."
        },
        {
            title: "Notification and announcement",
            description: "I create a feature where the system would emit notifications for users once a project was completed or a new post was created. It also supported announcement creation, where platform admins could send important announcements for all students."
        },
        {
            title: "Email system upgrade",
            description: "I refactored the old email module to acommodate the new notification system, while updating previous templates, making the old and new emails more clear for users, using the Twilio SendGrid service."
        },
        {
            title: "Course progress feedback",
            description: "To improve UX, I updated the old course feedback system to allow users to better follow their progress by tracking video-class completion, user-project feedback and allowing students to continue from where they last where."
        },
        {
            title: "Video player transition",
            description: "Worked on the partial transition from the previous video player to an Angular-made video player to improve UX and provide funcionalities like automatic class' completion."
        }

    ]

};

const gradutationProject: Project = {
    title: "Graduation project",
    description: "platform for non-intrusive, targeted ads.",

    workedOn: [
        {
            title: "Security system",
            description: "I implemented a security system using STATELESS authentication with JWT and Spring's OAuth2 implementations of resource and authorization servers."
        },
        {
            title: "Google services integration",
            description: "Integration with GoogleAPIs, using Google's OAuth2 implementation and YouTube's Data APIs, such as Analylicts and V3 API."
        },
    ]
}

const softwareFactory: Project = {
    title: "Software Factory",
    description: "project in development at my College (FATEC).",

    workedOn: [
        {
            title: "Documentation",
            description: "I worked in the conception phase of a political platform. My responsabilities amounted to creating UML and non-UML documents like UseCase Diagrams and Persona Creation. Also, I created the prototype's screens using Figma. During this time I also participated in meetings with my colleagues and the professor responsible for managing the project."
        },
    ]
}

export const abutuaInternship: ProfessionalWork = {
    description: "Intership at Abútua Technology: may/2024 - currently",
    projects: [
        coursePlataform, gradutationProject, softwareFactory
    ]
}
