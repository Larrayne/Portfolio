# CI and deployment

GitHub Actions workflows are in `.github/workflows/`.

## Continuous integration

`ci-cd.yml` runs on pushes and pull requests targeting `master` or `develop`. It:

- Builds and tests `Portfolio.Tests/Portfolio.Tests.csproj` with .NET 8.
- Installs the Vue app dependencies from its lockfile, fails the audit on high or critical npm advisories, executes the Vitest suite, and builds the site.
- Runs Trivy and uploads its SARIF report to GitHub code scanning.

The workflow uses Node.js 22.

## GitHub Pages

`deploy.yml` is the only deployment workflow. It runs on pushes to `master` or through a manual dispatch, builds `portfolio-site`, and deploys `portfolio-site/dist` using the Pages deployment actions.

In the repository settings, enable GitHub Pages with **GitHub Actions** as the build and deployment source.

## Scheduled dependency audit

`security.yml` runs every Monday at 09:00 UTC and can also be started manually from the Actions tab. It builds the .NET test project and fails the frontend npm audit on high or critical advisories. Lower-severity advisories are still listed in the workflow logs.

## Local checks

```sh
dotnet test Portfolio.Tests/Portfolio.Tests.csproj --configuration Release
cd portfolio-site
npm ci
npm audit --audit-level=high
npm test -- --run
npm run build
```
