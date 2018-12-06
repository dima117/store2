using Microsoft.AspNetCore.Mvc;

namespace store2.Admin.Controllers
{
    public class Xxx
    {
        public string Name { get; set; }
        public string Surname { get; set; }
    }

    [Route("api")]
    public class ApiController : Controller
    {
        [HttpGet("stuff")]
        public Xxx[] DoStuff()
        {
            return new[]
            {
                new Xxx { Name = "test", Surname = "xxx" },
                new Xxx { Name = "test2", Surname = "xxx2" },
            };
        }
    }
}