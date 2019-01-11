using System;
using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using store2.Admin.Model;
using store2.Domain;
using store2.Domain.Model;

namespace store2.Admin.Controllers
{
    [ApiController, Route("api/pages")]
    public class PagesApiController : Controller
    {
        public StoreDbContext Database { get; }
        public IMapper Mapper { get; }

        public PagesApiController(StoreDbContext database, IMapper mapper)
        {
            Database = database;
            Mapper = mapper;
        }

        [HttpGet]
        public PageListItemDto[] GetPages()
        {
            return Database.Pages.Select(Mapper.Map<Page, PageListItemDto>).ToArray();
        }

        [HttpPost]
        public PageDto AddPage([FromBody]PageInput input)
        {
            var page = new Page
            {
                Id = Guid.NewGuid(),
                Code = input.Code,
                Title = input.Title,
                Body = input.Body
            };

            Database.Pages.Add(page);
            Database.SaveChanges();

            return Mapper.Map<Page, PageDto>(page);
        }

        [HttpGet("{id}")]
        public PageDto GetPage(Guid id)
        {
            var page = Database.Pages.Single(p => p.Id == id);
            return Mapper.Map<Page, PageDto>(page);
        }

        [HttpPut("{id}")]
        public PageDto UpdatePage(Guid id, [FromBody]PageInput input)
        {
            var page = Database.Pages.Single(p => p.Id == id);

            page.Code = input.Code;
            page.Title = input.Title;
            page.Body = input.Body;

            Database.SaveChanges();

            return Mapper.Map<Page, PageDto>(page);
        }

        [HttpDelete("{id}")]
        public EmptyResult DeletePage(Guid id)
        {
            Page page = new Page { Id = id };
            Database.Pages.Attach(page);
            Database.Pages.Remove(page);
            Database.SaveChanges();

            return new EmptyResult();
        }
    }
}
