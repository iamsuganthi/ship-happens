const express = require('express');
const app = express();
const _ = require('lodash');

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why was the math book sad? Because it had too many problems."
];


app.get('/', (req, res) => {
    res.send(`<h1>Hello Snykers!</h1>`);
});

app.get('/joke', (req, res) => {
    const randomJoke = _.sample(jokes);
    res.send(randomJoke);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
