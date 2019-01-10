using Microsoft.EntityFrameworkCore;
using store2.Domain.Model;

namespace store2.Domain
{
    public class StoreDbContext: DbContext
    {
        public StoreDbContext(DbContextOptions<StoreDbContext> options) : base(options)
        {
        }

        public DbSet<Page> Pages { get; set; }
    }
}