-- database/schema.sql
CREATE DATABASE IF NOT EXISTS prospecta
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

USE prospecta;

CREATE TABLE IF NOT EXISTS leads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cnpj CHAR(14) NOT NULL,
  empresa VARCHAR(255) NOT NULL,
  telefone VARCHAR(50) NULL,
  endereco VARCHAR(255) NULL,
  escritorio VARCHAR(50) NULL,
  codigo_funcional VARCHAR(50) NULL,
  nome_completo VARCHAR(255) NULL,
  indicado_por VARCHAR(255) NULL,
  recebedor_codigo_funcional VARCHAR(50) NULL,
  recebedor_nome_completo VARCHAR(255) NULL,
  recebedor_email VARCHAR(255) NULL,
  email_gerente VARCHAR(255) NULL,
  email_agencia VARCHAR(255) NULL,
  banco_atual VARCHAR(255) NULL,
  grupo_economico VARCHAR(50) NULL,
  faturamento_anual DECIMAL(15,2) NULL,
  comentario TEXT NULL,
  agencia VARCHAR(255) NULL,
  municipio_uf VARCHAR(255) NULL,
  distancia_km DECIMAL(10,2) NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'enviado',
  data_envio DATETIME NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_cnpj (cnpj),
  INDEX idx_status (status)
);
