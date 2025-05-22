const express = require('express');
const app = express();
const path = require('path');



// ##############
// ## Homepage ##
// ##############
app.get('/', (req, res) => {
	res.send("Dodaj ime HTML datoteke u tražilicu.");
});



// ############
// ## Task 1 ##
// ############
app.get('/Z5-1', (req, res) => {
	res.sendFile(path.join(__dirname, 'Z5-1.html'));
});
app.get('/cro_regv3.json', (req, res) => {
	res.sendFile(path.join(__dirname, 'cro_regv3.json'));
});



// ############
// ## Task 2 ##
// ############
app.get('/Z5-2', (req, res) => {
	res.sendFile(path.join(__dirname, 'Z5-2.html'));
});



// ############
// ## Task 3 ##
// ############
app.get('/Z5-3', (req, res) => {
	res.sendFile(path.join(__dirname, 'Z5-3.html'));
});



// ############
// ## Task 4 ##
// ############
app.get('/Z5-4', (req, res) => {
	res.sendFile(path.join(__dirname, 'Z5-4.html'));
});



// ##########
// ## Test ##
// ##########
app.get('/test', (req, res) => {
	res.sendFile(path.join(__dirname, 'test.html'));
});
app.get('/europe.json', (req, res) => {
	res.sendFile(path.join(__dirname, 'europe.json'));
});



// ######################
// ## Print to console ##
// ######################
app.listen(3000, () => {
	console.log("Server je pokrenut na http://localhost:3000");
});
