<h1 align="center">
  <img src="./assets/favicon.png" alt="icon" width="200"></img>
  <br>
  <b>1st. QUANBLUE's Portfolio</b>
</h1>

<p align="center">My first portfolio project using MERN stack</p>

<p align="center">
  <b>
    <a href="#visit">Visit</a> •
    <a href="#key-features">Key features</a> •
    <a href="#getting-start">Getting start</a> •
    <a href="#credits">Credits</a> •
    <a href="#license">License</a>
  </b>
</p>

<table >
  <tr>
    <th>PC demo</th>
    <td align="center"> <img src="./assets/pc-demo.gif" height="350" alt="pc demo"/></td>
  </tr>
  <tr>
    <th>Mobile demo</th>
    <td align="center"><img src="./assets/mobile-demo.gif" height="500" alt="mobile demo"/></td>
  </tr>
</table>

## Visit

Check out my website: [https://quanblue.herokuapp.com/](https://quanblue.herokuapp.com/)  
and Server: [https://portfolio-n0cz.onrender.com](https://portfolio-n0cz.onrender.com)

## Key features

-  Responsive - Dynamic responsive for all devices (mobile, desktop)
-  MERN stack - **M**ongoDB - **E**xpressJS - **R**eactJS - **N**odeJS

## Getting start

### Prerequisites

-  NodeJS `>= v14.17.3`
-  npm `>=8.3.1`

### Environment Variables

To run this project, you need to add the following environment variables to your `.env` :

-  **Server env configs:** Create `.env` file in `./`

   -  `DB_CONNECT`: API key of MongoDB to connect MongoDB's database.
      -  You can use my MongoDB's database with Guess role (Read only) with this key:  
         `DB_CONNECT = mongodb+srv://guess:0aGRADHax24DXzCL@cluster0.wgaas.mongodb.net/portfolio`

   Example:

   ```sh
   # .env
   DB_CONNECT = mongodb+srv://guess:0aGRADHax24DXzCL@cluster0.wgaas.mongodb.net/portfolio
   ```

   -  **Client env configs (Optional):** Create `.env` file in `./client`

   -  `REACT_APP_SERVER_URL`: URL of server.
      -  You can use my server with this key:  
         `REACT_APP_SERVER_URL=https://portfolio-n0cz.onrender.com`

   Example:

   ```sh
   # .env
   REACT_APP_SERVER_URL=https://portfolio-n0cz.onrender.com
   ```

### Run locally

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

server is running on port 5000

```sh
# Run server
npm run server
```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Credits

This software uses the following open source packages:

-  [ReactJS](https://react.dev/) - Frontend
-  [ExpressJS](https://expressjs.com/) - Backend
-  [Node.js](https://nodejs.org/) - Environment
-  [npm](https://www.npmjs.com/) - Package manager

This software deployed by the following hosting services:

-  [Netlify](https://www.netlify.com/) - Deploy frontend
-  [Render](https://render.com/) - Deploy backend

## License

Distributed under the MIT License. See <a href="./LICENSE">`LICENSE`</a> for more information.

---

> Bento [@quanblue](https://bento.me/quanblue) &nbsp;&middot;&nbsp;
> GitHub [@QuanBlue](https://github.com/QuanBlue) &nbsp;&middot;&nbsp; Gmail quannguyenthanh558@gmail.com
