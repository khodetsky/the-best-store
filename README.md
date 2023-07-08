# About

This is the website of an online store. He has authorization through Firebase and through a Google account. Without authorization, it is impossible to add goods to the basket.
The following pages are implemented on the website:
- Home page. It contains the Hero section and quick navigation to individual product categories;
- Page with products. On it, you can choose a category of goods and sort them according to certain parameters;
- A page with detailed information about the product. It contains a detailed description and a button to add the product to the cart;
- Page with authentication;
- A page with a shopping cart. On this page, you can review the items in your cart, remove the items you need, if necessary, and complete your order.

## Preparation.

1. Make sure you have the LTS version of Node.js installed on your computer.
   Install her, if necessary.
2. Clone this repository.
3. Install the project's base dependencies with the `npm install` command.
4. Start development mode by running `npm start`.
5. Open http://localhost:3000/the-best-store/ to view it in the browser.
   The page will automatically reload if you make changes to the code. You will
   see the build errors and lint warnings in the console.
6. Command `npm test` runs the test watcher in an interactivemode. By default,
   runs tests related to files changed since the last commit.
7. Command `npm run build` builds the app for production to the build folder. It
   correctly bundles React in production mode and optimizes the build for the
   best performance. The build is minified and the filenames include the hashes.
   App is ready to be deployed.

## Live page

The production version of the project is automatically linted, built, and
deployed to GitHub Pages, in the gh-pages branch, every time the main branch is
updated. For example, after a direct push or an accepted pull request.

The live page can be viewed at
"https://khodetsky.github.io/the-best-store/".

## How it works

1. After each push to the `main` branch of the GitHub repository, a special
   script (GitHub Action) from `.github/workflows/deploy.yml` file.
2. All repository files are copied to the server where the project is
   initialized and passes linting and assembly before deployment.
3. If all steps were successful, the assembled production version of the project
   files goes to the `gh-pages` branch. Otherwise, in the execution log The
   script will indicate what the problem is.
