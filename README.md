<h1 align="center">
  <img src="./assets/favicon.png" alt="icon" width="200"></img>
  <br>
  <b>1st. QUANBLUE's Portfolio</b>
</h1>

<p align="center">My first portfolio project using MERN stack</p>

<!-- Badges -->
<p align="center">
  <a href="https://github.com/QuanBlue/Portfolio/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/QuanBlue/Portfolio" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/QuanBlue/Portfolio" alt="last update" />
  </a>
  <a href="https://github.com/QuanBlue/Portfolio/network/members">
    <img src="https://img.shields.io/github/forks/QuanBlue/Portfolio" alt="forks" />
  </a>
  <a href="https://github.com/QuanBlue/Portfolio/stargazers">
    <img src="https://img.shields.io/github/stars/QuanBlue/Portfolio" alt="stars" />
  </a>
  <a href="https://github.com/QuanBlue/Portfolio/issues/">
    <img src="https://img.shields.io/github/issues/QuanBlue/Portfolio" alt="open issues" />
  </a>
  <a href="https://github.com/QuanBlue/Portfolio/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/QuanBlue/Portfolio.svg" alt="license" />
  </a>
</p>

<p align="center">
  <b>
      <a href="#demo">Demo</a> •
      <a href="https://github.com/QuanBlue/Portfolio">Documentation</a> •
      <a href="https://github.com/QuanBlue/Portfolio/issues/">Report Bug</a> •
      <a href="https://github.com/QuanBlue/Portfolio/issues/">Request Feature</a>
  </b>
</p>

<br/>

<div align="center">
  <div>
    <img src="./assets/pc-demo.gif" height="350" alt="pc demo"/>
    <div>
      <i>PC demo</i>
    </div>
  </div>
  <br/>
  <div >
    <img src="./assets/mobile-demo.gif" height="450" alt="mobile demo"/>
    <div>
      <i>Mobile demo</i>
    </div>
  </div>
</div>

<details open>
<summary><b>📖 Table of Contents</b></summary>

- [:film\_projector: Demo](#film_projector-demo)
- [:star: Key features](#star-key-features)
- [:toolbox: Getting start](#toolbox-getting-start)
  - [:pushpin: Prerequisites](#pushpin-prerequisites)
  - [:key: Environment Variables](#key-environment-variables)
  - [:hammer\_and\_wrench: Run locally](#hammer_and_wrench-run-locally)
  - [:whale: Run with Docker compose](#whale-run-with-docker-compose)
  - [:whale: Run with Docker](#whale-run-with-docker)
- [:world\_map: Roadmap](#world_map-roadmap)
- [:busts\_in\_silhouette: Contributors](#busts_in_silhouette-contributors)
- [:sparkles: Credits](#sparkles-credits)
- [:scroll: License](#scroll-license)
- [:link: Related Projects](#link-related-projects)
</details>

# :film_projector: Demo

Check out deployed app:

-  Frontend: [https://quanblue.herokuapp.com/](https://quanblue.herokuapp.com/)
-  Server: [https://portfolio-n0cz.onrender.com](https://portfolio-n0cz.onrender.com)

# :star: Key features

-  Responsive - Dynamic responsive for all devices (mobile, desktop)
-  MERN stack - **M**ongoDB - **E**xpressJS - **R**eactJS - **N**odeJS

# :toolbox: Getting start

## :pushpin: Prerequisites

-  NodeJS `>= v14.17.3`
-  npm `>=8.3.1`

## :key: Environment Variables

To run this project, you need to add the following environment variables to your `.env` :

-  **Server configs:** Create `.env` file in `./`

   -  `DB_CONNECT`: API key of MongoDB to connect MongoDB's database.

   Example:

   ```sh
   # .env
   #  Guess credentials key (Read only)
   DB_CONNECT = mongodb+srv://guess:0aGRADHax24DXzCL@cluster0.wgaas.mongodb.net/portfolio
   ```

-  **Client configs (Optional):** Create `.env` file in `./client`

   -  `REACT_APP_SERVER_URL`: URL of server.

   Example:

   ```sh
   # .env
   # Server URL or Empty if run server locally
   REACT_APP_SERVER_URL = https://portfolio-n0cz.onrender.com
   ```

You can also check out the file `.env.example` to see all required environment variables.

> **Note**: If you want to use this example environment, you need to rename it to `.env`.

## :hammer_and_wrench: Run locally

To clone and install dependencies of this application, you'll need [Git](https://git-scm.com) and [NodeJS](https://nodejs.org/en) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/QuanBlue/Portfolio.git

# Go into the repository
cd Portfolio

# Install client and server dependencies
npm run install-dependency
```

Run client and server separately in 2 terminals:  
Client is running on port 3000

```sh
# Run client
npm run client
```

Server is running on port 5000

```sh
# Run server
npm run server
```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## :whale: Run with Docker compose

```sh
docker-compose up
```

Then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## :whale: Run with Docker

Run server

```sh
docker run -d -p 5000:5000 --name portfolio-server ghcr.io/quanblue/portfolio-server:latest
```

Run client

```sh
docker run -d -p 3000:3000 --name portfolio-client ghcr.io/quanblue/portfolio-client:latest
```

# :world_map: Roadmap

-  [x] Update theme
-  [x] Emoji
-  [x] Dockerize project
-  [ ] Continuous delivery - Github Actions
   -  [ ] Deploy to Netlify and Render
   -  [ ] Deploy package
-  [ ] Add more features

# :busts_in_silhouette: Contributors

<a href="https://github.com/QuanBlue/Portfolio/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=QuanBlue/Portfolio" />
</a>

Contributions are always welcome!

# :sparkles: Credits

This software uses the following open source packages:

-  [ReactJS](https://react.dev/) - Frontend
-  [ExpressJS](https://expressjs.com/) - Backend
-  [Node.js](https://nodejs.org/) - Environment
-  [npm](https://www.npmjs.com/) - Package manager

This software deployed by the following hosting services:

-  [Netlify](https://www.netlify.com/) - Deploy frontend
-  [Render](https://render.com/) - Deploy backend

# :scroll: License

Distributed under the MIT License. See <a href="./LICENSE">`LICENSE`</a> for more information.

# :link: Related Projects

-  <u>[**QuanBlue**](https://github.com/QuanBlue/QuanBlue)</u>: My bio
-  <u>[**Portfolio**](https://github.com/QuanBlue/Portfolio)</u>: My first portfolio website, using MERN stack. [Visit here](https://quanblue.netlify.app/)
-  <u>[**Readme-template**](https://github.com/QuanBlue/Portfolio)</u>: A template for creating README.md

---

> Bento [@quanblue](https://bento.me/quanblue) &nbsp;&middot;&nbsp;
> GitHub [@QuanBlue](https://github.com/QuanBlue) &nbsp;&middot;&nbsp; Gmail quannguyenthanh558@gmail.com
