import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    ignores: ["support.js", "BuddyTrips-Build-Guide.html"],
  },
];

export default eslintConfig;
