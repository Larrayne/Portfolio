# Larrayne Portfolio

This repository contains a Vue portfolio site and a separate .NET console sample. The console project is not a web API and is not connected to the Vue site.

## Portfolio site

See [portfolio-site/README.md](./portfolio-site/README.md) for frontend setup, test, build, and deployment instructions.

## .NET sample

Requires the .NET 8 SDK:

```sh
dotnet run --project Portfolio.csproj
dotnet test Portfolio.Tests/Portfolio.Tests.csproj --configuration Release
```

## GitHub Actions

- `ci-cd.yml` runs the .NET tests, frontend tests and build, npm audit, and Trivy scan on pushes and pull requests targeting `master` or `develop`.
- `deploy.yml` deploys the frontend to GitHub Pages on pushes to `master`. Configure the repository's Pages source to **GitHub Actions**.
- `security.yml` runs a dependency audit weekly or when manually triggered.
