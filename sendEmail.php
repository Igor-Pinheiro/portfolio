<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Recebe os dados do POST
$data = file_get_contents('php://input');
$request = json_decode($data, true);

if (!$request) {
    http_response_code(400); // Retorna erro de requisição inválida
    echo json_encode(['error' => 'Dados inválidos ou ausentes.']);
    exit;
}

$nome = $request['nome'] ?? '';
$email = $request['email'] ?? '';
$telefone = $request['telefone'] ?? '';
$mensagem = $request['mensagem'] ?? '';

// Verifique se os campos obrigatórios estão preenchidos
if (empty($nome) || empty($email) || empty($mensagem)) {
    http_response_code(422); // Erro de entidade não processável
    echo json_encode(['error' => 'Preencha todos os campos obrigatórios.']);
    exit;
}

// Simula o envio do e-mail (troque isso pela lógica real)
if (mail('destinatario@example.com', 'Novo Contato', "Nome: $nome\nE-mail: $email\nTelefone: $telefone\nMensagem: $mensagem")) {
    echo json_encode(['success' => 'E-mail enviado com sucesso.']);
} else {
    http_response_code(500); // Erro interno do servidor
    echo json_encode(['error' => 'Erro ao enviar o e-mail.']);
}
?>