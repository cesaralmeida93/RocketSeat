import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('listagem de usuários');

    response.json([
        'Cesar',
        'Cleiton',
        'Pedro'
    ]);
});

app.listen(5000);
