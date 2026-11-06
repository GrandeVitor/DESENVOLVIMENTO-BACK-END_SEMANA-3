
import express from 'express';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const PORT = 3000;

const times = [
    { id: 1, nome: "Grêmio", estadio: "Arena", cidade: "Porto Alegre" },
    { id: 2, nome: "Internacional", estadio: "Beira-Rio", cidade: "Porto Alegre" },
    { id: 3, nome: "Flamengo", estadio: "Maracanã", cidade: "Rio de Janeiro" },
    { id: 4, nome: "Palmeiras", estadio: "Allianz Parque", cidade: "São Paulo" }
];

app.get('/', (req, res) => {
    res.render('index', {});
});

app.get('/times', (req, res) => {
    res.render('times', { times });
});

app.get('/times/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const time = times.find(t => t.id === id);

    if (!time) {
        return res.status(404).send('Time não encontrado!');
    }

    res.render('detalhe', { time });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
