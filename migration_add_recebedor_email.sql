USE prospecta;

ALTER TABLE leads
  ADD COLUMN recebedor_email VARCHAR(255) NULL AFTER recebedor_nome_completo;
