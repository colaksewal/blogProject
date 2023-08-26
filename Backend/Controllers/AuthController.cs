using BlogSitewithLogin.Data;
using BlogSitewithLogin.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;

namespace BlogSitewithLogin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly DataContext _context;
        public AuthController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Auth>>> Get()
        {
            return Ok(await _context.authors.ToListAsync());
        }

        [HttpPost("{login}")]
        public async Task<ActionResult<List<Auth>>> Login(string name, string password)
        {
            var user = await _context.authors.FirstOrDefaultAsync(a => a.Name == name && a.Password == password);

            if (user == null)
            {
                return BadRequest(new { message = "failed login" }); // Kullanıcı bulunamazsa 401 Unauthorized dönebilirsiniz.
            }

            // Kullanıcı bulundu ise başarılı giriş sonuç
            return Ok(new { message = "successful login" });
        }

        [HttpPost(Name = "{add}")]
        
        public async Task<ActionResult<Auth>> Add(string name, string password)
        {
            var user = new Auth
            {
                Name = name,
                Password = password

            };

            //products.Add(product);
            _context.authors.Add(user);

            //değişiklikler kaydolması için update de ve add de kullanıyoruz 
            await _context.SaveChangesAsync();

            return Ok(new { message = "successful" });
        }

    }
}
