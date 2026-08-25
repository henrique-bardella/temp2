USE prospecta;

ALTER TABLE leads
  ADD COLUMN recebedor_codigo_funcional VARCHAR(50) NULL AFTER indicado_por,
  ADD COLUMN recebedor_nome_completo VARCHAR(255) NULL AFTER recebedor_codigo_funcional,
  ADD COLUMN recebedor_email VARCHAR(255) NULL AFTER recebedor_nome_completo;
