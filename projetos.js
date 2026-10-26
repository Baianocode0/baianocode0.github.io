// ✏️ EDITE AQUI: cada item é um projeto do portfólio.
// - imagem: arquivo de capa na pasta "imagens" (ex.: "imagens/meu-projeto.png").
// - galeria: (opcional) mais imagens que aparecem quando o projeto é aberto.
// - categoria: vira um filtro automático quando houver mais de uma categoria.
const PROJETOS = [
  {
    titulo: "Cidade Alta RP",
    subtitulo: "Liveries & fardamento policial",
    categoria: "Liveries & fardas",
    ano: 2024,
    descricao: "Identidade visual das forças policiais do servidor de GTA RP Cidade Alta: liveries de viaturas (Mustang, Interceptor, RAM, Explorer da Corregedoria e do CORE), motos e insígnias da ROCAM, helicópteros, uniformes operacional, de patrulha e administrativo, boinas e capacetes. As artes eram feitas em plano, sobre o mapa de textura de cada modelo, e testadas dentro do jogo.",
    imagem: "imagens/cda-capa.jpg",
    galeria: ["imagens/cda-viaturas.jpg", "imagens/cda-rocam.jpg", "imagens/cda-aereo.jpg", "imagens/cda-fardas.jpg", "imagens/cda-processo.jpg"],
  },
  {
    titulo: "Sena Tech",
    subtitulo: "Identidade para Instagram",
    categoria: "Identidade visual",
    ano: 2026,
    descricao: "Identidade do perfil @senatech.ba: foto de perfil com o “S” entre chaves, capas de destaques, três direções de story (HUD, interface e bloco de cor) e carrosséis de apresentação e de projeto. Preto, verde-limão e tipografia Geist.",
    imagem: "imagens/senatech-capa.jpg",
    galeria: ["imagens/senatech-posts.jpg", "imagens/senatech-identidade.jpg"],
  },
  {
    titulo: "King Barbearia",
    subtitulo: "App de agendamento",
    categoria: "App & UI",
    ano: 2026,
    descricao: "Interface do app da King Barbearia para Android e iPhone: login com a marca, início com o próximo horário, escolha de serviço e barbeiro, horário com cupom e painel do dono. Tema escuro com azul da marca, dourado e títulos em Cinzel.",
    imagem: "imagens/king-capa.jpg",
    galeria: ["imagens/king-telas.jpg"],
  },
  {
    titulo: "Telas de live",
    subtitulo: "Offline & iniciando",
    categoria: "Twitch · baianofps7",
    ano: 2026,
    descricao: "Tela de offline e tela animada de “A live está começando”, com contagem regressiva, letreiro de recados e lettering próprio. Papel, grafite e um toque de neon.",
    imagem: "imagens/preview-telas.jpg",
    galeria: ["imagens/twitch-offline.jpg"],
  },
  {
    titulo: "Painéis do canal",
    subtitulo: "Botões da descrição",
    categoria: "Twitch · baianofps7",
    ano: 2026,
    descricao: "Oito painéis (sobre mim, setup, regras, horários, redes e apoio) seguindo o mesmo sistema: bloco inclinado com ícone, título em Anton e os três quadradinhos da marca.",
    imagem: "imagens/preview-paineis.jpg",
  },
  {
    titulo: "Alertas",
    subtitulo: "Follow, sub, bits, raid…",
    categoria: "Twitch · baianofps7",
    ano: 2026,
    descricao: "Seis alertas animados com fundo transparente. A faixa clara do meio recebe o nome de quem seguiu ou deu sub, escrito pela própria plataforma.",
    imagem: "imagens/preview-alertas.jpg",
  },
  {
    titulo: "Stinger",
    subtitulo: "Transição de cena",
    categoria: "Twitch · baianofps7",
    ano: 2026,
    descricao: "Transição de 1,4 s: faixas diagonais com linha neon varrem a tela e revelam a assinatura “Baiano”. Exportada em vídeo com fundo transparente para o OBS.",
    imagem: "imagens/preview-stinger.jpg",
  },
];
