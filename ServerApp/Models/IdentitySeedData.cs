using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApp.Models
{
    public class IdentitySeedData
    {
        private const string username = "user";
        private const string password = "MySecret123$";

        public static async Task SeedDatabase(IServiceProvider provider)
        {
            provider.GetRequiredService<IdentityDataContext>().Database.Migrate();
            UserManager<IdentityUser> userManager = provider.GetRequiredService<UserManager<IdentityUser>>();
            RoleManager<IdentityRole> roleManager = provider.GetRequiredService<RoleManager<IdentityRole>>();
            IdentityUser user = await userManager.FindByNameAsync(username);
            if (user == null)
            {
                user = new IdentityUser(username);
                IdentityResult result
                = await userManager.CreateAsync(user, password);
                if (!result.Succeeded)
                {
                    throw new Exception("Cannot create user: "
                    + result.Errors.FirstOrDefault());
                }
            }
        }
    }
}
