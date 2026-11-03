import { initDashboardGuide as initGuide } from './dashboard-guide.js';

// Coordenadas proporcionais ao enquadramento das capturas atualizadas.
// A base de referência acompanha a proporção da imagem, independentemente da resolução.
export const dashboardAreas = [
  { image: 'dashboard-visao-geral.jpg', title: 'Filtros e navegação de páginas', description: 'Na lateral esquerda, escolha a página e delimite cargo, segmento, regional, agência e funcionário. Confira os filtros antes de interpretar os resultados.', x: 0, y: 108, width: 238, height: 848, imageWidth: 2048, imageHeight: 1026 },
  { image: 'dashboard-visao-geral.jpg', title: 'Identificação do profissional', description: 'Ao selecionar os filtros e o funcionário, o cabeçalho apresenta as informações do profissional, incluindo cargo, tempo na função, agência e regional. Confirme a quem os resultados se referem. Os dados de identificação pessoal estão borrados nesta demonstração.', x: 250, y: 8, width: 570, height: 86, imageWidth: 2048, imageHeight: 1026 },
  { image: 'dashboard-visao-geral.jpg', title: 'Indicadores de desempenho', description: 'Compare atingimento, peso e contribuição de todos os indicadores nas leituras de 12 meses e YTD.', x: 493, y: 146, width: 1135, height: 264, imageWidth: 2048, imageHeight: 1026 },
  { image: 'dashboard-visao-geral.jpg', title: 'Pontuação ICG', description: 'Observe a pontuação consolidada nas leituras de 12 meses e YTD.', x: 243, y: 146, width: 245, height: 264, imageWidth: 2048, imageHeight: 1026 },
  { image: 'dashboard-visao-geral.jpg', title: '4 Box YTD', description: 'Localize a posição acumulada no ano e leia o direcionamento associado ao quadrante.', x: 242, y: 416, width: 906, height: 366, imageWidth: 2048, imageHeight: 1026 },
  { image: 'dashboard-visao-geral.jpg', title: '4 Box — 12 meses', description: 'Compare a posição na janela móvel de 12 meses para avaliar a sustentabilidade da entrega.', x: 1150, y: 416, width: 898, height: 366, imageWidth: 2048, imageHeight: 1026 },
  { image: 'dashboard-visao-geral.jpg', title: 'Scores dos eixos', description: 'Identifique as contribuições por indicador, os scores dos eixos e suas classificações.', x: 245, y: 805, width: 1790, height: 118, imageWidth: 2048, imageHeight: 1026 },
  { image: 'dashboard-historicos.jpg', title: 'Históricos', description: 'Acompanhe a evolução mensal dos atingimentos para avaliar tendência, estabilidade e volatilidade.', x: 245, y: 106, width: 1106, height: 516, imageWidth: 2048, imageHeight: 1029 },
  { image: 'dashboard-historicos.jpg', title: 'Perfil de competências', description: 'Compare o desempenho atual com o histórico no gráfico de perfil de competências.', x: 1370, y: 116, width: 430, height: 360, imageWidth: 2048, imageHeight: 1029 },
  { image: 'dashboard-visao-geral.jpg', title: 'Guidance', description: 'Observe a posição na 4 Box dos últimos 12 meses e leia o guidance correspondente ao quadrante para orientar o desenvolvimento gerencial.', x: 1825, y: 445, width: 223, height: 230, imageWidth: 2048, imageHeight: 1026 },
];

export function initDashboardGuide() {
  initGuide(dashboardAreas, { notice: 'Captura da versão anterior do dashboard; consulte a metodologia para as regras atuais da 4 Box.' });
}

if (typeof document !== 'undefined') initDashboardGuide();
