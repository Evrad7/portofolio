type SubSKill = {
  title: string;
  items: Array<string>;
};

export type SkillType = {
  title: string;
  description: string;
  subSkills: SubSKill;
};

const skills: Array<SkillType> = [
  {
    title: "Développement Frontend",
    description:
      "Je conçois et développe des interfaces modernes et ergonomiques pour une expérience fluide et agréable.",
    subSkills: {
      title: "Technologies maîtrisées",
      items: ["JavaScript / TypeScript", "React.js / Angular", "Jest / Vitest"]
    }
  },
  {
    title: "Développement Backend",
    description:
      "Je développe des architectures backend robustes et évolutives, en assurant performance et sécurité.",
    subSkills: {
      title: "Technologies maîtrisées",
      items: [
        "Python / Django Rest Framework / FastAPI",
        "Java / Spring Boot / JEE",
        "Node / Express.js"
      ]
    }
  },
  {
    title: "Conteneurisation et Orchestration",
    description:
      "Je mets en place la conteneurisation et l’orchestration pour assurer la portabilité et la résilience des applications.",
    subSkills: {
      title: "Technologies maîtrisées",
      items: [
        "Docker / Kubernetes",
        "CI/CD / Git / GitHub / Gitlab / Ansible / Terraform"
      ]
    }
  },
  {
    title: "Technologies Cloud",
    description:
      "Je conçois et déploie des solutions cloud flexibles, performantes et sécurisées.",
    subSkills: {
      title: "Technologies maîtrisées",
      items: [
        "AWS / Amazon Web Services",
        "GCP / Google Cloud Platform",
        "Azure"
      ]
    }
  },
  {
    title: "Bases de Données et Data",
    description:
      "Je conçois et administre des bases de données performantes et sécurisées, relationnelles et non relationnelles.",
    subSkills: {
      title: "Technologies maîtrisées",
      items: [
        "SQL / PostgreSQL / MySQL / MongoDB / Redis",
        "PowerBI / Hadoop / Spark / Airflow / Kafka"
      ]
    }
  },
  {
    title: "Compétences Transversales",
    description:
      "Je valorise la collaboration, l’adaptabilité et la communication pour faire avancer les projets efficacement.",
    subSkills: {
      title: "Forces clés",
      items: [
        "Esprit d’équipe / Communication / Agilité",
        "Organisation / Gestion du temps / Rigueur",
        "Adaptabilité / Créativité / Pensée analytique"
      ]
    }
  }
];


export default skills