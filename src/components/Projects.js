import './../App.css';
import './../css/project.css';
import { useEffect, useState } from "react";

import ProjectCard from './ProjectCard';
import MiniProjectCard from './MiniProjectCard';

function Projects(props) {
    const projects = [
        {
            number: 1,
            title: "eDowozka",
            smallDescription: "Startup, dzięki któremu możesz zamówić zakupy z supermarketu z dostawą do domu.",
            description: "<p>Startup, którego jestem współwłaścicielem. Na stronie internetowej klient może skompletować koszyk produktów z jednego ze sklepów, który wybierze (np. Lidl, Biedronka), następnie wybiera termin dostawy i oczekuje na dostawę przez kuriera. Kurier kompletuje koszyk z pomocą specjalnej aplikacji, w której otrzymuje wszystkie potrzebne informacje. Cały proces można śledzić i edytować w panelu administratora.</p>" +
                         "<p>Strona internetowa została napisana w JS, React. Aplikacja dla kuriera jest dostępna na urządzenia z systemem Android, napisana w Kotlinie. Backend został napisany w PHP.</p>" +
                         "<span>Cały projekt został wykonany od podstaw przeze mnie.</span>",
            technologies: ["react", "php", "mysql"],
            mini_img: "https://astankiewicz.netlify.app/images/PROJECT_EDOWOZKA/1.jpg",
            page_address: "https://edowozka.pl/",
            github_address: "",
            display_devices: {
                computer_images: ["https://astankiewicz.netlify.app/images/PROJECT_EDOWOZKA/1.jpg",
                                  "https://astankiewicz.netlify.app/images/PROJECT_EDOWOZKA/2.jpg",
                                  "https://astankiewicz.netlify.app/images/PROJECT_EDOWOZKA/3.jpg",
                                  "https://astankiewicz.netlify.app/images/PROJECT_EDOWOZKA/4.jpg",
                                  "https://astankiewicz.netlify.app/images/PROJECT_EDOWOZKA/5.jpg",
                                  "https://astankiewicz.netlify.app/images/PROJECT_EDOWOZKA/6.jpg"
                              ],
               computer_images_2: ["https://astankiewicz.netlify.app/images/PROJECT_EDOWOZKA/2_1.jpg",
                                   "https://astankiewicz.netlify.app/images/PROJECT_EDOWOZKA/2_2.jpg",
                                   "https://astankiewicz.netlify.app/images/PROJECT_EDOWOZKA/2_3.jpg",
                                   "https://astankiewicz.netlify.app/images/PROJECT_EDOWOZKA/2_4.jpg",
                                   "https://astankiewicz.netlify.app/images/PROJECT_EDOWOZKA/2_5.jpg"
                            ],
                
            },
            display_headers: ['Strona do zamawiania', 'Panel administratora']
        },
        {
            number: 2,
            title: "Aplikacja kurierska",
            smallDescription: "Aplikacja dla kuriera, która pomaga w kompletowaniu zakupów.",
            description: "<p>Kurier otrzymuje powiadomienie o otrzymaniu zlecenia, może wtedy przeglądać produkty przypisane do zlecenia i zatwierdzać ich znalezienie lub brak.</p>" +
                         "<span>W aplikacji zawarte są informacje o zarobkach kuriera i wykonanych zleceniach.</span>",
            technologies: ["kotlin"],
            mini_img: "https://astankiewicz.netlify.app/images/PROJECT_EDOWOZKA/3_0.jpg",
            page_address: "",
            github_address: "",
            display_devices: {
                mobile_images: ["https://astankiewicz.netlify.app/images/PROJECT_EDOWOZKA/3_1.jpg",
                "https://astankiewicz.netlify.app/images/PROJECT_EDOWOZKA/3_2.jpg",
                "https://astankiewicz.netlify.app/images/PROJECT_EDOWOZKA/3_3.jpg",
                "https://astankiewicz.netlify.app/images/PROJECT_EDOWOZKA/3_4.jpg",
                "https://astankiewicz.netlify.app/images/PROJECT_EDOWOZKA/3_5.jpg",
                "https://astankiewicz.netlify.app/images/PROJECT_EDOWOZKA/3_6.jpg",
                "https://astankiewicz.netlify.app/images/PROJECT_EDOWOZKA/3_7.jpg",]
            },
            display_headers: ['Aplikacja android']
        },
        {
            number: 3,
            title: "Portfolio",
            smallDescription: "Strona na której jesteś.",
            description: "<span>Portfolio zostało napisane przy użyciu biblioteki js - React. Przy tworzeniu niektórych animacji na stronie korzystałem z biblioteki p5js.</span>",
            technologies: ["react"],
            mini_img: "https://astankiewicz.netlify.app/images/PROJECT_PORTFOLIO/0.jpg",
            page_address: "https://astankiewicz.netlify.app/",
            github_address: "https://github.com/Zawodowo/Portfolio",
            display_devices: {
                computer_images: [
                    "https://astankiewicz.netlify.app/images/PROJECT_PORTFOLIO/0.jpg",
                    "https://astankiewicz.netlify.app/images/PROJECT_PORTFOLIO/1.jpg",
                    "https://astankiewicz.netlify.app/images/PROJECT_PORTFOLIO/2.jpg",
                    "https://astankiewicz.netlify.app/images/PROJECT_PORTFOLIO/3.jpg",
                    "https://astankiewicz.netlify.app/images/PROJECT_PORTFOLIO/4.jpg",
                    "https://astankiewicz.netlify.app/images/PROJECT_PORTFOLIO/5.jpg",
                            ],
            },
            display_headers: ['Strona portfolio']
        },
        {
            number: 4,
            title: "Visual of sorting algorithms",
            smallDescription: "Wizualna reprezentacja różnych algorytmów sortowania.",
            description: "<p>Strona, która pokazuje w jaki sposób poszczególne algorytmy sortują tablice liczb.</p>" +
                         "<span>Użytkownik może wybrac z jakiego zbioru i ile liczb ma zostać wylosowanych, a nastepnie typ algorytmu oraz prędkość kroków.</span>",
            technologies: ["react"],
            mini_img: "https://astankiewicz.netlify.app/images/PROJECT_VISUAL/0.jpg",
            page_address: "https://v-sorting.netlify.app/",
            github_address: "https://github.com/Zawodowo/sorting",
            display_devices: {
                computer_images: ["https://astankiewicz.netlify.app/images/PROJECT_VISUAL/0.jpg",
                                    "https://astankiewicz.netlify.app/images/PROJECT_VISUAL/1.jpg",
                                    "https://astankiewicz.netlify.app/images/PROJECT_VISUAL/2.jpg"]
            },
            display_headers: ['Strona']
        },
        {
            number: 5,
            title: "Barcode Scanner",
            smallDescription: "Aplikacja, która pomaga w obsłudze i zmianie danych w bazie danych dzięki skanowaniu kodu kreskowego.",
            description: "<p>Użytkownik może zeskanować kod kreskowy produktu, w odpowiedzi dostaje informacje o tym produkcie, zawarte w bazie danych.</p>" +
                            "<span>Dzięki aplikacji można również edytować i dodawać nowe produkty do bazy.</span>",
            technologies: ["kotlin"],
            mini_img: "https://astankiewicz.netlify.app/images/PROJECT_BARCODE_SCANNER/0.jpg",
            page_address: "",
            github_address: "",
            display_devices: {
                mobile_images: ["https://astankiewicz.netlify.app/images/PROJECT_BARCODE_SCANNER/1.jpg",
                "https://astankiewicz.netlify.app/images/PROJECT_BARCODE_SCANNER/2.jpg",
                "https://astankiewicz.netlify.app/images/PROJECT_BARCODE_SCANNER/3.jpg",
                "https://astankiewicz.netlify.app/images/PROJECT_BARCODE_SCANNER/4.jpg"]
            },
            display_headers: ['Aplikacja android']
        },
    ];

    const mini_projects = [
        {
            number: 1,
            title: "Snake game",
            smallDescription: "Prosta gra Snake napisana w JavaScript.",
            technologies: ["js"],
            github_link: "https://github.com/Zawodowo/snake",
            page_link: "https://snakegame-as.netlify.app/"
        },
        {
            number: 2,
            title: "Animacja matrix",
            smallDescription: "Animacja inspirowana matrixem. Napisana przy użyciu biblioteki p5js.",
            technologies: ["js"],
            github_link: "https://github.com/Zawodowo/matrix_animation",
            page_link: "https://astankiewicz.netlify.app/errorshowpage"
        },
        {
            number: 3,
            title: "Web scrapper",
            smallDescription: "Przykład web scrappera, dzięki któremu pobrane i zapisane do pliku zostają produkty z danej strony (ich nazwa, link, cena, producent itp.).",
            technologies: ["python"],
            github_link: "https://github.com/Zawodowo/WebScrapper",
            page_link: ""
        },
        {
            number: 5,
            title: "Twitch clips downlader",
            smallDescription: "Skrypt, który pobiera najpopularniejsze clipy ze streamów, ze strony twitch.tv. Użytkownik może wybrać kanały, z których mają być pobierane clipy. Dodatkowo zapisywane do pliku tekstowego są tytuły i inne dane z clipu.",
            technologies: ["python"],
            github_link: "https://github.com/Zawodowo/top_ttv_clips_downloader",
            page_link: ""
        },
        {
            number: 4,
            title: "Top clips movie maker",
            smallDescription: "Skrypt, który automatycznie skleja najpopularniejsze clipy w cały filmik. Dodatkowo dodawane są efekty przejścia, tytuł i nazwa streamera w odpowiednich momentach filmu. Wygenerowany plik tekstowy zawiera opis filmu (wszystkie dane, timestampy, adresy URL do clipów).",
            technologies: ["python"],
            github_link: "https://github.com/Zawodowo/top_clips_movie",
            page_link: ""
        }
    ]

    return (
        <div className='projects-container-bg'>
            <div className="projects-container" id="projects-container">
                <div>
                    <h1 className="category-title-header">PROJECTS</h1>
                </div>
                {
                    projects.map(p => 
                        <ProjectCard scrollY={props.scrollY} data={p} key={p.number}/>
                    )
                }
            </div>
            <div className="projects-container" id="projects-container">
                <div>
                    <h1 className="category-title-header">MINI PROJECTS</h1>
                </div>
                <div className='mini-projects-container'>
                    {
                        mini_projects.map(p =>
                            <MiniProjectCard scrollY={props.scrollY} data={p} key={p.number}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Projects;
