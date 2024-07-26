<?php
$tbl_movimentos = "tbl_movimentos";
$str_sql_create_tbl_movimentos = "
    create table if not exists `$tbl_movimentos` (
        `id` int(11) not null auto_increment,
        `nome_peca` varchar(255) null,
        `cor_peca` varchar(255) null,
        `coluna` varchar(255) null,
        `linha` varchar(255) null,
        primary key (`id`)
    );
";
if ($conexao->query($str_sql_create_tbl_movimentos) === TRUE) {
    echo "
        <script>
            console.log('Tabela $tbl_movimentos criada com sucesso!');
        </script>
    ";
}
?>