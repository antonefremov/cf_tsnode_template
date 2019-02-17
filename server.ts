import express = require('express');

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (_req: any, res: any) {
  res.send('Hello World!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});


// import { Observable, Subscriber } from 'rxjs';

// let count: number = 0;

// const sequence$: Observable<number> = Observable.create((subscriber: Subscriber<number>) => {
//     setInterval(() => {
//         count++;
//         subscriber.next(count);
//     }, 1000);
// });

// sequence$.subscribe((value: number) => {
//     console.log('subscribe 1 ===>', value);
// }, () => {}, () => {
//     console.log('completed');
// });

// ----=====================================================================================
// 'use strict';
// const express = require('express');
// const bodyParser = require('body-parser');

// function log(logTxt) {
//     console.log(logTxt);
// }

// const app = express();
// const url = '/users';
// const users = require('./users.json');

// app.use(bodyParser.json());

// app.get(url, function (req, res) {
//     log('Get All Request');
//     res.status(200).json(users);
// });

// app.get(url + '/:id', function (req, res) {
//     // First read existing users.
//     const userId = parseInt(req.params.id);
//     log('Get User Request for id ' + userId);

//     const foundUser = users.find(function(user) {
//         return user.id === userId;
//     });
//     if (!foundUser) {
//         res.status(404).end();
//         return;
//     }

//     res.status(200).json(foundUser);
// });

// app.post(url, function (req, res) {

//     var newUser = req.body;

//     newUser.id = users.length;
//     users.push(newUser);

//     log('User added ' + newUser + ' with id: ' + newUser.id);

//     res.status(201).json(newUser);
// });

// const PORT = process.env.PORT || 8088;

// var server = app.listen(PORT, function () {

//     const host = server.address().address;
//     const port = server.address().port;

//     log('Example app listening at http://' + host + ':' + port);

// });
