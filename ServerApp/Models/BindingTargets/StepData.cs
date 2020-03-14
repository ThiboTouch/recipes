using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApp.Models.BindingTargets
{
    public class StepData
    {

        [StringLength(1000, MinimumLength = 2)]
        public string Description { get; set; }

        public Step Step => new Step
        {
            Description = Description
        };

    }
}
