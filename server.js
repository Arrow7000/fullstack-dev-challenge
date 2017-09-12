const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api');

const app = express();

app.use(bodyParser());

app.use('/api', api);

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
