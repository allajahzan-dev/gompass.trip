// Base URL - frontend (Vercel)
// Server URL - backend (AWS EC2)

const BASE_URL: string =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000" 
        : "https://gompasstrip.vercel.app";

const SERVER_URL: string = "http://54.252.163.190:1337";

export { BASE_URL, SERVER_URL };