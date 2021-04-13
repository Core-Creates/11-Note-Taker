const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const http = require('http');
const express = require('express');

const app = express();

var PORT = process.env.PORT || 3001;

const plusBtn = document.getElementById('plus-btn');

const displayNoteSite = (res) => {
    fs.readFile(`${__dirname}/index.html`, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });

    plusBtn.addEventListener('click', function () {


        let notesObj;
        let addNote = document.getElementById('addNote');
        let notesString = localStorage.getItem('notes');

        console.log("clicked note button");

        if (notesString == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notesString);
        }

    });
};

const server = http.createServer(handleRequest);
server.listen(PORT, () => {
    console.log(`Server is listening on: http://localhost:${PORT}`);
});

