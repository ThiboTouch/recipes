using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApp.Models.BindingTargets
{
    public class RecipeData
    {
        [Required]
        public string Name { get; set; }

        [Required]
        [StringLength(1000, MinimumLength = 2)]
        public string Description { get; set; }

        public List<StepData> Steps { get; set; }

        public Recipe Recipe => new Recipe
        {
            Name = Name,
            Description = Description,
            Steps = Steps.Select(s => s.Step).ToList()
        };
    }
}
