//using CsvHelper;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using MovieApp.Data;

//namespace MovieApp.Controllers
//{
//	[Route("api/[controller]")]
//	[ApiController]
//	public class CSVUploadController : ControllerBase
//	{
//		private readonly ApplicationDbContext _context;

//		public CSVUploadController(ApplicationDbContext context)
//		{
//			_context = context;
//		}

//		[HttpPost]
//		public async Task<IActionResult> Post([FromForm] IFormFile file)
//		{
//			using (var stream = new StreamReader(file.OpenReadStream()))
//			{
//				var csv = new CsvReader(stream);
//				var records = csv.GetRecords<YourDataModel>();

//				_context.YourDataModel.AddRange(records);
//				await _context.SaveChangesAsync();
//			}

//			return Ok();
//		}
//	}
//}
