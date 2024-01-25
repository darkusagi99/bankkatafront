/** @type {import('next').NextConfig} */
const API_URL = "http://localhost:8080"

const nextConfig = {
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // Allow all - development version - TODO update with actual CORS entry
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    },

    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${API_URL}/:path*`,
            },
        ]
    },

};

export default nextConfig;
