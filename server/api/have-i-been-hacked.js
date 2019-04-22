
const request = require('request');

module.exports = haveIBeenHacked = (req, res) => {
    const email = req.params.email;
    const url = 
        `https://haveibeenpwned.com/api/v2/breachedaccount/${email}`;
    const headers = { 'User-Agent': 'the-alicia-app' };
    const requestData = { url, headers };

    const handleResponse = (error, response, body) => {

        // Handle error case
        if (error) {
            res.status(500);
            res.send('There was a big error.');
            return;
        } else { // No error, handle success case

            if (!body) { // No hacks found!
                res.status(200);
                res.json([]);
                return;
            }

            // Hacks were found, format and return
            const results = [];
            try {
                JSON.parse(body).forEach((breach)=>{
                    results.push({
                        title: breach.Title,
                        logo: breach.LogoPath,
                        breachDate: breach.BreachDate,
                        count: breach.PwnCount,
                        description: breach.Description,
                        leakedData: breach.DataClasses,
                    });
                });
            } catch (e) { // Error parsing JSON/ unexpected result
                res.status(500);
                res.send('Unable to parse JSON response.');
                return;
            }
            res.status(200);
            res.json(results);
            return;
        }
    }
    // Make the request
    request(requestData, handleResponse);
}