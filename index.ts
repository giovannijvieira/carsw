import express, { Request, Response } from 'express';

const app = express();
const port = 3000; 

app.use(express.json());


app.post('/webhook/carro-cadastrado', (req: Request, res: Response) => {
  try {
    const carData = req.body;
    console.log('Dados do carro recebidos:', carData);

    res.status(200).json({ message: 'Webhook recebido com sucesso!' });
  } catch (error) {
    console.error('Erro ao processar webhook:', error);
    res.status(500).json({ error: 'Erro ao processar webhook' });
  }
});

app.listen(port, () => {
  console.log(`Servidor do webhook iniciado na porta ${port}`);
});
