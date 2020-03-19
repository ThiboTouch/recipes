using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ServerApp.Models;
using ServerApp.Models.BindingTargets;
using ServerApp.Services;

namespace ServerApp.Controllers
{
    [Route("api/recipes")]
    [ApiController]
    [Authorize]
    public class RecipeController : Controller
    {
        private ICosmosDbService _cosmosDbService;
        private UserManager<IdentityUser> _userMangager;
        public RecipeController(ICosmosDbService cosmosDbService, UserManager<IdentityUser> userMgr)
        {
            _cosmosDbService = cosmosDbService;
            _userMangager = userMgr;
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
            if (ModelState.IsValid)
            {
                Recipe r = new Recipe
                {
                    Description = recipeData.Description,
                    Name = recipeData.Name,
                    Steps = recipeData.Steps?.Select(s => new Step { Description = s.Description }).ToList(),
                    UserId = recipeData.UserId
                };

                r.Id = Guid.NewGuid().ToString();
                await _cosmosDbService.AddItemAsync(r);
                return Ok(new { r.Id });
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditRecipe(string id, [FromBody] RecipeData recipeData)
        {
            if (ModelState.IsValid)
            {

                Recipe r = new Recipe
                {
                    Description = recipeData.Description,
                    Name = recipeData.Name,
                    Steps = recipeData.Steps.Select(s => new Step { Description = s.Description }).ToList(),
                    UserId = recipeData.UserId,
                    Id = id
                };

                if (await belongsToUser(r))
                {
                    await _cosmosDbService.UpdateItemAsync(id, r);

                    return Ok();
                }

            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public async Task DeleteProduct(string id)
        {
            var r = await _cosmosDbService.GetItemAsync(id);
            if (await belongsToUser(r))
                await _cosmosDbService.DeleteItemAsync(id);
        }

        private async Task<bool> belongsToUser(Recipe recipe)
        {
            var user = await _userMangager.FindByNameAsync(User.Identity.Name);
            return recipe.UserId == user?.Id;
        }
    }
}