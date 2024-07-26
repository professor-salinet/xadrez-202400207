<?php
require_once('./conectorMySQL.php');

$errors = [];
$data = [];

$txtNome = $_POST['txtNome'];
if (empty($txtNome)) {
    $errors['txtNome'] = 'Digite alguma coisa no campo txtNome para continuar.';
}

$txtSobrenome = $_POST['txtSobrenome'];
if (empty($txtSobrenome)) {
    $errors['txtSobrenome'] = 'Digite alguma coisa no campo txtSobrenome para continuar.';
}

$txtDiaNascimento = $_POST['txtDiaNascimento'];
if (empty($txtDiaNascimento)) {
    $errors['txtDiaNascimento'] = 'Digite alguma coisa no campo txtDiaNascimento para continuar.';
}

$txtMesNascimento = $_POST['txtMesNascimento'];
if (empty($txtMesNascimento)) {
    $errors['txtMesNascimento'] = 'Digite alguma coisa no campo txtMesNascimento para continuar.';
}

$txtAnoNascimento = $_POST['txtAnoNascimento'];
if (empty($txtAnoNascimento)) {
    $errors['txtAnoNascimento'] = 'Digite alguma coisa no campo txtAnoNascimento para continuar.';
}

$txtEmail = $_POST['txtEmail'];
if (empty($txtEmail)) {
    $errors['txtEmail'] = 'Digite alguma coisa no campo txtEmail para continuar.';
}

$txtWhatsapp = $_POST['txtWhatsapp'];
if (empty($txtWhatsapp)) {
    $errors['txtWhatsapp'] = 'Digite alguma coisa no campo txtWhatsapp para continuar.';
}

$txtEndereco = $_POST['txtEndereco'];
if (empty($txtEndereco)) {
    $errors['txtEndereco'] = 'Digite alguma coisa no campo txtEndereco para continuar.';
}

$txtNumeroEndereco = $_POST['txtNumeroEndereco'];
if (empty($txtNumeroEndereco)) {
    $errors['txtNumeroEndereco'] = 'Digite alguma coisa no campo txtNumeroEndereco para continuar.';
}

$txtBairro = $_POST['txtBairro'];
if (empty($txtBairro)) {
    $errors['txtBairro'] = 'Digite alguma coisa no campo txtBairro para continuar.';
}

$txtCEP = $_POST['txtCEP'];
if (empty($txtCEP)) {
    $errors['txtCEP'] = 'Digite alguma coisa no campo txtCEP para continuar.';
}

$txtCidade = $_POST['txtCidade'];
if (empty($txtCidade)) {
    $errors['txtCidade'] = 'Digite alguma coisa no campo txtCidade para continuar.';
}

$txtEstado = $_POST['txtEstado'];
if (empty($txtEstado)) {
    $errors['txtEstado'] = 'Digite alguma coisa no campo txtEstado para continuar.';
}

$txtCPF = $_POST['txtCPF'];
if (empty($txtCPF)) {
    $errors['txtCPF'] = 'Digite alguma coisa no campo txtCPF para continuar.';
}

$txtRG = $_POST['txtRG'];
if (empty($txtCPF)) {
    $errors['txtCPF'] = 'Digite alguma coisa no campo txtCPF para continuar.';
}

$txtNacionalidade = $_POST['txtNacionalidade'];
if (empty($txtNacionalidade)) {
    $errors['txtNacionalidade'] = 'Digite alguma coisa no campo txtNacionalidade para continuar.';
}

$txtProfissao = $_POST['txtProfissao'];
if (empty($txtProfissao)) {
    $errors['txtProfissao'] = 'Digite alguma coisa no campo txtProfissao para continuar.';
}

$txtEstadoCivil = $_POST['txtEstadoCivil'];
if (empty($txtEstadoCivil)) {
    $errors['txtEstadoCivil'] = 'Digite alguma coisa no campo txtEstadoCivil para continuar.';
}

$txtSenha = $_POST['txtSenha'];
if (empty($txtSenha)) {
    $errors['txtSenha'] = 'Digite alguma coisa no campo txtSenha para continuar.';
}

if (!empty($errors)) { // se a variável $errors não estiver vazia, ou seja, se conter algum erro
    $data['success'] = false;
    $data['errors'] = $errors;
} else { // se variável $errors estiver vazia, ou seja, se náo tiver qualquer erro
    try {
        $str_sql_cadastrar = "insert into `tbl_cadastro` (`nome`,`sobrenome`,`dia_nascimento`,`mes_nascimento`,`ano_nascimento`,`email`,`whatsapp`,`endereco`,`numero_endereco`,`bairro`,`cep`,`cidade`,`estado`,`cpf`,`rg`,`nacionalidade`,`profissao`,`estado_civil`,`senha`) values ('$txtNome', '$txtSobrenome', '$txtDiaNascimento', '$txtMesNascimento', '$txtAnoNascimento', '$txtEmail', '$txtWhatsapp', '$txtEndereco', '$txtNumeroEndereco', '$txtBairro', '$txtCEP', '$txtCidade', '$txtEstado', '$txtCPF', '$txtRG', '$txtNacionalidade', '$txtProfissao', '$txtEstadoCivil', '$txtSenha');";
        if ($conexao->query($str_sql_cadastrar) === TRUE) {
            $last_id = $conexao->insert_id;
            $msg = "O cadastro de $txtNome [ID $last_id] cadastrado com sucesso!";
            $data['success'] = true;
            $data['message'] = $msg;
        } else {
            $data['success'] = false;
            $data['errors'] = $errors;
        }
    } catch (\Exception $e) {
        $msg = "Ocorreu o erro: ." . str_replace(array("\r", "\n"), '', $e);
    }
}

echo json_encode($data);