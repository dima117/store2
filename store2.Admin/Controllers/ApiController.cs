using System;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using store2.Admin.Model;
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
        public IMapper Mapper { get; }

        public ApiController(StoreDbContext database, IMapper mapper)
        {
            Database = database;
            Mapper = mapper;
        }

        [HttpGet("pages")]
        public PageDto[] GetPages()
        {
            return Database.Pages.Select(Mapper.Map<Page, PageDto>).ToArray();
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