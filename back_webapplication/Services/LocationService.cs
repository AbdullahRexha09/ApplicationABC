using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using webapplication.Models;

namespace webapplication.Services
{
    public class LocationService : ILocationService
    {
        public readonly AppDbContext _db;
        public LocationService(AppDbContext _db) 
        {
            this._db = _db;
        }
        public Location AddLocation(Location location)
        {
            throw new NotImplementedException();
        }

        public bool DeleteLocation(Guid Id)
        {
            throw new NotImplementedException();
        }

        public List<Location> GetAllLocations()
        {
            throw new NotImplementedException();
        }

        public Location UpdateLocation(Location location)
        {
            throw new NotImplementedException();
        }
        public List<City> GetAllCities() 
        {
            return _db.City.ToList();
        }
    }
}
