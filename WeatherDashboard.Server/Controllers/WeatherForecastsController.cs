using Microsoft.AspNetCore.Mvc;
using WeatherDashboard.Server.Context;
using WeatherDashboard.Server.Models;

namespace WeatherDashboard.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class WeatherForecastsController : ControllerBase
    {
        private readonly WeatherDbContext _context;

        public WeatherForecastsController(WeatherDbContext context)
        {
            _context = context;
        }

        // GET: WeatherForecasts
        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            return _context.WeatherForecasts.ToArray();
        }

    }
}
