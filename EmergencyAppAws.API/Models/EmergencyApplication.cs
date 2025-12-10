using System.ComponentModel.DataAnnotations;

namespace EmergencyAppAws.API.Models;

public class EmergencyApplication
{
    public int Id { get; set; }
    public DateTime SubmissionDate { get; set; } = DateTime.UtcNow;
    public ApplicationStatus Status { get; set; } = ApplicationStatus.Pending;

    public ReasonForApplication Reason { get; set; } = new();
    public PersonalInfo Personal { get; set; } = new();
    public ContactInfo Contact { get; set; } = new();
    public FamilyInfo Family { get; set; } = new();
    public FinancialInfo Financial { get; set; } = new();
    public HousingInfo Housing { get; set; } = new();
    public WorkInfo Work { get; set; } = new();
    public BankInfo Bank { get; set; } = new();
}
