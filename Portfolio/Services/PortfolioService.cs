namespace Portfolio.Services;

/// <summary>
/// Service for portfolio information and operations.
/// </summary>
public class PortfolioService
{
    private readonly string[] _skills = ["C#", ".NET", "Vue", "JavaScript", "Azure", "SQL", "Docker", "GitHub"];
    private readonly string[] _projects = ["Portfolio Site", "Azure Integration", "API Backend"];

    /// <summary>
    /// Gets portfolio information.
    /// </summary>
    public PortfolioInfo GetPortfolioInfo()
    {
        return new PortfolioInfo
        {
            Name = "Portfolio",
            Description = "Full-stack portfolio with Vue frontend and .NET backend",
            SkillCount = _skills.Length,
            ProjectCount = _projects.Length
        };
    }

    /// <summary>
    /// Checks if a skill is listed in the portfolio.
    /// </summary>
    public bool IsSkillListed(string skill)
    {
        return _skills.Contains(skill, StringComparer.OrdinalIgnoreCase);
    }

    /// <summary>
    /// Gets the total number of projects.
    /// </summary>
    public int GetProjectCount()
    {
        return _projects.Length;
    }

    /// <summary>
    /// Gets all listed skills.
    /// </summary>
    public IEnumerable<string> GetAllSkills()
    {
        return _skills.AsEnumerable();
    }

    /// <summary>
    /// Gets all listed projects.
    /// </summary>
    public IEnumerable<string> GetAllProjects()
    {
        return _projects.AsEnumerable();
    }
}

/// <summary>
/// Portfolio information model.
/// </summary>
public class PortfolioInfo
{
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public int SkillCount { get; set; }
    public int ProjectCount { get; set; }
}
