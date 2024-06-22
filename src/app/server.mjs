import express from 'express';
import rota from './cadastro/route'
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3001;

// Configurar CORS para permitir solicitações da porta 3000
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Usar body-parser para analisar JSON
app.use(bodyParser.json());

// Usar as rotas
app.use(rota);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
