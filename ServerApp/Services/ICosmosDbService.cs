namespace ServerApp.Services
{
    using ServerApp.Models;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    public interface ICosmosDbService
    {
        Task<IEnumerable<Recipe>> GetItemsAsync(string query);
        Task<Recipe> GetItemAsync(string id);
        Task AddItemAsync(Recipe item);
        Task UpdateItemAsync(string id, Recipe item);
        Task DeleteItemAsync(string id);
    }
}
