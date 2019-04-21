const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');

require('dotenv').config()

const app = express();

const port = process.env.PORT || 8080;

// Serve up built vue app, at the mail root
const staticFileMiddleware = express.static(path.join('dist'));
app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);


// Make all public assets available 
app.use('/public', express.static('public'))

// Add the API routes
const apiRoutes = require('./api');
app.use('/api', apiRoutes);

// App has started
app.listen(port, () => 
    console.log(`Awesome app has started and is running on port ${port} 🚀`)
);
