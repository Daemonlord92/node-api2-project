const express = require('express');
const server = require('./api/server');


server.listen(5000, () =>
    console.log('Server running on http://localhost:5000')
);