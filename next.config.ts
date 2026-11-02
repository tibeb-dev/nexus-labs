import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GA measurement IDs are public. Explicitly include this custom-named
  // variable in client bundles at build time.
  env: {
    NEXT_GA_MEASUREMENT_ID:
      process.env.NEXT_GA_MEASUREMENT_ID || "",
  },
};

export default nextConfig;
