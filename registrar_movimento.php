<?php
// aqui dentro vamos codar em php

require_once('./conectorMySQL.php'); // esta linha carrega o arquivo conectorMySQL.php

// para registrar o movimento da peça, temos que ter, no mínimo, quatro variáveis

/**
 * como declarar uma variável em php:
 * primeiro digita-se o caractere cifrão "$", depois digita-se o nome da variável, daí continua com o operador de atribuição " = ", e, por fim o valor da variável
 */

$nome_peca = $_GET['nome_peca'];
$cor_peca = $_GET['cor_peca'];
$coluna = $_GET['coluna'];
$linha = $_GET['linha'];

/**
 * Pergunto: precisa registrar a localização da peça anterior? ou não?
 */

// echo '$nome_peca: ' . $nome_peca . "<br/>";
// echo '$cor_peca: ' . $cor_peca . "<br/>";
// echo '$coluna: ' . $coluna . "<br/>";
// echo '$linha: ' . $linha . "<br/>";

$tbl_movimentos = "tbl_movimentos";
$sql_verificar_tabela = "show tables like '$tbl_movimentos';";
$tabela = $conexao->query($sql_verificar_tabela);

if ($tabela->num_rows < 1) {
    require_once('./criar_tbl_movimentos.php');
}

$str_sql_registrar_movimento = "
    insert into `$tbl_movimentos` (
        `nome_peca`, 
        `cor_peca`, 
        `coluna`, 
        `linha`
    ) values (
        '$nome_peca',
        '$cor_peca',
        '$coluna',
        '$linha'
    );";
if ($conexao->query($str_sql_registrar_movimento) === TRUE) {
    $last_id = $conexao->insert_id;
    echo "Movimento $last_id registrado com sucesso.";
}
?>