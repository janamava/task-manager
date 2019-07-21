const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const http = require('http');


let tasks = JSON.parse(
    fs.readFileSync('tasks.json', { encoding: "UTF-8" })
);

app
    .use(cors())
    .use(express.json())
    .get("/tasks", (req, res) => res.send(tasks));

app
    .post("/tasks", (req, res) => {
        req.body.id = assignId(tasks);
        tasks.push(req.body)
        fs.writeFileSync('tasks.json', JSON.stringify(tasks), 'utf8');
        // res.status(200).json({ message: 'success' });
        res.status(200).send(req.body);
    });

app
    .put("/tasks", (req, res) => {
        checkStatus(tasks, req.body.id);
        fs.writeFileSync('tasks.json', JSON.stringify(tasks), 'utf8');
        // res.status(200).req.body;
        res.status(200).json({ message: 'success' });
    })

app
    .delete("/tasks/:id", (req, res) => {
        tasks = tasks.filter(task => task.id != req.params.id);
        fs.writeFileSync('tasks.json', JSON.stringify(tasks), 'utf8');
        // res.status(200).json({ message: 'success' });
        res.status(200).send(tasks);
    })

const server = http.createServer(app);
server.listen(3000, () => console.log("Server has been started"));


const assignId = function (array) {
    let id;
    if (!array.length) {
        id = 1;
    }
    else {
        array.sort((element1, element2) => element2.id - element1.id);
        id = array[0].id + 1;
    }
    return id;
}

const checkStatus = function (array, id) {
    array.forEach(element => {
        if (element.id === id) {
            element.status = !element.status
        }
    });
}