const { Country, Activity } = require('../db');

const creadorGetActivities = async ({names, difficulty, duration, temporada,costo, countries}) => {
   console.log(names, difficulty, duration, temporada,costo, countries);
    try {
     // const { names, difficulty, duration, temporada, countries } = data;
        const activity = await Activity.findOne({
          where: { names }
        });
        let createdActivity = null;
        if (!(activity instanceof Activity)) {
          createdActivity = await Activity.create({
            names,
            difficulty,
            duration,
            temporada,
            costo,
          });
        }
        let foundCountries = [];
        for (let countryName of countries) {
          const country = await Country.findOne({
            where: { name: countryName }
          });
          foundCountries.push(country);
        }
        if (activity instanceof Activity) {
          await activity.addCountries(foundCountries);
        } else {
          await createdActivity.addCountries(foundCountries);
        }
        return createdActivity;
      } catch (error) {
        throw new Error(error.message);
      }
};

module.exports = { creadorGetActivities };