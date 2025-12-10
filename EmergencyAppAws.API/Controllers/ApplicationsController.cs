using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EmergencyAppAws.API.Data;
using EmergencyAppAws.API.Models;

namespace EmergencyAppAws.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ApplicationsController : ControllerBase
{
    private readonly AppDbContext _context;

    public ApplicationsController(AppDbContext context)
    {
        _context = context;
    }

    // POST: api/Applications
    [HttpPost]
    public async Task<ActionResult<EmergencyApplication>> PostApplication(EmergencyApplication application)
    {
        _context.EmergencyApplications.Add(application);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetApplication), new { id = application.Id }, application);
    }

    // GET: api/Applications
    [HttpGet]
    public async Task<ActionResult<IEnumerable<EmergencyApplication>>> GetApplications()
    {
        return await _context.EmergencyApplications.ToListAsync();
    }

    // GET: api/Applications/5
    [HttpGet("{id}")]
    public async Task<ActionResult<EmergencyApplication>> GetApplication(int id)
    {
        var application = await _context.EmergencyApplications.FindAsync(id);

        if (application == null)
        {
            return NotFound();
        }

        return application;
    }

    // PUT: api/Applications/5/approve
    [HttpPut("{id}/approve")]
    public async Task<IActionResult> ApproveApplication(int id)
    {
        var application = await _context.EmergencyApplications.FindAsync(id);
        if (application == null)
        {
            return NotFound();
        }

        application.Status = ApplicationStatus.Approved;
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
