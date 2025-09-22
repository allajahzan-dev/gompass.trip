const BASE_URL: string =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://gompasstrip.vercel.app";

export default BASE_URL;