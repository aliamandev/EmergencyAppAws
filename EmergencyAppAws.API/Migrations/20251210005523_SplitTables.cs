using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EmergencyAppAws.API.Migrations
{
    /// <inheritdoc />
    public partial class SplitTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Bank_AccountNumber",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Bank_BankName",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Bank_BranchNumber",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Bank_Id",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Bank_InstitutionNumber",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Contact_City",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Contact_Email",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Contact_HomeAddress",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Contact_Id",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Contact_PhoneNumber1",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Contact_PhoneNumber2",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Contact_PostalCode",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Contact_PreferredLanguage",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Family_ChildrenCount",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Family_Id",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Family_MaritalStatus",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Financial_Assets",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Financial_Credit",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Financial_Id",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Financial_MonthlyIncome",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Housing_CurrentSituation",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Housing_Id",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Housing_MonthlyCost",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Personal_DateOfBirth",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Personal_FirstName",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Personal_HealthCardNumber",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Personal_Id",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Personal_IsStudent",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Personal_LastName",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Personal_SIN",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Personal_SexAtBirth",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Personal_StatusInCanada",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Reason_CanGetOtherMoney",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Reason_DurationNeeded",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Reason_HasEnoughMoney",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Reason_Id",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Reason_OtherInfo",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Reason_Situation",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Work_Id",
                table: "EmergencyApplications");

            migrationBuilder.DropColumn(
                name: "Work_JobSituation",
                table: "EmergencyApplications");

            migrationBuilder.CreateTable(
                name: "BankInfos",
                columns: table => new
                {
                    EmergencyApplicationId = table.Column<int>(type: "integer", nullable: false),
                    Id = table.Column<int>(type: "integer", nullable: false),
                    BankName = table.Column<string>(type: "text", nullable: false),
                    BranchNumber = table.Column<string>(type: "text", nullable: false),
                    InstitutionNumber = table.Column<string>(type: "text", nullable: false),
                    AccountNumber = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BankInfos", x => x.EmergencyApplicationId);
                    table.ForeignKey(
                        name: "FK_BankInfos_EmergencyApplications_EmergencyApplicationId",
                        column: x => x.EmergencyApplicationId,
                        principalTable: "EmergencyApplications",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ContactInfos",
                columns: table => new
                {
                    EmergencyApplicationId = table.Column<int>(type: "integer", nullable: false),
                    Id = table.Column<int>(type: "integer", nullable: false),
                    HomeAddress = table.Column<string>(type: "text", nullable: false),
                    City = table.Column<string>(type: "text", nullable: false),
                    PostalCode = table.Column<string>(type: "text", nullable: false),
                    PhoneNumber1 = table.Column<string>(type: "text", nullable: false),
                    PhoneNumber2 = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    PreferredLanguage = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactInfos", x => x.EmergencyApplicationId);
                    table.ForeignKey(
                        name: "FK_ContactInfos_EmergencyApplications_EmergencyApplicationId",
                        column: x => x.EmergencyApplicationId,
                        principalTable: "EmergencyApplications",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FamilyInfos",
                columns: table => new
                {
                    EmergencyApplicationId = table.Column<int>(type: "integer", nullable: false),
                    Id = table.Column<int>(type: "integer", nullable: false),
                    MaritalStatus = table.Column<string>(type: "text", nullable: false),
                    ChildrenCount = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FamilyInfos", x => x.EmergencyApplicationId);
                    table.ForeignKey(
                        name: "FK_FamilyInfos_EmergencyApplications_EmergencyApplicationId",
                        column: x => x.EmergencyApplicationId,
                        principalTable: "EmergencyApplications",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FinancialInfos",
                columns: table => new
                {
                    EmergencyApplicationId = table.Column<int>(type: "integer", nullable: false),
                    Id = table.Column<int>(type: "integer", nullable: false),
                    MonthlyIncome = table.Column<decimal>(type: "numeric", nullable: false),
                    Assets = table.Column<decimal>(type: "numeric", nullable: false),
                    Credit = table.Column<decimal>(type: "numeric", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FinancialInfos", x => x.EmergencyApplicationId);
                    table.ForeignKey(
                        name: "FK_FinancialInfos_EmergencyApplications_EmergencyApplicationId",
                        column: x => x.EmergencyApplicationId,
                        principalTable: "EmergencyApplications",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "HousingInfos",
                columns: table => new
                {
                    EmergencyApplicationId = table.Column<int>(type: "integer", nullable: false),
                    Id = table.Column<int>(type: "integer", nullable: false),
                    CurrentSituation = table.Column<string>(type: "text", nullable: false),
                    MonthlyCost = table.Column<decimal>(type: "numeric", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HousingInfos", x => x.EmergencyApplicationId);
                    table.ForeignKey(
                        name: "FK_HousingInfos_EmergencyApplications_EmergencyApplicationId",
                        column: x => x.EmergencyApplicationId,
                        principalTable: "EmergencyApplications",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PersonalInfos",
                columns: table => new
                {
                    EmergencyApplicationId = table.Column<int>(type: "integer", nullable: false),
                    Id = table.Column<int>(type: "integer", nullable: false),
                    FirstName = table.Column<string>(type: "text", nullable: false),
                    LastName = table.Column<string>(type: "text", nullable: false),
                    DateOfBirth = table.Column<DateOnly>(type: "date", nullable: false),
                    SexAtBirth = table.Column<string>(type: "text", nullable: false),
                    SIN = table.Column<string>(type: "text", nullable: false),
                    HealthCardNumber = table.Column<string>(type: "text", nullable: false),
                    StatusInCanada = table.Column<string>(type: "text", nullable: false),
                    IsStudent = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PersonalInfos", x => x.EmergencyApplicationId);
                    table.ForeignKey(
                        name: "FK_PersonalInfos_EmergencyApplications_EmergencyApplicationId",
                        column: x => x.EmergencyApplicationId,
                        principalTable: "EmergencyApplications",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Reasons",
                columns: table => new
                {
                    EmergencyApplicationId = table.Column<int>(type: "integer", nullable: false),
                    Id = table.Column<int>(type: "integer", nullable: false),
                    Situation = table.Column<string>(type: "text", nullable: false),
                    HasEnoughMoney = table.Column<bool>(type: "boolean", nullable: false),
                    DurationNeeded = table.Column<string>(type: "text", nullable: false),
                    CanGetOtherMoney = table.Column<bool>(type: "boolean", nullable: false),
                    OtherInfo = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reasons", x => x.EmergencyApplicationId);
                    table.ForeignKey(
                        name: "FK_Reasons_EmergencyApplications_EmergencyApplicationId",
                        column: x => x.EmergencyApplicationId,
                        principalTable: "EmergencyApplications",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WorkInfos",
                columns: table => new
                {
                    EmergencyApplicationId = table.Column<int>(type: "integer", nullable: false),
                    Id = table.Column<int>(type: "integer", nullable: false),
                    JobSituation = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorkInfos", x => x.EmergencyApplicationId);
                    table.ForeignKey(
                        name: "FK_WorkInfos_EmergencyApplications_EmergencyApplicationId",
                        column: x => x.EmergencyApplicationId,
                        principalTable: "EmergencyApplications",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BankInfos");

            migrationBuilder.DropTable(
                name: "ContactInfos");

            migrationBuilder.DropTable(
                name: "FamilyInfos");

            migrationBuilder.DropTable(
                name: "FinancialInfos");

            migrationBuilder.DropTable(
                name: "HousingInfos");

            migrationBuilder.DropTable(
                name: "PersonalInfos");

            migrationBuilder.DropTable(
                name: "Reasons");

            migrationBuilder.DropTable(
                name: "WorkInfos");

            migrationBuilder.AddColumn<string>(
                name: "Bank_AccountNumber",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Bank_BankName",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Bank_BranchNumber",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Bank_Id",
                table: "EmergencyApplications",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Bank_InstitutionNumber",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Contact_City",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Contact_Email",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Contact_HomeAddress",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Contact_Id",
                table: "EmergencyApplications",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Contact_PhoneNumber1",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Contact_PhoneNumber2",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Contact_PostalCode",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Contact_PreferredLanguage",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Family_ChildrenCount",
                table: "EmergencyApplications",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Family_Id",
                table: "EmergencyApplications",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Family_MaritalStatus",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<decimal>(
                name: "Financial_Assets",
                table: "EmergencyApplications",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "Financial_Credit",
                table: "EmergencyApplications",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<int>(
                name: "Financial_Id",
                table: "EmergencyApplications",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<decimal>(
                name: "Financial_MonthlyIncome",
                table: "EmergencyApplications",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<string>(
                name: "Housing_CurrentSituation",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Housing_Id",
                table: "EmergencyApplications",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<decimal>(
                name: "Housing_MonthlyCost",
                table: "EmergencyApplications",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<DateOnly>(
                name: "Personal_DateOfBirth",
                table: "EmergencyApplications",
                type: "date",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1));

            migrationBuilder.AddColumn<string>(
                name: "Personal_FirstName",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Personal_HealthCardNumber",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Personal_Id",
                table: "EmergencyApplications",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "Personal_IsStudent",
                table: "EmergencyApplications",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Personal_LastName",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Personal_SIN",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Personal_SexAtBirth",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Personal_StatusInCanada",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "Reason_CanGetOtherMoney",
                table: "EmergencyApplications",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Reason_DurationNeeded",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "Reason_HasEnoughMoney",
                table: "EmergencyApplications",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "Reason_Id",
                table: "EmergencyApplications",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Reason_OtherInfo",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Reason_Situation",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Work_Id",
                table: "EmergencyApplications",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Work_JobSituation",
                table: "EmergencyApplications",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
