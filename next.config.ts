import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/pashas_portfolio",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;