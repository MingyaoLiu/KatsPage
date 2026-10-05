import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/ink-material-database.html",
        },
        {
          source: "/ink-material-database",
          destination: "/ink-material-database.html",
        },
      ],
    };
  },
};

export default nextConfig;
