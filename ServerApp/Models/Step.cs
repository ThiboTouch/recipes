using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApp.Models
{
    public class Step
    {
        [JsonProperty(PropertyName = "description")]
        public string Description { get; set; }
    }
}
