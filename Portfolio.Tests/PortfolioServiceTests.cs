using Xunit;
using Portfolio.Services;

namespace Portfolio.Tests;

public class PortfolioServiceTests
{
    [Fact]
    public void GetPortfolioInfo_ReturnsValidInfo()
    {
        // Arrange
        var service = new PortfolioService();

        // Act
        var result = service.GetPortfolioInfo();

        // Assert
        Assert.NotNull(result);
        Assert.Equal("Portfolio", result.Name);
    }

    [Theory]
    [InlineData("C#", true)]
    [InlineData("Vue", true)]
    [InlineData("Azure", true)]
    public void IsSkillListed_ReturnsTrueForKnownSkills(string skill, bool expected)
    {
        // Arrange
        var service = new PortfolioService();

        // Act
        var result = service.IsSkillListed(skill);

        // Assert
        Assert.Equal(expected, result);
    }

    [Fact]
    public void GetProjectCount_ReturnsGreaterThanZero()
    {
        // Arrange
        var service = new PortfolioService();

        // Act
        var count = service.GetProjectCount();

        // Assert
        Assert.True(count > 0, "Portfolio should have at least one project");
    }
}
