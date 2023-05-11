# Welcome to my portfolio project

**Deploy at:** [https://quanblue.herokuapp.com/](https://quanblue.herokuapp.com/)

## Technology stack

**Tech stack:** MERN (**M**ongoDB - **E**xpressJS - **R**eactJS - **N**odeJS)

## Installation

-  Clone project

```sh
git clone https://github.com/QuanBlue/portfolio.git
```

-  Install npm on Client and Server

```sh
npm run install-dependency
```

-  Config `.env` file
   -  Create `.env` file in `./portfolio`
   -  Update `.env` file with (Guess account \_ Read only)  
      `DB_CONNECT = mongodb+srv://guess:0aGRADHax24DXzCL@cluster0.wgaas.mongodb.net/portfolio`

## Running application:

-  Run server: server is running on port 5000
   ```sh
   npm run server
   ```
-  Run client: Client is running on port 3000 (open another terminal)
   ```sh
   npm run client
   ```

## Fetch data from server (testing)

Run server and open browser with following link:

> Get developer skill  
> http://localhost:5000/api/dev-skill/api/dev-skill

> Get design skill  
> http://localhost:5000/api/dev-skill/api/des-skill

> Get toolkit  
> http://localhost:5000/api/dev-skill/api/toolkit

> Get education  
> http://localhost:5000/api/dev-skill/api/education
