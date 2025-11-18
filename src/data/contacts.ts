
export type ContactType = {
    network: string,
    link:string;
    handle:string,
}


const contacts : Array<ContactType> = [
    {
        network: "LinkedIn",
        link:"https://www.linkedin.com/in/evrad7",
        handle:"@evrad7"
    },
    {
        network: "Email",
        link:"mailto:tsoataevrad7@gmail.com",
        handle:"@evrad7"
    },
    {
        network: "GitHub",
        link:"https://github.com/Evrad7",
        handle:"@evrad7"
    },
    {
        network: "Téléphone",
        link: "tel:+33664455949",
        handle:"+33 664 45 59 49",
    },
]

export default contacts