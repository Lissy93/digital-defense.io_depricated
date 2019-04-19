const express = require('express')

require('dotenv').config()

const app = express()

const port = process.env.PORT || 8080

const apiRoutes = require('./api');

// Serve up built vue app, at the mail root
app.use('/', express.static('dist'))

// Make all public assets available 
app.use('/public', express.static('public'))

// Add the API routes
app.use('/api', apiRoutes);

// App has started
app.listen(port, () => 
    console.log(`Awesome app has started and is running on port ${port} 🚀`)
);
