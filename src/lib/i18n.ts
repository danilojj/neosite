export type Locale = "en" | "pt";

type TranslationValue = string | string[] | Record<string, string | string[]>;

const translations: Record<string, Record<Locale, TranslationValue>> = {
  // Navbar
  "nav.about": { en: "About", pt: "Sobre" },
  "nav.technology": { en: "Technology", pt: "Tecnologia" },
  "nav.platform": { en: "Platform", pt: "Plataforma" },
  "nav.howItWorks": { en: "How It Works", pt: "Como Funciona" },
  "nav.useCases": { en: "Use Cases", pt: "Casos de Uso" },
  "nav.models": { en: "Models", pt: "Modelos" },
  "nav.contact": { en: "Contact", pt: "Contato" },
  "nav.requestDemo": { en: "Request Demo", pt: "Solicitar Demo" },

  // Hero
  "hero.title": {
    en: "Shaping the Next Era of Banking with AI",
    pt: "Moldando a Próxima Era do Banking com IA",
  },
  "hero.subtitle": {
    en: "Turn structured and unstructured data into real-time, actionable intelligence — with enterprise-grade scalability and security.",
    pt: "Transforme dados estruturados e não estruturados em inteligência acionável em tempo real — com escalabilidade e segurança de nível empresarial.",
  },
  "hero.cta1": { en: "Request a Demo", pt: "Solicitar uma Demo" },
  "hero.cta2": { en: "Explore Technology", pt: "Explorar Tecnologia" },

  // About
  "about.label": { en: "About NeoSpace", pt: "Sobre a NeoSpace" },
  "about.title": { en: "The Future of Enterprise AI", pt: "O Futuro da IA Empresarial" },
  "about.description": {
    en: "NeoSpace builds purpose-built AI designed to handle massive datasets — whether structured or unstructured — correlating every signal across all data streams inside a single unified model. Our technology empowers financial institutions, retailers, and telecoms to unlock unprecedented value from their data.",
    pt: "A NeoSpace constrói IA sob medida para lidar com conjuntos de dados massivos — estruturados ou não estruturados — correlacionando cada sinal em todos os fluxos de dados em um único modelo unificado. Nossa tecnologia capacita instituições financeiras, varejistas e telecoms a desbloquear valor sem precedentes de seus dados.",
  },
  "about.stat1.value": { en: "2023", pt: "2023" },
  "about.stat1.label": { en: "Founded", pt: "Fundada" },
  "about.stat2.value": { en: "$2.97M", pt: "R$15M+" },
  "about.stat2.label": { en: "Raised", pt: "Captados" },
  "about.stat3.value": { en: "44+", pt: "44+" },
  "about.stat3.label": { en: "Team Members", pt: "Membros do Time" },
  "about.stat4.value": { en: "Billions", pt: "Bilhões" },
  "about.stat4.label": { en: "Rows Processed", pt: "Linhas Processadas" },

  // LDM
  "ldm.label": { en: "Core Technology", pt: "Tecnologia Principal" },
  "ldm.title": { en: "NeoSpace Large Data Model", pt: "NeoSpace Large Data Model" },
  "ldm.subtitle": {
    en: "A new class of AI model built for massive-scale, heterogeneous enterprise data — not just text or images.",
    pt: "Uma nova classe de modelo de IA construído para dados empresariais heterogêneos em escala massiva — não apenas texto ou imagens.",
  },
  "ldm.feature1.title": { en: "Massive Scale", pt: "Escala Massiva" },
  "ldm.feature1.desc": {
    en: "Purpose-built AI designed to handle massive datasets, whether structured or unstructured.",
    pt: "IA sob medida para lidar com conjuntos de dados massivos, estruturados ou não estruturados.",
  },
  "ldm.feature2.title": { en: "Unified Model", pt: "Modelo Unificado" },
  "ldm.feature2.desc": {
    en: "Correlates every signal across all data streams inside a single unified model.",
    pt: "Correlaciona cada sinal em todos os fluxos de dados em um único modelo unificado.",
  },
  "ldm.feature3.title": { en: "Ultra-Low Latency", pt: "Ultra-Baixa Latência" },
  "ldm.feature3.desc": {
    en: "Optimized to deliver ultra-low latency and high-throughput predictions at scale.",
    pt: "Otimizado para entregar previsões de ultra-baixa latência e alto throughput em escala.",
  },
  "ldm.feature4.title": { en: "Self-Optimizing", pt: "Auto-Otimizante" },
  "ldm.feature4.desc": {
    en: "Dynamic design ensures models stay general, always fresh, and highly relevant.",
    pt: "Design dinâmico garante que os modelos se mantenham gerais, sempre atualizados e altamente relevantes.",
  },

  // Platform
  "platform.label": { en: "Data Platform", pt: "Plataforma de Dados" },
  "platform.title": { en: "NeoData Platform", pt: "Plataforma NeoData" },
  "platform.subtitle": {
    en: "End-to-end infrastructure for building, training, and deploying Large Data Models at enterprise scale.",
    pt: "Infraestrutura completa para construir, treinar e implantar Large Data Models em escala empresarial.",
  },
  "platform.feature1.title": { en: "Data Ingestion", pt: "Ingestão de Dados" },
  "platform.feature1.desc": {
    en: "Ingests and organizes data across environments, creating a unified and reliable data foundation for LDM workflows.",
    pt: "Ingere e organiza dados em todos os ambientes, criando uma base de dados unificada e confiável para workflows LDM.",
  },
  "platform.feature2.title": { en: "Governance & Traceability", pt: "Governança & Rastreabilidade" },
  "platform.feature2.desc": {
    en: "Dataset governance and traceability — ensuring every dataset is consistent, reproducible, and ready for training.",
    pt: "Governança e rastreabilidade de datasets — garantindo que cada dataset seja consistente, reprodutível e pronto para treino.",
  },
  "platform.feature3.title": { en: "Model Training", pt: "Treino de Modelos" },
  "platform.feature3.desc": {
    en: "Train LDM models using curated datasets and continuously iterate through training runs and checkpoints.",
    pt: "Treine modelos LDM usando datasets curados e itere continuamente através de runs de treino e checkpoints.",
  },
  "platform.feature4.title": { en: "Production Inference", pt: "Inferência em Produção" },
  "platform.feature4.desc": {
    en: "Serves real-time predictions and pushes insights directly into business systems with seamless consistency.",
    pt: "Serve previsões em tempo real e envia insights diretamente para sistemas de negócios com consistência total.",
  },
  "platform.feature5.title": { en: "Scale & Performance", pt: "Escala & Performance" },
  "platform.feature5.desc": {
    en: "Effortlessly process billions of rows and manage petabytes of enterprise data.",
    pt: "Processe bilhões de linhas e gerencie petabytes de dados empresariais sem esforço.",
  },
  "platform.feature6.title": { en: "Integration Ready", pt: "Pronto para Integração" },
  "platform.feature6.desc": {
    en: "Fully compatible with your BI, ML, and broader data infrastructure. Supports data warehouses, data lakes, and external APIs.",
    pt: "Totalmente compatível com sua infraestrutura de BI, ML e dados. Suporta data warehouses, data lakes e APIs externas.",
  },

  // How It Works
  "howItWorks.label": { en: "Workflow", pt: "Workflow" },
  "howItWorks.title": { en: "From Data to Intelligence", pt: "De Dados a Inteligência" },
  "howItWorks.subtitle": {
    en: "No fragile pipelines — simply connect your data and start running.",
    pt: "Sem pipelines frágeis — simplesmente conecte seus dados e comece.",
  },
  "howItWorks.step1.title": { en: "Connect Data Sources", pt: "Conectar Fontes de Dados" },
  "howItWorks.step1.desc": {
    en: "Integrate databases, data lakes, APIs, and streaming sources into a unified data foundation.",
    pt: "Integre bancos de dados, data lakes, APIs e fontes de streaming em uma base de dados unificada.",
  },
  "howItWorks.step2.title": { en: "Pre-Training", pt: "Pré-Treino" },
  "howItWorks.step2.desc": {
    en: "NeoData curates and structures your data for large-scale foundational model training.",
    pt: "NeoData curadoria e estrutura seus dados para treino de modelos fundacionais em larga escala.",
  },
  "howItWorks.step3.title": { en: "Post-Training", pt: "Pós-Treino" },
  "howItWorks.step3.desc": {
    en: "Fine-tune models with domain-specific data, evaluate performance, and iterate through checkpoints.",
    pt: "Ajuste fino dos modelos com dados específicos do domínio, avalie performance e itere através de checkpoints.",
  },
  "howItWorks.step4.title": { en: "Deploy & Predict", pt: "Implantar & Predizer" },
  "howItWorks.step4.desc": {
    en: "Push real-time predictions directly into production systems with enterprise-grade reliability.",
    pt: "Envie previsões em tempo real diretamente para sistemas de produção com confiabilidade empresarial.",
  },

  // Use Cases
  "useCases.label": { en: "Use Cases", pt: "Casos de Uso" },
  "useCases.title": { en: "AI for Every Industry", pt: "IA para Toda Indústria" },
  "useCases.subtitle": {
    en: "Continuously generates individualized actions for each customer interaction.",
    pt: "Gera continuamente ações individualizadas para cada interação com o cliente.",
  },
  "useCases.banking.title": { en: "Banking & Finance", pt: "Banking & Finanças" },
  "useCases.banking.items": {
    en: ["Fraud Detection", "Credit Scoring", "Hyper-Personalized Offers", "Churn Modeling", "Risk Assessment"],
    pt: ["Detecção de Fraude", "Score de Crédito", "Ofertas Hiperpersonalizadas", "Modelagem de Churn", "Avaliação de Risco"],
  },
  "useCases.retail.title": { en: "Retail", pt: "Varejo" },
  "useCases.retail.items": {
    en: ["Dynamic Pricing", "Personalized Recommendations", "Inventory Optimization", "Customer Segmentation"],
    pt: ["Precificação Dinâmica", "Recomendações Personalizadas", "Otimização de Estoque", "Segmentação de Clientes"],
  },
  "useCases.telecom.title": { en: "Telecom", pt: "Telecom" },
  "useCases.telecom.items": {
    en: ["Next Best Offer", "Next Best Action", "Fraud Detection", "Network Optimization", "Predictive Maintenance"],
    pt: ["Next Best Offer", "Next Best Action", "Detecção de Fraude", "Otimização de Rede", "Manutenção Preditiva"],
  },

  // Models
  "models.label": { en: "AI Models", pt: "Modelos de IA" },
  "models.title": { en: "Specialized Foundation Models", pt: "Modelos Fundacionais Especializados" },
  "models.subtitle": {
    en: "Custom large language models purpose-built for enterprise transformation.",
    pt: "Modelos de linguagem customizados, construídos sob medida para transformação empresarial.",
  },
  "models.neocredit.title": { en: "NeoCredit", pt: "NeoCredit" },
  "models.neocredit.desc": {
    en: "AI model that identifies suitable customers for credit offers and supports loan lifecycle management to reduce delinquency.",
    pt: "Modelo de IA que identifica clientes adequados para ofertas de crédito e apoia a gestão do ciclo de vida de empréstimos para reduzir inadimplência.",
  },
  "models.neofin.title": { en: "NeoFin", pt: "NeoFin" },
  "models.neofin.desc": {
    en: "Large Financial Model that leverages customer data to enable targeted actions like personalized recommendations and reminders.",
    pt: "Large Financial Model que utiliza dados do cliente para ações direcionadas como recomendações personalizadas e lembretes.",
  },
  "models.neolang.title": { en: "NeoLang", pt: "NeoLang" },
  "models.neolang.desc": {
    en: "Expert LLM for complex customer support interactions, delivering intelligent and contextual responses at scale.",
    pt: "LLM especialista para interações complexas de suporte ao cliente, entregando respostas inteligentes e contextuais em escala.",
  },

  // Security
  "security.label": { en: "Security", pt: "Segurança" },
  "security.title": { en: "Enterprise-Grade Security", pt: "Segurança de Nível Empresarial" },
  "security.subtitle": {
    en: "Built with compliance and governance at its core.",
    pt: "Construído com compliance e governança em seu núcleo.",
  },
  "security.soc2": { en: "SOC 2 Compliant", pt: "SOC 2 Compliance" },
  "security.gdpr": { en: "GDPR Compliant", pt: "GDPR Compliance" },
  "security.encryption": { en: "End-to-End Encryption", pt: "Criptografia Ponta a Ponta" },
  "security.access": { en: "Advanced Access Control", pt: "Controle de Acesso Avançado" },
  "security.audit": { en: "Full Audit Trail", pt: "Trilha de Auditoria Completa" },
  "security.governance": { en: "Data Governance", pt: "Governança de Dados" },

  // CTA
  "cta.title": { en: "Ready to Transform Your Data?", pt: "Pronto para Transformar seus Dados?" },
  "cta.subtitle": {
    en: "Get started with NeoSpace and unlock the full potential of your enterprise data.",
    pt: "Comece com a NeoSpace e desbloqueie todo o potencial dos seus dados empresariais.",
  },
  "cta.placeholder": { en: "Enter your email", pt: "Digite seu email" },
  "cta.button": { en: "Request Demo", pt: "Solicitar Demo" },
  "cta.contact": { en: "Or contact us directly", pt: "Ou entre em contato diretamente" },

  // Footer
  "footer.description": {
    en: "Shaping the Next Era of Banking with AI. Purpose-built AI for massive-scale enterprise data.",
    pt: "Moldando a Próxima Era do Banking com IA. IA sob medida para dados empresariais em escala massiva.",
  },
  "footer.product": { en: "Product", pt: "Produto" },
  "footer.company": { en: "Company", pt: "Empresa" },
  "footer.legal": { en: "Legal", pt: "Legal" },
  "footer.privacy": { en: "Privacy Policy", pt: "Política de Privacidade" },
  "footer.terms": { en: "Terms of Service", pt: "Termos de Serviço" },
  "footer.careers": { en: "Careers", pt: "Carreiras" },
  "footer.blog": { en: "Blog", pt: "Blog" },
  "footer.docs": { en: "Documentation", pt: "Documentação" },
  "footer.rights": { en: "All rights reserved.", pt: "Todos os direitos reservados." },
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
