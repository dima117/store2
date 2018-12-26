using System;
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
                new Xxx { Name = "test", Surname = Guid.NewGuid().ToString() },
                new Xxx { Name = "test2", Surname = Guid.NewGuid().ToString() },
            };
        }
    }
}