using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using MovieApp.Data;
using MovieApp.Model;
using System.Text;

//var builder = WebApplication.CreateBuilder(args);
//var config = new ConfigurationBuilder()
//	.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
//	.AddEnvironmentVariables()
//	.Build();
//// Add services to the container.

////builder.Services.AddCors(options =>
////{
////	options.AddPolicy("AllowAllHeaders",
////		builder =>
////		{
////			builder.AllowAnyOrigin()
////				   .AllowAnyHeader()
////				   .AllowAnyMethod()
////				   .WithOrigins("https://localhost:44474")
////				   .AllowCredentials();
////		});
////});

//builder.Services.AddControllersWithViews();
//builder.Services.AddDbContext<ApplicationDbContext>(options =>
//options.UseSqlServer(builder.Configuration.GetConnectionString("MovieConnectionString")));
//builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
//				.AddEntityFrameworkStores<ApplicationDbContext>()
//				.AddDefaultTokenProviders();
////builder.Services.AddAuthentication(options =>
////{
////	options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
////	options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
////	options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
////})
////	.AddJwtBearer(options =>
////	{
////		options.SaveToken = true;
////		options.RequireHttpsMetadata = false;
////		options.TokenValidationParameters = new TokenValidationParameters()
////		{
////			ValidateIssuer = true,
////			ValidateAudience = true,
////			ValidAudience = config["JWT:ValidAudience"],
////			ValidIssuer = config["JWT:ValidIssuer"],
////			IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["JWT:Secret"]))
////		};
////	});
//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();

//var app = builder.Build();

//// Configure the HTTP request pipeline.
//if (!app.Environment.IsDevelopment())
//{
//	// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
//	app.UseHsts();
//}

//app.UseHttpsRedirection();
//app.UseStaticFiles();
//app.UseRouting();
//app.UseAuthorization();
//app.UseCors("AllowAllHeaders");


//app.MapControllerRoute(
//	name: "default",
//	pattern: "{controller}/{action=Index}/{id?}");

//app.MapFallbackToFile("index.html"); ;

//app.Run();

var builder = WebApplication.CreateBuilder(args);
ConfigurationManager configuration = builder.Configuration;

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("MovieConnectionString")));
// For Identity
builder.Services.AddIdentity<IdentityUser, IdentityRole>()
	.AddEntityFrameworkStores<ApplicationDbContext>()
	.AddDefaultTokenProviders();

// Adding Authentication
builder.Services.AddAuthentication(options =>
{
	options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
	options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
	options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
	options.SaveToken = true;
	options.RequireHttpsMetadata = false;
	options.TokenValidationParameters = new TokenValidationParameters()
	{
		ValidateIssuer = true,
		ValidateAudience = true,
		ValidAudience = configuration["JWT:ValidAudience"],
		ValidIssuer = configuration["JWT:ValidIssuer"],
		IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Secret"]))
	};
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
	// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
	app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
	name: "default",
	pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
