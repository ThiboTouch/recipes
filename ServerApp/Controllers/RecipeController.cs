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
        public async Task<Recipe> GetRecipe(string id)
        {
            return await _cosmosDbService.GetItemAsync(id);
        }

        [HttpGet]
        public async Task<IEnumerable<Recipe>> GetRecipes()
        {
            return await _cosmosDbService.GetItemsAsync("SELECT * FROM c");
        }

        [HttpPost]
        public async Task<IActionResult> CreateRecipe([FromBody] RecipeData recipeData)
        {
            if(ModelState.IsValid)
            {
                Recipe r = new Recipe { 
                    Description = recipeData.Description,
                    Name = recipeData.Name,
                    Steps = recipeData.Steps?.Select(s => new Step { Description = s.Description }).ToList()
                };

                r.Id = Guid.NewGuid().ToString();
                await _cosmosDbService.AddItemAsync(r);
                return Ok(new { id = r.Id });
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditRecipe(string id, [FromBody] RecipeData recipeData)
        {
            if(ModelState.IsValid)
            {
                Recipe r = new Recipe
                {
                    Description = recipeData.Description,
                    Name = recipeData.Name,
                    Steps = recipeData.Steps.Select(s => new Step { Description = s.Description }).ToList()
                };

                r.Id = id;
                await _cosmosDbService.UpdateItemAsync(id, r);
                return Ok();
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public async Task DeleteProduct(string id)
        {
            await _cosmosDbService.DeleteItemAsync(id);
        }
    }
}