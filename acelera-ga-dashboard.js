import { initDashboardGuide } from './dashboard-guide.js';

export const dashboardAreas = [
  {
    "image": "dashboard-acelera-premissas.jpeg",
    "pageTitle": "Premissas do Programa",
    "title": "Premissas · Base, bônus e certificação",
    "description": "Leia as faixas de evolução do ROB, a pontuação dos produtos e o acelerador de certificação.",
    "x": 300,
    "y": 239,
    "width": 697,
    "height": 524,
    "imageWidth": 1600,
    "imageHeight": 885
  },
  {
    "image": "dashboard-acelera-premissas.jpeg",
    "pageTitle": "Premissas do Programa",
    "title": "Premissas · Curso obrigatório",
    "description": "Localize o ônus de 5 pontos relacionado ao curso obrigatório. A captura não detalha a condição de aplicação.",
    "x": 1025,
    "y": 236,
    "width": 477,
    "height": 114,
    "imageWidth": 1600,
    "imageHeight": 885
  },
  {
    "image": "dashboard-acelera-base.jpeg",
    "pageTitle": "Base de Clientes",
    "title": "Base de Clientes · Filtros",
    "description": "Delimite regional, agência, gerente assistente, grupo e CNPJ completo antes de analisar a base.",
    "x": 0,
    "y": 220,
    "width": 171,
    "height": 322,
    "imageWidth": 1280,
    "imageHeight": 715
  },
  {
    "image": "dashboard-acelera-base.jpeg",
    "pageTitle": "Base de Clientes",
    "title": "Base de Clientes · Visão consolidada",
    "description": "Confira a quantidade de grupos e CNPJs, a soma de ROB e o total de produtos da seleção.",
    "x": 178,
    "y": 68,
    "width": 1081,
    "height": 91,
    "imageWidth": 1280,
    "imageHeight": 715
  },
  {
    "image": "dashboard-acelera-base.jpeg",
    "pageTitle": "Base de Clientes",
    "title": "Base de Clientes · Perfil e localização",
    "description": "Compare ramo de atividade, tempo de fundação, tempo de relacionamento e distribuição geográfica dos clientes.",
    "x": 178,
    "y": 160,
    "width": 1081,
    "height": 243,
    "imageWidth": 1280,
    "imageHeight": 715
  },
  {
    "image": "dashboard-acelera-base.jpeg",
    "pageTitle": "Base de Clientes",
    "title": "Base de Clientes · Lista de clientes",
    "description": "Consulte os dados de identificação dos clientes elegíveis após aplicar os filtros.",
    "x": 177,
    "y": 409,
    "width": 1082,
    "height": 295,
    "imageWidth": 1280,
    "imageHeight": 715
  }
];

if (typeof document !== 'undefined') initDashboardGuide(dashboardAreas, { selector: '#leitura .reading-journey li' });
