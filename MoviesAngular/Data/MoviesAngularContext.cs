using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MoviesAngular.Models;

namespace MoviesAngular.Data
{
    public class MoviesAngularContext : DbContext
    {
        public MoviesAngularContext (DbContextOptions<MoviesAngularContext> options)
            : base(options)
        {
        }

        public DbSet<MoviesAngular.Models.Movie> Movie { get; set; }
    }
}
