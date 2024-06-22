// Obtém o cliente
import mysql from 'mysql2/promise';

// Cria a conexão com o Banco de Dados
const connectionProd = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'cadastroprodutos',
});

connectionProd.connect(err => { 
  if (err) {
      console.error("Erro ao conectar ao bancos de dados de Cadastro de Produtos:", err);
      return;
  } else {
      console.log("Conexão bem sucedida com o banco de dados de Cadastro de Produtos!");
  }
});

export default connectionProd;