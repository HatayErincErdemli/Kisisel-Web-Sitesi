import js from "./src/assets/js.jsx";
import react from "./src/assets/react.svg";
import redux from "./src/assets/redux.svg";
import vscode from "./src/assets/vscode.svg";
import node from "./src/assets/node.svg";
import figma from "./src/assets/figma.jsx";
import gridUrl from "./src/assets/GRID.png";
import teknolojikUrl from "./src/assets/teknolojikYemekler.png";
import Figma from "./src/assets/figma.jsx";
export const languages = {
    en:{
        hero:{
            profile_name:"Hatay Erinç Erdemli",
            profile_img:"https://picsum.photos/200",
            intro:"I am a Frontend Devoloper...",
            intro_2:"...who likes to craft solid and scalable frontend products with great user experiences"
        },
        skills:{
            title:"Skills",
            skills_items:[
                {
                    logo:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                    name:"JAVASCRIPT"
                },
                {
                    logo:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                    name:"REACT"
                },
                {
                    logo:"https://cdn.worldvectorlogo.com/logos/redux.svg",
                    name:"REDUX"
                },
                {
                    logo:"https://upload.wikimedia.org/wikipedia/commons/archive/d/d9/20160518085101%21Node.js_logo.svg",
                    name:"NODE"
                },
                {
                    logo:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
                    name:"VS CODE"
                },
                {
                    logo:"https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
                    name:"FIGMA"
                }
            ]
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
            intro:"Got a question or proposal, or just want to say hello? Go ahead!",
            email:"hatayerinc@gmail.com"
        }
    },
    tr: {
        hero:{
            profile_name:"Hatay Erinç Erdemli",
            profile_img:"https://picsum.photos/200",
            intro:"Ben harika kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir...",
            intro_2:"...ön yüz ürünleri oluşturmayı seven bir Ön yüz geliştiricisiyim"
        },
        skills:{
            title:"Yeterlilikler",
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
            title:"Profilim",
            about:"Hakkımda",
            about_content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            info:"Temel Bilgiler",
            info_titles:["Doğum Günü", "İkamet Ettiği Şehir","Eğitim Durumu", "Tercih Ettiği Rol"],
            info_answers:["02.05.1998", "İzmir", "İzmir Katip Çelebi Ünv. Gastronomi ve Mutfak Sanatları Lisans, 2024", "Frontend, UI" ]
        },
        projects:{
            title:"Projeler",
            projects_items:{
                grid:{
                    img:{gridUrl},
                    name:"GRID Oyunu",
                    about_content:"Sağ, sol, yukarı ve aşağı tuşları yardımıyla bir karoyu hareket ettirdiğiniz bir oyun. Bu oyun karoyu kaç kez hareket ettirdiğinizi takip ederek hareket sayısını bir sayaçta gösteriyor.",
                    site_url:"https://fs-web-s9-sprint-challenge-solution-black.vercel.app",
                    github_url:"https://github.com/HatayErincErdemli/FSWeb-S9-Sprint-Challenge-solution"
                },
                teknolojik_yemekler:{
                    img:{teknolojikUrl},
                    name:"Teknolojik Yemekler",
                    about_content:"Single Page Application yaklaşımını benimseyen basit bir pizza sipariş uygulaması.",
                    site_url:"https://teknolojik-yemekler-spa-projesi.vercel.app",
                    github_url:"https://github.com/HatayErincErdemli/Teknolojik-Yemekler-SPA-Projesi"
                }
            }
        },
        footer:{
            title:"Bana bir mesaj gönderin!",
            intro:"Bir sorunuz veya öneriniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? Haydi durmayın!.",
            email:"hatayerinc@gmail.com"
        }
    }
}