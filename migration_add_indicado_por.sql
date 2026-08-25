USE prospecta;

ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS indicado_por VARCHAR(255) NULL AFTER nome_completo;
