using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace EmergencyAppAws.API.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EmergencyApplications",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    SubmissionDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Status = table.Column<int>(type: "integer", nullable: false),
                    Reason_Id = table.Column<int>(type: "integer", nullable: false),
                    Reason_Situation = table.Column<string>(type: "text", nullable: false),
                    Reason_HasEnoughMoney = table.Column<bool>(type: "boolean", nullable: false),
                    Reason_DurationNeeded = table.Column<string>(type: "text", nullable: false),
                    Reason_CanGetOtherMoney = table.Column<bool>(type: "boolean", nullable: false),
                    Reason_OtherInfo = table.Column<string>(type: "text", nullable: false),
                    Personal_Id = table.Column<int>(type: "integer", nullable: false),
                    Personal_FirstName = table.Column<string>(type: "text", nullable: false),
                    Personal_LastName = table.Column<string>(type: "text", nullable: false),
                    Personal_DateOfBirth = table.Column<DateOnly>(type: "date", nullable: false),
                    Personal_SexAtBirth = table.Column<string>(type: "text", nullable: false),
                    Personal_SIN = table.Column<string>(type: "text", nullable: false),
                    Personal_HealthCardNumber = table.Column<string>(type: "text", nullable: false),
                    Personal_StatusInCanada = table.Column<string>(type: "text", nullable: false),
                    Personal_IsStudent = table.Column<bool>(type: "boolean", nullable: false),
                    Contact_Id = table.Column<int>(type: "integer", nullable: false),
                    Contact_HomeAddress = table.Column<string>(type: "text", nullable: false),
                    Contact_City = table.Column<string>(type: "text", nullable: false),
                    Contact_PostalCode = table.Column<string>(type: "text", nullable: false),
                    Contact_PhoneNumber1 = table.Column<string>(type: "text", nullable: false),
                    Contact_PhoneNumber2 = table.Column<string>(type: "text", nullable: false),
                    Contact_Email = table.Column<string>(type: "text", nullable: false),
                    Contact_PreferredLanguage = table.Column<string>(type: "text", nullable: false),
                    Family_Id = table.Column<int>(type: "integer", nullable: false),
                    Family_MaritalStatus = table.Column<string>(type: "text", nullable: false),
                    Family_ChildrenCount = table.Column<int>(type: "integer", nullable: false),
                    Financial_Id = table.Column<int>(type: "integer", nullable: false),
                    Financial_MonthlyIncome = table.Column<decimal>(type: "numeric", nullable: false),
                    Financial_Assets = table.Column<decimal>(type: "numeric", nullable: false),
                    Financial_Credit = table.Column<decimal>(type: "numeric", nullable: false),
                    Housing_Id = table.Column<int>(type: "integer", nullable: false),
                    Housing_CurrentSituation = table.Column<string>(type: "text", nullable: false),
                    Housing_MonthlyCost = table.Column<decimal>(type: "numeric", nullable: false),
                    Work_Id = table.Column<int>(type: "integer", nullable: false),
                    Work_JobSituation = table.Column<string>(type: "text", nullable: false),
                    Bank_Id = table.Column<int>(type: "integer", nullable: false),
                    Bank_BankName = table.Column<string>(type: "text", nullable: false),
                    Bank_BranchNumber = table.Column<string>(type: "text", nullable: false),
                    Bank_InstitutionNumber = table.Column<string>(type: "text", nullable: false),
                    Bank_AccountNumber = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmergencyApplications", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EmergencyApplications");
        }
    }
}
