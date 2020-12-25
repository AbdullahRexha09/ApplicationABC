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
        public void AddLocation(Location location)
        {
            _db.Location.Add(location);
            _db.SaveChanges();
            return;
        }

        public void DeleteLocation(Guid Id)
        {
            Location location = _db.Location.FirstOrDefault(x => x.Id == Id);
            _db.Location.Remove(location);
            _db.SaveChanges();
        }

        public List<Location> GetAllLocations()
        {
            return _db.Location.ToList();
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
