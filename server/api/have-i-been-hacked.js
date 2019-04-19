
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
        } else { // No error, handle success case
            const results = [];
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
            res.status(200);
            res.json(results);
        }
    }
    // Make the request
    request(requestData, handleResponse);
}