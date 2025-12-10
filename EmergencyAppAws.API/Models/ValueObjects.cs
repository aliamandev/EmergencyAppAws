using Microsoft.EntityFrameworkCore;

namespace EmergencyAppAws.API.Models;

[Owned]
public class ReasonForApplication
{
    // EF needs access to FKs for Owned Types usually, but cleaner to let EF handle shadow props if 1:1 owned.
    // However, to match the reference style, we'll keep them as properties but ensure they are configured as Owned or distinct tables.
    // The reference app had generic ID properties which suggests they might have been separate tables.
    // But conceptually these are Value Objects. Let's start with proper Owned Types for Postgres JSONB or separate tables.
    // Reference app used separate tables likely (Id, Foreign Key).
    // Let's stick to the Reference structure to be safe with mapping.
    
    public int Id { get; set; }
    // public int EmergencyApplicationId { get; set; } // Let EF handle FK
    // public EmergencyApplication? EmergencyApplication { get; set; }
    
    public string Situation { get; set; } = string.Empty;
    public bool HasEnoughMoney { get; set; }
    public string DurationNeeded { get; set; } = string.Empty;
    public bool CanGetOtherMoney { get; set; }
    public string OtherInfo { get; set; } = string.Empty;
}

[Owned]
public class PersonalInfo
{
    public int Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public DateOnly DateOfBirth { get; set; }
    public string SexAtBirth { get; set; } = string.Empty;
    public string SIN { get; set; } = string.Empty;
    public string HealthCardNumber { get; set; } = string.Empty;
    public string StatusInCanada { get; set; } = string.Empty;
    public bool IsStudent { get; set; }
}

[Owned]
public class ContactInfo
{
    public int Id { get; set; }
    public string HomeAddress { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string PostalCode { get; set; } = string.Empty;
    public string PhoneNumber1 { get; set; } = string.Empty;
    public string PhoneNumber2 { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PreferredLanguage { get; set; } = string.Empty;
}

[Owned]
public class FamilyInfo
{
    public int Id { get; set; }
    public string MaritalStatus { get; set; } = string.Empty;
    public int ChildrenCount { get; set; }
}

[Owned]
public class FinancialInfo
{
    public int Id { get; set; }
    public decimal MonthlyIncome { get; set; }
    public decimal Assets { get; set; }
    public decimal Credit { get; set; }
}

[Owned]
public class HousingInfo
{
    public int Id { get; set; }
    public string CurrentSituation { get; set; } = string.Empty;
    public decimal MonthlyCost { get; set; }
}

[Owned]
public class WorkInfo
{
    public int Id { get; set; }
    public string JobSituation { get; set; } = string.Empty;
}

[Owned]
public class BankInfo
{
    public int Id { get; set; }
    public string BankName { get; set; } = string.Empty;
    public string BranchNumber { get; set; } = string.Empty;
    public string InstitutionNumber { get; set; } = string.Empty;
    public string AccountNumber { get; set; } = string.Empty;
}
