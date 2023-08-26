using BlogSitewithLogin.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace BlogSitewithLogin.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Blog> blogs { get; set; }

        public DbSet<Auth> authors { get; set; }

    }
}
