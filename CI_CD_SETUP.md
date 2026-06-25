# CI/CD Pipeline Documentation

This project uses GitHub Actions to automate build, test, and deployment processes.

## Workflows

### 1. **CI/CD Pipeline** (`.github/workflows/ci-cd.yml`)
Runs on every push to `main` or `develop` branches and on pull requests.

#### Jobs:
- **Backend** (.NET 8):
  - Restores NuGet dependencies
  - Builds the project in Release mode
  - Runs tests (when test projects are added)
  - Uploads build artifacts (bin/Release/)

- **Frontend** (Vue/Vite):
  - Installs npm dependencies
  - Runs security audit
  - Builds production bundle
  - Uploads build artifacts (dist/)

- **Security**:
  - Runs Trivy vulnerability scanner
  - Reports to GitHub Security tab

- **Deploy Preview** (on main push only):
  - Downloads frontend artifacts
  - Optionally deploys to GitHub Pages

### 2. **Security & Dependency Updates** (`.github/workflows/security.yml`)
Runs weekly (Mondays 9 AM UTC) or manually via `workflow_dispatch`.

#### Jobs:
- **Update Dependencies**:
  - Checks for outdated NuGet packages
  - Checks for outdated npm packages
  - Creates a PR if updates available

- **Security Scan**:
  - Runs OWASP Dependency-Check
  - Scans for known vulnerabilities
  - Uploads results as artifacts

## Getting Started

### Prerequisites
- GitHub repository (already connected)
- .NET 8 SDK
- Node.js 18.x

### First Time Setup

1. **Verify Workflows are Detected**:
   ```bash
   git add .github/
   git commit -m "ci: add GitHub Actions workflows"
   git push origin main
   ```

2. **Monitor Workflow Runs**:
   - Go to your GitHub repo → **Actions** tab
   - Watch the CI/CD Pipeline and Security workflows run
   - Check logs for any failures

3. **Configure Secrets (Optional)**:
   - For deployment to custom domain, update `cname` in ci-cd.yml
   - Add deployment secrets in GitHub repo settings → Secrets and variables

## Customization

### Trigger Workflows on Different Events
Edit the `on:` section in workflow files:

```yaml
on:
  push:
    branches: [ main, develop, feature/* ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 9 * * 1'  # Weekly Monday 9 AM
  workflow_dispatch:     # Manual trigger
```

### Add Test Projects

Once you create test projects:

**Backend** (xUnit):
```bash
dotnet new xunit -o Portfolio.Tests
dotnet add Portfolio.Tests/Portfolio.Tests.csproj reference Portfolio/Portfolio.csproj
```

**Frontend** (Vitest):
```bash
cd portfolio-site
npm install --save-dev vitest @vitejs/plugin-vue
# Add "test": "vitest" to package.json
```

### Change Deployment Target

Edit `.github/workflows/ci-cd.yml`:
```yaml
- name: Deploy frontend to GitHub Pages
  with:
    cname: your-domain.com  # Change this
```

## Monitoring & Troubleshooting

### View Workflow Results
1. GitHub repo → **Actions** → Select workflow
2. Click on a run to see detailed logs
3. Use `Debug` logs if needed (add `DEBUG=actions/*` to environment)

### Common Issues

| Issue | Solution |
|-------|----------|
| Build fails | Check test project exists, review logs for error details |
| Artifact upload fails | Ensure paths in `path:` match your project structure |
| Deployment fails | Verify GitHub Pages is enabled in repo settings |
| Security scan too strict | Adjust `audit-level` in npm audit step |

### Manual Workflow Trigger
```bash
# Trigger dependency update check manually
gh workflow run security.yml
```

## Next Steps

1. ✅ **CI/CD Setup Complete** — workflows auto-run on push/PR
2. 📝 **Add Tests** — create xUnit (backend) and Vitest (frontend) tests
3. 🔒 **Fix Vulnerabilities** — address the 1 high-severity npm vulnerability
4. 🚀 **Configure Deployment** — set up GitHub Pages or Azure deployment
5. 📚 **Add Documentation** — create comprehensive README

## References

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Actions for .NET](https://github.com/actions/setup-dotnet)
- [GitHub Actions for Node.js](https://github.com/actions/setup-node)
- [Trivy Security Scanner](https://github.com/aquasecurity/trivy-action)
- [OWASP Dependency-Check](https://dependencycheck.org/)

## Questions?

Refer to individual workflow files for detailed comments on each step.
