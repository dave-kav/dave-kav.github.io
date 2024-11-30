# dave-kav.github.io

Personal website and portfolio for Dave Kavanagh, hosted at [www.dave-kav.com](https://www.dave-kav.com).

## Project Structure

- `/dave-kav` - React application source code
- `/dave-kav/src/assets/resume` - LaTeX source for CV/resume

## Development

The site is built using React and deployed using GitHub Actions. The workflow:
1. Builds the React application
2. Compiles the LaTeX resume into a PDF
3. Deploys to GitHub Pages

## Deployment

Deployments are automated via GitHub Actions and trigger on pushes to the main branch. The site is served via GitHub Pages with a custom domain.
