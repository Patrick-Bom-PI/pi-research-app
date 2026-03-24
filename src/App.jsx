import { useState, useEffect, useRef, useCallback } from "react";


// ---- MINDMAP DATA + COMPONENT (embedded from mindmap_v3.jsx) ----

// ─── DATA ────────────────────────────────────────────────────────────────────
// Each node = a concept/finding/argument drawn from the paper.
// The paper is secondary - the idea is primary.

const CENTRAL = {
  label: "PI Central Infrastructure\nOwnership & Governance",
  subtitle: "Who should own & govern the central\ndata system enabling the Physical Internet?",
};

const CLUSTERS = [
  // ── C1: The PI field has not answered the governance question ──
  {
    id: "c1",
    keyword: "THE GOVERNANCE GAP",
    summary: "PI research identifies governance as the\nprimary unresolved challenge but has not\nproduced institutional design answers",
    symbol: "◈",
    color: "#F59E0B",
    angle: 200,
    clusterRadius: 265,
    paperRadius: 175,
    paperSpread: 34,
    papers: [
      {
        id: "p1",
        concept: "PI needs an IETF\nequivalent",
        detail: "The Digital Internet succeeded because it was governed by a private, associative, state-independent body that maintained protocols - not infrastructure. PI needs the same: a governance body for its protocol stack, not its data centre.",
        keyword: "Protocol body\nfor PI",
        author: "Ballot et al. 2021",
        fullQuote: "The Digital Internet brought three main components: a set of protocols independent of technologies, a business framework, and a mostly state-independent governance body.",
        ref: "Ballot, É., Montreuil, B. & Zacharia, Z.G. (2021). Physical Internet: First results and next challenges. Journal of Business Logistics, 42(1), 101–107.",
        doi: "10.1111/jbl.12268",
      },
      {
        id: "p2",
        concept: "Governance explicitly\nnamed as a gap",
        detail: "A systematic review of 114 PI publications found that governance - defined as the management and community structures needed at a global level - is the least-researched dimension. This is the primary citation establishing the research gap.",
        keyword: "Governance gap\nnamed",
        author: "Treiblmaier et al. 2020",
        fullQuote: "The governance (management and community) of the Physical Internet from a global perspective is not covered enough by the current literature which can be an opportunity for future research.",
        ref: "Treiblmaier, H., Mirkovski, K., Lowry, P.B. & Zacharia, Z.G. (2020). The Physical Internet as a new supply chain paradigm. International Journal of Logistics Management, 31(2), 239–287.",
        doi: "10.1108/IJLM-11-2018-0284",
      },
      {
        id: "p3",
        concept: "No model for how\nownership transitions",
        detail: "No research has modelled how entrenched logistics operators - who currently own closed, proprietary networks - would transfer assets or access into an open PI. The institutional transition is completely uncharted.",
        keyword: "No transition\nmodel exists",
        author: "Sternberg & Norrman 2017",
        fullQuote: "There are no currently developed models that illustrate how the move from the entrenched logistics business models to the PI could ensue. There is a lack of understanding of the business models needed.",
        ref: "Sternberg, H. & Norrman, A. (2017). The Physical Internet – review, analysis and future research agenda. International Journal of Physical Distribution & Logistics Management, 47(8), 736–762.",
        doi: "10.1108/IJPDLM-12-2016-0353",
      },
      {
        id: "p4",
        concept: "Who controls shared\ndata standards?",
        detail: "Current digital interoperability tools are structurally misaligned with PI requirements. The central problem is not technical: it is who controls the shared data standards and protocols that would allow logistics networks to interconnect.",
        keyword: "Who owns data\nstandards?",
        author: "Pan et al. 2021",
        fullQuote: "The present state-of-the-art solutions of digital interoperability are not fully aligned with PI requirements and show new challenges, research gaps and opportunities that need further discussion.",
        ref: "Pan, S., Trentesaux, D., McFarlane, D., Montreuil, B., Ballot, É. & Huang, G.Q. (2021). Digital interoperability in logistics and supply chain management. Computers in Industry, 128, 103435.",
        doi: "10.1016/j.compind.2021.103435",
      },
      {
        id: "p5",
        concept: "The DI analogy breaks\ndown at the routing layer",
        detail: "Unlike digital packets, physical goods cannot be rerouted instantly without cost. PI needs both a reachability layer (how to get goods from A to B) and an optimality layer (minimising cost, time, emissions). Who owns and operates these layers is a governance question the digital internet analogy cannot answer.",
        keyword: "Routing layer\nungoverned",
        author: "Dong & Franklin 2021",
        fullQuote: "The PI network not only needs to solve the reachability problem, that is, how to route an item from A to B, but also must confront a more complicated optimality problem.",
        ref: "Dong, C. & Franklin, R. (2021). From the Digital Internet to the Physical Internet. Journal of Business Logistics, 42(1), 108–119.",
        doi: "10.1111/jbl.12253",
      },
      {
        id: "p6",
        concept: "PI deployments without\ngovernance design fail",
        detail: "Empirical evidence from city-level PI deployments shows that projects which skip governance design - focusing only on technical solutions - consistently produce fragmented, limited-benefit outcomes. Governance is not optional: it is a prerequisite for integration.",
        keyword: "No governance\n= failure",
        author: "Ferreira et al. 2024",
        fullQuote: "Many smart city PI projects have focused on solving specific problems with technology without integrating them into a holistic governance structure, limiting their benefits.",
        ref: "Ferreira, D., Santos, F. & Rodrigues, A. (2024). Framework for Physical Internet deployment in cities. International Journal of Logistics Research and Applications, 27(4), 551–570.",
        doi: "10.1080/21650020.2024.2303341",
      },
      {
        id: "p7",
        concept: "Trust requires legal\nframeworks from the start",
        detail: "Secure data exchange and legal trust frameworks are not add-ons: they are design requirements of the PI from the outset. This means the question of who owns the data infrastructure is inseparable from the question of who is legally responsible for it.",
        keyword: "Trust needs\nlegal basis",
        author: "Pan et al. 2017",
        fullQuote: "Seamless, secure and confidential data exchange supports the physical flow of goods, and legal frameworks that are needed to create trust between the parties involved.",
        ref: "Pan, S., Ballot, É., Huang, G.Q. & Montreuil, B. (2017). Physical Internet and interconnected logistics services. International Journal of Production Research, 55(9), 2603–2609.",
        doi: "10.1080/00207543.2017.1302620",
      },
    ],
  },

  // ── C2: Ownership structure determines governance outcomes ──
  {
    id: "c2",
    keyword: "OWNERSHIP = GOVERNANCE",
    summary: "Who legally owns the PI platform architecture\ndetermines who has the power to set rules,\nexclude participants, and capture value",
    symbol: "⬡",
    color: "#10B981",
    angle: 325,
    clusterRadius: 265,
    paperRadius: 175,
    paperSpread: 34,
    papers: [
      {
        id: "p8",
        concept: "Legal ownership gives\npower to coerce",
        detail: "Legal exclusive ownership of a platform's interface or architecture is not just a property right - it is an exercise of power. The owner can prohibit access, compel behaviour, and coerce participants. Applied to PI: whoever owns the network state platform owns the power to exclude any logistics operator.",
        keyword: "Ownership =\ncoercive power",
        author: "Chen et al. 2022",
        fullQuote: "The legal, exclusive ownership of the critical productive asset, i.e., the platform interface or architecture, gives platform owners the power to prohibit, compel, and coerce.",
        ref: "Chen, L., Tong, T.W., Tang, S. & Han, N. (2022). Governance and design of digital platforms. Journal of Management, 48(1), 147–184.",
        doi: "10.1177/01492063211045023",
      },
      {
        id: "p9",
        concept: "Ownership type shapes\ngovernance strategy",
        detail: "Comparing incumbent firms, strategic alliances, and start-ups as platform owners across 34 interviews: each ownership structure produces a systematically different governance design. An incumbent (DHL, Amazon, Maersk) owning the PI platform would govern it very differently from a neutral consortium - not by choice but by structural necessity.",
        keyword: "Who owns\nshapes design",
        author: "Floetgen et al. 2023",
        fullQuote: "Platform owners define and implement platform governance following their unique structure of ownership. The ownership structure is mirrored in platform governance decisions.",
        ref: "Floetgen, R.J. et al. (2023). Ownership structures and governance strategies for digital platform ecosystems. Proceedings of ECIS 2023.",
        doi: "aisel.aisnet.org/ecis2023_rp/246",
      },
      {
        id: "p10",
        concept: "Platform governance\nevolves through lifecycle phases",
        detail: "Platform governance changes as the platform grows. The four phases - growth, consolidation, extension, protect-and-capture - each produce different competition harms. PI governance must be designed to prevent the protect-and-capture phase, where the platform owner uses control to foreclose competitor logistics operators.",
        keyword: "Growth →\ncapture risk",
        author: "Heimburg & Wiesche 2025",
        fullQuote: "Platform governance standard types represent platform lifecycle phases from a regulatory perspective: growth, consolidation, extension, and protect and capture.",
        ref: "Heimburg, V. & Wiesche, M. (2025). Time to break up? Platform-governance standard types. Electronic Markets, 35.",
        doi: "10.1007/s12525-024-00747-7",
      },
      {
        id: "p11",
        concept: "Catena-X: shared ownership\nneeds inner + outer governance",
        detail: "Catena-X - a real shared-ownership industrial data space for automotive - found that shared platform ownership creates two distinct governance problems: inner governance (rules among the owning consortium members) and outer governance (rules the consortium sets for all external participants). PI faces exactly this design challenge.",
        keyword: "Shared owner:\ndual rules",
        author: "Schurig et al. 2025",
        fullQuote: "Shared platform ownership recognizing the dichotomy of inner and outer governance, and a process model of an interorganizational network governing the emergence of a platform ecosystem.",
        ref: "Schurig, M. et al. (2025). Governing the emergence of network-driven platform ecosystems. Electronic Markets, 35.",
        doi: "10.1007/s12525-024-00745-9",
      },
    ],
  },

  // ── C3: Decentralisation defers but does not resolve the ownership question ──
  {
    id: "c3",
    keyword: "DECENTRALISATION PARADOX",
    summary: "Designing the PI platform as decentralised\ndefers the ownership question but cannot\neliminate it - scale forces recentralisation",
    symbol: "⬟",
    color: "#8B5CF6",
    angle: 265,
    clusterRadius: 265,
    paperRadius: 175,
    paperSpread: 34,
    papers: [
      {
        id: "p12",
        concept: "Decentralised ecosystems\ndrift toward centralisation",
        detail: "Four case studies of data ecosystems all designed as decentralised: as complexity grew, coordination costs forced governance centralisation even where technical infrastructure remained distributed. The PILL Blueprint's decentralised design will face the same pressure as PI scales - the governance question is deferred, not solved.",
        keyword: "Drift to\ncentralisation",
        author: "Möller et al. 2025",
        fullQuote: "As these ecosystems mature, they face increasing complexity, often prompting a drift toward more centralized governance structures.",
        ref: "Möller, F. et al. (2025). Establishing and governing data ecosystems at the crossroads of centralization and decentralization. Electronic Markets, 35.",
        doi: "10.1007/s12525-025-00810-x",
      },
      {
        id: "p13",
        concept: "Decentralisation creates\nfunding sustainability problem",
        detail: "Decentralisation enhances value creation (more participants share more data) but constrains value capture (no single entity can monetise the platform). This creates an unstable funding model for the PI coordinating infrastructure - suggesting it may need to be treated and funded as a public good rather than a commercial platform.",
        keyword: "No owner\n= no funding",
        author: "Fassnacht et al. 2025",
        fullQuote: "While decentralization of technical infrastructure and governance enhances value creation, it simultaneously constrains value capture by increasing complexity and costs.",
        ref: "Fassnacht, M. et al. (2025). To sell, to donate, or to barter? Value creation in decentralized data ecosystems. Electronic Markets, 35.",
        doi: "10.1007/s12525-025-00775-x",
      },
      {
        id: "p14",
        concept: "Polycentric governance:\nmultiple autonomous centres",
        detail: "Drawing on Ostrom's commons theory: instead of asking 'who is the single owner?', polycentric governance places multiple overlapping centres of decision-making, each with partial autonomy but operating under shared rules. For PI, this means multiple national or sector-level governance bodies, each managing their piece, under a shared global protocol framework.",
        keyword: "Polycentric\ngovernance",
        author: "Parmiggiani & Grisot 2025",
        fullQuote: "Polycentric governance: data curation as a complex form of governance practice with multiple centres of decision-making, each of which operates with some degree of autonomy.",
        ref: "Parmiggiani, E. & Grisot, M. (2025). A polycentric governance lens on data infrastructures. Computer Supported Cooperative Work (CSCW), 34.",
        doi: "10.1007/s10606-025-09530-4",
      },
      {
        id: "p15",
        concept: "Interoperability mandates\nreplace ownership with regulation",
        detail: "States do not need to own the PI platform to govern it. Mandating interoperability standards - requiring any PI platform owner to provide open, non-discriminatory access - can break data enclaves and enforce competition without public ownership. This is the EU's preferred instrument via the Digital Markets Act and Data Act.",
        keyword: "Regulate\nnot own",
        author: "Huber 2025",
        fullQuote: "Interoperability [is] a 'supertool' of platform governance, enabling 'light touch' regulation, in as much as this regulation encourages competition without directly dictating modes of value production.",
        ref: "Huber, L. (2025). Data interoperability and the governance of public value. Big Data & Society, 12(1).",
        doi: "10.1177/29768624251358686",
      },
    ],
  },

  // ── C4: Once PI reaches critical mass, competition law applies ──
  {
    id: "c4",
    keyword: "COMPETITION LAW TRIGGER",
    summary: "Once a PI platform becomes the only viable\nrouting infrastructure, antitrust law can\ncompel access regardless of private ownership",
    symbol: "⬠",
    color: "#EF4444",
    angle: 85,
    clusterRadius: 265,
    paperRadius: 175,
    paperSpread: 34,
    papers: [
      {
        id: "p16",
        concept: "No reasonable alternative\n= mandatory access",
        detail: "The essential facilities doctrine: once a facility becomes the only viable route to market, antitrust law requires the monopolist to grant access on non-discriminatory terms. A PI routing platform with critical mass would satisfy this test - the owner could not legally refuse access to competitor logistics operators.",
        keyword: "No substitute\n= open access",
        author: "Guggenberger 2021",
        fullQuote: "The doctrine's approach of granting access rights to facilities for which there is no reasonable alternative in the market. Today, this would require enjoining platforms to grant third-party providers access on fair terms.",
        ref: "Guggenberger, N. (2021). The essential facilities doctrine in the digital economy. Yale Journal of Law & Technology, 23, 301–395.",
        doi: "10.2139/ssrn.3802559",
      },
      {
        id: "p17",
        concept: "PI network state data is\nan essential facility",
        detail: "Under EU competition law, data that is non-rivalrous (sharing does not deplete it), near-zero cost to share, and essential to competition qualifies as an essential facility. The PI network state - the shared map of all logistics nodes, routes, and capacities - fits this description precisely.",
        keyword: "PI data =\nessential facility",
        author: "Graef 2019",
        fullQuote: "Data or rankings as the backbone of many digital markets may form the subject of essential facilities claims. Access to data can now be essential for businesses to compete in the market.",
        ref: "Graef, I. (2019). Rethinking the essential facilities doctrine for the EU digital economy. Journal of Antitrust Enforcement, 7(3), 392–413.",
        doi: "10.1093/jaenfo/jnz014",
      },
      {
        id: "p18",
        concept: "Duty to share vs\ninvestment incentive trade-off",
        detail: "The main counterargument to mandatory access is that it reduces incentives to build the infrastructure in the first place. This paper provides the law-and-economics framework for balancing this: data's non-rivalrous nature means the usual investment deterrence argument is weak, because sharing costs approach zero.",
        keyword: "Near-zero\nsharing cost",
        author: "Ryan 2021",
        fullQuote: "The essential facilities doctrine sometimes should require open access to data. Courts devised an essential facilities doctrine that required monopolists to share inputs essential to competition.",
        ref: "Ryan, D. (2021). Big data and the essential facilities doctrine. UCL Journal of Law and Jurisprudence, 10(1), 84–112.",
        doi: "10.14324/111.444.2052-1871.1206",
      },
      {
        id: "p19",
        concept: "Network effects create\nsystematic exclusion",
        detail: "Network effects, feedback loops, scale economies, and switching costs all present in a PI routing platform - each individually justifies regulatory attention; together they make first-mover advantage nearly insurmountable. This is the market structure case for governance intervention before a dominant PI platform emerges, not after.",
        keyword: "Network effects\n= early regulate",
        author: "Bapat 2023",
        fullQuote: "Platform economies exhibit certain distinct characteristics such as network effects, feedback loops, economies of scope and scale and switching costs which in reality end up facilitating ostracization of small or new players.",
        ref: "Bapat, V. (2023). Antitrust concerns in the age of data-driven economies. Liverpool Law Review, 44, 495–523.",
        doi: "10.1007/s10991-023-09353-7",
      },
    ],
  },

  // ── C5: Public interest frameworks from analogous infrastructure ──
  {
    id: "c5",
    keyword: "PUBLIC INTEREST MODELS",
    summary: "Analogous infrastructure cases - payment rails,\nidentity systems, network industries - offer\nproven ownership models for PI to draw on",
    symbol: "◉",
    color: "#06B6D4",
    angle: 25,
    clusterRadius: 265,
    paperRadius: 175,
    paperSpread: 34,
    papers: [
      {
        id: "p20",
        concept: "Digitalised physical\ninfrastructure needs new regulation",
        detail: "When physical infrastructure becomes digital, existing regulatory frameworks break down. The regulator who governed the railway cannot simply govern the platform that routes trains. PI represents exactly this transition - and the key question it raises is who bears legal responsibility for public interest obligations when ownership is private.",
        keyword: "Physical+digital\nreg. gap",
        author: "Finger & Montero 2022",
        fullQuote: "The digitalisation of infrastructure and infrastructure-based public services raises new regulatory questions about who bears responsibility for service continuity and the public interest.",
        ref: "Finger, M. & Montero, J. (2022). The digitalisation of infrastructure and infrastructure-based services. Network Industries Quarterly, 24(1).",
        doi: "ISSN: 1662-6176",
      },
      {
        id: "p21",
        concept: "Open enough to innovate,\ncontrolled enough to be reliable",
        detail: "The generativity-control tension is the core design problem for any shared platform: too open and quality collapses; too controlled and innovation is blocked. For PI, a privately-owned platform will over-correct toward control (protecting its market position); a publicly-owned one will over-correct toward caution. Institutional design must balance both.",
        keyword: "Open vs\ncontrolled",
        author: "Hein et al. 2020",
        fullQuote: "Digital platform owners repeatedly face paradoxical design decisions with regard to their platforms' generativity and control, requiring them to facilitate co-innovation whilst simultaneously retaining control.",
        ref: "Hein, A. et al. (2020). Digital platform ecosystems. Electronic Markets, 30(1), 87–98.",
        doi: "10.1007/s12525-019-00377-4",
      },
      {
        id: "p22",
        concept: "Private PI ownership\nexcludes by geography & cost",
        detail: "Platform governance models systematically produce exclusion along geographic, economic, and demographic lines. If a private entity owns the PI routing platform, smaller logistics operators in lower-income regions, SME shippers, and non-EU participants will be structurally disadvantaged - this is the public interest case for governance constraints independent of competition law.",
        keyword: "Private owner\nexcludes SMEs",
        author: "Lythreatis et al. 2022",
        fullQuote: "Platform governance models produce unequal access along geographic, economic, and demographic lines.",
        ref: "Lythreatis, S., Singh, S.K. & El-Kassar, A.N. (2022). The digital divide. Technological Forecasting and Social Change, 175, 121359.",
        doi: "10.1016/j.techfos.2021.121359",
      },
      {
        id: "p23",
        concept: "EU law creates 'data\nintermediary' as neutral custodian",
        detail: "The EU Data Governance Act creates a specific legal category for the kind of institution that should operate the PI network state platform: a 'data intermediary' that holds and processes data on behalf of participants but is legally prohibited from using it commercially. This is the regulatory model most directly applicable to PI central infrastructure.",
        keyword: "EU data\nintermediary",
        author: "Eke & Stahl 2024",
        fullQuote: "The EU Data Governance Act creates a legal category of 'data intermediary' - an entity that holds and processes data on behalf of others without using it for its own commercial interests.",
        ref: "Eke, D. & Stahl, B. (2024). Ethics in the governance of data and digital technology. Digital Society, 3(1), 11.",
        doi: "10.1007/s44206-024-00070-y",
      },
    ],
  },
];

// ── Research Gap - the bridge between literature review and new research ──
const RESEARCH_GAP = {
  id: "gap",
  label: "RESEARCH GAP",
  description: "No peer-reviewed study has applied Digital Public Infrastructure governance frameworks, essential facilities doctrine, or comparative institutional design to the question of who should own and operate the central data infrastructure enabling the Physical Internet.",
  implication: "This gap means the PI field is building technical infrastructure without an institutional framework for who controls it - creating a governance vacuum that could be captured by a dominant private actor before regulation catches up.",
};

// ── Open Questions - forward-looking bridge to the hypothesise step ──
const OPEN_QUESTIONS = {
  id: "oq",
  keyword: "OPEN QUESTIONS",
  symbol: "→",
  color: "#E879F9",
  angle: 142,
  radius: 500,
  questions: [
    {
      id: "q1",
      text: "Best ownership\nmodel for PI?",
      detail: "The three candidate models - private incumbent ownership, neutral consortium, public utility - each make different trade-offs. No study has evaluated these against PI-specific criteria such as multimodal routing reliability, SME access, and cross-border interoperability.",
    },
    {
      id: "q2",
      text: "EU intermediary\napply to PI?",
      detail: "The EU Data Governance Act's 'data intermediary' category was designed for health and financial data. Whether its design principles - especially the prohibition on commercial use - translate to a logistics routing platform that must also incentivise investment is untested.",
    },
    {
      id: "q3",
      text: "PI platform as\nessential facility?",
      detail: "Essential facilities doctrine requires 'no reasonable alternative'. The threshold at which a PI routing platform crosses from optional to obligatory - in terms of market share, route coverage, or participant dependency - has not been defined for logistics contexts.",
    },
    {
      id: "q4",
      text: "Decentralisation\nor drift to centre?",
      detail: "Möller et al. show all four data ecosystems studied drifted toward centralisation. Whether PI-specific design features (open protocols, federated nodes, regulatory mandates) could prevent this drift, or merely delay it, is an open empirical question.",
    },
    {
      id: "q5",
      text: "Governance across\nlifecycle phases?",
      detail: "Heimburg & Wiesche show platforms need different governance at growth vs. consolidation vs. capture phases. No research has mapped these phases onto PI adoption trajectories or designed governance mechanisms that evolve accordingly.",
    },
  ],
};

// Compute open question positions
const OQ_COLOR = OPEN_QUESTIONS.color;
const OQ_SPREAD = 14;
const OQ_RAD_BASE = OPEN_QUESTIONS.radius;
const oqPositions = OPEN_QUESTIONS.questions.map((q, i, arr) => {
  const startAngle = OPEN_QUESTIONS.angle - ((arr.length - 1) * OQ_SPREAD) / 2;
  const angle = startAngle + i * OQ_SPREAD;
  const rad = (angle * Math.PI) / 180;
  return { id: q.id, x: Math.cos(rad) * OQ_RAD_BASE, y: Math.sin(rad) * OQ_RAD_BASE };
});

// ── Cross-connections: thematic links between concepts across clusters ──
const CONNECTIONS = [
  { from: "p2", to: "p3", label: "Both name\nsame gap" },
  { from: "p1", to: "p5", label: "Protocol\nanalogy limits" },
  { from: "p12", to: "p8", label: "Centralisation\ngives power" },
  { from: "p15", to: "p17", label: "Interop mandate\n= access duty" },
  { from: "p16", to: "p19", label: "Network effects\ntrigger EFD" },
  { from: "p11", to: "p14", label: "Shared ownership\nmeets polycentrism" },
  { from: "p23", to: "p9", label: "Neutral intermediary\nvs incumbent" },
  { from: "p13", to: "p20", label: "Public good\nfunding gap" },
  { from: "p4", to: "p17", label: "Data standards\nas bottleneck" },
  { from: "p10", to: "p19", label: "Capture phase\n= exclusion" },
];

// ─── GEOMETRY ─────────────────────────────────────────────────────────────────

const W = 2000;
const H = 1400;
const CX = W / 2;
const CY = H / 2;
const toRad = (d) => (d * Math.PI) / 180;

function buildLayout() {
  const clusterPos = {};
  const paperPos = {};
  CLUSTERS.forEach((c) => {
    const rad = toRad(c.angle);
    const cx = CX + Math.cos(rad) * c.clusterRadius;
    const cy = CY + Math.sin(rad) * c.clusterRadius;
    clusterPos[c.id] = { x: cx, y: cy };
    const n = c.papers.length;
    c.papers.forEach((p, i) => {
      const spread = c.paperSpread || (n <= 3 ? 44 : n <= 5 ? 40 : 34);
      const start = c.angle - ((n - 1) * spread) / 2;
      const pr = toRad(start + i * spread);
      paperPos[p.id] = {
        x: cx + Math.cos(pr) * c.paperRadius,
        y: cy + Math.sin(pr) * c.paperRadius,
      };
    });
  });
  return { clusterPos, paperPos };
}

const { clusterPos, paperPos } = buildLayout();
const allPapers = CLUSTERS.flatMap((c) => c.papers.map((p) => ({ ...p, cluster: c })));

// ─── COMPONENT ────────────────────────────────────────────────────────────────


function MindMapViz() {
  const [selected, setSelected] = useState(null);
  const [hoveredConn, setHoveredConn] = useState(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const isMobile = typeof window !== "undefined" && window.innerWidth < 600;
  const [zoom, setZoom] = useState(isMobile ? 0.28 : 0.46);
  const [dragging, setDragging] = useState(false);
  const [legendOpen, setLegendOpen] = useState(!isMobile);
  const svgRef = useRef(null);

  // Use refs for touch state so handlers never go stale
  const touchRef = useRef({ dragging: false, lastX: 0, lastY: 0, lastDist: null });

  const handleWheel = useCallback((e) => {
    e.preventDefault();
    setZoom((z) => Math.min(2.5, Math.max(0.18, z - e.deltaY * 0.001)));
  }, []);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;

    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        touchRef.current.dragging = true;
        touchRef.current.lastX = e.touches[0].clientX;
        touchRef.current.lastY = e.touches[0].clientY;
        touchRef.current.lastDist = null;
      } else if (e.touches.length === 2) {
        touchRef.current.dragging = false;
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        touchRef.current.lastDist = Math.sqrt(dx * dx + dy * dy);
      }
    };

    const onTouchMove = (e) => {
      e.preventDefault();
      if (e.touches.length === 1 && touchRef.current.dragging) {
        const dx = e.touches[0].clientX - touchRef.current.lastX;
        const dy = e.touches[0].clientY - touchRef.current.lastY;
        setPan((p) => ({ x: p.x + dx, y: p.y + dy }));
        touchRef.current.lastX = e.touches[0].clientX;
        touchRef.current.lastY = e.touches[0].clientY;
      } else if (e.touches.length === 2 && touchRef.current.lastDist !== null) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const delta = dist - touchRef.current.lastDist;
        setZoom((z) => Math.min(2.5, Math.max(0.18, z + delta * 0.004)));
        touchRef.current.lastDist = dist;
      }
    };

    const onTouchEnd = () => {
      touchRef.current.dragging = false;
      touchRef.current.lastDist = null;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [handleWheel]);

  // Mouse handlers
  const mouseRef = useRef({ dragging: false, lastX: 0, lastY: 0 });
  const onMouseDown = (e) => {
    if (e.button !== 0) return;
    mouseRef.current.dragging = true;
    mouseRef.current.lastX = e.clientX;
    mouseRef.current.lastY = e.clientY;
    setDragging(true);
  };
  const onMouseMove = (e) => {
    if (!mouseRef.current.dragging) return;
    const dx = e.clientX - mouseRef.current.lastX;
    const dy = e.clientY - mouseRef.current.lastY;
    setPan((p) => ({ x: p.x + dx, y: p.y + dy }));
    mouseRef.current.lastX = e.clientX;
    mouseRef.current.lastY = e.clientY;
  };
  const onMouseUp = () => { mouseRef.current.dragging = false; setDragging(false); };

  const selPaper = selected ? allPapers.find((p) => p.id === selected) : null;
  const selCluster = selected ? CLUSTERS.find((c) => c.id === selected) : null;
  const selGap = selected === "gap";
  const selOQ = selected === "oq";
  const selQuestion = selected ? OPEN_QUESTIONS.questions.find((q) => q.id === selected) : null;

  const connectedIds = selected
    ? CONNECTIONS.filter((c) => c.from === selected || c.to === selected)
        .flatMap((c) => [c.from, c.to])
    : [];

  const isLit = (id) => {
    if (!selected) return true;
    if (selected === "gap" || selected === "oq" || selQuestion) return true;
    if (id === selected) return true;
    if (connectedIds.includes(id)) return true;
    // If a cluster is selected, light up its papers
    const selAsCluster = CLUSTERS.find((c) => c.id === selected);
    if (selAsCluster && selAsCluster.papers.some((p) => p.id === id)) return true;
    // If a paper is selected, light up its parent cluster
    const paperCluster = CLUSTERS.find((c) => c.papers.some((p) => p.id === selected));
    if (paperCluster && paperCluster.id === id) return true;
    return false;
  };

  // Centre the map on screen at current zoom level
  const screenW = typeof window !== "undefined" ? window.innerWidth : 1200;
  const screenH = typeof window !== "undefined" ? window.innerHeight : 800;
  const transform = `translate(${screenW / 2 + pan.x}, ${screenH / 2 + pan.y}) scale(${zoom}) translate(${-W / 2}, ${-H / 2})`;

  return (
    <div
      style={{
        width: "100%", height: "100dvh", background: "#111827",
        fontFamily: "Georgia, 'Times New Roman', serif",
        overflow: "hidden", position: "relative",
        cursor: dragging ? "grabbing" : "default", userSelect: "none",
      }}
      onMouseDown={onMouseDown} onMouseMove={onMouseMove}
      onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
    >
      {/* HEADER */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 20,
        pointerEvents: "none",
        background: "linear-gradient(to bottom, rgba(13,13,24,0.97) 60%, transparent)",
        padding: "14px 20px 24px",
        display: "flex", justifyContent: "space-between", alignItems: "flex-start",
      }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "white", letterSpacing: "0.02em" }}>
            Physical Internet - Central Infrastructure Ownership & Governance
          </div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.65)", marginTop: 3, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Concept-driven literature mind map · 23 peer-reviewed sources
          </div>
        </div>
        <div style={{ fontSize: 9.5, color: "rgba(255,255,255,0.82)", textAlign: "right", lineHeight: 1.8 }}>
          Scroll = zoom · Drag = pan<br />
          Click node = full concept + source
        </div>
      </div>

      {/* SVG */}
      <svg ref={svgRef} width="100%" height="100%" style={{ display: "block", position: "absolute", top: 0, left: 0 }}>
        <defs>
          <radialGradient id="bg" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#1e2640" />
            <stop offset="100%" stopColor="#111827" />
          </radialGradient>
          <filter id="g4"><feGaussianBlur stdDeviation="4" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          <filter id="g8"><feGaussianBlur stdDeviation="9" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          <radialGradient id="rg-center" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.9" />
          </radialGradient>
          <radialGradient id="rg-oq" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E879F9" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#E879F9" stopOpacity="0.03" />
          </radialGradient>
          <marker id="arr-oq" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto">
            <polygon points="0,0 9,4.5 0,9" fill="#E879F9" fillOpacity="0.9" />
          </marker>
          {CLUSTERS.map((c) => (
            <radialGradient key={c.id} id={`rg-${c.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={c.color} stopOpacity="0.2" />
              <stop offset="100%" stopColor={c.color} stopOpacity="0.03" />
            </radialGradient>
          ))}
          {CLUSTERS.map((c) => (
            <marker key={c.id} id={`arr-${c.id}`} markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
              <polygon points="0,0 7,3.5 0,7" fill={c.color} fillOpacity="0.45" />
            </marker>
          ))}
          <marker id="arr-w" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <polygon points="0,0 6,3 0,6" fill="rgba(255,255,255,0.9)" />
          </marker>
        </defs>

        <rect width="100%" height="100%" fill="url(#bg)" />
        <rect width="100%" height="100%" fill="#111827" opacity="0" />

        <g transform={transform}>
          {/* ── Cross-connections ── */}
          {CONNECTIONS.map((conn, i) => {
            const a = paperPos[conn.from];
            const b = paperPos[conn.to];
            if (!a || !b) return null;
            const mx = (a.x + b.x) / 2;
            const my = (a.y + b.y) / 2;
            const active = hoveredConn === i || selected === conn.from || selected === conn.to;
            const dimConn = !!selected && !active;
            if (dimConn) return null;
            return (
              <g key={i}>
                <line x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                  stroke="rgba(255,255,255,0.96)" strokeDasharray="5 6"
                  strokeWidth={active ? 2.5 : 0.8}
                  strokeOpacity={active ? 0.85 : 0.15}
                  markerEnd="url(#arr-w)"
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHoveredConn(i)}
                  onMouseLeave={() => setHoveredConn(null)}
                />
                {active && (
                  <>
                    <rect x={mx - 42} y={my - 14} width={84} height={28}
                      rx={5} fill="rgba(0,0,0,0.82)" stroke="rgba(255,255,255,0.95)" strokeWidth={0.8} />
                    {conn.label.split("\n").map((ln, li, arr) => (
                      <text key={li} x={mx} y={my + (li - (arr.length - 1) / 2) * 11}
                        textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize={8.5} fontStyle="italic">
                        {ln}
                      </text>
                    ))}
                  </>
                )}
              </g>
            );
          })}

          {/* ── Spokes: centre → cluster ── */}
          {CLUSTERS.map((c) => {
            const cp = clusterPos[c.id];
            const paperCluster = selPaper ? CLUSTERS.find(cl => cl.papers.some(p => p.id === selected)) : null;
            const active = !selected || selected === c.id || (paperCluster && paperCluster.id === c.id);
            if (selected && !active) return null;
            return (
              <line key={c.id} x1={CX} y1={CY} x2={cp.x} y2={cp.y}
                stroke={c.color}
                strokeWidth={!selected ? 1.5 : 3}
                strokeDasharray="9 6"
                strokeOpacity={!selected ? 0.6 : 0.9}
                markerEnd={`url(#arr-${c.id})`} />
            );
          })}

          {/* ── Spokes: cluster → paper ── */}
          {CLUSTERS.map((c) =>
            c.papers.map((p) => {
              const cp = clusterPos[c.id];
              const pp = paperPos[p.id];

              // When something is selected:
              // Only render spokes for the ACTIVE cluster (selected cluster or cluster of selected paper)
              // Connected papers in OTHER clusters are shown by cross-connection lines - not by spoke
              if (selected) {
                const activeClusterId = selCluster
                  ? selCluster.id
                  : selPaper
                    ? CLUSTERS.find(cl => cl.papers.some(q => q.id === selected))?.id
                    : null;
                if (!activeClusterId || c.id !== activeClusterId) return null;
              }

              return (
                <line key={p.id} x1={cp.x} y1={cp.y} x2={pp.x} y2={pp.y}
                  stroke={c.color}
                  strokeWidth={!selected ? 1 : p.id === selected ? 2.5 : 1.5}
                  strokeOpacity={!selected ? 0.5 : p.id === selected ? 0.9 : 0.6} />
              );
            })
          )}

          {/* ── RESEARCH GAP RING (around centre) ── */}
          <g transform={`translate(${CX},${CY})`}
            onClick={(e) => { e.stopPropagation(); setSelected(selected === "gap" ? null : "gap"); }}
            style={{ cursor: "pointer" }}>
            {/* Pulsing dashed ring */}
            <circle r={130} fill="none"
              stroke="#FF6B6B"
              strokeWidth={selGap ? 2.5 : 1.5}
              strokeOpacity={selGap ? 0.9 : 0.45}
              strokeDasharray={selGap ? "8 4" : "6 6"} />
            <circle r={133} fill="none"
              stroke="#FF6B6B"
              strokeWidth={0.5}
              strokeOpacity={selGap ? 0.4 : 0.12} />
            {/* Gap label - top of ring */}
            <rect x={-52} y={-148} width={104} height={22} rx={4}
              fill="rgba(22,28,48,0.92)"
              stroke="#FF6B6B"
              strokeWidth={selGap ? 1.5 : 0.8}
              strokeOpacity={selGap ? 0.9 : 0.5} />
            <text x={0} y={-133} textAnchor="middle"
              fill="#FF6B6B" fillOpacity={selGap ? 1 : 0.75}
              fontSize={8.5} fontWeight="700" letterSpacing="0.1em">
              ⚠ RESEARCH GAP
            </text>
            {/* Short descriptor */}
            <text x={0} y={-116} textAnchor="middle"
              fill="#FF6B6B" fillOpacity={selGap ? 0.9 : 0.6}
              fontSize={7.5} fontStyle="italic">
              No DPI governance model applied to PI
            </text>
          </g>

          {/* ── OPEN QUESTIONS ── */}
          {(() => {
            const rad = toRad(OPEN_QUESTIONS.angle);
            const hx = CX + Math.cos(rad) * (OPEN_QUESTIONS.radius - 140);
            const hy = CY + Math.sin(rad) * (OPEN_QUESTIONS.radius - 140);
            const oqActive = selOQ || !!selQuestion;
            const oqDim = !!selected && !oqActive;

            return (
              <g opacity={oqDim ? 0.15 : 1}>

                {/* Centre → hub spoke */}
                <line
                  x1={CX} y1={CY} x2={hx} y2={hy}
                  stroke={OQ_COLOR}
                  strokeWidth={oqActive ? 3 : !selected ? 2 : 1}
                  strokeOpacity={oqActive ? 0.95 : !selected ? 0.6 : 0.3}
                  strokeDasharray="10 6"
                  markerEnd="url(#arr-oq)"
                />

                {/* Hub → each question node spokes */}
                {oqPositions.map((pos, i) => {
                  const q = OPEN_QUESTIONS.questions[i];
                  const spokeActive = selOQ || selected === q.id;
                  return (
                    <line key={`oq-spoke-${pos.id}`}
                      x1={hx} y1={hy}
                      x2={CX + pos.x} y2={CY + pos.y}
                      stroke={OQ_COLOR}
                      strokeWidth={spokeActive ? 2.5 : !selected ? 1.8 : 1}
                      strokeOpacity={spokeActive ? 0.95 : !selected ? 0.55 : 0.25}
                      strokeDasharray="8 5"
                      markerEnd="url(#arr-oq)"
                    />
                  );
                })}

                {/* Hub - clickable box */}
                <g transform={`translate(${hx},${hy})`}
                  onClick={(e) => { e.stopPropagation(); setSelected(selected === "oq" ? null : "oq"); }}
                  style={{ cursor: "pointer" }}>
                  {/* Large invisible hit area */}
                  <rect x={-70} y={-24} width={140} height={48} rx={8} fill="transparent" />
                  {/* Visible box - glows when active */}
                  {selOQ && <rect x={-68} y={-22} width={136} height={44} rx={9}
                    fill={OQ_COLOR} fillOpacity={0.08} />}
                  <rect x={-65} y={-20} width={130} height={40} rx={7}
                    fill="rgba(28,18,45,0.97)"
                    stroke={OQ_COLOR}
                    strokeWidth={selOQ ? 2.5 : 1.5}
                    strokeOpacity={selOQ ? 1 : 0.7} />
                  <text x={0} y={-4} textAnchor="middle"
                    fill={OQ_COLOR} fillOpacity={1}
                    fontSize={9.5} fontWeight="700" letterSpacing="0.06em">→ OPEN QUESTIONS</text>
                  <text x={0} y={11} textAnchor="middle"
                    fill="rgba(255,255,255,0.96)" fontSize={7.5}>5 open research directions</text>
                </g>
              </g>
            );
          })()}

          {/* Individual question nodes */}
          {OPEN_QUESTIONS.questions.map((q, i) => {
            const pos = oqPositions[i];
            const isActive = selected === q.id;
            const groupActive = selOQ;
            const dim = !!selected && !isActive && !selOQ && !selQuestion;
            return (
              <g key={q.id}
                transform={`translate(${CX + pos.x},${CY + pos.y})`}
                onClick={(e) => { e.stopPropagation(); setSelected(selected === q.id ? null : q.id); }}
                style={{ cursor: "pointer" }}
                opacity={dim ? 0.25 : 1}>
                {/* Invisible hit area */}
                <circle r={62} fill="transparent" />
                {/* Glow when active */}
                {isActive && <circle r={70} fill="none" stroke={OQ_COLOR} strokeWidth={2} strokeOpacity={0.4} filter="url(#g4)" />}
                {/* Node fill */}
                <circle r={58}
                  fill={isActive ? OQ_COLOR : groupActive ? "#2a0f3a" : "#16082a"}
                  fillOpacity={isActive ? 0.5 : 1} />
                {/* Node border */}
                <circle r={58} fill="none"
                  stroke={OQ_COLOR}
                  strokeWidth={isActive ? 3 : groupActive ? 2 : 1.5}
                  strokeOpacity={isActive ? 1 : groupActive ? 0.9 : 0.65} />
                {/* Question mark */}
                <text x={0} y={-38} textAnchor="middle"
                  fill={OQ_COLOR} fontSize={11}
                  opacity={isActive ? 1 : 0.75}>?</text>
                {/* Label */}
                {q.text.split("\n").map((ln, li, arr) => (
                  <text key={li}
                    x={0} y={(li - (arr.length - 1) / 2) * 13 + 6}
                    textAnchor="middle"
                    fill={isActive ? "white" : OQ_COLOR}
                    fillOpacity={isActive ? 1 : groupActive ? 1 : 0.9}
                    fontSize={8.5} fontWeight="700">
                    {ln}
                  </text>
                ))}
              </g>
            );
          })}

          {/* ── CENTRAL NODE ── */}
          <g transform={`translate(${CX},${CY})`} onClick={() => setSelected(null)} style={{ cursor: "pointer" }}>
            <circle r={108} fill="url(#rg-center)" filter="url(#g8)"
              stroke="#818CF8" strokeWidth={1.5} strokeOpacity={0.55} />
            <circle r={105} fill="none" stroke="#6366F1" strokeWidth={0.5} strokeOpacity={0.2} />
            <circle r={90} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={1} />
            <text x={0} y={-64} textAnchor="middle" fontSize={22} fill="#818CF8" opacity={0.65}>⬢</text>
            {CENTRAL.label.split("\n").map((ln, i, arr) => (
              <text key={i} x={0} y={(i - (arr.length - 1) / 2) * 18 - 6}
                textAnchor="middle" fill="white"
                fontSize={i === 0 ? 12 : 11} fontWeight={i === 0 ? "700" : "500"} letterSpacing="0.02em">
                {ln}
              </text>
            ))}
            {CENTRAL.subtitle.split("\n").map((ln, i, arr) => (
              <text key={i} x={0} y={34 + (i - (arr.length - 1) / 2) * 12}
                textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize={8.5} fontStyle="italic">
                {ln}
              </text>
            ))}
            <text x={0} y={70} textAnchor="middle" fontSize={7.5}
              fill="rgba(255,255,255,0.95)" letterSpacing="0.08em">CLICK TO RESET</text>
          </g>

          {/* ── CLUSTER NODES ── */}
          {CLUSTERS.map((c) => {
            const cp = clusterPos[c.id];
            const isActive = selected === c.id || c.papers.some((p) => p.id === selected);
            const dim = selected && !isActive;
            return (
              <g key={c.id} transform={`translate(${cp.x},${cp.y})`}
                onClick={(e) => { e.stopPropagation(); setSelected(selected === c.id ? null : c.id); }}
                style={{ cursor: "pointer" }} opacity={dim ? 0.32 : 1}>
                <circle r={72} fill={`url(#rg-${c.id})`} filter={isActive ? "url(#g8)" : undefined} />
                <circle r={72} fill="none" stroke={c.color}
                  strokeWidth={isActive ? 3.5 : 1.5} strokeOpacity={isActive ? 1 : 0.7} />
                <circle r={70} fill="none" stroke={c.color} strokeWidth={0.5} strokeOpacity={0.35} />
                <text x={0} y={-42} textAnchor="middle" fontSize={18} fill={c.color} opacity={0.95}>{c.symbol}</text>
                {c.keyword.split("\n").map((ln, i, arr) => (
                  <text key={i} x={0} y={(i - (arr.length - 1) / 2) * 14 - 2}
                    textAnchor="middle" fill={c.color}
                    fillOpacity={isActive ? 1 : 0.8}
                    fontSize={9} fontWeight="700" letterSpacing="0.07em">{ln}</text>
                ))}
                <text x={0} y={26} textAnchor="middle" fill={c.color} fillOpacity={0.75} fontSize={7.5}>
                  {c.papers.length} concepts
                </text>
              </g>
            );
          })}

          {/* ── PAPER / CONCEPT NODES ── */}
          {CLUSTERS.map((c) =>
            c.papers.map((p) => {
              const pp = paperPos[p.id];
              const isActive = selected === p.id;
              const clActive = selected === c.id;
              const lit = isLit(p.id);
              return (
                <g key={p.id} transform={`translate(${pp.x},${pp.y})`}
                  onClick={(e) => { e.stopPropagation(); setSelected(selected === p.id ? null : p.id); }}
                  style={{ cursor: "pointer" }} opacity={lit ? 1 : 0.28}>
                  {/* Outer glow ring when active */}
                  {isActive && <circle r={54} fill="none" stroke={c.color} strokeWidth={1} strokeOpacity={0.3} />}
                  <circle r={46}
                    fill={isActive ? c.color : clActive ? "rgba(40,30,65,0.95)" : "rgba(20,25,45,0.92)"}
                    fillOpacity={isActive ? 0.45 : 1}
                    filter={isActive ? "url(#g4)" : undefined} />
                  <circle r={46} fill="none" stroke={c.color}
                    strokeWidth={isActive ? 3 : clActive ? 1.5 : 1}
                    strokeOpacity={isActive ? 1 : clActive ? 0.85 : 0.6} />
                  {/* Concept keyword - primary label */}
                  {p.keyword.split("\n").map((ln, i, arr) => (
                    <text key={i} x={0} y={(i - (arr.length - 1) / 2) * 12 - 6}
                      textAnchor="middle" fill={c.color}
                      fillOpacity={isActive ? 1 : clActive ? 0.85 : 0.6}
                      fontSize={7.5} fontWeight={isActive ? "700" : "600"}>{ln}</text>
                  ))}
                  {/* Author - secondary, small */}
                  <text x={0} y={16} textAnchor="middle"
                    fill="rgba(255,255,255,0.62)" fontSize={6.5} fontStyle="italic">
                    {p.author.split("\n")[0]}
                  </text>
                  {isActive && (
                    <text x={0} y={30} textAnchor="middle" fill={c.color} fontSize={9} opacity={0.6}>❝</text>
                  )}
                </g>
              );
            })
          )}
        </g>
      </svg>

      {/* ── DETAIL PANEL ── */}
      {(selPaper || selCluster || selGap || selOQ || selQuestion) && (
        <div
          onTouchStart={e => e.stopPropagation()}
          onTouchMove={e => e.stopPropagation()}
          onTouchEnd={e => e.stopPropagation()}
          onWheel={e => e.stopPropagation()}
          style={{
          position: "absolute",
          top: "10dvh",
          left: "50%", transform: "translateX(-50%)",
          width: "min(780px, 96vw)",
          height: "80dvh",
          display: "flex", flexDirection: "column",
          background: "rgba(14,18,36,0.98)",
          border: `1px solid ${selGap ? "#FF6B6B" : selOQ || selQuestion ? OQ_COLOR : (selPaper?.cluster || selCluster)?.color}55`,
          borderRadius: 14,
          zIndex: 30,
          boxShadow: `0 0 48px ${selGap ? "#FF6B6B" : selOQ || selQuestion ? OQ_COLOR : (selPaper?.cluster || selCluster)?.color}18, 0 10px 40px rgba(0,0,0,0.85)`,
          pointerEvents: "auto",
          overflow: "hidden",
        }}>
          {/* Sticky close button bar */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "10px 16px 8px", flexShrink: 0,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: ".1em" }}>
              {selGap ? "Research Gap" : selOQ ? "Open Questions" : selQuestion ? "Research Direction" : selCluster ? selCluster.keyword : selPaper ? selPaper.cluster.keyword : ""}
            </span>
            <button onClick={() => setSelected(null)} style={{
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 6, color: "rgba(255,255,255,0.8)",
              cursor: "pointer", fontSize: 13, lineHeight: 1,
              padding: "5px 12px", fontFamily: "inherit",
            }}>✕ Close</button>
          </div>
          {/* Scrollable content. minHeight:0 is required for flex+overflow to work on iOS */}
          <div style={{
            overflowY: "scroll", WebkitOverflowScrolling: "touch",
            padding: "16px 20px 28px", flex: 1, minHeight: 0,
          }}>

          {/* ── Research Gap panel ── */}
          {selGap && (
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: 18, color: "#FF6B6B" }}>⚠</span>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#FF6B6B", letterSpacing: "0.05em" }}>
                  The Research Gap
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
                <div>
                  <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: "#FF6B6B", opacity: 0.6, marginBottom: 6 }}>
                    What is missing
                  </div>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.95)", lineHeight: 1.7, margin: 0 }}>
                    {RESEARCH_GAP.description}
                  </p>
                </div>
                <div style={{ borderLeft: "3px solid #FF6B6B44", paddingLeft: 16 }}>
                  <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: "#FF6B6B", opacity: 0.6, marginBottom: 6 }}>
                    Why it matters
                  </div>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.95)", lineHeight: 1.7, margin: 0 }}>
                    {RESEARCH_GAP.implication}
                  </p>
                </div>
              </div>
              <div style={{
                marginTop: 14, padding: "10px 14px",
                background: "rgba(255,107,107,0.07)",
                border: "1px solid rgba(255,107,107,0.2)",
                borderRadius: 7,
                fontSize: 10.5, color: "rgba(255,255,255,0.95)",
                fontStyle: "italic", lineHeight: 1.6,
              }}>
                → This gap is confirmed by Treiblmaier et al. (2020) in the PI literature and by the absence of any cross-disciplinary study applying DPI frameworks, essential facilities doctrine, or polycentric governance theory to PI infrastructure ownership.
              </div>
            </div>
          )}

          {/* ── Open Questions hub panel ── */}
          {selOQ && !selQuestion && (
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 18, color: OQ_COLOR }}>→</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: OQ_COLOR }}>Open Questions for New Research</div>
                  <div style={{ fontSize: 9.5, color: "rgba(255,255,255,0.65)", marginTop: 2, fontStyle: "italic" }}>
                    These are the unanswered questions this literature review points toward - the bridge to the hypothesise step
                  </div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 8, marginTop: 8 }}>
                {OPEN_QUESTIONS.questions.map((q) => (
                  <div key={q.id} onClick={() => setSelected(q.id)}
                    style={{
                      background: `${OQ_COLOR}0e`, border: `1px dashed ${OQ_COLOR}40`,
                      borderRadius: 8, padding: "10px 10px 8px", cursor: "pointer",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = `${OQ_COLOR}1e`}
                    onMouseLeave={e => e.currentTarget.style.background = `${OQ_COLOR}0e`}>
                    <div style={{ fontSize: 16, color: OQ_COLOR, opacity: 0.6, marginBottom: 4 }}>?</div>
                    <div style={{ fontSize: 9.5, color: OQ_COLOR, fontWeight: 600, lineHeight: 1.4 }}>
                      {q.text.replace(/\n/g, " ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Individual question panel ── */}
          {selQuestion && (
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ fontSize: 40, color: OQ_COLOR, opacity: 0.5, lineHeight: 1 }}>?</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: OQ_COLOR, marginBottom: 10, lineHeight: 1.3 }}>
                  {selQuestion.text.replace(/\n/g, " ")}
                </div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.92)", lineHeight: 1.7, margin: "0 0 12px" }}>
                  {selQuestion.detail}
                </p>
                <div style={{
                  fontSize: 9.5, color: "rgba(255,255,255,0.62)",
                  fontStyle: "italic", lineHeight: 1.5,
                  borderTop: `1px solid ${OQ_COLOR}22`, paddingTop: 10,
                }}>
                  This is an open question arising from the literature - not yet answered by any peer-reviewed source.
                  It represents a candidate topic for the next step: choose a topic for new research.
                </div>
              </div>
            </div>
          )}


          {/* ── Paper detail ── */}
          {selPaper && (() => {
            const c = selPaper.cluster;
            const related = CONNECTIONS
              .filter((cn) => cn.from === selPaper.id || cn.to === selPaper.id)
              .map((cn) => {
                const oid = cn.from === selPaper.id ? cn.to : cn.from;
                return { other: allPapers.find((p) => p.id === oid), label: cn.label };
              });
            return (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
                {/* LEFT: concept + detail */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 17, color: c.color }}>{c.symbol}</span>
                    <span style={{ fontSize: 8.5, letterSpacing: "0.12em", textTransform: "uppercase", color: c.color, fontWeight: 700 }}>
                      {c.keyword}
                    </span>
                  </div>
                  {/* Concept as headline */}
                  <div style={{ fontSize: 16, fontWeight: 700, color: c.color, marginBottom: 8, lineHeight: 1.3 }}>
                    {selPaper.concept}
                  </div>
                  {/* Detail explanation */}
                  <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.9)", lineHeight: 1.7, margin: "0 0 10px" }}>
                    {selPaper.detail}
                  </p>
                  {/* Connected concepts */}
                  {related.length > 0 && (
                    <div>
                      <div style={{ fontSize: 8.5, textTransform: "uppercase", letterSpacing: "0.09em", color: "rgba(255,255,255,0.96)", marginBottom: 5 }}>
                        Connected concepts
                      </div>
                      {related.map((r, i) => r.other && (
                        <div key={i} onClick={() => setSelected(r.other.id)}
                          style={{
                            display: "flex", alignItems: "center", gap: 7,
                            padding: "5px 8px", borderRadius: 5, cursor: "pointer",
                            background: "rgba(255,255,255,0.12)", marginBottom: 4,
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
                          onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}>
                          <span style={{ color: r.other.cluster.color, fontSize: 11 }}>{r.other.cluster.symbol}</span>
                          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.82)", flex: 1 }}>
                            {r.other.concept} - <em>{r.other.author.replace("\n", " ")}</em>
                          </span>
                          <span style={{ fontSize: 8.5, color: "rgba(255,255,255,0.62)", fontStyle: "italic" }}>
                            {r.label.replace("\n", " ")}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* RIGHT: quote + source */}
                <div>
                  <div style={{ borderLeft: `3px solid ${c.color}`, paddingLeft: 13 }}>
                    <div style={{ fontSize: 8.5, textTransform: "uppercase", letterSpacing: "0.1em", color: c.color, opacity: 0.65, marginBottom: 7 }}>
                      ❝ Key Quote
                    </div>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.96)", lineHeight: 1.7, margin: "0 0 14px", fontStyle: "italic" }}>
                      "{selPaper.fullQuote}"
                    </p>
                    <div style={{ borderTop: `1px solid ${c.color}30`, paddingTop: 10 }}>
                      <div style={{ fontSize: 8.5, textTransform: "uppercase", letterSpacing: "0.09em", color: c.color, opacity: 0.55, marginBottom: 5 }}>
                        Source (APA 7th)
                      </div>
                      <p style={{ fontSize: 10.5, color: "rgba(255,255,255,0.78)", lineHeight: 1.65, margin: "0 0 5px", fontStyle: "italic" }}>
                        {selPaper.ref}
                      </p>
                      <span style={{ fontSize: 9, color: c.color, opacity: 0.5, fontFamily: "monospace" }}>
                        DOI: {selPaper.doi}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* ── Cluster detail ── */}
          {selCluster && !selPaper && (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 22, color: selCluster.color }}>{selCluster.symbol}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: selCluster.color, letterSpacing: "0.05em" }}>
                    {selCluster.keyword}
                  </div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.9)", marginTop: 3, fontStyle: "italic" }}>
                    {selCluster.summary}
                  </div>
                </div>
              </div>
              <div style={{
                display: "grid",
                gridTemplateColumns: `repeat(auto-fill, minmax(160px, 1fr))`,
                gap: 8, marginTop: 10,
              }}>
                {selCluster.papers.map((p) => (
                  <div key={p.id} onClick={() => setSelected(p.id)}
                    style={{
                      background: `${selCluster.color}0e`,
                      border: `1px solid ${selCluster.color}30`,
                      borderRadius: 8, padding: "10px 11px 9px",
                      cursor: "pointer", transition: "background 0.15s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = `${selCluster.color}1e`}
                    onMouseLeave={e => e.currentTarget.style.background = `${selCluster.color}0e`}>
                    <div style={{ fontSize: 10.5, fontWeight: 700, color: selCluster.color, marginBottom: 4, lineHeight: 1.3 }}>
                      {p.concept}
                    </div>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.72)", marginBottom: 5, fontStyle: "italic" }}>
                      {p.author.replace("\n", " ")}
                    </div>
                    <div style={{ fontSize: 8.5, color: "rgba(255,255,255,0.62)", lineHeight: 1.45, fontStyle: "italic" }}>
                      "{p.quote}"
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          </div>
        </div>
      )}

      {/* ── LEGEND ── */}
      <div style={{
        position: "absolute", top: 68,
        ...(isMobile ? { left: 8, right: 8, maxWidth: legendOpen ? "calc(100% - 16px)" : 44 } : { right: 16, maxWidth: legendOpen ? 180 : 44 }),
        background: "rgba(18,22,42,0.95)", border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 9, zIndex: 20, overflow: "hidden",
      }}>
        {/* Toggle button, always visible on mobile */}
        <div onClick={() => setLegendOpen(o => !o)} style={{
          padding: legendOpen ? "10px 14px 6px" : "10px 14px",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8,
        }}>
          <div style={{ fontSize: 8.5, color: "rgba(255,255,255,0.82)", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
            {legendOpen ? "5 Literature Clusters" : "☰"}
          </div>
          {legendOpen && <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>✕</span>}
        </div>
        {legendOpen && (
          <div style={{ padding: "0 14px 12px" }}>
        {CLUSTERS.map((c) => (
          <div key={c.id} onClick={() => setSelected(selected === c.id ? null : c.id)}
            style={{
              display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8,
              cursor: "pointer",
              opacity: selected && selected !== c.id && !c.papers.some(p => p.id === selected) ? 0.45 : 1,
              transition: "opacity 0.2s",
            }}>
            <span style={{ fontSize: 13, color: c.color, marginTop: 1 }}>{c.symbol}</span>
            <div>
              <div style={{ fontSize: 9.5, color: c.color, fontWeight: 600, letterSpacing: "0.04em" }}>{c.keyword}</div>
              <div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.82)", marginTop: 1 }}>{c.papers.length} concepts</div>
            </div>
          </div>
        ))}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: 8, paddingTop: 8 }}>
          <div style={{ fontSize: 8.5, color: "rgba(255,255,255,0.95)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 7 }}>
            Additional
          </div>
          {/* Gap ring entry */}
          <div onClick={() => setSelected(selected === "gap" ? null : "gap")}
            style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7, cursor: "pointer",
              opacity: selected && selected !== "gap" ? 0.5 : 1 }}>
            <span style={{ fontSize: 12, color: "#FF6B6B" }}>⚠</span>
            <div>
              <div style={{ fontSize: 9.5, color: "#FF6B6B", fontWeight: 600 }}>Research Gap</div>
              <div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.82)", marginTop: 1 }}>ring around centre</div>
            </div>
          </div>
          {/* Open questions entry */}
          <div onClick={() => setSelected(selected === "oq" ? null : "oq")}
            style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer",
              opacity: selected && selected !== "oq" ? 0.5 : 1 }}>
            <span style={{ fontSize: 12, color: OQ_COLOR }}>→</span>
            <div>
              <div style={{ fontSize: 9.5, color: OQ_COLOR, fontWeight: 600 }}>Open Questions</div>
              <div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.82)", marginTop: 1 }}>5 research directions</div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: 8, paddingTop: 8 }}>
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.96)", lineHeight: 1.7 }}>
            Large text = concept<br />
            Small italic = author<br />
            Dashed lines = cross-links
          </div>
        </div>
          </div>
        )}
      </div>

      {/* ── ZOOM ── */}
      <div style={{ position: "absolute", bottom: 20, ...(isMobile ? { left: 8 } : { right: 16 }), display: "flex", flexDirection: "column", gap: 4, zIndex: 20 }}>
        {[
          { label: "+", fn: () => setZoom(z => Math.min(2.5, z + 0.15)) },
          { label: "−", fn: () => setZoom(z => Math.max(0.18, z - 0.15)) },
          { label: "⟳", fn: () => { setZoom(isMobile ? 0.28 : 0.46); setPan({ x: 0, y: 0 }); } },
        ].map((b) => (
          <button key={b.label} onClick={b.fn} style={{
            width: 30, height: 30, background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6,
            color: "rgba(255,255,255,0.95)", cursor: "pointer", fontSize: 15,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>{b.label}</button>
        ))}
      </div>
    </div>
  );
}

// ---- END MINDMAP ----

const C = {
  bg:"#F7F6F3",bg2:"#FFFFFF",bg3:"#F0EEE9",border:"#E2DDD6",border2:"#C8C2B8",
  navy:"#1C3557",blue:"#2563A8",teal:"#0E7C6A",amber:"#B45309",coral:"#C0392B",
  purple:"#5B47A8",pink:"#A3336A",text:"#1A1A1A",muted:"#555249",dim:"#8C8780",
  white:"#FFFFFF",rule:"#DDD8D0",
};

// ── Supabase configuration ─────────────────────────────────────────────────
// Replace these two values with your own from supabase.com → Settings → API
const SUPABASE_URL = "https://soujslcksdfivvotdusc.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Ap57IPVT60ec48Ami4HVPA_UWNV8Roe";

const sb = async (path, options = {}) => {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: {
      "apikey": SUPABASE_ANON_KEY,
      "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
      "Prefer": options.prefer || "",
    },
    ...options,
  });
  if (!res.ok) throw new Error(await res.text());
  const text = await res.text();
  return text ? JSON.parse(text) : null;
};

const saveResponse = async (type, data) => {
  try {
    await sb("responses", {
      method: "POST",
      prefer: "return=minimal",
      body: JSON.stringify({ type, response_data: { ...data, ts: Date.now() } }),
    });
    return true;
  } catch { return false; }
};

const loadAllResponses = async (type) => {
  try {
    const rows = await sb(`responses?type=eq.${type}&order=created_at.asc`);
    return (rows || []).map(r => ({ ...r.response_data, type: r.type }));
  } catch { return []; }
};

const loadAll = async () => {
  try {
    const rows = await sb("responses?order=created_at.asc");
    return (rows || []).map(r => ({ ...r.response_data, type: r.type }));
  } catch { return []; }
};


const Btn = ({ onClick, children, color = C.blue, outline = false, style = {} }) => (
  <button onClick={onClick} style={{ background: outline ? "transparent" : color, color: outline ? color : C.white, border: `1.5px solid ${color}`, borderRadius: 5, padding: "9px 20px", fontSize: 12, fontWeight: 600, cursor: "pointer", letterSpacing: ".03em", fontFamily: "inherit", ...style }}
    onMouseEnter={e => e.currentTarget.style.opacity = ".82"}
    onMouseLeave={e => e.currentTarget.style.opacity = "1"}
  >{children}</button>
);
const Tag = ({ children, color = C.blue }) => (
  <span style={{ display:"inline-block", padding:"2px 8px", borderRadius:3, fontSize:10, fontWeight:700, letterSpacing:".06em", textTransform:"uppercase", background:color+"18", color, border:`1px solid ${color}30` }}>{children}</span>
);
const Rule = () => <div style={{ height:1, background:C.rule, margin:"14px 0" }} />;
const BackBtn = ({ onNav, to = "home" }) => (
  <button onClick={() => onNav(to)} style={{ background:"none", border:"none", color:C.blue, cursor:"pointer", fontSize:12, fontWeight:600, padding:"0 0 18px", display:"flex", alignItems:"center", gap:5, fontFamily:"inherit" }}>
    <span style={{ fontSize:14 }}>←</span> Back
  </button>
);
const PageHeader = ({ label, title, color = C.navy }) => (
  <div style={{ marginBottom:24 }}>
    <div style={{ fontSize:10, fontWeight:700, letterSpacing:".18em", textTransform:"uppercase", color, marginBottom:6 }}>{label}</div>
    <div style={{ fontSize:26, fontWeight:800, color:C.navy, lineHeight:1.15, fontFamily:"Georgia,'Times New Roman',serif" }}>{title}</div>
  </div>
);
const Card = ({ children, style = {}, onClick }) => (
  <div onClick={onClick} style={{ background:C.bg2, border:`1px solid ${C.border}`, borderRadius:8, padding:"20px 22px", cursor:onClick?"pointer":"default", ...style }}
    onMouseEnter={onClick ? e => { e.currentTarget.style.boxShadow="0 2px 12px rgba(0,0,0,.08)"; e.currentTarget.style.borderColor=C.border2; } : undefined}
    onMouseLeave={onClick ? e => { e.currentTarget.style.boxShadow="none"; e.currentTarget.style.borderColor=C.border; } : undefined}
  >{children}</div>
);
const Pill = ({ children, color }) => (
  <span style={{ display:"inline-block", padding:"2px 8px", borderRadius:3, fontSize:10, fontWeight:700, background:color+"18", color, border:`1px solid ${color}30` }}>{children}</span>
);
const Progress = ({ value, max, color = C.blue }) => (
  <div style={{ background:C.bg3, borderRadius:4, height:5, overflow:"hidden", marginBottom:20 }}>
    <div style={{ width:`${Math.round((value/max)*100)}%`, height:"100%", background:color, borderRadius:4, transition:"width .35s" }} />
  </div>
);
const BarChart = ({ data, color, title }) => {
  if (!data?.length) return null;
  const max = Math.max(...data.map(d => d.value), 1);
  return (
    <div style={{ marginBottom:6 }}>
      {title && <div style={{ fontSize:11, fontWeight:700, color:C.muted, marginBottom:10 }}>{title}</div>}
      {data.map((d,i) => (
        <div key={i} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:7 }}>
          <div style={{ fontSize:10, color:C.dim, width:"clamp(70px, 28%, 130px)", flexShrink:0, textAlign:"right", lineHeight:1.3 }}>{d.label}</div>
          <div style={{ flex:1, background:C.bg3, borderRadius:3, height:22, overflow:"hidden" }}>
            <div style={{ width:`${Math.round((d.value/max)*100)}%`, height:"100%", background:color, borderRadius:3, minWidth:d.value>0?28:0, transition:"width .5s", display:"flex", alignItems:"center", paddingLeft:8 }}>
              {d.value>0 && <span style={{ fontSize:10, color:C.white, fontWeight:700 }}>{d.value}</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const SURVEY_QS = [
  {id:"s1",block:"H1",q:"A single PI routing platform would give its owner significant power over logistics operators who depend on it."},
  {id:"s2",block:"H1",q:"The value of a PI routing platform increases the more operators join, making fair access harder for latecomers."},
  {id:"s3",block:"H1",q:"Once integrated with a PI platform, switching to an alternative would be difficult and costly."},
  {id:"s4",block:"H1",q:"A PI platform operator accumulates routing and pricing data that gives it a structural advantage over non-operators."},
  {id:"s5",block:"H2",q:"Without governance rules set before launch, a PI platform would eventually be controlled by one or two large incumbents."},
  {id:"s6",block:"H2",q:"SME logistics operators would be at a structural disadvantage on a privately owned PI platform."},
  {id:"s7",block:"H2",q:"PI deployments that skip governance design tend to produce fragmented, limited outcomes."},
  {id:"s8",block:"H2",q:"Whoever controls the PI platform's data standards effectively controls who can participate in the Physical Internet."},
  {id:"s9",block:"H3",q:"The PI platform owner should be legally prohibited from using participant data for its own commercial purposes."},
  {id:"s10",block:"H3",q:"A neutral intermediary body not owned by any logistics operator would be the most appropriate owner of PI central infrastructure."},
  {id:"s11",block:"H3",q:"The EU Data Governance Act's data intermediary category provides an appropriate legal basis for governing PI."},
  {id:"s12",block:"H3",q:"Existing EU competition law alone would adequately protect logistics operators from a dominant PI platform."},
  {id:"s13",block:"H3",q:"A governance body similar to the IETF, which is open, protocol-focused, and independent, would be preferable to private PI ownership."},
  {id:"s14",block:"H3",q:"I would share sensitive logistics data more willingly with a neutral data intermediary than with a private PI platform operator."},
];
const CHOICE_SCENARIOS = [
  {ownership:"Private incumbent (major carrier)",cost:"High: €4,000/month",data:"Owner may use your data commercially",governance:"Owner sets rules unilaterally"},
  {ownership:"EU data intermediary (neutral)",cost:"Low: €250/month",data:"Data legally ring-fenced",governance:"Independent EU regulator oversees"},
  {ownership:"Industry consortium",cost:"Medium: €1,200/month",data:"Used only for routing",governance:"Consortium board votes by majority"},
  {ownership:"Private incumbent (major carrier)",cost:"Medium: €1,200/month",data:"Data legally ring-fenced",governance:"Consortium board votes by majority"},
  {ownership:"EU data intermediary (neutral)",cost:"High: €4,000/month",data:"Owner may use your data commercially",governance:"Owner sets rules unilaterally"},
  {ownership:"Industry consortium",cost:"Low: €250/month",data:"Data legally ring-fenced",governance:"Independent EU regulator oversees"},
];
const CHOICE_OPTS = ["Yes, definitely","Probably yes","Unsure","Probably not","No, definitely not"];
const LIKERT_LABELS = ["Strongly disagree","Disagree","Neutral","Agree","Strongly agree"];
const GOV_OPTS = [
  "Private ownership: owned by a commercial logistics operator",
  "Industry consortium: jointly owned, governed by consortium board",
  "Public utility: owned by a government or EU body",
  "EU data intermediary: neutral body, legally prohibited from commercial use",
  "No preference / Other",
];

const Landing = ({ onNav }) => {
  const navItems = [
    {num:"01",label:"Mind map",desc:"23 sources across 5 clusters",page:"mindmap",color:C.teal},
    {num:"02",label:"Measurement plan",desc:"Hypothesis and five methods",page:"plan",color:C.amber},
    {num:"03",label:"Participate",desc:"Survey or lifecycle experiment",page:"participate",color:C.purple},
  ];
  return (
    <div style={{ maxWidth:700, margin:"0 auto", padding:"40px 24px 60px"}} className="page-pad">

      {/* ── Hero ── */}
      <div style={{ borderBottom:`2px solid ${C.navy}`, paddingBottom:22, marginBottom:28 }}>
        <div style={{ fontSize:10, fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", color:C.blue, marginBottom:10 }}>
          Research · Logistics & Supply Chain Management · 2025/2026
        </div>
        <h1 style={{ fontFamily:"Georgia,'Times New Roman',serif", fontSize:36, fontWeight:800, color:C.navy, lineHeight:1.1, margin:"0 0 10px" }}>
          Who should own the<br/><span style={{ color:C.blue }}>Physical Internet?</span>
        </h1>
        <p style={{ fontSize:13, color:C.muted, margin:0 }}>Patrick Bom · 25 peer-reviewed sources · 5 methods</p>
      </div>

      {/* ── Full introduction ── */}
      <Card style={{ marginBottom:14 }}>
        <Tag color={C.blue}>How logistics works today, and why it is inefficient</Tag>
        <div style={{ marginTop:10, fontSize:13, lineHeight:1.72, color:C.muted }}>
          Today, every logistics company operates its own private network. DHL routes its trucks through DHL depots. Maersk moves its containers through Maersk terminals. Each link in the supply chain is a bilateral relationship managed in a proprietary IT system that cannot talk to the system next door.
        </div>
        <Rule />
        <div style={{ fontSize:13, lineHeight:1.72, color:C.muted }}>
          The result is enormous waste. Trucks drive empty because one operator's excess capacity is invisible to another's shortfall. A 300% increase in freight demand is forecast by 2050, but building enough new infrastructure to absorb it at current efficiency levels is economically and environmentally impossible.
        </div>
      </Card>

      <Card style={{ marginBottom:14 }}>
        <Tag color={C.blue}>What the Physical Internet proposes</Tag>
        <div style={{ marginTop:10, fontSize:13, lineHeight:1.72, color:C.muted }}>
          The Physical Internet, first proposed by Benoit Montreuil in 2010, applies the logic of the digital internet to freight. Instead of every company maintaining a private network, goods would flow through a shared open network of standardised nodes, containers, and routes, routed automatically to the most efficient path using standardised protocols.
        </div>
        <Rule />
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginTop:2 }} className="grid-2">
          {[
            {label:"Efficiency", text:"Optimal use of all available capacity across the entire network, not just within one company's fleet."},
            {label:"Sustainability", text:"Fewer empty runs, better mode consolidation, and measurable CO2 reduction per tonne-kilometre."},
            {label:"Resilience", text:"No single point of failure. Disruption to one node or carrier is automatically rerouted."},
            {label:"Accessibility", text:"Any logistics operator, large or small, can participate on equal terms through open standardised connectors."},
          ].map(b => (
            <div key={b.label} style={{ background:C.bg3, border:`1px solid ${C.border}`, borderRadius:5, padding:"10px 12px" }}>
              <div style={{ fontSize:9, fontWeight:700, color:C.blue, textTransform:"uppercase", letterSpacing:".08em", marginBottom:5 }}>{b.label}</div>
              <div style={{ fontSize:11, color:C.muted, lineHeight:1.55 }}>{b.text}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card style={{ marginBottom:14 }}>
        <Tag color={C.amber}>The central infrastructure problem</Tag>
        <div style={{ marginTop:10, fontSize:13, lineHeight:1.72, color:C.muted }}>
          For goods to be routed across a shared network in real time, there must be a central platform that maintains the network state: a continuously updated map of every logistics node, its available capacity, and its service capabilities. The organisation that operates this platform accumulates enormous structural advantages. It knows the routing data, the pricing data, and the capacity data of every operator in the network. Whoever owns this platform sets the access rules, the pricing, and the data use policy for the entire system.
        </div>
        <div style={{ marginTop:12, background:C.amber+"0f", border:`1px solid ${C.amber}33`, borderRadius:5, padding:"10px 14px" }}>
          <div style={{ fontSize:11, fontWeight:600, color:C.amber, marginBottom:6 }}>The four structural drivers of centralisation risk</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }} className="grid-2">
            {[
              {d:"Network effects", t:"The platform becomes more valuable as more operators join, creating pressure to participate early and making it harder to leave later."},
              {d:"Data accumulation", t:"The operator accumulates routing and pricing data that compounds in value over time and is unavailable to non-operators."},
              {d:"Switching cost lock-in", t:"Once a logistics company integrates its ERP and TMS systems with the PI connector, the cost of switching to a different platform is very high."},
              {d:"Governance vacuum", t:"Neither the PILL Blueprint nor the ALICE Roadmap currently specifies who owns the platform, who sets access rules, or who prevents commercial capture."},
            ].map(item => (
              <div key={item.d} style={{ fontSize:11, color:C.muted, lineHeight:1.5 }}>
                <strong style={{ color:C.navy }}>{item.d}:</strong> {item.t}
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card style={{ marginBottom:14 }}>
        <Tag color={C.coral}>What happens when platforms reach critical mass without governance</Tag>
        <div style={{ marginTop:10, fontSize:13, lineHeight:1.72, color:C.muted }}>
          This is not a hypothetical concern. Transporeon began as a neutral freight exchange in 2000, grew to connect 150,000 carriers and 1,400 shippers, and was acquired by Trimble in 2023 for €1.88 billion. INTTRA was founded as a neutral consortium by the world's largest shipping lines and handled one in four ocean container shipments globally before being acquired by E2open in 2018. In both cases, a platform that began as shared neutral infrastructure became a commercial asset owned by a private company with its own competitive interests.
        </div>
        <Rule />
        <div style={{ fontSize:13, lineHeight:1.72, color:C.muted }}>
          Heimburg and Wiesche (2025) document this as the protect-and-capture phase: the point at which the platform owner uses control to foreclose competitors rather than enable them. Treiblmaier et al. (2020) reviewed 114 peer-reviewed PI publications and found that governance was the single least-researched dimension across all of them.
        </div>
        <div style={{ marginTop:12, background:C.coral+"0f", border:`1px solid ${C.coral}33`, borderRadius:5, padding:"10px 14px", fontSize:12, color:C.muted, lineHeight:1.6 }}>
          <strong style={{ color:C.coral }}>The window is narrow.</strong> The ALICE Roadmap targets PI adoption by 2030. A governance body must be established before the platform reaches critical mass. Restructuring ownership afterwards is legally and practically very difficult.
        </div>
      </Card>

      <Card style={{ marginBottom:14 }}>
        <Tag color={C.purple}>The three candidate ownership models</Tag>
        <div style={{ marginTop:12, display:"flex", flexDirection:"column", gap:10 }}>
          {[
            {model:"Private incumbent ownership", color:C.coral, pros:"Strong investment incentive. Fast development. Commercially sustainable.", cons:"Owner uses platform control to foreclose competitors. SMEs face pricing barriers. Data used commercially. No structural protection against capture.", verdict:"High capture risk"},
            {model:"Public utility ownership", color:C.amber, pros:"No commercial capture incentive. Access by design. Public interest by mandate.", cons:"Slow innovation. Political capture risk. State aid compliance constraints. Low investment incentive.", verdict:"Low capture risk, high bureaucracy risk"},
            {model:"Neutral data intermediary (EU DGA model)", color:C.teal, pros:"Legally prohibited from commercial data use. Open access by law. Polycentric governance distributes decision-making. Directly constituted under existing EU law.", cons:"Investment incentive weaker than private model. Membership fee funding model needs design. Two DGA requirements need explicit governance decisions.", verdict:"Low capture risk, legally grounded"},
          ].map(m => (
            <div key={m.model} style={{ background:C.bg3, border:`1px solid ${C.border}`, borderRadius:6, padding:"12px 14px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
                <div style={{ fontSize:12, fontWeight:700, color:C.navy }}>{m.model}</div>
                <span style={{ background:m.color+"18", color:m.color, border:`1px solid ${m.color}33`, borderRadius:3, padding:"1px 8px", fontSize:9, fontWeight:700, whiteSpace:"nowrap", marginLeft:10 }}>{m.verdict}</span>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }} className="grid-2">
                <div>
                  <div style={{ fontSize:9, fontWeight:700, color:C.teal, textTransform:"uppercase", letterSpacing:".08em", marginBottom:4 }}>Advantages</div>
                  <div style={{ fontSize:11, color:C.muted, lineHeight:1.5 }}>{m.pros}</div>
                </div>
                <div>
                  <div style={{ fontSize:9, fontWeight:700, color:C.coral, textTransform:"uppercase", letterSpacing:".08em", marginBottom:4 }}>Disadvantages</div>
                  <div style={{ fontSize:11, color:C.muted, lineHeight:1.5 }}>{m.cons}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card style={{ marginBottom:14 }}>
        <Tag color={C.teal}>Polycentric governance: what it means for PI</Tag>
        <div style={{ marginTop:10, fontSize:13, lineHeight:1.72, color:C.muted }}>
          Polycentric governance is a concept from Elinor Ostrom's Nobel Prize-winning work on how communities govern shared resources without either privatising them or placing them under state control. Instead of asking who is the single owner, polycentric governance places multiple overlapping centres of decision-making, each with partial autonomy but operating under shared rules.
        </div>
        <Rule />
        <div style={{ fontSize:13, lineHeight:1.72, color:C.muted }}>
          Applied to PI, this would mean multiple national or sectoral governance bodies each managing their piece of the network under a shared global protocol framework, with an independent regulator overseeing access and dispute resolution. No single body controls everything. Parmiggiani and Grisot (2025) document how polycentric governance structures consistently outperform both private ownership and centralised public control in shared data infrastructure. The Catena-X case (Schurig et al., 2025) demonstrates a working real-world example: a non-profit association with inner governance among members and outer governance for all external participants, maintaining open SME access since founding.
        </div>
      </Card>

      <Card style={{ marginBottom:14 }}>
        <Tag color={C.navy}>Who is affected and why it matters to them</Tag>
        <div style={{ marginTop:12, display:"flex", flexDirection:"column", gap:8 }}>
          {[
            {group:"EU policymakers and regulators", color:C.blue, text:"The EU has invested heavily in PI through Horizon Europe funding, the ALICE roadmap, and the PILL project. If the central platform is captured by a private incumbent, public investment produces a private monopoly. The EU Data Governance Act provides the legal vehicle to prevent this."},
            {group:"SME logistics operators", color:C.amber, text:"Small and medium logistics companies have the most to gain from PI's open network model and the most to lose from private capture. Under private ownership, SMEs face pricing barriers, data disadvantages, and structural exclusion from routing optimisation that benefits large operators."},
            {group:"Large logistics incumbents", color:C.coral, text:"Companies like DHL, DB Schenker, and Maersk have both the incentive and the capability to seek ownership of the PI central platform. The governance question is how to separate the investment incentive from the exploitation incentive."},
            {group:"Shippers and manufacturers", color:C.teal, text:"Any company that ships goods across Europe depends on the logistics network's efficiency and fairness. A PI platform owned by a major logistics provider creates conflicts of interest when routing decisions are made. Open governance ensures the algorithm serves the shipper's interest."},
            {group:"PI researchers and institutions", color:C.purple, text:"ALICE, imec, VIL, and the broader PI research community have produced the technical architecture. The governance question is outside most researchers' primary focus. This research produces the institutional design that complements the technical specifications already available."},
          ].map(s => (
            <div key={s.group} style={{ display:"flex", gap:12, padding:"10px 12px", background:C.bg3, border:`1px solid ${C.border}`, borderRadius:5 }}>
              <div style={{ width:6, minWidth:6, borderRadius:3, background:s.color, alignSelf:"stretch" }} />
              <div>
                <div style={{ fontSize:11, fontWeight:700, color:C.navy, marginBottom:4 }}>{s.group}</div>
                <div style={{ fontSize:11, color:C.muted, lineHeight:1.6 }}>{s.text}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card style={{ marginBottom:28, borderLeft:`4px solid ${C.navy}`, borderRadius:"0 8px 8px 0" }}>
        <div style={{ fontSize:10, fontWeight:700, letterSpacing:".16em", textTransform:"uppercase", color:C.navy, marginBottom:8 }}>Research question</div>
        <div style={{ fontSize:14, fontStyle:"italic", lineHeight:1.7, color:C.navy, fontFamily:"Georgia,serif", marginBottom:12 }}>
          "What governance and regulatory frameworks are most effective for managing critical Physical Internet infrastructure ownership to balance innovation, public interest, and operational resilience?"
        </div>
        <div style={{ fontSize:12, lineHeight:1.65, color:C.muted }}>
          The research argues that the <strong style={{ color:C.navy }}>EU Data Governance Act already provides the legal vehicle</strong>: a neutral data intermediary that is prohibited from commercial use of routing data. No new legislation is required. The decision to use it must be made before the platform reaches critical mass.
        </div>
      </Card>

      {/* ── Navigation cards ── */}
      <div style={{ fontSize:10, fontWeight:700, letterSpacing:".16em", textTransform:"uppercase", color:C.navy, marginBottom:14 }}>Explore the research</div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }} className="grid-2">
        {navItems.map(item => (
          <Card key={item.page} onClick={() => onNav(item.page)} style={{ padding:"18px 20px" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
              <div style={{ fontFamily:"Georgia,serif", fontSize:26, fontWeight:800, color:item.color, lineHeight:1 }}>{item.num}</div>
              <div style={{ width:7, height:7, borderRadius:"50%", background:item.color, marginTop:5 }} />
            </div>
            <div style={{ fontSize:14, fontWeight:700, color:C.navy, marginBottom:6 }}>{item.label}</div>
            <div style={{ fontSize:11, color:C.muted, lineHeight:1.5, marginBottom:12 }}>{item.desc}</div>
            <div style={{ fontSize:11, color:item.color, fontWeight:600 }}>Open →</div>
          </Card>
        ))}
      </div>

      <div style={{ textAlign:"center", marginTop:22 }}>
        <button onClick={() => onNav("admin")} style={{ background:"none", border:"none", color:C.dim, fontSize:11, cursor:"pointer", textDecoration:"underline", fontFamily:"inherit" }}>Admin / Export data</button>
      </div>
    </div>
  );
};


const Mindmap = ({ onNav }) => {
  useEffect(() => {
    // Prevent the entire page from scrolling while the mindmap is open
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
      document.documentElement.style.overflow = "";
    };
  }, []);
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      display: "flex", flexDirection: "column",
      zIndex: 5,
    }}>
      {/* Mindmap header bar */}
      <div style={{ background:C.bg2, borderBottom:`1px solid ${C.border}`, padding:"12px 24px", display:"flex", alignItems:"center", gap:16, flexShrink:0, height:48, zIndex:6 }}>
        <BackBtn onNav={onNav} />
        <div>
          <div style={{ fontSize:10, fontWeight:700, letterSpacing:".16em", textTransform:"uppercase", color:C.navy }}>Literature review</div>
          <div style={{ fontSize:15, fontWeight:700, color:C.navy, fontFamily:"Georgia,serif" }}>23 sources across 5 research clusters</div>
        </div>
        <div style={{ marginLeft:"auto", fontSize:11, color:C.dim }}>{typeof window !== "undefined" && window.innerWidth < 600 ? "Drag to pan · Pinch to zoom · Tap a node" : "Scroll to zoom · Drag to pan · Click a node to read"}</div>
      </div>
      <div style={{ flex:1, overflow:"hidden", position:"relative" }}>
        <MindMapViz />
      </div>
    </div>
  );
};

const Plan = ({ onNav }) => {
  const [open, setOpen] = useState(null);
  const toggle = (id) => setOpen(o => o === id ? null : id);

  const TRow = ({ label, val, color, light }) => (
    <div style={{ display:"flex", borderBottom:`1px solid ${C.border}`, padding:"7px 0", alignItems:"flex-start", background: light ? C.bg3 : "transparent" }}>
      <div style={{ width:"clamp(90px, 35%, 200px)", flexShrink:0, fontSize:11, color:C.muted, paddingRight:12 }}>{label}</div>
      <div style={{ fontSize:11, color: color || C.navy, fontWeight: color ? 600 : 400 }}>{val}</div>
    </div>
  );

  const ScoreRow = ({ driver, score, evidence }) => {
    const col = score === 2 ? C.teal : score === 1 ? C.amber : C.coral;
    return (
      <div style={{ display:"flex", borderBottom:`1px solid ${C.border}`, padding:"8px 0", gap:12, alignItems:"flex-start" }}>
        <div style={{ width:"clamp(80px, 30%, 160px)", flexShrink:0, fontSize:11, fontWeight:600, color:C.navy }}>{driver}</div>
        <div style={{ width:60, flexShrink:0 }}>
          <span style={{ background:col+"18", color:col, border:`1px solid ${col}33`, borderRadius:3, padding:"1px 8px", fontSize:10, fontWeight:700 }}>{score}/2</span>
        </div>
        <div style={{ fontSize:11, color:C.muted, lineHeight:1.5 }}>{evidence}</div>
      </div>
    );
  };

  const CaseRow = ({ name, sub, sme, capture, open: openness, gov, govColor }) => {
    const pill = (val, c) => <span style={{ background:c+"18", color:c, border:`1px solid ${c}33`, borderRadius:3, padding:"1px 7px", fontSize:9, fontWeight:700, whiteSpace:"nowrap" }}>{val}</span>;
    const rc = v => v === "High" ? C.teal : v === "Low" ? C.coral : v === "Mid" ? C.amber : v === "Yes" ? C.teal : C.coral;
    return (
      <div style={{ display:"grid", gridTemplateColumns:"minmax(80px,1.4fr) minmax(50px,1fr) minmax(50px,1fr) minmax(50px,1fr) minmax(50px,1fr)", borderBottom:`1px solid ${C.border}`, padding:"8px 0", gap:6, alignItems:"center" }}>
        <div><div style={{ fontSize:11, fontWeight:600, color:C.navy }}>{name}</div><div style={{ fontSize:9, color:C.dim }}>{sub}</div></div>
        {[sme, capture, openness].map((v,i) => <div key={i}>{pill(v, rc(v))}</div>)}
        <div>{pill(gov, govColor || rc(gov))}</div>
      </div>
    );
  };

  const DGARow = ({ req, art, result, evidence, light }) => {
    const col = result === "Applicable" || result === "Directly aligned" ? C.teal : result === "Needs design" ? C.amber : C.coral;
    return (
      <div style={{ display:"flex", borderBottom:`1px solid ${C.border}`, padding:"8px 0", gap:10, background: light ? C.bg3 : "transparent" }}>
        <div style={{ flex:2, fontSize:11, color:C.navy, lineHeight:1.4 }}>{req} <span style={{ fontSize:9, color:C.dim }}>({art})</span></div>
        <div style={{ width:"clamp(70px, 22%, 100px)", flexShrink:0 }}>
          <span style={{ background:col+"18", color:col, border:`1px solid ${col}33`, borderRadius:3, padding:"1px 7px", fontSize:9, fontWeight:700 }}>{result}</span>
        </div>
        <div style={{ flex:2, fontSize:10, color:C.muted, lineHeight:1.45 }}>{evidence}</div>
      </div>
    );
  };

  const hypotheses = [
    {id:"H1",color:C.coral,text:"PI central infrastructure already exhibits all four structural preconditions for centralisation drift: network effects, data accumulation advantage, switching cost lock-in, and a governance vacuum.",support:"Confirmed by M1 (score 8/8) and M4a (Block A perception survey)"},
    {id:"H2",color:C.amber,text:"Without proactive governance design, PI will follow the growth-consolidation-capture lifecycle, producing private market capture and SME exclusion.",support:"Confirmed by M2 (case comparison) and M4b (lifecycle experiment)"},
    {id:"H3",color:C.teal,text:"A neutral EU data intermediary model, legally constituted under the DGA, prohibited from commercial data use, and governed by polycentric principles, produces better access outcomes and is applicable under existing EU law.",support:"Supported by M2 (Catena-X outcome), M3 (DGA mapping), M4a (Blocks B and C)"},
  ];

  const sections = [
    {
      id:"M1", color:C.blue,
      title:"Document analysis: PI blueprints",
      tests:"Tests H1",
      summary:"PILL Blueprint (imec, 2025) and ALICE Roadmap (ALICE-ETP, 2020) coded against four centralisation drivers using a 0 to 2 scoring protocol. Confirmation threshold: 6 out of 8.",
      finding:"Result: 8/8. All four drivers fully present. H1 confirmed.",
      detail: (
        <div>
          <div style={{ fontSize:11, fontWeight:700, color:C.navy, marginBottom:8 }}>Documents analysed</div>
          <TRow label="PILL Blueprint (2025)" val="Primary PI architecture specification by imec, VUB, and VIL. Covers routing engine, network state, data connector, and governance challenges." />
          <TRow label="ALICE Roadmap (2020)" val="EU-funded Physical Internet development trajectory to 2040 across five areas including governance, with generational milestones." light />
          <div style={{ fontSize:11, fontWeight:700, color:C.navy, margin:"14px 0 8px" }}>Scoring results</div>
          <div style={{ display:"flex", borderBottom:`2px solid ${C.border}`, padding:"0 0 6px", marginBottom:4, gap:12 }}>
            <div style={{ width:160, flexShrink:0, fontSize:9, fontWeight:700, color:C.dim, textTransform:"uppercase", letterSpacing:".08em" }}>Driver</div>
            <div style={{ width:60, flexShrink:0, fontSize:9, fontWeight:700, color:C.dim, textTransform:"uppercase", letterSpacing:".08em" }}>Score</div>
            <div style={{ fontSize:9, fontWeight:700, color:C.dim, textTransform:"uppercase", letterSpacing:".08em" }}>Evidence from documents</div>
          </div>
          <ScoreRow driver="Network effects" score={2} evidence="Blueprint describes the routing platform value increasing as more operators publish services to the shared network state. ALICE Roadmap shows adoption pressure compounds over generations." />
          <ScoreRow driver="Data accumulation" score={2} evidence="Network state aggregates routing, capacity, and performance data from all participants. Platform operator holds continuous access to the complete aggregate. Ownership of this data is unspecified in both documents." />
          <ScoreRow driver="Switching cost lock-in" score={2} evidence="The PI Connector integrates directly with each operator's ERP and TMS systems. No data portability mechanism or exit procedure is specified. ALICE Roadmap generations deepen operational dependency progressively." />
          <ScoreRow driver="Governance vacuum" score={2} evidence="Neither document names a platform owner, specifies access rules, or proposes an institutional ownership structure. ALICE Roadmap defers governance body formation to the 2025-2030 generation without defining its form." />
          <div style={{ marginTop:12, background:C.teal+"12", border:`1px solid ${C.teal}33`, borderRadius:5, padding:"8px 12px", fontSize:11, color:C.teal, fontWeight:600 }}>
            Total: 8/8. Confirmation threshold met. H1 confirmed.
          </div>
        </div>
      )
    },
    {
      id:"M2", color:C.amber,
      title:"Comparative case study: 4 platforms",
      tests:"Tests H2 + H3",
      summary:"Transporeon, project44, Catena-X, and INTTRA each assessed on three outcome variables: SME access, capture indicator, and openness maintenance. Catena-X serves as the proactively governed comparator.",
      finding:"Result: every platform without proactive governance shows capture and low SME access. Catena-X scores High on all three. H2 confirmed.",
      detail: (
        <div>
          <div style={{ overflowX:"auto", WebkitOverflowScrolling:"touch", marginBottom:8 }}><div style={{ minWidth:340 }}>
          <div style={{ display:"grid", gridTemplateColumns:"minmax(80px,1.4fr) minmax(50px,1fr) minmax(50px,1fr) minmax(50px,1fr) minmax(50px,1fr)", borderBottom:`2px solid ${C.border}`, padding:"0 0 6px", marginBottom:4, gap:6 }}>
            {["Platform","SME access","Capture","Openness","Gov. proactive?"].map(h => (
              <div key={h} style={{ fontSize:9, fontWeight:700, color:C.dim, textTransform:"uppercase", letterSpacing:".08em" }}>{h}</div>
            ))}
          </div>
          <CaseRow name="Transporeon" sub="Acquired by Trimble 2023, €1.88bn" sme="Low" capture="High" open="Mid" gov="No" />
          <CaseRow name="project44" sub="VC-backed private, founded 2014" sme="Low" capture="High" open="Mid" gov="No" />
          <CaseRow name="Catena-X" sub="Non-profit association, founded 2021" sme="High" capture="Low" open="High" gov="Yes" govColor={C.teal} />
          <CaseRow name="INTTRA" sub="Neutral consortium, acquired 2018" sme="Mid" capture="High" open="Mid" gov="No" />
          </div></div>
          <div style={{ marginTop:14, fontSize:11, fontWeight:700, color:C.navy, marginBottom:8 }}>Why the pattern holds</div>
          <div style={{ fontSize:11, color:C.muted, lineHeight:1.65 }}>
            Transporeon and INTTRA both began as neutral platforms. Without a legal prohibition on commercial sale built into their governance, both were acquired once they reached critical mass. Catena-X is the only case where the founding structure (a non-profit association with binding Ten Golden Rules) prevented this. The pattern directly confirms H2 and provides the outcome evidence for H3.
          </div>
          <div style={{ marginTop:10, fontSize:11, fontWeight:700, color:C.navy, marginBottom:6 }}>PI gap assessment</div>
          <div style={{ fontSize:11, color:C.muted, lineHeight:1.65 }}>
            Applying the same three variables to PI's current design documents: no SME access protection exists, no prohibition on commercial data use is specified, and no non-profit institutional structure is defined. Every protective feature present in Catena-X is absent from PI.
          </div>
        </div>
      )
    },
    {
      id:"M3", color:C.teal,
      title:"EU DGA legal analysis",
      tests:"Tests H3",
      summary:"DGA Articles 10-15 mapped against PI routing infrastructure using a three-value protocol: Applicable, Needs design, or Not applicable. Sources: Richter (2023) GRUR International; Von Ditfurth & Lienemann (2022) CRNI.",
      finding:"Result: 4 requirements directly applicable, 2 need compatible design decisions, no fundamental incompatibility. No new EU legislation required.",
      detail: (
        <div>
          <div style={{ display:"flex", borderBottom:`2px solid ${C.border}`, padding:"0 0 6px", marginBottom:4, gap:10 }}>
            {["DGA requirement","Result","PI evidence"].map((h,i) => (
              <div key={h} style={{ fontSize:9, fontWeight:700, color:C.dim, textTransform:"uppercase", letterSpacing:".08em", flex: i===0||i===2 ? 2 : undefined, width: i===1 ? 100 : undefined, flexShrink: i===1 ? 0 : undefined }}>{h}</div>
            ))}
          </div>
          <DGARow req="Provides data sharing services between holders and users" art="Art. 2.11" result="Applicable" evidence="PI routing platform routes logistics service data between operators and shippers. Matches DGA data intermediation service definition directly." />
          <DGARow req="Must not use intermediated data for own commercial purposes" art="Art. 12a" result="Needs design" evidence="Not guaranteed under private ownership. Requires an explicit legal prohibition in the PI governance charter. Currently absent from all PI blueprints." light />
          <DGARow req="Organisationally and legally separate from commercial interests" art="Art. 12b" result="Needs design" evidence="A PI platform owned by a logistics operator would directly violate this. Requires explicit ownership design before platform launch." />
          <DGARow req="Must notify national competent authority before operating" art="Art. 11" result="Applicable" evidence="No PI entity currently registered. The notification pathway exists and is straightforward under current EU administrative law." light />
          <DGARow req="Support interoperability and data portability" art="Art. 12d" result="Directly aligned" evidence="DGA interoperability obligations match PI's open-network design principle. The PI Connector architecture already uses open standards consistent with Art. 12d." />
          <DGARow req="Must not prevent data holders using other services" art="Art. 12h" result="Applicable" evidence="PI Blueprint's federated architecture explicitly preserves data sovereignty. Design satisfies Art. 12h without modification." light />
          <div style={{ marginTop:12, background:C.teal+"12", border:`1px solid ${C.teal}33`, borderRadius:5, padding:"8px 12px", fontSize:11, color:C.teal, fontWeight:600 }}>
            The DGA became applicable on 24 September 2023. No new legislation is needed. The two requirements marked Needs design are governance choices, not architectural incompatibilities.
          </div>
        </div>
      )
    },
    {
      id:"M4a", color:C.purple,
      title:"Expert survey + discrete choice experiment",
      tests:"Tests H1, H2, H3",
      summary:"Pool 1 (n≥50): 14-item Likert perception survey across three blocks (H1, H2, H3), followed by 6 discrete choice scenarios varying ownership model, access cost, data use policy, and governance oversight.",
      finding:"Status: pending fieldwork. Participate using the Participate page.",
      detail: (
        <div>
          <div style={{ fontSize:11, fontWeight:700, color:C.navy, marginBottom:8 }}>Part 1: Perception survey (14 Likert questions, 1-5 scale)</div>
          {[
            {block:"Block A: Centralisation risk (H1)", color:C.coral, qs:["Does a PI routing platform create significant power for its owner?","Does value increase as more operators join, disadvantaging latecomers?","Is switching away from a PI platform costly once integrated?","Does the operator accumulate a data advantage over non-operators?"]},
            {block:"Block B: Capture without governance (H2)", color:C.amber, qs:["Would one or two incumbents dominate without pre-launch governance rules?","Are SMEs structurally disadvantaged on a privately owned PI platform?","Do PI deployments without governance produce fragmented outcomes?","Does data standard ownership determine PI participation rights?"]},
            {block:"Block C: Intermediary solution (H3)", color:C.teal, qs:["Should the platform owner be legally prohibited from commercial data use?","Is a neutral non-owner body the most appropriate PI custodian?","Does the EU DGA provide a suitable legal basis for PI governance?","Would practitioners share data more willingly with a neutral intermediary?"]},
          ].map(b => (
            <div key={b.block} style={{ marginBottom:12 }}>
              <div style={{ fontSize:10, fontWeight:700, color:b.color, textTransform:"uppercase", letterSpacing:".08em", marginBottom:6 }}>{b.block}</div>
              {b.qs.map((q,i) => (
                <div key={i} style={{ display:"flex", gap:8, marginBottom:5, alignItems:"flex-start" }}>
                  <div style={{ width:14, height:14, borderRadius:2, background:b.color+"18", border:`1px solid ${b.color}33`, flexShrink:0, marginTop:1 }} />
                  <div style={{ fontSize:11, color:C.muted, lineHeight:1.45 }}>{q}</div>
                </div>
              ))}
            </div>
          ))}
          <div style={{ fontSize:11, fontWeight:700, color:C.navy, margin:"14px 0 8px" }}>Part 2: Discrete choice experiment (6 scenarios)</div>
          <div style={{ fontSize:11, color:C.muted, lineHeight:1.6, marginBottom:8 }}>Each scenario varies four attributes simultaneously. Respondents indicate whether their organisation would participate. Logistic regression identifies which attribute drives participation decisions most strongly.</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:6 }} className="grid-4">
            {[
              {attr:"Ownership model", levels:["Private incumbent","Industry consortium","EU data intermediary"]},
              {attr:"Monthly access cost", levels:["High: €4,000","Medium: €1,200","Low: €250"]},
              {attr:"Data use policy", levels:["Owner uses data commercially","Routing use only","Legally ring-fenced"]},
              {attr:"Governance oversight", levels:["Owner decides unilaterally","Consortium board votes","Independent EU regulator"]},
            ].map(a => (
              <div key={a.attr} style={{ background:C.bg3, border:`1px solid ${C.border}`, borderRadius:5, padding:"8px 10px" }}>
                <div style={{ fontSize:9, fontWeight:700, color:C.purple, textTransform:"uppercase", letterSpacing:".08em", marginBottom:6 }}>{a.attr}</div>
                {a.levels.map((l,i) => <div key={i} style={{ fontSize:10, color:C.muted, marginBottom:3 }}>{l}</div>)}
              </div>
            ))}
          </div>
          <div style={{ marginTop:10, fontSize:11, fontWeight:700, color:C.navy }}>Sample justification</div>
          <div style={{ fontSize:11, color:C.muted, lineHeight:1.6, marginTop:4 }}>n≥50 based on Eckartz et al. (2014) as precedent for platform adoption surveys and Johnson & Orme (2010) conjoint analysis threshold: 6-8 scenarios at 50 respondents produces 300-400 choice observations, sufficient for logistic regression on four attributes with three levels each.</div>
        </div>
      )
    },
    {
      id:"M4b", color:C.pink,
      title:"Between-subjects lifecycle experiment",
      tests:"Tests H2",
      summary:"Pool 2 (n≥50, 25 per group): respondents randomly assigned to Group A (PI at 12% adoption) or Group B (PI at 68% adoption). Both groups answer the same governance preference question. Separate pool prevents carry-over bias from M4a.",
      finding:"Status: pending fieldwork. Participate using the Participate page.",
      detail: (
        <div>
          <div style={{ fontSize:11, fontWeight:700, color:C.navy, marginBottom:8 }}>Why a separate pool is necessary</div>
          <div style={{ fontSize:11, color:C.muted, lineHeight:1.65, marginBottom:14 }}>Completing Options A and B primes respondents on PI governance by asking 14 Likert questions and 6 trade-off scenarios. If the same respondents then saw the lifecycle scenario, their answers would be shaped by that priming rather than by the scenario alone. Separate pools allow the effect of the lifecycle stage to be isolated cleanly.</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:14 }} className="grid-2">
            <div style={{ background:C.purple+"0d", border:`1px solid ${C.purple}33`, borderRadius:6, padding:"12px 14px" }}>
              <div style={{ fontSize:10, fontWeight:700, color:C.purple, textTransform:"uppercase", letterSpacing:".08em", marginBottom:8 }}>Group A: Growth phase</div>
              <div style={{ fontSize:11, color:C.muted, lineHeight:1.6 }}>A Physical Internet routing platform has just launched in Europe. It handles approximately 12% of cross-border EU logistics volume. Most major operators have joined but alternatives still exist.</div>
            </div>
            <div style={{ background:C.pink+"0d", border:`1px solid ${C.pink}33`, borderRadius:6, padding:"12px 14px" }}>
              <div style={{ fontSize:10, fontWeight:700, color:C.pink, textTransform:"uppercase", letterSpacing:".08em", marginBottom:8 }}>Group B: Critical mass</div>
              <div style={{ fontSize:11, color:C.muted, lineHeight:1.6 }}>The platform now handles 68% of cross-border EU logistics volume. Most operators depend on it daily. Switching to an alternative would take 12 to 18 months and significant investment.</div>
            </div>
          </div>
          <div style={{ fontSize:11, fontWeight:700, color:C.navy, marginBottom:6 }}>Governance question (both groups)</div>
          <div style={{ background:C.bg3, border:`1px solid ${C.border}`, borderRadius:5, padding:"10px 14px", fontSize:11, color:C.navy, fontStyle:"italic", marginBottom:10 }}>
            "Given this scenario, which ownership and governance model would you consider most appropriate for this platform?"
          </div>
          <div style={{ fontSize:11, fontWeight:700, color:C.navy, marginBottom:6 }}>Analysis</div>
          <div style={{ fontSize:11, color:C.muted, lineHeight:1.65 }}>A chi-square test compares the distribution of governance choices between Group A and Group B. If Group B significantly more often selects the EU data intermediary or public utility option, this confirms the lifecycle argument in H2: practitioners recognise the critical mass moment and respond with stronger governance preferences. Sample size justified by Cohen's (1988) chi-square cell frequency rule: minimum 20-25 observations per cell for test validity.</div>
        </div>
      )
    },
  ];

  return (
    <div style={{ maxWidth:720, margin:"0 auto", padding:"40px 24px"}} className="page-pad">
      <BackBtn onNav={onNav} />
      <PageHeader label="Research design" title="Hypothesis and measurement plan" />

      <Card style={{ marginBottom:20 }}>
        <Tag color={C.navy}>Main hypothesis: three component claims</Tag>
        <div style={{ marginTop:14 }}>
          {hypotheses.map((h,i) => (
            <div key={h.id}>
              <div style={{ display:"flex", gap:12, padding:"10px 0", alignItems:"flex-start" }}>
                <Pill color={h.color}>{h.id}</Pill>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:12, color:C.navy, lineHeight:1.55, marginBottom:4 }}>{h.text}</div>
                  <div style={{ fontSize:10, color:h.color, fontWeight:600 }}>{h.support}</div>
                </div>
              </div>
              {i < hypotheses.length - 1 && <div style={{ height:1, background:C.border }} />}
            </div>
          ))}
        </div>
      </Card>

      <div style={{ fontSize:10, fontWeight:700, letterSpacing:".14em", textTransform:"uppercase", color:C.navy, marginBottom:12 }}>Five methods: click any to expand</div>

      {sections.map(s => (
        <div key={s.id} style={{ marginBottom:10 }}>
          <div
            onClick={() => toggle(s.id)}
            style={{ background:C.bg2, border:`1px solid ${open===s.id ? s.color : C.border}`, borderRadius: open===s.id ? "8px 8px 0 0" : 8, padding:"14px 16px", cursor:"pointer", transition:"border-color .15s" }}
            onMouseEnter={e => { if(open!==s.id) e.currentTarget.style.borderColor=C.border2; }}
            onMouseLeave={e => { if(open!==s.id) e.currentTarget.style.borderColor=C.border; }}
          >
            <div style={{ display:"flex", gap:12, alignItems:"center" }}>
              <div style={{ width:38, height:38, borderRadius:6, background:s.color+"15", border:`1.5px solid ${s.color}40`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <span style={{ fontSize:9, fontWeight:800, color:s.color }}>{s.id}</span>
              </div>
              <div style={{ flex:1 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:3 }}>
                  <div style={{ fontSize:13, fontWeight:700, color:C.navy }}>{s.title}</div>
                  <div style={{ display:"flex", gap:8, alignItems:"center" }}>
                    <Tag color={s.color}>{s.tests}</Tag>
                    <span style={{ fontSize:16, color:C.dim, lineHeight:1 }}>{open===s.id ? "−" : "+"}</span>
                  </div>
                </div>
                <div style={{ fontSize:11, color:C.muted, lineHeight:1.5 }}>{s.summary}</div>
              </div>
            </div>
            <div style={{ marginTop:8, fontSize:11, color:s.color, fontWeight:600, paddingLeft:50 }}>{s.finding}</div>
          </div>
          {open === s.id && (
            <div style={{ background:C.bg3, border:`1px solid ${s.color}`, borderTop:"none", borderRadius:"0 0 8px 8px", padding:"16px 20px" }}>
              {s.detail}
            </div>
          )}
        </div>
      ))}

      <Card style={{ marginTop:16, background:C.bg3 }}>
        <Tag color={C.navy}>How the four methods triangulate</Tag>
        <div style={{ marginTop:12, display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:10 }} className="grid-3">
          {[
            {claim:"H1", evidence:"M1 scores PI blueprints 8/8 on preconditions. M4a Block A tests whether practitioners recognise these same drivers.", color:C.coral},
            {claim:"H2", evidence:"M2 documents capture across all four platforms without governance. M4b tests whether critical mass changes governance preferences.", color:C.amber},
            {claim:"H3", evidence:"M2 Catena-X outcome shows intermediary model works. M3 confirms DGA legal applicability. M4a Blocks B and C test practitioner preference.", color:C.teal},
          ].map(t => (
            <div key={t.claim} style={{ background:C.bg2, border:`1px solid ${C.border}`, borderRadius:6, padding:"10px 12px" }}>
              <Pill color={t.color}>{t.claim}</Pill>
              <div style={{ fontSize:11, color:C.muted, lineHeight:1.55, marginTop:6 }}>{t.evidence}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

const Participate = ({ onNav }) => {
  const chosen = localStorage.getItem("pi_research_choice");
  return (
    <div style={{ maxWidth:600, margin:"0 auto", padding:"40px 24px"}} className="page-pad">
      <BackBtn onNav={onNav} />
      <PageHeader label="Primary data collection" title="Participate in the research" />
      <div style={{ fontSize:13, color:C.muted, marginBottom:24, lineHeight:1.6 }}>You can participate in either the expert survey or the lifecycle experiment, but not both. This is intentional: completing one influences how you would answer the other, which would compromise the research design.</div>
      {chosen ? (
        <Card style={{ textAlign:"center", padding:"32px 24px" }}>
          <div style={{ width:48, height:48, borderRadius:"50%", background:C.teal+"18", border:`2px solid ${C.teal}`, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 14px", fontSize:20, color:C.teal }}>✓</div>
          <div style={{ fontSize:15, fontWeight:700, color:C.navy, marginBottom:8 }}>You have already participated</div>
          <div style={{ fontSize:12, color:C.muted, marginBottom:20 }}>You completed the <strong style={{ color:C.navy }}>{chosen==="survey"?"expert survey":"lifecycle experiment"}</strong>. Thank you for contributing.</div>
          <Btn onClick={() => onNav(chosen==="survey"?"results_survey":"results_exp")} color={C.teal}>View results and charts</Btn>
        </Card>
      ) : (
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, alignItems:"stretch" }} className="grid-2">
          <Card onClick={() => onNav("survey")} style={{ padding:"24px", display:"flex", flexDirection:"column" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
              <Tag color={C.purple}>Option A</Tag>
              <span style={{ fontSize:10, color:C.dim }}>15-20 min</span>
            </div>
            <div style={{ fontSize:15, fontWeight:700, color:C.navy, marginBottom:8 }}>Expert survey</div>
            <div style={{ fontSize:12, color:C.muted, lineHeight:1.55, marginBottom:16, flex:1 }}>14 perception questions on centralisation risk and governance preferences, plus 6 trade-off scenarios. Best suited for logistics professionals.</div>
            <Btn color={C.purple} style={{ width:"100%", textAlign:"center" }}>Start survey →</Btn>
          </Card>
          <Card onClick={() => onNav("experiment")} style={{ padding:"24px", display:"flex", flexDirection:"column" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
              <Tag color={C.pink}>Option B</Tag>
              <span style={{ fontSize:10, color:C.dim }}>5-8 min</span>
            </div>
            <div style={{ fontSize:15, fontWeight:700, color:C.navy, marginBottom:8 }}>Lifecycle experiment</div>
            <div style={{ fontSize:12, color:C.muted, lineHeight:1.55, marginBottom:16, flex:1 }}>Read a scenario about the PI platform at a specific adoption stage and choose who should govern it. Open to everyone.</div>
            <Btn color={C.pink} style={{ width:"100%", textAlign:"center" }}>Start experiment →</Btn>
          </Card>
        </div>
      )}
    </div>
  );
};

const Survey = ({ onNav }) => {
  const [step, setStep] = useState(0);
  const [bg, setBg] = useState({role:"",size:"",years:"",familiarity:"",platform:""});
  const [likert, setLikert] = useState({});
  const [choices, setChoices] = useState({});
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");
  const bgFields = [
    {key:"role",label:"Your primary role",opts:["Logistics operator","Freight forwarder","Platform / technology provider","Policy or regulatory body","Researcher or consultant","Other"]},
    {key:"size",label:"Organisation size",opts:["1–9","10–49","50–249","250–999","1,000+"]},
    {key:"years",label:"Years of experience in logistics or supply chain",opts:["0–2","3–5","6–10","11–20","20+"]},
    {key:"familiarity",label:"Familiarity with the Physical Internet concept",opts:["Not at all","Slightly familiar","Moderately familiar","Very familiar","Expert"]},
    {key:"platform",label:"Does your organisation use a logistics platform (e.g. Transporeon, project44)?",opts:["Yes","No","Not sure"]},
  ];
  const bgDone = bgFields.every(f => bg[f.key]);
  const likertDone = SURVEY_QS.every(q => likert[q.id]);
  const choicesDone = CHOICE_SCENARIOS.every((_,i) => choices[i]);
  const blockColors = {H1:C.coral,H2:C.amber,H3:C.teal};
  const blockLabels = {H1:"Block A: Centralisation risk (H1)",H2:"Block B: Capture without governance (H2)",H3:"Block C: Data intermediary solution (H3)"};
  const submit = async () => {
    setSaving(true);
    const ok = await saveResponse("survey",{bg,likert,choices});
    if(ok){localStorage.setItem("pi_research_choice","survey");setStep(3);}
    else setErr("Could not save. Please try again.");
    setSaving(false);
  };
  const SBtn = ({val,current,onSet,color}) => (
    <button onClick={()=>onSet(val)} style={{ padding:"6px 11px", borderRadius:4, fontSize:11, cursor:"pointer", border:`1px solid ${current===val?color:C.border}`, background:current===val?color+"18":C.bg3, color:current===val?color:C.muted, fontWeight:current===val?700:400, fontFamily:"inherit" }}>{val}</button>
  );
  if(step===3) return (
    <div style={{ maxWidth:520, margin:"0 auto", padding:"60px 24px", textAlign:"center" }}>
      <div style={{ width:56, height:56, borderRadius:"50%", background:C.teal+"18", border:`2px solid ${C.teal}`, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px", fontSize:24, color:C.teal }}>✓</div>
      <div style={{ fontSize:20, fontWeight:700, color:C.navy, marginBottom:10 }}>Thank you for participating</div>
      <div style={{ fontSize:13, color:C.muted, marginBottom:28 }}>Your responses have been saved and contribute to the research findings.</div>
      <Btn onClick={()=>onNav("results_survey")} color={C.teal}>View aggregated results</Btn>
    </div>
  );
  return (
    <div style={{ maxWidth:680, margin:"0 auto", padding:"40px 24px"}} className="page-pad">
      <BackBtn onNav={onNav} to="participate" />
      <div style={{ marginBottom:6 }}>
        <div style={{ fontSize:10, fontWeight:700, letterSpacing:".16em", textTransform:"uppercase", color:C.purple, marginBottom:6 }}>Expert survey: {["Step 1 of 3: Background","Step 2 of 3: Perception questions","Step 3 of 3: Governance scenarios"][step]}</div>
        <Progress value={step} max={2} color={C.purple} />
      </div>
      {step===0 && (
        <Card>
          <div style={{ fontSize:16, fontWeight:700, color:C.navy, marginBottom:6 }}>About you</div>
          <div style={{ fontSize:12, color:C.muted, marginBottom:18 }}>These background questions help segment the results. Select one option per question.</div>
          {bgFields.map(f => (
            <div key={f.key} style={{ marginBottom:16 }}>
              <div style={{ fontSize:12, fontWeight:600, color:C.navy, marginBottom:7 }}>{f.label}</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {f.opts.map(o => <SBtn key={o} val={o} current={bg[f.key]} onSet={v=>setBg(p=>({...p,[f.key]:v}))} color={C.purple} />)}
              </div>
            </div>
          ))}
          <div style={{ marginTop:20 }}>
            <Btn onClick={()=>setStep(1)} color={C.purple} style={{ opacity:bgDone?1:.35, pointerEvents:bgDone?"auto":"none" }}>Next: Perception questions →</Btn>
          </div>
        </Card>
      )}
      {step===1 && (
        <div>
          {["H1","H2","H3"].map(block => (
            <Card key={block} style={{ marginBottom:14 }}>
              <Tag color={blockColors[block]}>{blockLabels[block]}</Tag>
              <div style={{ marginTop:14 }}>
                {SURVEY_QS.filter(q=>q.block===block).map((q,qi,arr) => (
                  <div key={q.id} style={{ marginBottom:qi<arr.length-1?18:0 }}>
                    <div style={{ fontSize:12, color:C.navy, lineHeight:1.55, marginBottom:8, fontWeight:500 }}>{q.q}</div>
                    <div style={{ display:"flex", gap:5, flexWrap:"wrap" }}>
                      {LIKERT_LABELS.map((l,i) => <SBtn key={i} val={i+1} current={likert[q.id]} onSet={v=>setLikert(p=>({...p,[q.id]:v}))} color={blockColors[block]} />)}
                    </div>
                    {qi<arr.length-1 && <Rule />}
                  </div>
                ))}
              </div>
            </Card>
          ))}
          <Btn onClick={()=>setStep(2)} color={C.purple} style={{ opacity:likertDone?1:.35, pointerEvents:likertDone?"auto":"none" }}>Next: Governance scenarios →</Btn>
        </div>
      )}
      {step===2 && (
        <div>
          <Card style={{ marginBottom:14, background:C.bg3 }}>
            <div style={{ fontSize:12, color:C.muted, lineHeight:1.6 }}>For each scenario, would your organisation participate in this PI routing platform under these conditions?</div>
          </Card>
          {CHOICE_SCENARIOS.map((s,i) => (
            <Card key={i} style={{ marginBottom:12 }}>
              <div style={{ fontSize:11, fontWeight:700, color:C.dim, marginBottom:10 }}>Scenario {i+1} of {CHOICE_SCENARIOS.length}</div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:14 }} className="grid-2">
                {[["Ownership",s.ownership],["Monthly cost",s.cost],["Data use policy",s.data],["Governance",s.governance]].map(([k,v]) => (
                  <div key={k} style={{ background:C.bg3, borderRadius:5, padding:"8px 10px", border:`1px solid ${C.border}` }}>
                    <div style={{ fontSize:9, color:C.dim, textTransform:"uppercase", letterSpacing:".1em", marginBottom:3 }}>{k}</div>
                    <div style={{ fontSize:11, color:C.navy, fontWeight:500 }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {CHOICE_OPTS.map(o => <SBtn key={o} val={o} current={choices[i]} onSet={v=>setChoices(p=>({...p,[i]:v}))} color={C.purple} />)}
              </div>
            </Card>
          ))}
          {err && <div style={{ color:C.coral, fontSize:11, marginBottom:10 }}>{err}</div>}
          <Btn onClick={submit} color={C.teal} style={{ opacity:choicesDone&&!saving?1:.35, pointerEvents:choicesDone&&!saving?"auto":"none" }}>{saving?"Saving…":"Submit survey"}</Btn>
        </div>
      )}
    </div>
  );
};

const Experiment = ({ onNav }) => {
  const [group] = useState(()=>Math.random()<0.5?"A":"B");
  const [govChoice, setGovChoice] = useState("");
  const [openText, setOpenText] = useState("");
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");
  const submit = async () => {
    if(!govChoice) return;
    setSaving(true);
    const ok = await saveResponse("experiment",{group,govChoice,openText});
    if(ok){localStorage.setItem("pi_research_choice","experiment");setDone(true);}
    else setErr("Could not save. Please try again.");
    setSaving(false);
  };
  if(done) return (
    <div style={{ maxWidth:520, margin:"0 auto", padding:"60px 24px", textAlign:"center" }}>
      <div style={{ width:56, height:56, borderRadius:"50%", background:C.teal+"18", border:`2px solid ${C.teal}`, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px", fontSize:24, color:C.teal }}>✓</div>
      <div style={{ fontSize:20, fontWeight:700, color:C.navy, marginBottom:10 }}>Thank you for participating</div>
      <div style={{ fontSize:13, color:C.muted, marginBottom:8 }}>You were in <strong style={{ color:group==="A"?C.purple:C.pink }}>Group {group}</strong>.</div>
      <div style={{ fontSize:12, color:C.dim, marginBottom:28 }}>Your response has been recorded.</div>
      <Btn onClick={()=>onNav("results_exp")} color={C.teal}>View aggregated results</Btn>
    </div>
  );
  const sc = group==="A"
    ?{color:C.purple,label:"Scenario A: Early stage (12% adoption)",text:"A Physical Internet routing platform has just launched in Europe. It currently handles approximately 12% of cross-border EU logistics volume. Most major operators have joined but participation is not yet essential. Alternatives still exist. The platform is growing rapidly."}
    :{color:C.pink,label:"Scenario B: Critical mass (68% adoption)",text:"A Physical Internet routing platform has been operating in Europe for five years. It now handles approximately 68% of cross-border EU logistics volume. Most major and mid-size operators depend on it daily. Switching to an alternative would take 12 to 18 months and significant investment."};
  return (
    <div style={{ maxWidth:600, margin:"0 auto", padding:"40px 24px"}} className="page-pad">
      <BackBtn onNav={onNav} to="participate" />
      <PageHeader label="Lifecycle experiment" title="Who should govern the Physical Internet platform?" color={sc.color} />
      <Card style={{ marginBottom:16, borderLeft:`4px solid ${sc.color}`, borderRadius:"0 8px 8px 0" }}>
        <Tag color={sc.color}>{sc.label}</Tag>
        <div style={{ marginTop:10, fontSize:13, lineHeight:1.7, color:C.navy, fontFamily:"Georgia,serif", fontStyle:"italic" }}>{sc.text}</div>
      </Card>
      <Card style={{ marginBottom:14 }}>
        <div style={{ fontSize:13, fontWeight:700, color:C.navy, marginBottom:12 }}>Which ownership and governance model would you consider most appropriate?</div>
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {GOV_OPTS.map(o => (
            <button key={o} onClick={()=>setGovChoice(o)} style={{ padding:"11px 14px", borderRadius:6, fontSize:12, cursor:"pointer", textAlign:"left", border:`1.5px solid ${govChoice===o?sc.color:C.border}`, background:govChoice===o?sc.color+"12":C.bg3, color:govChoice===o?C.navy:C.muted, fontWeight:govChoice===o?600:400, fontFamily:"inherit" }}>{o}</button>
          ))}
        </div>
      </Card>
      <Card style={{ marginBottom:18 }}>
        <div style={{ fontSize:12, fontWeight:600, color:C.navy, marginBottom:7 }}>Please briefly explain your choice (optional)</div>
        <textarea value={openText} onChange={e=>setOpenText(e.target.value)} rows={3}
          style={{ width:"100%", background:C.bg3, border:`1px solid ${C.border}`, borderRadius:5, padding:"9px 11px", color:C.navy, fontSize:12, resize:"vertical", fontFamily:"inherit", outline:"none" }} />
      </Card>
      {err && <div style={{ color:C.coral, fontSize:11, marginBottom:10 }}>{err}</div>}
      <Btn onClick={submit} color={C.teal} style={{ opacity:govChoice&&!saving?1:.35, pointerEvents:govChoice&&!saving?"auto":"none" }}>{saving?"Saving…":"Submit response"}</Btn>
    </div>
  );
};

const ResultsSurvey = ({ onNav }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchData = useCallback(async () => {
    const d = await loadAllResponses("survey");
    setData(d);
    setLoading(false);
    setLastUpdated(new Date());
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [fetchData]);

  if(loading) return <div style={{ padding:40, textAlign:"center", color:C.muted, fontSize:13 }}>Loading results…</div>;
  if(!data.length) return (
    <div style={{ maxWidth:560, margin:"0 auto", padding:"40px 24px" , textAlign:"center"}} className="page-pad">
      <BackBtn onNav={onNav} />
      <div style={{ fontSize:13, color:C.muted }}>No survey responses yet.</div>
      <div style={{ marginTop:16 }}><Btn onClick={()=>onNav("survey")} color={C.purple}>Be the first to take the survey</Btn></div>
    </div>
  );
  const n = data.length;
  const blockAvg = (block) => {
    const qs = SURVEY_QS.filter(q=>q.block===block);
    const vals = data.flatMap(d=>qs.map(q=>d.likert?.[q.id]).filter(Boolean));
    return vals.length ? parseFloat((vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(2)) : 0;
  };
  const blockData = [{label:"H1: Centralisation risk",value:blockAvg("H1")},{label:"H2: Capture without governance",value:blockAvg("H2")},{label:"H3: Intermediary solution",value:blockAvg("H3")}];
  const choiceData = CHOICE_OPTS.map(o=>({label:o.length>22?o.slice(0,22)+"…":o,value:data.reduce((acc,d)=>acc+Object.values(d.choices||{}).filter(v=>v===o).length,0)}));
  const roleData = ["Logistics operator","Freight forwarder","Platform / technology provider","Policy or regulatory body","Researcher or consultant","Other"].map(r=>({label:r.length>22?r.slice(0,22)+"…":r,value:data.filter(d=>d.bg?.role===r).length})).filter(r=>r.value>0);
  const Stat = ({val,label,color}) => (
    <div style={{ flex:1, background:C.bg2, border:`1px solid ${C.border}`, borderRadius:7, padding:"14px 16px", textAlign:"center" }}>
      <div style={{ fontSize:26, fontWeight:800, color, fontFamily:"Georgia,serif" }}>{val}</div>
      <div style={{ fontSize:9, color:C.dim, marginTop:3, textTransform:"uppercase", letterSpacing:".1em" }}>{label}</div>
    </div>
  );
  return (
    <div style={{ maxWidth:680, margin:"0 auto", padding:"40px 24px"}} className="page-pad">
      <BackBtn onNav={onNav} />
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:4 }}>
        <PageHeader label="Survey results" title="Aggregated responses" />
      </div>
      {lastUpdated && <div style={{ fontSize:10, color:C.dim, marginBottom:18 }}>Live · updates every 30 seconds · last updated {lastUpdated.toLocaleTimeString()}</div>}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:20}} className="grid-2-stat">
        <Stat val={n} label="Responses" color={C.purple} />
        <Stat val={blockAvg("H1")} label="Avg H1 score" color={C.coral} />
        <Stat val={blockAvg("H2")} label="Avg H2 score" color={C.amber} />
        <Stat val={blockAvg("H3")} label="Avg H3 score" color={C.teal} />
      </div>
      <Card style={{ marginBottom:14 }}>
        <Tag color={C.purple}>Average Likert score by hypothesis block (1-5 scale)</Tag>
        <div style={{ marginTop:14 }}><BarChart data={blockData} color={C.purple} /></div>
        <div style={{ fontSize:11, color:C.dim, marginTop:8 }}>Scores above 3.5 indicate practitioners agree. Above 4.0 indicates strong agreement.</div>
      </Card>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }} className="grid-2">
        <Card>
          <Tag color={C.blue}>Participation choices across scenarios</Tag>
          <div style={{ marginTop:14 }}><BarChart data={choiceData} color={C.blue} /></div>
        </Card>
        <Card>
          <Tag color={C.amber}>Respondents by role</Tag>
          <div style={{ marginTop:14 }}><BarChart data={roleData} color={C.amber} /></div>
        </Card>
      </div>
    </div>
  );
};

const ResultsExp = ({ onNav }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchData = useCallback(async () => {
    const d = await loadAllResponses("experiment");
    setData(d);
    setLoading(false);
    setLastUpdated(new Date());
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [fetchData]);

  if(loading) return <div style={{ padding:40, textAlign:"center", color:C.muted, fontSize:13 }}>Loading results…</div>;
  if(!data.length) return (
    <div style={{ maxWidth:560, margin:"0 auto", padding:"40px 24px" , textAlign:"center"}} className="page-pad">
      <BackBtn onNav={onNav} />
      <div style={{ fontSize:13, color:C.muted }}>No experiment responses yet.</div>
      <div style={{ marginTop:16 }}><Btn onClick={()=>onNav("experiment")} color={C.pink}>Join the experiment</Btn></div>
    </div>
  );
  const gA = data.filter(d=>d.group==="A");
  const gB = data.filter(d=>d.group==="B");
  const govData = (group) => GOV_OPTS.map(o=>({label:o.length>28?o.slice(0,28)+"…":o,value:group.filter(d=>d.govChoice===o).length}));
  return (
    <div style={{ maxWidth:680, margin:"0 auto", padding:"40px 24px"}} className="page-pad">
      <BackBtn onNav={onNav} />
      <PageHeader label="Experiment results" title="Governance preferences by lifecycle stage" />
      {lastUpdated && <div style={{ fontSize:10, color:C.dim, marginBottom:18 }}>Live · updates every 30 seconds · last updated {lastUpdated.toLocaleTimeString()}</div>}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:20}} className="grid-2-stat">
        {[{val:data.length,label:"Total responses",color:C.pink},{val:gA.length,label:"Group A (12%)",color:C.purple},{val:gB.length,label:"Group B (68%)",color:C.pink}].map(m=>(
          <div key={m.label} style={{ flex:1, background:C.bg2, border:`1px solid ${C.border}`, borderRadius:7, padding:"14px 16px", textAlign:"center" }}>
            <div style={{ fontSize:26, fontWeight:800, color:m.color, fontFamily:"Georgia,serif" }}>{m.val}</div>
            <div style={{ fontSize:9, color:C.dim, marginTop:3, textTransform:"uppercase", letterSpacing:".1em" }}>{m.label}</div>
          </div>
        ))}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }} className="grid-2">
        <Card>
          <Tag color={C.purple}>Group A: PI at 12% (n={gA.length})</Tag>
          <div style={{ marginTop:14 }}><BarChart data={govData(gA)} color={C.purple} /></div>
        </Card>
        <Card>
          <Tag color={C.pink}>Group B: PI at 68% (n={gB.length})</Tag>
          <div style={{ marginTop:14 }}><BarChart data={govData(gB)} color={C.pink} /></div>
        </Card>
      </div>
      <Card style={{ background:C.bg3 }}>
        <Tag color={C.navy}>What to look for</Tag>
        <div style={{ marginTop:10, fontSize:12, color:C.muted, lineHeight:1.6 }}>If Group B significantly more often selects "EU data intermediary" or "Public utility" compared to Group A, this confirms the lifecycle argument in H2. A chi-square test will be applied once n reaches 25 per group.</div>
      </Card>
    </div>
  );
};

// Simple hash for password check. Password is "PIresearch2026"
const ADMIN_HASH = "e4ec585fe8b3b3aa9107ea9858aa10502bd8be4367a1bf42d90a94e3af51e1d9";
const hashStr = async (s) => {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,"0")).join("");
};

const Admin = ({ onNav }) => {
  const [auth, setAuth] = useState(() => sessionStorage.getItem("pi_admin") === "1");
  const [pw, setPw] = useState("");
  const [pwErr, setPwErr] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [filter, setFilter] = useState("all");
  const [tab, setTab] = useState("charts");

  const fetchData = useCallback(async (silent = false) => {
    if (!silent) setRefreshing(true);
    const d = await loadAll();
    setData(d);
    setLoading(false);
    setRefreshing(false);
    setLastUpdated(new Date());
  }, []);

  useEffect(() => {
    if (!auth) return;
    fetchData();
    const interval = setInterval(() => fetchData(true), 30000);
    return () => clearInterval(interval);
  }, [auth, fetchData]);

  const tryLogin = async () => {
    const h = await hashStr(pw);
    if (h === ADMIN_HASH) { sessionStorage.setItem("pi_admin","1"); setAuth(true); setPwErr(false); }
    else { setPwErr(true); setPw(""); }
  };

  if (!auth) return (
    <div style={{ maxWidth:420, margin:"80px auto", padding:"0 24px" }}>
      <BackBtn onNav={onNav} />
      <Card style={{ padding:"32px 28px" }}>
        <div style={{ textAlign:"center", marginBottom:24 }}>
          <div style={{ width:48, height:48, borderRadius:"50%", background:C.navy+"18", border:`2px solid ${C.navy}33`, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 14px", fontSize:20 }}>🔒</div>
          <div style={{ fontSize:16, fontWeight:700, color:C.navy, marginBottom:6 }}>Admin area</div>
          <div style={{ fontSize:12, color:C.muted }}>Enter the research password to access data and charts.</div>
        </div>
        <input
          type="password" value={pw} placeholder="Password"
          onChange={e => { setPw(e.target.value); setPwErr(false); }}
          onKeyDown={e => e.key === "Enter" && tryLogin()}
          style={{ width:"100%", padding:"10px 12px", borderRadius:5, border:`1.5px solid ${pwErr ? C.coral : C.border}`, fontSize:13, fontFamily:"inherit", outline:"none", marginBottom:8, background:C.bg3 }}
        />
        {pwErr && <div style={{ fontSize:11, color:C.coral, marginBottom:8 }}>Incorrect password. Please try again.</div>}
        <Btn onClick={tryLogin} color={C.navy} style={{ width:"100%", textAlign:"center" }}>Enter</Btn>
      </Card>
    </div>
  );

  const surveys = data.filter(d => d.type === "survey");
  const exps = data.filter(d => d.type === "experiment");
  const gA = exps.filter(d => d.group === "A");
  const gB = exps.filter(d => d.group === "B");
  const filtered = filter === "all" ? data : data.filter(d => d.type === filter);

  const blockAvg = (block) => {
    const qs = SURVEY_QS.filter(q => q.block === block);
    const vals = surveys.flatMap(d => qs.map(q => d.likert?.[q.id]).filter(Boolean));
    return vals.length ? parseFloat((vals.reduce((a,b) => a+b, 0) / vals.length).toFixed(2)) : 0;
  };
  const blockData = [
    {label:"H1: Centralisation risk", value: blockAvg("H1")},
    {label:"H2: Capture without governance", value: blockAvg("H2")},
    {label:"H3: Intermediary solution", value: blockAvg("H3")},
  ];
  const choiceData = CHOICE_OPTS.map(o => ({
    label: o.length > 22 ? o.slice(0,22)+"…" : o,
    value: surveys.reduce((acc,d) => acc + Object.values(d.choices||{}).filter(v=>v===o).length, 0)
  }));
  const roleData = ["Logistics operator","Freight forwarder","Platform / technology provider","Policy or regulatory body","Researcher or consultant","Other"]
    .map(r => ({label: r.length > 22 ? r.slice(0,22)+"…" : r, value: surveys.filter(d=>d.bg?.role===r).length}))
    .filter(r => r.value > 0);
  const govData = (group) => GOV_OPTS.map(o => ({
    label: o.length > 28 ? o.slice(0,28)+"…" : o,
    value: group.filter(d => d.govChoice === o).length
  }));

  const Stat = ({val, label, color}) => (
    <div style={{ flex:1, background:C.bg2, border:`1px solid ${C.border}`, borderRadius:7, padding:"14px 16px", textAlign:"center" }}>
      <div style={{ fontSize:26, fontWeight:800, color, fontFamily:"Georgia,serif" }}>{val}</div>
      <div style={{ fontSize:9, color:C.dim, marginTop:3, textTransform:"uppercase", letterSpacing:".1em" }}>{label}</div>
    </div>
  );

  const exportCSV = () => {
    let csv = "TYPE,TIMESTAMP,GROUP,ROLE,ORG_SIZE,YEARS,FAMILIARITY,USES_PLATFORM";
    SURVEY_QS.forEach(q=>{csv+=`,${q.id.toUpperCase()}`;});
    CHOICE_SCENARIOS.forEach((_,i)=>{csv+=`,CHOICE_${i+1}`;});
    csv+=",GOV_CHOICE,OPEN_TEXT\n";
    surveys.forEach(d=>{
      const row=["survey",new Date(d.ts).toISOString(),"",d.bg?.role||"",d.bg?.size||"",d.bg?.years||"",d.bg?.familiarity||"",d.bg?.platform||""];
      SURVEY_QS.forEach(q=>row.push(d.likert?.[q.id]||""));
      CHOICE_SCENARIOS.forEach((_,i)=>row.push(`"${(d.choices?.[i]||"").replace(/"/g,"'")}"`));
      row.push("","");
      csv+=row.join(",")+"\n";
    });
    exps.forEach(d=>{
      const row=["experiment",new Date(d.ts).toISOString(),d.group||"","","","","",""];
      SURVEY_QS.forEach(()=>row.push(""));
      CHOICE_SCENARIOS.forEach(()=>row.push(""));
      row.push(`"${(d.govChoice||"").replace(/"/g,"'")}"`,`"${(d.openText||"").replace(/"/g,"'")}"`);
      csv+=row.join(",")+"\n";
    });
    const a=document.createElement("a");
    a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));
    a.download=`PI_research_data_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
  };

  return (
    <div style={{ maxWidth:720, margin:"0 auto", padding:"40px 24px"}} className="page-pad">
      <BackBtn onNav={onNav} />
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:12, marginBottom:20 }}>
        <div>
          <PageHeader label="Admin panel" title="Research data overview" />
          {lastUpdated && (
            <div style={{ fontSize:10, color:C.dim, marginTop:-16 }}>
              Last updated: {lastUpdated.toLocaleTimeString()} · Auto-refreshes every 30 seconds
            </div>
          )}
        </div>
        <div style={{ display:"flex", gap:8, alignItems:"center", flexWrap:"wrap" }}>
          <button onClick={() => fetchData()} disabled={refreshing}
            style={{ background:"none", border:`1px solid ${C.border}`, borderRadius:5, padding:"8px 14px", fontSize:11, cursor:refreshing?"default":"pointer", color:refreshing?C.dim:C.blue, fontFamily:"inherit", display:"flex", alignItems:"center", gap:5 }}>
            <span style={{ display:"inline-block", animation: refreshing ? "spin 1s linear infinite" : "none", fontSize:12 }}>↻</span>
            {refreshing ? "Refreshing…" : "Refresh now"}
          </button>
          <Btn onClick={exportCSV} color={C.teal}>Export CSV</Btn>
          <button onClick={() => { sessionStorage.removeItem("pi_admin"); setAuth(false); }}
            style={{ background:"none", border:`1px solid ${C.border}`, borderRadius:5, padding:"8px 14px", fontSize:11, cursor:"pointer", color:C.dim, fontFamily:"inherit" }}>
            Log out
          </button>
        </div>
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:20}} className="grid-2-stat">
        <Stat val={surveys.length} label="Survey responses" color={C.purple} />
        <Stat val={exps.length} label="Experiment responses" color={C.pink} />
        <Stat val={gA.length} label="Group A" color={C.blue} />
        <Stat val={gB.length} label="Group B" color={C.teal} />
      </div>

      <div style={{ display:"flex", gap:8, marginBottom:20, borderBottom:`1px solid ${C.border}`, paddingBottom:0 }}>
        {[["charts","Charts and trends"],["responses","Raw responses"]].map(([t,l]) => (
          <button key={t} onClick={() => setTab(t)} style={{
            background:"none", border:"none", borderBottom:`2px solid ${tab===t?C.blue:"transparent"}`,
            padding:"8px 16px 10px", fontSize:12, cursor:"pointer", fontFamily:"inherit",
            color:tab===t?C.blue:C.dim, fontWeight:tab===t?700:400
          }}>{l}</button>
        ))}
      </div>

      {tab === "charts" && (
        <div>
          {surveys.length === 0 && exps.length === 0 ? (
            <div style={{ fontSize:13, color:C.dim, padding:"20px 0" }}>No responses yet. Charts will appear here as participants complete the survey or experiment.</div>
          ) : (
            <>
              {surveys.length > 0 && (
                <>
                  <div style={{ fontSize:11, fontWeight:700, color:C.navy, textTransform:"uppercase", letterSpacing:".12em", marginBottom:12 }}>Survey results (n={surveys.length})</div>
                  <Card style={{ marginBottom:12 }}>
                    <Tag color={C.purple}>Average Likert score by hypothesis block (1-5 scale)</Tag>
                    <div style={{ marginTop:14 }}><BarChart data={blockData} color={C.purple} /></div>
                    <div style={{ fontSize:11, color:C.dim, marginTop:8 }}>Scores above 3.5 indicate practitioners agree. Above 4.0 indicates strong agreement.</div>
                  </Card>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:12 }} className="grid-2">
                    <Card>
                      <Tag color={C.blue}>Participation choices across all scenarios</Tag>
                      <div style={{ marginTop:14 }}><BarChart data={choiceData} color={C.blue} /></div>
                    </Card>
                    <Card>
                      <Tag color={C.amber}>Respondents by role</Tag>
                      <div style={{ marginTop:14 }}><BarChart data={roleData} color={C.amber} /></div>
                    </Card>
                  </div>
                  <Card style={{ marginBottom:20 }}>
                    <Tag color={C.teal}>Per-question Likert averages</Tag>
                    <div style={{ marginTop:14 }}>
                      <BarChart color={C.teal} data={SURVEY_QS.map(q => {
                        const vals = surveys.map(d => d.likert?.[q.id]).filter(Boolean);
                        return { label: q.q.slice(0,42)+"…", value: vals.length ? parseFloat((vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(2)) : 0 };
                      })} />
                    </div>
                  </Card>
                </>
              )}
              {exps.length > 0 && (
                <>
                  <div style={{ fontSize:11, fontWeight:700, color:C.navy, textTransform:"uppercase", letterSpacing:".12em", marginBottom:12 }}>Lifecycle experiment results (n={exps.length})</div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:12 }} className="grid-2">
                    <Card>
                      <Tag color={C.purple}>Group A: PI at 12% adoption (n={gA.length})</Tag>
                      <div style={{ marginTop:14 }}><BarChart data={govData(gA)} color={C.purple} /></div>
                    </Card>
                    <Card>
                      <Tag color={C.pink}>Group B: PI at 68% adoption (n={gB.length})</Tag>
                      <div style={{ marginTop:14 }}><BarChart data={govData(gB)} color={C.pink} /></div>
                    </Card>
                  </div>
                  <Card style={{ background:C.bg3, marginBottom:20 }}>
                    <Tag color={C.navy}>Interpretation guide</Tag>
                    <div style={{ marginTop:10, fontSize:12, color:C.muted, lineHeight:1.6 }}>
                      If Group B significantly more often selects "EU data intermediary" or "Public utility" compared to Group A, this confirms H2: practitioners recognise the critical mass moment and respond with stronger governance preferences. Chi-square test applies once n reaches 25 per group.
                    </div>
                  </Card>
                </>
              )}
            </>
          )}
        </div>
      )}

      {tab === "responses" && (
        <div>
          <div style={{ display:"flex", gap:8, marginBottom:14 }}>
            {[["all",`All (${data.length})`],["survey",`Survey (${surveys.length})`],["experiment",`Experiment (${exps.length})`]].map(([f,label])=>(
              <button key={f} onClick={()=>setFilter(f)} style={{ padding:"6px 14px", borderRadius:5, fontSize:11, cursor:"pointer", fontFamily:"inherit", border:`1px solid ${filter===f?C.blue:C.border}`, background:filter===f?C.blue+"15":C.bg2, color:filter===f?C.blue:C.muted, fontWeight:filter===f?700:400 }}>{label}</button>
            ))}
          </div>
          {loading ? <div style={{ color:C.muted, fontSize:12 }}>Loading…</div>
          : filtered.length === 0 ? <div style={{ fontSize:12, color:C.dim }}>No responses yet.</div>
          : filtered.map((d,i) => (
            <div key={i} style={{ background:C.bg2, border:`1px solid ${C.border}`, borderRadius:7, padding:"12px 16px", marginBottom:8 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:5 }}>
                <Pill color={d.type==="survey"?C.purple:C.pink}>{d.type==="survey"?"Survey":`Experiment: Group ${d.group}`}</Pill>
                <span style={{ fontSize:11, color:C.dim }}>{new Date(d.ts).toLocaleString()}</span>
              </div>
              <div style={{ fontSize:11, color:C.muted }}>
                {d.type==="survey"
                  ? `Role: ${d.bg?.role||"-"} · Size: ${d.bg?.size||"-"} · Experience: ${d.bg?.years||"-"}`
                  : `Choice: ${d.govChoice}`}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const pages = {home:Landing,mindmap:Mindmap,plan:Plan,participate:Participate,survey:Survey,experiment:Experiment,results_survey:ResultsSurvey,results_exp:ResultsExp,admin:Admin};
  const Page = pages[page]||Landing;
  const nav = (p) => { setPage(p); setMenuOpen(false); window.scrollTo(0,0); };
  const navLinks = [["home","Home"],["mindmap","Mind map"],["plan","Methods"],["participate","Participate"]];
  const isMindmap = page === "mindmap";
  return (
    <div style={{ background:C.bg, minHeight:"100vh", color:C.text, fontFamily:"'Segoe UI',system-ui,sans-serif" }}>
      <style>{`
        @media (max-width: 600px) {
          .grid-2 { grid-template-columns: 1fr !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-4 { grid-template-columns: 1fr 1fr !important; }
          .grid-2-stat { grid-template-columns: 1fr 1fr !important; }
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .page-pad { padding: 20px 16px 40px !important; }
          .nav-links-desktop { display: none !important; }
          .score-row-mobile { flex-direction: column !important; }
          .case-row-mobile { flex-wrap: wrap !important; }
        }
        @media (min-width: 601px) {
          .show-mobile { display: none !important; }
        }
        * { box-sizing: border-box; }
        input, textarea, button, select { font-family: inherit; }
      `}</style>

      {/* Top nav: hidden on mindmap page since mindmap has its own fixed header */}
      {!isMindmap && (
        <div style={{ background:C.bg2, borderBottom:`1px solid ${C.border}`, padding:"0 20px", position:"sticky", top:0, zIndex:10 }}>
          <div style={{ maxWidth:720, margin:"0 auto", height:48, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <button onClick={() => nav("home")} style={{ background:"none", border:"none", cursor:"pointer", fontFamily:"Georgia,serif", fontSize:13, fontWeight:700, color:C.navy, padding:0 }}>
              PI Governance Research
            </button>
            <div className="nav-links-desktop" style={{ display:"flex", gap:20 }}>
              {navLinks.map(([p,l]) => (
                <button key={p} onClick={() => nav(p)} style={{ background:"none", border:"none", cursor:"pointer", fontFamily:"inherit", fontSize:12, color:page===p?C.blue:C.dim, fontWeight:page===p?700:400, borderBottom:`2px solid ${page===p?C.blue:"transparent"}`, padding:"0 0 2px" }}>{l}</button>
              ))}
            </div>
            <button className="show-mobile" onClick={() => setMenuOpen(o => !o)} style={{ background:"none", border:"none", cursor:"pointer", color:C.navy, fontSize:20, padding:"4px 0", alignItems:"center" }}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
          {menuOpen && (
            <div className="show-mobile" style={{ flexDirection:"column", borderTop:`1px solid ${C.border}`, background:C.bg2, paddingBottom:8 }}>
              {navLinks.map(([p,l]) => (
                <button key={p} onClick={() => nav(p)} style={{ background:"none", border:"none", cursor:"pointer", fontFamily:"inherit", fontSize:13, color:page===p?C.blue:C.navy, fontWeight:page===p?700:400, padding:"10px 20px", textAlign:"left", borderLeft:page===p?`3px solid ${C.blue}`:"3px solid transparent" }}>{l}</button>
              ))}
            </div>
          )}
        </div>
      )}

      <Page onNav={nav} />
    </div>
  );
}
