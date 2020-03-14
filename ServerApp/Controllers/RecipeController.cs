using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServerApp.Models;
using ServerApp.Models.BindingTargets;
using ServerApp.Services;

namespace ServerApp.Controllers
{
    [Route("api/recipes")]
    [ApiController]
    public class RecipeController : Controller
    {
        private ICosmosDbService _cosmosDbService;
        public RecipeController(ICosmosDbService cosmosDbService)
        {
            _cosmosDbService = cosmosDbService;
        }

        [HttpGet("{id}")]
        public IActionResult GetRecipe(string id)
        {
            return View();
        }

        [HttpPost]
        public IActionResult CreateRecipe([FromBody] RecipeData recipeData)
        {
            if(ModelState.IsValid)
            {
                Recipe r = recipeData.Recipe;
                r.Id = Guid.NewGuid().ToString();
                r.Steps.ForEach(s => s.Id = Guid.NewGuid().ToString());
                _cosmosDbService.AddItemAsync(r);
                return Ok(r.Id);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    }
}