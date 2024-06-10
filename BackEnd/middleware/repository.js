const db = require('../database');

module.exports = {
    getPlanets: async function(req,res,next){
        try {
            const planetQuery = "SELECT p.planet_id, p.name, p.type, p.size, p.moons, s.name as 'solarSystem_name' FROM `Planet` p  JOIN `Solar System` s ON s.solarSystem_id = p.solarSystem";
            const [results,field] = await db.query(planetQuery);
            res.locals.results = results;
            next();
            
        } catch (error) {
            next(error);
        }

    }
}