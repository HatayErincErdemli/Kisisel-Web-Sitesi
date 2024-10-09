import js from "./assets/js.svg";
import react from "./assets/react.svg";
import redux from "./assets/redux.svg";
import vscode from "./assets/vscode.svg";
import node from "./assets/node.svg";
import figma from "./assets/figma.svg";
import gridUrl from "./assets/GRID.png";
import teknolojikUrl from "./assets/teknolojikYemekler.png";
export const languages = {
    en:{
        hero:{
            profile_name:"Hatay Erinç",
            profile_img:"https://picsum.photos/200",
            intro:"I am a Frontend Devoloper...",
            intro_2:"...who likes to craft solid and scalable frontend products with great user experiences"
        },
        skills:{
            title:"Skills",
            skills_items:{
                javascript:{
                    logo:{js},
                    name:"JAVASCRIPT"
                },
                react:{
                    logo:{react},
                    name:"REACT"
                },
                redux:{
                    logo:{redux},
                    name:"REDUX"
                },
                vscode:{
                    logo:{node},
                    name:"NODE"
                },
                javascript:{
                    logo:{vscode},
                    name:"VS CODE"
                },
                javascript:{
                    logo:{figma},
                    name:"FIGMA"
                }
            }
        },
        profile:{
            title:"Profile",
            about:"About Me",
            about_content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            info:"Basic Information",
            info_titles:["Birthday", "City ​​of Residence","Educational Background", "Preferred Role"],
            info_answers:["02.05.1998", "İzmir", "İzmir Katip Çelebi Uni Gastronomy and Culinary Arts Degree, 2024", "Frontend, UI" ]
        },
        projects:{
            title:"Projects",
            projects_items:{
                grid:{
                    img:{gridUrl},
                    name:"GRID Game",
                    about_content:"A game where you can move a tile by using left, right, up or down buttons. Game checks how many moves you have made and shows you the amount on a counter.",
                    site_url:"https://fs-web-s9-sprint-challenge-solution-black.vercel.app",
                    github_url:"https://github.com/HatayErincErdemli/FSWeb-S9-Sprint-Challenge-solution"
                },
                teknolojik_yemekler:{
                    img:{teknolojikUrl},
                    name:"Teknolojik Yemekler",
                    about_content:"A simple pizza ordering single page application (SPA) project.",
                    site_url:"https://teknolojik-yemekler-spa-projesi.vercel.app",
                    github_url:"https://github.com/HatayErincErdemli/Teknolojik-Yemekler-SPA-Projesi"
                }
            }
        },
        footer:{
            title:"Send me a message!",
            intro:"Got a question or proposal, or just want to say hello? Go ahead.",
            email:"hatayerinc@gmail.com"
        }
    },
    tr: {
        hero:{},
        skills:{},
        profile:{},
        projects:{},
        footer:{}
    }
}