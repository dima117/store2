using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using store2.Admin.Model;
using store2.Domain;
using store2.Domain.Model;
using Swashbuckle.AspNetCore.Swagger;


namespace store2.Admin
{
    public class Startup
    {
        private IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            // database
            string cstring = Configuration.GetConnectionString("default");
            services.AddStoreDbContext(cstring);

            // mapping
            AddMapper(services);

            services.AddCors();
            services.AddMvc();
            services.AddSwaggerGen(cfg =>
            {
                cfg.SwaggerDoc("v1", new Info
                {
                    Title = "My API",
                    Version = "v1"
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseCors(cfg => cfg.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
                app.UseSwaggerUI(cfg =>
                {
                    cfg.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
                    cfg.RoutePrefix = "docs";
                });
            }

            app.UseMvc();
            app.UseSwagger();

            app.Run(async (context) => { await context.Response.WriteAsync("Hello World!"); });
        }

        private void AddMapper(IServiceCollection services)
        {
            var config = new MapperConfiguration(cfg => { cfg.CreateMap<Page, PageDto>(); });
            var mapper = config.CreateMapper();

            services.Add(ServiceDescriptor.Singleton(mapper));
        }
    }
}