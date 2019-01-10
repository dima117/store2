using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace store2.Domain
{
    public static class Extensions
    {
        public static IServiceCollection AddStoreDbContext(this IServiceCollection services, string cstring)
        {
            return services.AddDbContext<StoreDbContext>(options => options.UseNpgsql(cstring));
        }
    }
}