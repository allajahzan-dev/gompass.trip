// Base URL - frontend (Vercel)
// Server URL - backend (AWS EC2)

const BASE_URL: string =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000" 
        : "https://gompass.com";

// const SERVER_URL: string = "http://localhost:1337";
const SERVER_URL: string = "https://api.gompass.com";

export { BASE_URL, SERVER_URL };