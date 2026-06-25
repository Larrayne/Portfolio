using Portfolio.Services;

// Initialize portfolio service
var service = new PortfolioService();
var info = service.GetPortfolioInfo();

// Display portfolio information
Console.WriteLine("=== Portfolio Application ===");
Console.WriteLine($"Name: {info.Name}");
Console.WriteLine($"Description: {info.Description}");
Console.WriteLine($"Skills: {info.SkillCount}");
Console.WriteLine($"Projects: {info.ProjectCount}");
Console.WriteLine($"\nSkills: {string.Join(", ", service.GetAllSkills())}");
Console.WriteLine($"Projects: {string.Join(", ", service.GetAllProjects())}");
