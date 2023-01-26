const { request, response } = require("express");

const express = request('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({message: "Server is up !"});
});

app.listen(3333);