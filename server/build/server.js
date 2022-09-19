import express from "express";
const app = express();
app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'hihi' },
        { id: 2, name: 'hihi' },
        { id: 3, name: 'hihi' },
        { id: 4, name: 'hihi' },
    ]);
});
app.listen(3333);
