// pages/api/cadastro.ts

import { criarProd } from '../cadastro/modelingCads.mjs';
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("Requisição recebida:", req.method, req.body); // Log da requisição recebida
    if (req.method === 'POST') {
      const data = req.body;
      try {
        const result = await criarProd(data); // Esperar a conclusão da inserção no banco de dados
        console.log("Resultado da criação:", result);
        res.status(200).json({ message: 'Produto inserido com sucesso' });
      } catch (error) {
        console.error("Erro ao inserir produto:", error);
        res.status(500).json({ error: 'Erro ao inserir produto' });
      }
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
}
