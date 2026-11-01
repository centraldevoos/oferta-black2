// Configuração da página que revela a oferta da Super Black Friday. É o arquivo que se edita à mão antes de publicar.
window.CONFIG = {
  // Checkout da Hub.la com a oferta da Black (2 anos por R$ 397). Enquanto estiver "[LINK]",
  // os botões levam até a caixa de preço. Cole o link só na cópia que vai ao ar.
  CHECKOUT: "[LINK]",

  // Preço da Super Black Friday.
  PRECO: 397,
  // Parcela no cartão. PROPOSTA: calculada com a mesma taxa do Hub.la do VIP (R$ 297 → 12x R$ 30,18).
  // Confirmar no checkout. Se ficar null, a página mostra só "ou em até 12x no cartão".
  PARCELA: "12x de R$ 40,34",
  // Preço normal de 1 ano de Comunidade VIP (base/central-de-voos/negocio.md, L2 e L3).
  PRECO_VIP_ANO: 297,

  // Prazo final da oferta, no formato "2026-11-04T23:59:00-03:00". Com prazo, aparece a contagem regressiva.
  // null = sem contagem. Escassez só se for verdadeira: só preencher com a data em que o carrinho fecha de verdade.
  PRAZO: null,

  // Pilha de valor. "valor" = preço normal de cada entrega.
  // oficial: true = valor que está na base. oficial: false = PROPOSTA, a validar com o Pedro antes de publicar.
  PRINCIPAIS: [
    { nome: "Comunidade VIP no WhatsApp", detalhe: "2 anos de acesso", desc: "Mais de 150 promoções de passagens por dia, saindo de todos os aeroportos do Brasil e separadas por região.", valor: 594, oficial: true },
    { tag: "Novidade", nome: "APP Central de Voos", detalhe: "2 anos de acesso", desc: "Tudo da Central reunido no seu celular, com praticidade no dia a dia: você diz pra onde quer ir e o app busca as promoções pra você.", valor: 497, oficial: false },
    { nome: "Workshop Desvendando as Milhas", detalhe: "ao vivo", desc: "Um encontro ao vivo pra entender de vez como as milhas funcionam e começar a usar do jeito certo.", valor: 397, oficial: false },
  ],
  BONUS: [
    { tag: "Só na Black", nome: "Mais um acesso VIP pra quem você quiser", detalhe: "2 anos", desc: "Leve o seu marido, a sua esposa, a sua mãe ou um amigo. A pessoa também entra na Comunidade VIP, pelos mesmos 2 anos.", valor: 594, oficial: false },
    { nome: "Monitoramento Personalizado com IA", desc: "O nosso sistema junta inteligência artificial e uma equipe especializada pra vigiar o preço das suas viagens e avisar quando baixa.", valor: 297, oficial: false },
    { nome: "Curso de Milhas", desc: "Aulas em vídeo pra juntar e usar pontos e milhas do jeito certo.", valor: 397, oficial: false },
    { nome: "Grupo de Estratégias", desc: "Transferências bonificadas, promoções de compra de milhas e as melhores oportunidades dos programas de pontos, em primeira mão.", valor: 197, oficial: false },
    { nome: "Suporte Jurídico", desc: "Advogada especialista em direito do passageiro pra quando o voo der problema.", valor: 197, oficial: false },
  ],

  // Depoimentos em vídeo do vturb (os mesmos de centraldevoos.com/depoimentos). capa = arquivo em midia/depoimentos/.
  VTURB_CONTA: "00c8b9a1-000b-422f-abff-cb49b5ef54fa",
  VIDEOS: [
    { player: "6a1f763a0f11a909a69519f6", capa: "video1.jpg" },
    { player: "6a1f764a0b98d8bade87d2dc", capa: "video2.jpg" },
    { player: "6a1f76bc544d592ebd793c38", capa: "video3.jpg" },
    { player: "6a1f76450b98d8bade87d2ca", capa: "video6.jpg" },
    { player: "6a1f763f504b54b9bc1b4bec", capa: "video7.jpg" },
    { player: "6a1f766e35493f0821a09014", capa: "video10.jpg" },
  ],
};
