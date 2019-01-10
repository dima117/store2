using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using store2.Domain;
using store2.Domain.Model;

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
        public StoreDbContext Database { get; }

        public ApiController(StoreDbContext database)
        {
            Database = database;
        }

        [HttpGet("pages")]
        public Page[] GetPages()
        {
            return Database.Pages.ToArray();
        }

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