using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using webapplication.DtoModels;
using webapplication.Models;
using webapplication.Services;
using webapplication.Utils;

namespace webapplication.Controllers
{
    [Route("api/location")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly ILocationService locationService;
        public LocationController(ILocationService locationService) 
        {
            this.locationService =  locationService;
        }

        [HttpGet]
        [Route("getAllCities")]
        public IActionResult GetAllCities() 
        {
            List<City> cities = locationService.GetAllCities();
            return Ok(cities);
        }

    }
}
