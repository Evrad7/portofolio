

export type CertificateType = {
    platform:string,
    title: string, 
    iconPath: string,
    skills: Array<string>,
    link: string
}


const certificates : Array<CertificateType> = [
    {
        platform: "AWS",
        title: "AWS Certified Cloud Practitioner",
        iconPath: "/logo_aws.jpg",
        skills: [
            "Culture Cloud",
            "Connaissance des services AWS",
            "Maitrise des services phares de AWS (EC2, S3, RDS, etc)"
        ],
        link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/86e7a1f90025492f92f059633a0457f2"
    },
      {
        platform: "Mirantis",
        title: "Docker Certified Associate",
        iconPath: "/logo_mirantis.jpg",
        skills: [
            "Docker",
            "Docker Swarm, Kubernetes",
            "Orchestration, déploiement"
        ],
        link: "https://certification.mirantis.com/cf9d7b7f-3a3e-44d9-9937-6171291d33a5"
    },
      {
        platform: "Udemy",
        title: "Elegant Automation Frameworks with Python and Pytest",
        iconPath: "/logo_udemy.png",
        skills: [
            "Pytest, Python, tests logiciels",
            "Test Driven Development (TDD)",
            "Assurance qualité"
        ],
        link: "https://www.udemy.com/certificate/UC-6f2187fd-fd8f-499a-a25e-0929dc565391/"
    },
      {
        platform: "Udemy",
        title: "React Testing Library and Jest: The Complete Guide",
        iconPath: "/logo_udemy.png",
        skills: [
            "React, Jest, Vite",
            "Automatisation",
            "Assurance qualité"
        ],
        link: "https://www.udemy.com/certificate/UC-60f7b43e-9b7f-4be0-a585-80cb67790311/"
    },
      {
        platform: "Udemy",
        title: "Langchain- Develop LLM powered applications with Langchain",
        iconPath: "/logo_udemy.png",
        skills: [
            "LangChain, LangGraph, Python",
            "Intelligence articielle, LLM, NLP",
            "RAG, agent IA"
        ],
        link: "https://www.udemy.com/certificate/UC-838d8eb1-af42-470f-95b9-add07fe81c2c/"
    },
      {
        platform: "KodeKloud",
        title: "Docker Certified Associate Exam Course",
        iconPath: "/logo_kodekloud.jpg",
        skills: [
            "Cloud, Docker",
            "Orchestration, Kubernetes",
        ],
        link: "https://learn.kodekloud.com/certificate/7f6df69c-0d24-46dc-a6b3-1025ddda0a01"
    },
    {
        platform: "Udemy",
        title: "Apprendre à rédiger un cahier des charges",
        iconPath: "/logo_udemy.png",
        skills: [
            "Gestion de projet logiciel",
            "Rédaction du cahier de charge",
            "Méthodes agiles, SCRUM",
        ],
        link: "https://www.udemy.com/certificate/UC-6d7b8dd2-9efc-4bb2-b772-9321dfbaefd9/"
    }
]   


export default certificates