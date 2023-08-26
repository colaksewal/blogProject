using BlogSitewithLogin.Data;
using BlogSitewithLogin.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;

namespace BlogSitewithLogin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        //database e bağlama işlemleri 
        private readonly DataContext _context;
        public BlogController(DataContext context)
        {
            _context = context;
        }

        [HttpPut]
        public async Task<ActionResult<List<Blog>>> Put(int id,  string name, string description, string imageUrl)
        {
            var blog = await _context.blogs.FindAsync(id);

            if (blog == null)
            {
                return BadRequest("Böyle bir eleman yok");
            }

            blog.Name = name;
            blog.Description = description; 
            blog.ImageURL = imageUrl;   

            _context.Entry(blog).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
                return Ok(blog);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
        }


        [HttpGet]
        public async Task<ActionResult<List<Blog>>> Get()
        {
            return Ok(await _context.blogs.ToListAsync());
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Blog>> Get(int id)
        {
            //var product = products.Find(x => x.Id == id);
            var blogItem = await _context.blogs.FindAsync(id);

            if (blogItem == null)
                return BadRequest("Ürün idsi bulunamadı");

            return Ok(blogItem);
        }

        [HttpPost]

        public async Task<ActionResult<List<Blog>>> AddProduct(string name, string description, string imageUrl)
        {

            var blog = new Blog
            {
                Name = name,
                Description = description,
                ImageURL = imageUrl
            };

            //products.Add(product);
            _context.blogs.Add(blog);

            //değişiklikler kaydolması için update de ve add de kullanıyoruz 
            await _context.SaveChangesAsync();

            return Ok(blog);
        }

        private bool BlogExists(int id)
        {
            return _context.blogs.Any(e => e.Id == id);
        }


        [HttpDelete]

        public async Task<ActionResult<List<Blog>>> DeleteProduct(int id)
        {
            var deletedProduct = await _context.blogs.FindAsync(id);

            if (deletedProduct == null)
                return BadRequest("Böyle bir eleman yok");

            //bunu nereden silicez ? 
            _context.blogs.Remove(deletedProduct);

            //sildiğimizin anlaşıp anlaşılmadığını buradan bileceğiz 
            await _context.SaveChangesAsync();

            return Ok("işlem başarılı");
        }

    }
}

