var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
//Not best practice to read file every time, but for now it works
//Better to read file once and store in variable(Cache)

/* GET travel view */
const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel'
    res.render('travel', { title: pageTitle, trips});
};

module.exports = {
    travel
};