using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webapplication.Models;

namespace webapplication.Services
{
    public interface ILocationService
    {
        List<Location> GetAllLocations();
        void DeleteLocation(Guid Id);
        void AddLocation(Location location);
        List<City> GetAllCities();
        Location GetLocationById(Guid id);
        bool UpdateLocation(Location location);
    }
}
