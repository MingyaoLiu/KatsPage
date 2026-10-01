import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites() {
    return [
      {
        source: "/ink-material-database",
        destination: "/ink-material-database.html",
      },
    ];
  },
};

export default nextConfig;
