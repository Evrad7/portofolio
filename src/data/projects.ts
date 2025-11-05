export type PhotoPathsType = {
  horizontal: string;
  vertical: string;
};

export type ProjectType = {
  title: string;
  description: string;
  link: string;
  photoPaths: Array<PhotoPathsType>;
};

const projects: Array<ProjectType> = [
  {
    title: "Site vitrine <span class='font-medium'>moderne</span> pour entreprise",
    description: `
    <p class='pb-8'>
      Un site vitrine <strong class='font-bold'>moderne</strong> et <strong class='font-bold'>fluide</strong> conçu pour présenter de manière originale les activités de l’entreprise DEVTE. L’expérience utilisateur repose sur des <strong class='font-bold'>animations créatives</strong> et un design <strong class='font-bold'>épuré</strong>, valorisant le contenu tout en renforçant l’identité de marque. L’application utilise le <strong class='font-bold'>rendu côté serveur (SSR)</strong> pour améliorer le <strong class='font-bold'>SEO</strong> et les <strong class='font-bold'>performances</strong>.
    </p>
    <p>
      <strong class='font-bold'>Stack de développement :</strong> JavaScript / TypeScript, React.js, Node.js, Express, Webpack.
    </p>
    `,
    photoPaths: [
      {
        horizontal: "/projects/devte/image-1-devte-website-horizontal.png",
        vertical: "/projects/devte/image-1-devte-website-vertical.png",
      },
      {
        horizontal: "/projects/devte/image-2-devte-website-horizontal.png",
        vertical: "/projects/devte/image-2-devte-website-vertical.png",
      },
      {
        horizontal: "/projects/devte/image-3-devte-website-horizontal.png",
        vertical: "/projects/devte/image-3-devte-website-vertical.png",
      },
    ],
    link: "https://devte.tech",
  },
  {
    title: "Marketplace B2C <span class='font-medium'>Multi-Vendeurs</span>",
    description:
      "Une marketplace complète facilitant la mise en relation entre acheteurs et vendeurs, avec gestion des produits, des paiements et des profils.",
    photoPaths: [
      {
        horizontal: "/marketplace_project.png",
        vertical: "/marketplace_project-vertical.png",
      },
      {
        horizontal: "/marketplace_project.png",
        vertical: "/marketplace_project-vertical.png",
      },
      {
        horizontal: "/marketplace_project.png",
        vertical: "/marketplace_project-vertical.png",
      },
    ],
    link: "https://devte.tech",
  },
  {
    title: "Boutique <span class='font-medium'>E-commerce</span> Full-Stack",
    description:
      "Une solution de boutique en ligne performante avec gestion des stocks, panier, commandes et intégration de passerelles de paiement.",
    photoPaths: [
      {
        horizontal: "/shop_project.png",
        vertical: "/shop_project-vertical.png",
      },
    ],
    link: "https://devte.tech",
  },
  {
    title: "Postagram - <span class='font-medium'>Réseau Social</span> de Partage Visuel",
    description:
      "Un réseau social innovant pour partager du contenu visuel, interagir avec des posts et gérer une communauté en ligne.",
    photoPaths: [
      {
        horizontal: "/postagram_project.png",
        vertical: "/postagram_project-vertical.png",
      },
    ],
    link: "https://devte.tech",
  },
  {
    title: "Architecture <span class='font-medium'>Microservices</span> Docker",
    description:
      "Une architecture Docker multi-conteneurs optimisée pour le déploiement d'applications modulaires et scalables.",
    photoPaths: [
      {
        horizontal: "/multicontenair_project.png",
        vertical: "/multicontenair_project-vertical.png",
      },
    ],
    link: "https://devte.tech",
  },
  {
    title: "<span class='font-medium'>Logiciel</span> de Pilotage CNC",
    description:
      "Une application web de gestion et de supervision pour machines CNC, permettant de suivre la production en temps réel.",
    photoPaths: [
      {
        horizontal: "/cnc_project.png",
        vertical: "/cnc_project-vertical.png",
      },
    ],
    link: "https://devte.tech",
  },
];

export default projects;
