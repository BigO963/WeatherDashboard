using Microsoft.EntityFrameworkCore;
using WeatherDashboard.Server.Models;

namespace WeatherDashboard.Server.Context
{
    public class WeatherDbContext : DbContext
    {
        public WeatherDbContext(DbContextOptions<WeatherDbContext> contextOptions)
            : base(contextOptions)
        {

        }

        //Code first approach
        public DbSet<WeatherForecast> WeatherForecasts { get; set; }
    }
}
