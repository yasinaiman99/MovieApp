using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieApp.Model;

namespace MovieApp.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class RecommenderController : ControllerBase
	{

		// GET: api/Movies/5
		[HttpGet("{id}")]
		public async Task<ActionResult<Movie>> GetMovie(int id)
		{
			//var movie = await _context.Movies.FindAsync(id);


			if (id == null)
			{
				return NotFound();
			}

			List<int>Movies= new List<int>();
			Movies.Add(315162);
			Movies.Add(536554);

			https://api.themoviedb.org/3/movie/315162?api_key=4bf84af0cfd885e16309fcf45c3f625f


			return Ok(Movies);
		}

	}
}
