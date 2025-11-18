export type FormationType = {
    degree: string,
    title: string, 
    school: string,
    skills: string,
}

const formations: Array<FormationType> = [
    {
        degree: "Master",
        title: "Manager en Solutions Digitales et Data",
        school: "3iL Ingénieurs",
        skills: "Gestion de projet et d’équipes, Développement Back-end/Front-end, Analyse de données, Big Data, Data visualisation, etc."
    },
    {
        degree: "Bachelor",
        title: "Conception des Systèmes d’Information / Développement Logiciel Web",
        school: "3iL Ingénieurs",
        skills: "Conception logicielle, Bases de données, Développement Back-end/Front-end/Mobile, Tests logiciels, Orchestration, etc."
    },
]

export default formations