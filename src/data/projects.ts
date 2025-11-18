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
    <p class='pb-4'>
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
    title: "Boutique <span class='font-medium'>E-commerce</span> Full-Stack",
    description: `
      <p class='pb-4'>
        Boutique en ligne complète dédiée à la vente d’articles d’habillement, conue pour un seul vendeur avec un design <strong class='font-bold'>unique</strong> et une interface <strong class='font-bold'>fluide</strong>.  
        L’application <strong class='font-bold'> full-stack </strong> permet une gestion simplifiée du <strong class='font-bold'>stock</strong> et du suivi des commandes.
      </p>
      <p>
        <strong class='font-bold'>Stack de développement :</strong> Python, Django, Cloud, JavaScript, MySQL
      </p>  
           `
    
    ,
    photoPaths: [
       {
        horizontal: "/projects/shop/image-1-shop-horizontal.png",
        vertical: "/projects/shop/image-1-shop-vertical.png",
      },
      {
        horizontal: "/projects/shop/image-2-shop-horizontal.png",
        vertical: "/projects/shop/image-2-shop-vertical.png",
      },
      {
        horizontal: "/projects/shop/image-3-shop-horizontal.png",
        vertical: "/projects/shop/image-3-shop-vertical.png",
      },
    ],
    link: "https://shop.evrad7.dev",
  },

  {
    title: "Postagram - <span class='font-medium'>Réseau Social</span> de Partage",
    description: `
      <p class='pb-4'>
        Mini réseau social dédié au partage de posts, développé avec une séparation stricte entre le <strong class='font-bold'>frontend</strong> et le <strong class='font-bold'>backend</strong> communiquant via une API <strong class='font-bold'>REST</strong>.  
        L’application intègre des mécaniques d’optimisation de la <strong class='font-bold'>disponibilité</strong> grâce à une gestion de <strong class='font-bold'>cache</strong> et l’utilisation d’un <strong class='font-bold'>CDN</strong> pour accélérer le chargement des contenus.
      </p>
      <p>
        <strong class='font-bold'>Stack de développement :</strong> React.js, JavaScript/TypeScript, FastAPI, MySQL, Redis, AWS
      </p>
    `,
    photoPaths: [
       {
        horizontal: "/projects/postagram/image-1-postagram-horizontal.png",
        vertical: "/projects/postagram/image-1-postagram-vertical.png",
      },
      {
        horizontal: "/projects/postagram/image-2-postagram-horizontal.png",
        vertical: "/projects/postagram/image-2-postagram-vertical.png",
      },
 
    ],
    link: "https://postagram.evrad7.dev",
  },
  {
    title: "Architecture <span class='font-medium'>Microservices</span> Docker",
    description: `
    <p class='pb-4'>
      Mise en place d’une architecture <strong class='font-bold'>microservices</strong> déployée dans le <strong class='font-bold'>cloud</strong> avec  <strong class='font-bold'>Docker</strong>, comprenant une API,  frontend, des workers, une base de données relationnelle et des services de
      <strong class='font-bold'>cache</strong> et de <strong class='font-bold'>serveur web</strong>.  
      Le déploiement est automatisé grâce à une pipeline <strong class='font-bold'>CI/CD</strong> implémentée via <strong>GitHub Actions.</strong>
    </p>
    <p>
      <strong class='font-bold'>Stack de développement :</strong> Docker, Cloud, AWS, Python, FastAPI, React.js, Node.js, Express.js, PostgreSQL, Redis, Nginx, GitHub Actions.
    </p>

`,
    photoPaths: [
       {
        horizontal: "/projects/multicontainer/image-1-multicontainer-horizontal.png",
        vertical: "/projects/multicontainer/image-1-multicontainer-horizontal.png",
      },
    ],
    link: "https://github.com/Evrad7/multi-container-app",
  },

   {
    title: "Marketplace B2C <span class='font-medium'>Multi-Vendeurs</span>",
    description: `
      <p class='pb-4'>
        Marketplace réunissant vendeurs et acheteurs sur un système <strong class='font-bold'>modulable</strong>.  
        Chaque vendeur dispose d’un <strong class='font-bold'>espace personnel</strong> et gère sa boutique de manière indépendante, entièrement séparée des autres.  
        Une <strong class='font-bold'>vue d’administration dédiée</strong> permet la gestion autonome des produits, commandes et facturation.  
        La plateforme  <strong class='font-bold'>100% flexible</strong> permet de vendre tout type de produit.
      </p>
      <p>
      <strong class='font-bold'>Stack de développement :</strong>  Python, Django, JavaScript, PostgreSQL, Cloud, AWS
    </p>
    `,
    photoPaths: [
      {
        horizontal: "/projects/marketplace/image-1-marketplace-horizontal.png",
        vertical: "/projects/marketplace/image-1-marketplace-vertical.png",
      },
      {
        horizontal: "/projects/marketplace/image-2-marketplace-horizontal.png",
        vertical: "/projects/marketplace/image-2-marketplace-vertical.png",
      },
      {
        horizontal: "/projects/marketplace/image-3-marketplace-horizontal.png",
        vertical: "/projects/marketplace/image-3-marketplace-vertical.png",
      },
    ],
    link: "https://marketplace.evrad7.dev",
  },
  
  {
    title: "<span class='font-medium'>Logiciel</span> de Pilotage CNC",
    description: `
      <p class='pb-4'>
        <strong class='font-bold'>Logiciel</strong> PC dédié au pilotage de machines à commande numérique (<strong class='font-bold'>CNC</strong>).  
        L’application communique avec la machine via un <strong class='font-bold'>microprocesseur</strong>, analyse le code machine et gère le contrôle <strong class='font-bold'>manuel</strong> et <strong class='font-bold'>automatique</strong> des mouvements.  
              Elle affiche en temps réel la progression du travail ainsi qu’une <strong class='font-bold'>estimation</strong> de la durée restante.
      </p>
      <p>
        <strong class='font-bold'>Stack de développement :</strong> Python, G-Code, Qt, C
      </p>
    `,
    photoPaths: [
        {
        horizontal: "/projects/controller/image-1-controller-horizontal.png",
        vertical: "/projects/controller/image-1-controller-horizontal.png",
      },
    ],
    link: "https://github.com/Evrad7/Machine-CNC-Controller",
  },
];

export default projects;
