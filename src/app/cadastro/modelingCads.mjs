import connectionProd from '../dataBaseProdutos.mjs';

export async function criarProd(data) {
    const conexaoDB = await connectionProd();
    console.log("Dados a serem inseridos:", data); // Log dos dados a serem inseridos
    const [result] = await conexaoDB.execute('INSERT INTO cadastro (categoria, nome, marca, quantidade, valor_total, data_compra, validade) VALUES (?, ?, ?, ?, ?, ?, ?)', 
    [data.categoria, data.nome, data.marca, data.quantidade, data.valor_total, data.data_compra, data.validade]
    );
    console.log("Resultado da inserção:", result);
    return { id: result.insertId, ...data };
};