export type Locale = "en" | "pt";

type TranslationValue = string | string[];

const translations: Record<string, Record<Locale, TranslationValue>> = {
  // Navbar
  "nav.neoldms": { en: "NeoLDM's", pt: "NeoLDM's" },
  "nav.neodata": { en: "NeoData", pt: "NeoData" },
  "nav.howItWorks": { en: "How It Work's", pt: "Como Funciona" },
  "nav.transformerModel": { en: "Transformer Model", pt: "Transformer Model" },
  "nav.documentation": { en: "Documentation", pt: "Documentação" },
  "nav.careers": { en: "Careers", pt: "Carreiras" },
  "nav.logIn": { en: "Log In", pt: "Entrar" },
  "nav.requestDemo": { en: "Request a Demo", pt: "Solicitar Demo" },

  // Hero
  "hero.title1": { en: "Unleash the Knowledge", pt: "Libere o Conhecimento" },
  "hero.title2": { en: "Embedded in Your Data.", pt: "Embutido nos Seus Dados." },
  "hero.subtitle": {
    en: "Turn structured and unstructured data into real-time, actionable intelligence.",
    pt: "Transforme dados estruturados e não estruturados em inteligência acionável em tempo real.",
  },
  "hero.cta": { en: "Request a Demo", pt: "Solicitar uma Demo" },

  // Meet NeoData
  "neodata.title": { en: "Meet NeoData", pt: "Conheça o NeoData" },
  "neodata.subtitle": {
    en: "The data platform built by NeoSpace to power Large Data Models at scale",
    pt: "A plataforma de dados construída pela NeoSpace para alimentar Large Data Models em escala",
  },
  "neodata.f1.title": { en: "Built for Scale", pt: "Feito para Escala" },
  "neodata.f1.desc": {
    en: "Purpose-built AI designed to handle massive datasets, whether structured or unstructured.",
    pt: "IA sob medida para lidar com conjuntos de dados massivos, estruturados ou não estruturados.",
  },
  "neodata.f2.title": { en: "Unified Intelligence", pt: "Inteligência Unificada" },
  "neodata.f2.desc": {
    en: "Correlates every signal across all data streams inside a single unified model.",
    pt: "Correlaciona cada sinal em todos os fluxos de dados em um único modelo unificado.",
  },
  "neodata.f3.title": { en: "Real-Time Inference", pt: "Inferência em Tempo Real" },
  "neodata.f3.desc": {
    en: "Optimized to deliver ultra-low latency and high-throughput predictions at scale.",
    pt: "Otimizado para entregar previsões de ultra-baixa latência e alto throughput em escala.",
  },
  "neodata.f4.title": { en: "Adaptive Architecture", pt: "Arquitetura Adaptativa" },
  "neodata.f4.desc": {
    en: "Dynamic design ensures models stay general, always fresh, and highly relevant.",
    pt: "Design dinâmico garante que os modelos se mantenham gerais, sempre atualizados e altamente relevantes.",
  },
  "neodata.f5.title": { en: "Hyper-Personalization", pt: "Hiperpersonalização" },
  "neodata.f5.desc": {
    en: "Continuously generates individualized actions for each customer interaction.",
    pt: "Gera continuamente ações individualizadas para cada interação com o cliente.",
  },
  "neodata.f6.title": { en: "Seamless Integration", pt: "Integração Fluida" },
  "neodata.f6.desc": {
    en: "No fragile pipelines required — simply connect your data and start running.",
    pt: "Sem pipelines frágeis — simplesmente conecte seus dados e comece.",
  },

  // How It Works
  "howItWorks.title": { en: "How NeoData works.", pt: "Como o NeoData funciona." },
  "howItWorks.subtitle": {
    en: "A unified workflow from raw data to real-time AI",
    pt: "Um workflow unificado de dados brutos até IA em tempo real",
  },
  "howItWorks.step1.title": { en: "Connect your", pt: "Conecte suas" },
  "howItWorks.step1.highlight": { en: "data sources", pt: "fontes de dados" },
  "howItWorks.step1.sub": {
    en: "Including data warehouses, data lakes, and external APIs.",
    pt: "Incluindo data warehouses, data lakes e APIs externas.",
  },
  "howItWorks.step1.desc": {
    en: "NeoData ingests and organizes data across environments, creating a unified and reliable data foundation for LDM workflows.",
    pt: "NeoData ingere e organiza dados em todos os ambientes, criando uma base de dados unificada e confiável para workflows LDM.",
  },
  "howItWorks.step2.title": { en: "Create your", pt: "Crie seus" },
  "howItWorks.step2.highlight": { en: "datasets", pt: "datasets" },
  "howItWorks.step2.sub": {
    en: "Create your own datasets using connected data sources, tailored to your specific use cases and intelligence needs.",
    pt: "Crie seus próprios datasets usando fontes de dados conectadas, adaptados aos seus casos de uso e necessidades de inteligência.",
  },
  "howItWorks.step2.desc": {
    en: "NeoData enables dataset, governance, and traceability — ensuring every dataset is consistent, reproducible, and ready for training.",
    pt: "NeoData habilita governança e rastreabilidade de datasets — garantindo que cada dataset seja consistente, reprodutível e pronto para treino.",
  },
  "howItWorks.step3.title": { en: "Train your", pt: "Treine seu" },
  "howItWorks.step3.highlight": { en: "model", pt: "modelo" },
  "howItWorks.step3.sub": {
    en: "Train LDM models using curated datasets and continuously iterate through training runs and checkpoints.",
    pt: "Treine modelos LDM usando datasets curados e itere continuamente através de runs de treino e checkpoints.",
  },
  "howItWorks.step3.desc": {
    en: "NeoData keeps data, training, and evaluation tightly connected, enabling faster experimentation and higher-quality model outcomes.",
    pt: "NeoData mantém dados, treino e avaliação fortemente conectados, permitindo experimentação mais rápida e resultados de maior qualidade.",
  },
  "howItWorks.step4.title": { en: "Serve real-time", pt: "Sirva" },
  "howItWorks.step4.highlight": { en: "predictions", pt: "previsões em tempo real" },
  "howItWorks.step4.sub": {
    en: "Serve real-time predictions and push insights directly into your business systems.",
    pt: "Sirva previsões em tempo real e envie insights diretamente para seus sistemas de negócios.",
  },
  "howItWorks.step4.desc": {
    en: "NeoData ensures seamless consistency between training data and production inference, enabling reliable, scalable, and production-ready AI.",
    pt: "NeoData garante consistência total entre dados de treino e inferência em produção, habilitando IA confiável, escalável e pronta para produção.",
  },
  "howItWorks.learnMore": { en: "Learn More", pt: "Saiba Mais" },

  // Enterprise Scale
  "enterprise.title1": { en: "NeoData is purpose-built for", pt: "NeoData é construído para" },
  "enterprise.title2": { en: "enterprise-grade scale", pt: "escala empresarial" },
  "enterprise.f1.title": { en: "Massive Scale", pt: "Escala Massiva" },
  "enterprise.f1.desc": {
    en: "Effortlessly process billions of rows and manage petabytes of enterprise data.",
    pt: "Processe bilhões de linhas e gerencie petabytes de dados empresariais sem esforço.",
  },
  "enterprise.f2.title": { en: "Unified Data", pt: "Dados Unificados" },
  "enterprise.f2.desc": {
    en: "Structured or unstructured, all data types modeled together in one system.",
    pt: "Estruturados ou não estruturados, todos os tipos de dados modelados juntos em um sistema.",
  },
  "enterprise.f3.title": { en: "Adaptive Learning", pt: "Aprendizado Adaptativo" },
  "enterprise.f3.desc": {
    en: "Self-optimizing models evolve continuously with every new data stream.",
    pt: "Modelos auto-otimizantes evoluem continuamente com cada novo fluxo de dados.",
  },
  "enterprise.f4.title": { en: "Enterprise Security", pt: "Segurança Empresarial" },
  "enterprise.f4.desc": {
    en: "SOC 2, GDPR compliance, plus governance with advanced access control.",
    pt: "SOC 2, GDPR compliance, além de governança com controle de acesso avançado.",
  },
  "enterprise.f5.title": { en: "Seamless Integration", pt: "Integração Fluida" },
  "enterprise.f5.desc": {
    en: "Fully compatible with your BI, ML, and broader data infrastructure.",
    pt: "Totalmente compatível com sua infraestrutura de BI, ML e dados.",
  },

  // Use Cases
  "useCases.title1": { en: "Deploy LDM's anywhere data is your", pt: "Implante LDM's onde quer que dados sejam sua" },
  "useCases.title2": { en: "competitive advantage", pt: "vantagem competitiva" },
  "useCases.banking.title": { en: "Financial Services", pt: "Serviços Financeiros" },
  "useCases.banking.desc": {
    en: "Fraud detection, credit scoring, hyper-personalized offers, churn modeling, and more.",
    pt: "Detecção de fraude, score de crédito, ofertas hiperpersonalizadas, modelagem de churn e mais.",
  },
  "useCases.retail.title": { en: "Retail and E-commerce", pt: "Varejo e E-commerce" },
  "useCases.retail.desc": {
    en: "Dynamic pricing, personalized recommendations and more.",
    pt: "Precificação dinâmica, recomendações personalizadas e mais.",
  },
  "useCases.telecom.title": { en: "Telecom", pt: "Telecom" },
  "useCases.telecom.desc": {
    en: "Next Best Offer/Action, fraud detection, network optimization, predictive maintenance and more.",
    pt: "Next Best Offer/Action, detecção de fraude, otimização de rede, manutenção preditiva e mais.",
  },

  // Results
  "results.title1": { en: "What our partners achieve with", pt: "O que nossos parceiros alcançam com a" },
  "results.title2": { en: "NeoSpace", pt: "NeoSpace" },
  "results.s1.label": { en: "Prediction Accuracy", pt: "Precisão de Previsão" },
  "results.s1.value": { en: "2X", pt: "2X" },
  "results.s1.desc": {
    en: "More accurate predictions powered by our advanced data modeling approach.",
    pt: "Previsões mais precisas impulsionadas por nossa abordagem avançada de modelagem de dados.",
  },
  "results.s2.label": { en: "Training Efficiency", pt: "Eficiência de Treino" },
  "results.s2.value": { en: "400%", pt: "400%" },
  "results.s2.desc": {
    en: "Faster model training cycles, accelerating experimentation and deployment.",
    pt: "Ciclos de treino mais rápidos, acelerando experimentação e implantação.",
  },
  "results.s3.label": { en: "Inference Latency", pt: "Latência de Inferência" },
  "results.s3.value": { en: "5X", pt: "5X" },
  "results.s3.desc": {
    en: "Even faster inference speeds deliver instant responses across massive datasets.",
    pt: "Velocidades de inferência ainda mais rápidas entregam respostas instantâneas em conjuntos de dados massivos.",
  },
  "results.s4.label": { en: "Real-time scale", pt: "Escala em Tempo Real" },
  "results.s4.value": { en: "10B+", pt: "10B+" },
  "results.s4.desc": {
    en: "Predictions processed in real-time, scaling effortlessly to billions of events.",
    pt: "Previsões processadas em tempo real, escalando sem esforço para bilhões de eventos.",
  },

  // FAQ
  "faq.title1": { en: "Frequently", pt: "Perguntas" },
  "faq.title2": { en: "Asked Questions", pt: "Frequentes" },
  "faq.q1": { en: "What's a Large Data Model?", pt: "O que é um Large Data Model?" },
  "faq.a1": {
    en: "A new class of AI model built for massive-scale, heterogenous enterprise data - not just text or images.",
    pt: "Uma nova classe de modelo de IA construído para dados empresariais heterogêneos em escala massiva - não apenas texto ou imagens.",
  },
  "faq.q2": { en: "Can it connect to my existing data stack?", pt: "Pode conectar ao meu stack de dados existente?" },
  "faq.a2": {
    en: "Yes. We integrate with all major warehouses, lakes, and API systems.",
    pt: "Sim. Integramos com todos os principais warehouses, lakes e sistemas de API.",
  },
  "faq.q3": { en: "Is it secure and compliant?", pt: "É seguro e compliance?" },
  "faq.a3": {
    en: "Absolutely. We offer comprehensive security and compliance certifications.",
    pt: "Absolutamente. Oferecemos certificações abrangentes de segurança e compliance.",
  },

  // Unlock CTA
  "unlock.title1": { en: "Unlock the value", pt: "Desbloqueie o valor" },
  "unlock.title2": { en: "hidden in your data", pt: "escondido nos seus dados" },
  "unlock.cta": { en: "Request a Demo", pt: "Solicitar Demo" },

  // Footer
  "footer.neodata": { en: "NeoData", pt: "NeoData" },
  "footer.neoldms": { en: "NeoLDM's", pt: "NeoLDM's" },
  "footer.howItWorks": { en: "How it works", pt: "Como funciona" },
  "footer.support": { en: "Support", pt: "Suporte" },
  "footer.requestDemo": { en: "Request a Demo", pt: "Solicitar Demo" },
  "footer.privacy": { en: "Privacy Policy", pt: "Política de Privacidade" },
  "footer.docs": { en: "Documentation", pt: "Documentação" },
  "footer.copyright": {
    en: "Copyright © 2026 NeoSpace AI. All rights reserved.",
    pt: "Copyright © 2026 NeoSpace AI. Todos os direitos reservados.",
  },

  // Careers Page
  "careers.hero.title1": { en: "Build the", pt: "Construa o" },
  "careers.hero.title2": { en: "future of AI with us", pt: "futuro da IA conosco" },
  "careers.hero.subtitle": {
    en: "We work at the intersection of data, AI, and real-world systems — solving complex problems for companies operating at massive scale.",
    pt: "Trabalhamos na interseção de dados, IA e sistemas do mundo real — resolvendo problemas complexos para empresas que operam em escala massiva.",
  },
  "careers.whoWeAre": { en: "Who we are", pt: "Quem somos" },
  "careers.whoWeAre.desc": {
    en: "NeoSpace is an AI company focused on creating foundational models powered by Large Data Models. Our work combines model development with a purpose-built training and management platform, allowing us to iterate faster, maintain control over data and experiments, and scale models with confidence.",
    pt: "NeoSpace é uma empresa de IA focada em criar modelos fundacionais alimentados por Large Data Models. Nosso trabalho combina desenvolvimento de modelos com uma plataforma de treino e gestão sob medida, permitindo iterar mais rápido, manter controle sobre dados e experimentos, e escalar modelos com confiança.",
  },
  "careers.mission.title": { en: "Our Mission", pt: "Nossa Missão" },
  "careers.mission.desc": {
    en: "We build artificial intelligence that creates real impact, with ethical standards, strong security, and practical use in complex, real-world environments today.",
    pt: "Construímos inteligência artificial que cria impacto real, com padrões éticos, segurança forte e uso prático em ambientes complexos do mundo real hoje.",
  },
  "careers.vision.title": { en: "Our Vision", pt: "Nossa Visão" },
  "careers.vision.desc": {
    en: "We work to position Brazil as a global reference in artificial intelligence by developing world-class models, technology, and talent with global reach at scale.",
    pt: "Trabalhamos para posicionar o Brasil como referência global em inteligência artificial, desenvolvendo modelos, tecnologia e talentos de classe mundial com alcance global em escala.",
  },
  "careers.values.title": { en: "Our Values", pt: "Nossos Valores" },
  "careers.values.desc": {
    en: "We pursue technical excellence with accountability and end-to-end ownership, acting proactively to deliver reliable outcomes from data to real-world use cases!!",
    pt: "Buscamos excelência técnica com responsabilidade e ownership ponta a ponta, agindo proativamente para entregar resultados confiáveis de dados a casos de uso do mundo real!!",
  },
  "careers.whyWork.title1": { en: "Why work at NeoSpace", pt: "Por que trabalhar na NeoSpace" },
  "careers.whyWork.title2": { en: "Where models are actually built", pt: "Onde modelos são realmente construídos" },
  "careers.whyWork.desc": {
    en: "At NeoSpace, you won't be fine-tuning off-the-shelf models or working on superficial AI layers.",
    pt: "Na NeoSpace, você não vai ajustar modelos prontos ou trabalhar em camadas superficiais de IA.",
  },
  "careers.card1.title": { en: "Training LDM-based foundational models", pt: "Treinando modelos fundacionais baseados em LDM" },
  "careers.card1.desc": {
    en: "Work directly on training foundational models using Large Data Models — from data preparation to training runs and evaluation.",
    pt: "Trabalhe diretamente no treino de modelos fundacionais usando Large Data Models — da preparação de dados a runs de treino e avaliação.",
  },
  "careers.card2.title": { en: "Designing datasets and training strategies", pt: "Projetando datasets e estratégias de treino" },
  "careers.card2.desc": {
    en: "Shape how models learn by designing datasets, training strategies, and experimentation workflows aligned with real-world use cases.",
    pt: "Molde como os modelos aprendem projetando datasets, estratégias de treino e workflows de experimentação alinhados com casos de uso do mundo real.",
  },
  "careers.card3.title": { en: "Building the internal platform that manages model lifecycles", pt: "Construindo a plataforma interna de gestão de ciclo de vida de modelos" },
  "careers.card3.desc": {
    en: "Develop the internal platform that supports model training, versioning, orchestration, and lifecycle management at scale.",
    pt: "Desenvolva a plataforma interna que suporta treino de modelos, versionamento, orquestração e gestão de ciclo de vida em escala.",
  },
  "careers.card4.title": { en: "Solving real engineering challenges", pt: "Resolvendo desafios reais de engenharia" },
  "careers.card4.desc": {
    en: "Tackle challenges around data complexity, model performance, scalability, and control.",
    pt: "Enfrente desafios de complexidade de dados, performance de modelos, escalabilidade e controle.",
  },
  "careers.positions.title": { en: "Open positions", pt: "Vagas abertas" },
  "careers.positions.desc1": {
    en: "We're building a team to push the boundaries of foundational AI models.",
    pt: "Estamos construindo um time para expandir os limites de modelos fundacionais de IA.",
  },
  "careers.positions.desc2": {
    en: "If you want to work on model training, data pipelines, or the platforms that support them — and do it with high technical standards — we want to hear from you.",
    pt: "Se você quer trabalhar em treino de modelos, pipelines de dados ou as plataformas que os suportam — com altos padrões técnicos — queremos ouvir de você.",
  },
  "careers.positions.type": { en: "On-site (negotiable)", pt: "Presencial (negociável)" },
  "careers.talent.title1": { en: "Join NeoSpace", pt: "Entre para o" },
  "careers.talent.title2": { en: "Talent Pool", pt: "Talent Pool da NeoSpace" },
  "careers.talent.desc": {
    en: "We're always looking for talented people who want to shape the future of data, AI, and intelligent decision-making. Submit your profile to our talent pool and be considered for future opportunities at NeoSpace.",
    pt: "Estamos sempre procurando pessoas talentosas que querem moldar o futuro de dados, IA e tomada de decisão inteligente. Envie seu perfil para nosso talent pool e seja considerado para futuras oportunidades na NeoSpace.",
  },
  "careers.form.firstName": { en: "First Name", pt: "Nome" },
  "careers.form.lastName": { en: "Last Name", pt: "Sobrenome" },
  "careers.form.email": { en: "Your Email", pt: "Seu Email" },
  "careers.form.phone": { en: "Phone Number", pt: "Telefone" },
  "careers.form.area": { en: "Area of Activity", pt: "Área de Atuação" },
  "careers.form.linkedin": { en: "Linkedin", pt: "Linkedin" },
  "careers.form.position": { en: "Position Applying For", pt: "Vaga de Interesse" },
  "careers.form.selectPosition": { en: "Select a position", pt: "Selecione uma vaga" },
  "careers.form.submit": { en: "Submit", pt: "Enviar" },
};

export function getTranslation(key: string, locale: Locale): TranslationValue {
  const entry = translations[key];
  if (!entry) return key;
  return entry[locale] ?? entry["en"] ?? key;
}

export function t(key: string, locale: Locale): string {
  const val = getTranslation(key, locale);
  if (typeof val === "string") return val;
  return key;
}

export function tArray(key: string, locale: Locale): string[] {
  const val = getTranslation(key, locale);
  if (Array.isArray(val)) return val;
  return [];
}
