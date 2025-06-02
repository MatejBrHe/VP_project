const express = require('express');
const app = express();
const path = require('path');



// ##############
// ## Homepage ##
// ##############
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});



// ##############
// ## TopoJSON ##
// ##############
app.get('/europe.json', (req, res) => {
	res.sendFile(path.join(__dirname, 'europe.json'));
});



//
//
//
app.get('/os_europe_data.json', (req, res) => {
	res.sendFile(path.join(__dirname, '../data/os_europe_data.json'));
});



// ######################
// ## Print to console ##
// ######################
app.listen(3000, () => {
	console.log("Server je pokrenut na http://localhost:3000");
});
