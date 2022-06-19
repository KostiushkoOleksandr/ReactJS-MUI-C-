using Microsoft.EntityFrameworkCore;

namespace QuizAPI.Models
{
    public class AlexKostDbContext:DbContext
    {
        public AlexKostDbContext(DbContextOptions<AlexKostDbContext> options):base(options)
        { }

        public DbSet<Question> Questions { get; set; }
        public DbSet<Participant> Participants { get; set; }
    }
}
