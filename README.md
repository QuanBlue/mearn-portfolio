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

-  [:film_projector: Demo](#film_projector-demo)
-  [:star: Key features](#star-key-features)
-  [:toolbox: Getting start](#toolbox-getting-start)
   -  [:pushpin: Prerequisites](#pushpin-prerequisites)
   -  [:key: Environment Variables](#key-environment-variables)
   -  [:hammer_and_wrench: Run locally](#hammer_and_wrench-run-locally)
      -  [Manually](#manually)
      -  [Using Docker compose](#using-docker-compose)
      -  [Using Docker](#using-docker)
-  [Monitoring and Logging](#monitoring-and-logging)
-  [:world_map: Roadmap](#world_map-roadmap)
-  [:busts_in_silhouette: Contributors](#busts_in_silhouette-contributors)
-  [:sparkles: Credits](#sparkles-credits)
-  [:scroll: License](#scroll-license)
-  [:link: Related Projects](#link-related-projects)
</details>

# :film_projector: Demo

Check out deployed app:

-  Frontend: [https://quanblue.herokuapp.com/](https://quanblue.herokuapp.com/)
-  Server: [https://portfolio-n0cz.onrender.com](https://portfolio-n0cz.onrender.com)

# :star: Key features

-  Responsive design - Dynamic responsive for all devices (mobile, desktop)
-  MERN stack - **M**ongoDB - **E**xpressJS - **R**eactJS - **N**odeJS

# :toolbox: Getting start

## :pushpin: Prerequisites

-  NodeJS `>= v14.17.3`
-  npm `>=8.3.1`

## :key: Environment Variables

To run this project, you need to add the following environment variables to your `.env` :

-  **Server configs:** Create `.env` file in `./`

   -  `DB_CONNECT`: API key of MongoDB to connect MongoDB's database.
   -  `DISCORD_WEBHOOK_URL`: Discord webhook URL to send alerts notification.
      > Check [Making a Webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) to know how to create a webhook.

   Example:

   ```sh
   # .env
   #  DB guess credentials key (Read only)
   DB_CONNECT = mongodb+srv://guess:0aGRADHax24DXzCL@cluster0.wgaas.mongodb.net/portfolio

   # Discord webhook URL
   DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_SERVER_ID_HERE
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

### Manually

```bash
# Clone this repository
git clone https://github.com/QuanBlue/Portfolio.git

# Go into the repository
cd Portfolio

# Install client and server dependencies
npm run install-dependency
```

Run client and server separately in 2 terminals:

```sh
# Run client
npm run client
```

```sh
# Run server
npm run server
```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

### Using Docker compose

```sh
docker-compose up
```

### Using Docker

Run server

```sh
docker run -d -p 5000:5000 --name portfolio-server ghcr.io/quanblue/portfolio-server:latest
```

Run client

```sh
docker run -d -p 3000:3000 --name portfolio-client ghcr.io/quanblue/portfolio-client:latest
```

> Access client at [http://localhost:3000](http://localhost:3000)  
> Access server at [http://localhost:5000](http://localhost:5000)

# Monitoring and Logging

> **Note:** You need to run the project with Docker compose to use this feature.

Both infrastructure **monitoring** and **application telemetry** use `Prometheus` to scrape metrics from the application. You can then observe these metrics using `Grafana` dashboards.

**Prometheus**

To see the `Prometheus targets` go to http://localhost:9090/targets.

**Grafana dashboards**

To view `Grafana dashboards` go to http://localhost:7070 and log-in with:

> User: admin  
> Password: admin

**Alertmanager**
To see the `Alertmanager` go to http://localhost:9093/#/alerts.

# :world_map: Roadmap

-  [x] Application
   -  [x] Web UI - ReactJS
   -  [x] Backend - MongoDB - Rest API
-  [x] Dockerize project
-  [x] Continuous deployment - Github Actions
   -  [x] Frontend - Netlify
   -  [x] Backend - Render
   -  [x] Deploy package
-  [ ] Monitoring and Logging
   -  [x] Scrape metrics - Prometheus
   -  [x] Alert
      -  [x] Prometheus Alertmanager
      -  [ ] Discord webhook
   -  [x] Data visualization - Grafana

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

Monitoring and Logging:

-  [Grafana](https://grafana.com/) - Visualization
-  [Prometheus](https://prometheus.io/) - Data collection
-  Youtuber [@evanugarte](https://www.youtube.com/@evanugarte)

Emoji and Badges from:

-  [github@thebespokepixel](https://github.com/thebespokepixel/badges) - Badges
-  [github@WebpageFX](https://github.com/WebpageFX/emoji-cheat-sheet.com) - Emoji

# :scroll: License

Distributed under the MIT License. See <a href="./LICENSE">`LICENSE`</a> for more information.

# :link: Related Projects

-  <u>[**QuanBlue**](https://github.com/QuanBlue/QuanBlue)</u>: My bio
-  <u>[**Portfolio**](https://github.com/QuanBlue/Portfolio)</u>: My first portfolio website, using MERN stack. [Visit here](https://quanblue.netlify.app/)
-  <u>[**Readme-template**](https://github.com/QuanBlue/Portfolio)</u>: A template for creating README.md

---

> Bento [@quanblue](https://bento.me/quanblue) &nbsp;&middot;&nbsp;
> GitHub [@QuanBlue](https://github.com/QuanBlue) &nbsp;&middot;&nbsp; Gmail quannguyenthanh558@gmail.com
