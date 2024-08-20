const express = require('express');


const app = express();

app.use((req, res, next) => {

    res.setHeader(

        'Content-Security-Policy',
        "default-src 'self';",
        "script-src 'self';"
    );

    next();
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(5001, () => {
    console.log('Server is running at port 5001');
});
