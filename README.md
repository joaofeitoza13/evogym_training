# EvoGym Training

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/joaofeitoza13/evogym_training/blob/main/LICENSE) 
[![](https://img.shields.io/endpoint?url=https://cloudflare-pages-badges.joaofeitoza-13.workers.dev/?projectName=evogym-training)](https://evogym-training.pages.dev/)
![lastest-tag](https://img.shields.io/github/v/tag/joaofeitoza13/evogym_training)
![latest-release](https://img.shields.io/github/v/release/joaofeitoza13/evogym_training)

## Brief:

[EvoGym](https://evogym-training.pages.dev/) consists of a fluid and responsive landing page for gym business. It's designed to converted and attrach more clients by using interesting buttons and semantic links to redirect the user to signup/register process.

<br/>

### Table of Contents:
* [Description](#description)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Tools](#tools)
* [Author](#author)
* [Credits](#credits)

<br/>

## Description:

Site link: [EvoGym](https://evogym-training.pages.dev/)

This project takes advantage of the [Framer Motion](https://www.npmjs.com/package/framer-motion) library to easily create transitions and [React Anchor Link Smooth Scroll](https://www.npmjs.com/package/react-anchor-link-smooth-scroll) to navigate smoothly between the relevant topics of the page.
It also has a functional form with a toast notification to create a visual feedback of the submission.

The site current version is fully responsive, preserving it's functionalities and displaying all relevant information.

The main features are: 
- Transitions in the navigation bar and the menu;
- Self-made carousel;
- Form with nice styling and validation using [Zod](https://zod.dev/) and [React-hook-form](https://react-hook-form.com/get-started);
- Self-made Toast Notification displaying the form submission status using modals and [React Portals](https://react.dev/reference/react-dom/createPortal).

<br/>

## Technologies:

##### Languages and Libraries:
>![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
>
>![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)

##### Some dependencies:
>![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/joaofeitoza13/evogym_training/react-anchor-link-smooth-scroll?color=pink&style=flat-square)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/joaofeitoza13/evogym_training/react-hook-form?color=lightblue&logo=react-hook-form&style=flat-square)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/joaofeitoza13/evogym_training/framer-motion?color=pink&style=flat-square)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/joaofeitoza13/evogym_training/zod?color=pink&style=flat-square)

<br/>

## Screenshots:

##### Web Layout
![HomePage](https://i.imgur.com/LNLAyQU.png)

![Carousel](https://i.imgur.com/sQvmOEu.png)

![CarouselActive](https://i.imgur.com/TzTBOjZ.png)

![Form](https://i.imgur.com/n8eXjDs.png)

##### Mobile Layout
![MobileHomePage](https://i.imgur.com/mJKz3iW.png)

![ToggleSideBar](https://i.imgur.com/4LxMtv8.png)

##### Navigation demo: (Kinda tricky to add the [gif](https://i.imgur.com/G7gVZky.gif))
![Imgur](https://i.imgur.com/G7gVZky.gif)

<br/>

## Setup:

##### Pre-requisites: 
- [git](https://git-scm.com/downloads)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

```bash
# clone repository
git clone https://github.com/joaofeitoza13/evogym_training

# navigate to project's folder
cd evogym_training

# install dependencies
npm i

# run project
npm run dev

```

<br/>

## Tools:

>##### Development tools:
>![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![Fedora](https://img.shields.io/badge/Fedora-294172?style=for-the-badge&logo=fedora&logoColor=white)
![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)
>
>![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
>
>![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Vim](https://img.shields.io/badge/VIM-%2311AB00.svg?style=for-the-badge&logo=vim&logoColor=white)
>
>![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)
![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)
>
>##### Readme Tools:
>
>![Obsidian](https://img.shields.io/badge/Obsidian-%23483699.svg?style=for-the-badge&logo=obsidian&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
>
>##### Build Tools:
>
>![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
>
>##### Deployment Plataform:
>
>![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)
>
>##### Logos and Arts Creation:
>
>![Gimp Gnu Image Manipulation Program](https://img.shields.io/badge/Gimp-657D8B?style=for-the-badge&logo=gimp&logoColor=FFFFFF)

<br/>

## Author

>
>João Feitoza Bisneto
>
>[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joao-feitoza/)
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/joaofeitoza13)

<br/>

## Credits

>This project is based on the [EdRoh](https://www.youtube.com/@EdRohDev)'s [project](https://github.com/ed-roh/gym-typescript).
