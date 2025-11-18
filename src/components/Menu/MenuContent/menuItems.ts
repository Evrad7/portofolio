export type MenuItemType = {
    href: string,
    title: string,
    subItems: Array<string>,
    animationDelayOnOpen?: number,
    animationDelayOnClose?: number
}
type MenuItemsType = Array<MenuItemType>


 const menuItems : MenuItemsType= [
    {
        href: "projects",
        title: "Projets ",
        subItems: [
            "Présentation d'activité d'entreprise", 
            "Vente en ligne",
            "Réseau social, etc."
        ]
    },
    {
        href: "skills",
        title: "Compétences",
        subItems: [
            "développement frontent et backend", 
            "orchestration et data",
            "technologies cloud"
        ]
    },

     {  
        href: "certificate",
        title: "Certifications",
        subItems: [
            "Certifications Cloud", 
            "Certifications Docker",
            "Certifications développement"
        ]
    },
    //  {
    //     href: "reference",
    //     title: "Quelques références",
    //     subItems: [
    //         "Claudine Chaplais", 
    //         "Yassine ....",
    //         "Estephania Delgadillo"
    //     ]
    // },
     {
        href: "experience-and-education",
        title: "Expérences & formations",
        subItems: [
            "Expériences en extreprise", 
            "Niveau d'étude"
        ]
    },
     {
        href: "contact",
        title: "Contact",
        subItems: [
            "Formulaire de contact",
            "LinkedIn, Email, Tel, Github"
        ]
    }
  ]

  export default menuItems
