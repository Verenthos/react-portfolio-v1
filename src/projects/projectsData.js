import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/aoa.mp4";


const projects = {
    1: {
        title: "Portfólio",
        media: projectOne,
        isVideo: false,
        description: (
            <>
                <>A proposta foi desenvolver um website visualmente atraente e fácil de navegar, destacando meus projetos e habilidades. (Javascript, React, HTML, CSS,)</>
            </>
        ),
        github: "https://github.com",
        demo: "https://hector-seibel-pereira-portfolio.netlify.app",
        
    },
    2: {
        title: "Ordem Dos Livros",
        media: projectTwo,
        isVideo: false,
        description: (
            <>
                <>Neste projeto, criei o site "Ordem dos Livros" para ajudar os usuários a descobrir a ordem de leitura de suas séries favoritas e ser direcionados para a Amazon. Utilizei React para uma navegação simples e intuitiva. (JavaScript, HTML, CSS, React)</>
            </>
        ),
        github: "https://github.com/Verenthos/ordemdelivros",
        demo: "https://ordem-de-livros.netlify.app/",
        
    },
    3: {
        title: "Desenvolvimento de Interfaces Responsivas",
        media: projectThree,
        isVideo: true,

        description: (
            <>
                <>Este projeto apresenta um menu responsivo desenvolvido como freelancer para uma visual novel, com foco em uma navegação fluida e design atraente. Utilizei Python para lógica de navegação e Ren'Py para animações e transições. (Python, Ren'Py)</>
            </>
        ),
        github: "https://github.com/",
        demo: "https://hector-seibel-pereira-portfolio.netlify.app",
        
    },
}

export default projects;
