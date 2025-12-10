using EmergencyAppAws.API.Models;
using Microsoft.EntityFrameworkCore;

namespace EmergencyAppAws.API.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<EmergencyApplication> EmergencyApplications { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        modelBuilder.Entity<EmergencyApplication>(entity =>
        {
            entity.ToTable("EmergencyApplications");

            entity.OwnsOne(e => e.Reason, cb => cb.ToTable("Reasons"));
            entity.OwnsOne(e => e.Personal, cb => cb.ToTable("PersonalInfos"));
            entity.OwnsOne(e => e.Contact, cb => cb.ToTable("ContactInfos"));
            entity.OwnsOne(e => e.Family, cb => cb.ToTable("FamilyInfos"));
            entity.OwnsOne(e => e.Financial, cb => cb.ToTable("FinancialInfos"));
            entity.OwnsOne(e => e.Housing, cb => cb.ToTable("HousingInfos"));
            entity.OwnsOne(e => e.Work, cb => cb.ToTable("WorkInfos"));
            entity.OwnsOne(e => e.Bank, cb => cb.ToTable("BankInfos"));
        });
    }
}
