using System.ComponentModel.DataAnnotations;

namespace MovieApp.Model
{
	public class Movie
	{
		[Key]
		public int MovieId { get; set; }
		public string Title { get; set; }
		public string Genre { get; set; }
	
	}
}
