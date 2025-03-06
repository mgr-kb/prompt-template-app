module.exports = {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write '**/*.{js,jsx,ts,tsx,json}'",
  ],
};
