import { Translations, MenuItem, Review, Language, TeaVariant, DishDetail } from './types';

// =============================================================================
// CONTACT DETAILS AND EXTERNAL LINKS — the single place to update them
// =============================================================================

export const CONTACT = {
  street: 'Itäkatu 1-7',
  city: '00930 Helsinki',
  phone: '+358468897305',
  phoneDisplay: '+358 46 8897305',
  email: 'info@qazan.fi',
} as const;

export const LINKS = {
  // Tebi online reservations (the widget script is in index.html).
  reservation: 'https://live.tebi.co/ecom/reservations/203485_57ed2377db73389fedfc2cfed06e6e4403dfbb5ea4852d9c13d5b13773b1d8b1',
  wolt: 'https://wolt.com/en/fin/helsinki/restaurant/qazan-hki',
  instagram: 'https://www.instagram.com/qazan.ravintola/',
  tiktok: 'https://www.tiktok.com/@qazan.ravintola',
} as const;

// Opening hours shown in the footer. Keep index.html (JSON-LD and the noscript
// block) in sync when these change.
export const OPENING_HOURS: { days: 'days_weekdays' | 'days_weekend'; hours: string }[] = [
  { days: 'days_weekdays', hours: '11:00 – 20:00' },
  { days: 'days_weekend', hours: '12:00 – 20:00' },
];

export const TRANSLATIONS: Record<'en' | 'fi', Translations> = {
  en: {
    nav: { home: "Home", history: "Story", menu: "Menu", chef: "Chef", book: "Reserve", mains: "Mains", dumplings: "Dumplings & Pastries", soups: "Soups", drinks: "Drinks" },
    hero: {
      subtitle: "Est. Helsinki",
      title_main: "Taste of",
      title_sub: "Heritage",
      desc: "Central Asian home cooking, made from scratch daily in Helsinki."
    },
    about: {
      tag: "The Concept",
      title_main: "Where East",
      title_sub: "Meets",
      title_end: "North",
      p1: "QAZAN brings the flavors we grew up with to Helsinki — hand-pulled noodles, slow-cooked stews, and pastries baked to order. Every recipe comes from family, not a textbook.",
      p2: "We cook the way our grandmothers did, but plate it with care.",
      read_more: "Read Our Full Story"
    },
    menu: {
      tag: "Gastronomy",
      title: "Favorites",
      full_menu: "View Full Menu"
    },
    chef: {
      tag: "Team's Philosophy",
      quote: "\"Good food doesn't need to be complicated — it needs to be honest.\"",
      desc: "The recipes are from home. The standards are sky-high. At Qazan, we keep it simple: real ingredients, big flavors, and a meal worth coming back for.",
      name: "Team Qazan"
    },
    reviews: {
      subtitle: "What our guests say",
      title: "Guest Experiences"
    },
    reservation: {
      title: "Reservations",
      subtitle: "Join us for dinner",
      btn_submit: "Find a Table"
    },
    footer: {
      desc: "Central Asian home cooking in Helsinki since 2024.",
      contact: "Contact",
      hours_title: "Opening Hours",
      social: "Follow & Order",
      days_weekdays: "Mon-Fri",
      days_weekend: "Sat-Sun"
    },
    menu_page: {
      title: "Our Menu",
      subtitle: "Made from scratch, served with soul",
      view_details: "View Details",
      no_items: "No items found in this category.",
      all_category: "All"
    },
    modal: {
      tea_collection: "Tea Collection",
      soda_collection: "Soda Selection",
      of: "of",
      whats_in_it: "What's in it",
      how_it_tastes: "How it tastes",
      good_to_know: "Good to know"
    },
    story_page: {
      hero_title: "The Silk Road",
      hero_subtitle: "Leads to the North",
      section1_tag: "1925 — Present",
      section1_title: "Where It Started",
      section1_text: "Our family has been cooking these dishes for as long as anyone can remember. Plov for celebrations, lagman on cold evenings, manty when the whole family gathers. These aren't restaurant recipes — they're the meals we grew up eating. When we moved to Finland, the one thing we brought with us was how to cook. QAZAN is our way of sharing that with Helsinki.",
      section2_tag: "Helsinki",
      section2_title: "Helsinki Chapter",
      section2_text: "Helsinki taught us to appreciate what's fresh and local. We started sourcing Finnish meat and seasonal vegetables, and found they work beautifully with Central Asian spices and techniques. The result is food that feels both familiar and new — bold flavors from the East, clean ingredients from the North. No fusion gimmicks, just good cooking with the best of both worlds.",
      values_title: "What We Stand For",
      value1_title: "Heritage",
      value1_desc: "Every dish on our menu has a story. We cook the recipes our families passed down — no shortcuts, no substitutions on the things that matter.",
      value2_title: "Hospitality",
      value2_desc: "Where we come from, feeding someone well is how you show respect. We want every guest to leave full and happy.",
      value3_title: "Quality",
      value3_desc: "Finnish meat, seasonal vegetables, hand-pulled noodles made fresh daily. We don't cut corners on ingredients."
    },
    chatbot: {
      greeting: "Hey! Welcome to Qazan. What can I help you with?",
      btn_book: "Book a Table",
      btn_order: "Order Delivery",
      btn_faq: "Common Questions",
      btn_contact: "Contact Info",
      back: "Back to Menu",
      order_title: "Choose your preferred delivery partner:",
      faq_title: "Frequently Asked Questions",
      q1: "Do you have vegan options?",
      a1: "Yes! Our Kasvis Lagman is fully vegetarian — hand-pulled noodles with seasonal vegetables.",
      q2: "Is the meat Halal?",
      a2: "Yes, all our meat is 100% Halal certified.",
      q3: "Do I need a reservation?",
      a3: "Walk-ins are welcome, but we'd suggest booking ahead for Friday and Saturday evenings — it gets busy.",
      concierge: "QAZAN Concierge",
      guest_service: "Qazan Guest Service"
    },
    not_found: {
      title: "Page not found",
      text: "The page you are looking for does not exist or has moved.",
      back: "Back to Home"
    }
  },
  fi: {
    nav: { home: "Etusivu", history: "Tarina", menu: "Menu", chef: "Kokki", book: "Varaa", mains: "Pääruoat", dumplings: "Nyytit & Piirakat", soups: "Keitot", drinks: "Juomat" },
    hero: {
      subtitle: "Est. Helsinki",
      title_main: "Maun",
      title_sub: "Perintö",
      desc: "Keski-aasialaista kotiruokaa, joka valmistetaan alusta asti päivittäin Helsingissä."
    },
    about: {
      tag: "Konsepti",
      title_main: "Missä Itä",
      title_sub: "Kohtaa",
      title_end: "Pohjoisen",
      p1: "QAZAN tuo Helsinkiin maut, joiden parissa kasvoiimme — käsin vedetyt nuudelit, pitkään haudutetut padat ja tuoreeltaan leivotut piirakat. Jokainen resepti tulee perheeltä, ei oppikirjasta.",
      p2: "Kokkaamme kuten isoäitimme, mutta asettelemme annokset huolella.",
      read_more: "Lue Koko Tarina"
    },
    menu: {
      tag: "Gastronomia",
      title: "Suosikit",
      full_menu: "Koko Menu"
    },
    chef: {
      tag: "Tiimin Filosofia",
      quote: "\"Hyvän ruoan ei tarvitse olla monimutkaista — sen pitää olla rehellistä.\"",
      desc: "Reseptit tulevat kotoa. Vaatimukset ovat korkealla. Qazanissa pidämme sen yksinkertaisena: aidot raaka-aineet, isot maut ja ateria, jonka vuoksi kannattaa palata.",
      name: "Tiimi Qazan"
    },
    reviews: {
      subtitle: "Asiakkaidemme kokemuksia",
      title: "Vieraiden Kokemuksia"
    },
    reservation: {
      title: "Varaukset",
      subtitle: "Tule illalliselle",
      btn_submit: "Etsi Pöytä"
    },
    footer: {
      desc: "Keski-aasialaista kotiruokaa Helsingissä vuodesta 2024.",
      contact: "Yhteystiedot",
      hours_title: "Aukioloajat",
      social: "Seuraa & Tilaa",
      days_weekdays: "Ma-Pe",
      days_weekend: "La-Su"
    },
    menu_page: {
      title: "Ruokalista",
      subtitle: "Alusta asti tehtyä, sydämellä tarjoiltua",
      view_details: "Näytä Tiedot",
      no_items: "Tästä kategoriasta ei löytynyt tuotteita.",
      all_category: "Kaikki"
    },
    modal: {
      tea_collection: "Teekokoelma",
      soda_collection: "Virvoitusjuomat",
      of: "/",
      whats_in_it: "Mitä sisältää",
      how_it_tastes: "Miltä maistuu",
      good_to_know: "Hyvä tietää"
    },
    story_page: {
      hero_title: "Silkkitie",
      hero_subtitle: "Johtaa Pohjoiseen",
      section1_tag: "1925 — Nykypäivä",
      section1_title: "Mistä Kaikki Alkoi",
      section1_text: "Perheemme on valmistanut näitä ruokia niin kauan kuin kukaan muistaa. Plovia juhliin, lagmania kylminä iltoina, mantya kun koko perhe kokoontuu. Nämä eivät ole ravintolaohjeita — ne ovat aterioita, joita syöden kasvoiimme. Kun muutimme Suomeen, ainoa asia jonka otimme mukaan oli taito kokata. QAZAN on tapamme jakaa se Helsingin kanssa.",
      section2_tag: "Helsinki",
      section2_title: "Helsingin Luku",
      section2_text: "Helsinki opetti meitä arvostamaan tuoretta ja paikallista. Aloimme hankkia suomalaista lihaa ja kauden vihanneksia, ja huomasimme niiden sopivan kauniisti yhteen keski-aasialaisten mausteiden ja tekniikoiden kanssa. Lopputulos on ruokaa, joka tuntuu sekä tutulta että uudelta — rohkeita makuja idästä, puhtaita raaka-aineita pohjoisesta. Ei fuusiokikkoja, vaan hyvää kokkaamista molempien maailmojen parhaista.",
      values_title: "Arvomme",
      value1_title: "Perintö",
      value1_desc: "Jokaisella annoksella menussamme on tarina. Kokkaamme perheemme periyttämät reseptit — ei oikoteitä, ei kompromisseja tärkeissä asioissa.",
      value2_title: "Vieraanvaraisuus",
      value2_desc: "Siellä mistä tulemme, hyvin syöttäminen on tapa osoittaa kunnioitusta. Haluamme jokaisen vieraan lähtevän kylläisenä ja tyytyväisenä.",
      value3_title: "Laatu",
      value3_desc: "Suomalaista lihaa, kauden vihanneksia, käsin vedettyjä nuudeleita joka päivä tuoreeltaan. Emme tingi raaka-aineista."
    },
    chatbot: {
      greeting: "Hei! Tervetuloa Qazaniin. Miten voin auttaa?",
      btn_book: "Varaa Pöytä",
      btn_order: "Tilaa Kotiin",
      btn_faq: "Usein Kysyttyä",
      btn_contact: "Yhteystiedot",
      back: "Takaisin",
      order_title: "Valitse toimituskumppani:",
      faq_title: "Usein Kysytyt Kysymykset",
      q1: "Onko teillä vegaanisia vaihtoehtoja?",
      a1: "Kyllä! Kasvis Lagman on täysin kasvis — käsin vedettyjä nuudeleita kauden vihanneksilla.",
      q2: "Onko liha Halal?",
      a2: "Kyllä, kaikki käyttämämme liha on 100% Halal-sertifioitua.",
      q3: "Tarvitsenko pöytävarauksen?",
      a3: "Olet aina tervetullut ilman varausta, mutta suosittelemme varaamista perjantai- ja lauantai-illoille — silloin on vilkasta.",
      concierge: "QAZAN Concierge",
      guest_service: "Qazan-asiakaspalvelu"
    },
    not_found: {
      title: "Sivua ei löytynyt",
      text: "Etsimääsi sivua ei ole olemassa tai se on siirretty.",
      back: "Takaisin Etusivulle"
    }
  }
};

// =============================================================================
// MENU ITEMS — Synced with qazan.fi (source of truth)
// =============================================================================

export const MENU_ITEMS: Record<Language, MenuItem[]> = {
  en: [
    // ── MAINS ──────────────────────────────────────────────
    { id: 'm1', title: 'Plov', description: 'Lamb, yellow carrots, chickpeas, and raisins — slow-cooked together the old-fashioned way.', price: '14,50€', category: 'mains', image: '/images/menu/plov.webp', dietary: ['G', 'M'] },
    { id: 'm2', title: 'Boso Lagman', description: 'Stir-fried hand-pulled noodles with beef and vegetables. Choose spicy or mild.', price: '14,90€', category: 'mains', image: '/images/menu/boso_lagman.webp', dietary: ['M'] },
    { id: 'm3', title: 'Guyru Lagman', description: 'Hand-pulled noodles in a hearty beef and vegetable broth. Our most popular dish.', price: '14,90€', category: 'mains', image: '/images/menu/guyru_lagman.webp', dietary: ['M'] },
    { id: 'm4', title: 'Kasvis Lagman', description: 'Hand-pulled noodles stir-fried with seasonal vegetables. Fully vegetarian.', price: '14,00€', category: 'mains', image: '/images/menu/kasvis_lagman.webp', dietary: ['VEG', 'M'] },
    { id: 'm5', title: 'Kazan Kebab', description: 'Chunks of meat cooked in a cast-iron kazan with golden potatoes, onions, and spices.', price: '15,50€', category: 'mains', image: '/images/menu/kazan_kebab.webp', dietary: ['G', 'M'] },
    // ── DUMPLINGS & PASTRIES ───────────────────────────────
    { id: 'd1', title: 'Manty', description: 'Big steamed dumplings stuffed with seasoned beef and onions. Served with sour cream.', price: '13,90€', category: 'dumplings', image: '/images/menu/manti.webp', dietary: ['M'] },
    { id: 'd2', title: 'Besh-Barmak', description: 'Flat noodles with kazy (horse meat), potatoes, carrots, and onion broth. A Kazakh classic.', price: '16,50€', category: 'dumplings', image: '/images/menu/besh.webp', dietary: ['M'] },
    { id: 'd3', title: 'Layered Samsy', description: 'Flaky, golden pastry with a savory meat and onion filling. Baked fresh.', price: '3,50€', category: 'dumplings', image: '/images/menu/samsy.webp', dietary: ['L'] },
    // ── SOUPS ──────────────────────────────────────────────
    { id: 's1', title: 'Shurpa', description: 'Clear broth loaded with tender beef, potatoes, carrots, and fresh herbs.', price: '12,90€', category: 'soups', image: '/images/menu/shurpa.webp', dietary: ['G', 'M'] },
    { id: 's2', title: 'Solyanka', description: 'Thick, tangy soup with mixed meats, pickles, olives, and a squeeze of lemon.', price: '14,50€', category: 'soups', image: '/images/menu/solyanka.webp', dietary: ['G', 'L'] },
    // ── DRINKS ─────────────────────────────────────────────
    { id: 'dr1', title: 'Tyrnitee', description: 'The selection of teas. Bright, warming, and a little tart.', price: '7,00€', category: 'drinks', image: '/images/menu/Oblipichka.webp', dietary: [] },
    { id: 'dr2', title: 'Soda', description: 'Soda, served cold.', price: '2,75€', category: 'drinks', image: '/images/menu/cola.webp', dietary: [] },
  ],
  fi: [
    // ── PÄÄRUOAT ───────────────────────────────────────────
    { id: 'm1', title: 'Plov', description: 'Lammas, keltaiset porkkanat, kikherneet ja rusinat — hitaasti haudutettu perinteiseen tapaan.', price: '14,50€', category: 'mains', image: '/images/menu/plov.webp', dietary: ['G', 'M'] },
    { id: 'm2', title: 'Boso Lagman', description: 'Wokatut käsin vedetyt nuudelit naudanlihalla ja vihanneksilla. Valitse tulinen tai mieto.', price: '14,90€', category: 'mains', image: '/images/menu/boso_lagman.webp', dietary: ['M'] },
    { id: 'm3', title: 'Guyru Lagman', description: 'Käsin vedetyt nuudelit täyteläisessä naudanliha-kasvisliemessä. Suosituin annoksemme.', price: '14,90€', category: 'mains', image: '/images/menu/guyru_lagman.webp', dietary: ['M'] },
    { id: 'm4', title: 'Kasvis Lagman', description: 'Käsin vedetyt nuudelit wokattuina kauden vihanneksilla. Täysin kasvis.', price: '14,00€', category: 'mains', image: '/images/menu/kasvis_lagman.webp', dietary: ['VEG', 'M'] },
    { id: 'm5', title: 'Kazan Kebab', description: 'Lihapaloja kypsennettynä valurautaisessa kazanissa kultaisilla perunoilla, sipulilla ja mausteilla.', price: '15,50€', category: 'mains', image: '/images/menu/kazan_kebab.webp', dietary: ['G', 'M'] },
    // ── NYYTIT & PIIRAKAT ──────────────────────────────────
    { id: 'd1', title: 'Manty', description: 'Isot höyrytetyt nyytit maustetulla naudanlihalla ja sipulilla. Tarjoillaan smetanan kanssa.', price: '13,90€', category: 'dumplings', image: '/images/menu/manti.webp', dietary: ['M'] },
    { id: 'd2', title: 'Besh-Barmak', description: 'Leveät nuudelit kazyn (hevosliha) kanssa, perunaa, porkkanaa ja sipuliliemi. Kazakstanilainen klassikko.', price: '16,50€', category: 'dumplings', image: '/images/menu/besh.webp', dietary: ['M'] },
    { id: 'd3', title: 'Kerros-Samsa', description: 'Rapea, kerroksinen piirakka suolaisella liha-sipulitäytteellä. Leivotaan tuoreeltaan.', price: '3,50€', category: 'dumplings', image: '/images/menu/samsy.webp', dietary: ['L'] },
    // ── KEITOT ─────────────────────────────────────────────
    { id: 's1', title: 'Shurpa', description: 'Kirkas liemi murealla naudanlihalla, perunoilla, porkkanoilla ja tuoreilla yrteillä.', price: '12,90€', category: 'soups', image: '/images/menu/shurpa.webp', dietary: ['G', 'M'] },
    { id: 's2', title: 'Solyanka', description: 'Paksu, hapan keitto sekalihalla, suolakurkuilla, oliiveilla ja sitruunapuristuksella.', price: '14,50€', category: 'soups', image: '/images/menu/solyanka.webp', dietary: ['G', 'L'] },
    // ── JUOMAT ─────────────────────────────────────────────
    { id: 'dr1', title: 'Tyrnitee', description: 'Teevalikoima. Kirkas, lämmittävä ja hieman hapan.', price: '7,00€', category: 'drinks', image: '/images/menu/Oblipichka.webp', dietary: [] },
    { id: 'dr2', title: 'Sooda', description: 'Sooda, kylmänä tarjoiltuna.', price: '2,75€', category: 'drinks', image: '/images/menu/cola.webp', dietary: [] },
  ],
};

// =============================================================================
// REVIEWS — Real reviews from Google Maps (4.9 ★ · 101 reviews)
// =============================================================================

export const REVIEWS: Review[] = [
  {
    id: 1,
    text: "I am in love with this place. The food is amazing and the people are really nice. They take the time to make sure we know what we're ordering. I will never shut up about how good Plov and Guyru Lagman are.",
    author: "H T",
    rating: 5
  },
  {
    id: 2,
    text: "I have been here first time. It was very well. Food were delicious. Atmosphere was warm and comfortable. Everything was very good!",
    author: "Viktoriia Chapurina",
    rating: 5
  },
  {
    id: 3,
    text: "Very friendly staff and welcoming. The food is amazing — super tasty and fresh. The place is well designed and the seating provides a very good atmosphere. Totally recommended.",
    author: "Khalid Dader",
    rating: 5
  }
];

// =============================================================================
// TEA VARIANTS — Translated per language
// =============================================================================

export const TEA_VARIANTS: Record<Language, TeaVariant[]> = {
  en: [
    {
      name: 'Sea Buckthorn Tea',
      price: '7,00€',
      image: '/images/menu/Oblipichka.webp',
      description: 'Hot sea buckthorn tea with honey and fresh orange. Bright, warming, and a little tart.',
      ingredients: 'Sea buckthorn berries, honey, fresh orange, hot water',
      taste: 'Bright and tart with a natural honey sweetness. Warming without being heavy.',
      note: 'Packed with vitamins C and E. A Finnish-meets-Central Asian classic.',
    },
    {
      name: 'Raspberry & Mango Tea',
      price: '6,50€',
      image: '/images/menu/MangoTea.webp',
      description: 'Vibrant berry tea with fresh raspberries, mango, and a sprig of rosemary. Sweet, fruity, and deep red.',
      ingredients: 'Fresh raspberries, mango pieces, rosemary, honey, hot water',
      taste: 'Sweet and fruity with a layered berry depth. Rosemary adds an unexpected herbal lift.',
      note: 'The most visually striking drink on our menu. Hard to resist ordering twice.',
    },
    {
      name: 'Berry Tea',
      price: '6,50€',
      image: '/images/menu/BerryTea.webp',
      description: 'A warming blend of Nordic forest berries with honey and a touch of cinnamon.',
      ingredients: 'Blueberries, lingonberries, cranberries, honey, cinnamon, hot water',
      taste: 'Deep and jammy with a natural berry sweetness. Warming spices settle in every sip.',
      note: 'Made with Nordic berries. Simple, honest, and deeply comforting.',
    },
    {
      name: 'Morocco Tea',
      price: '6,50€',
      image: '/images/menu/Mrocco.webp',
      description: 'Traditional Moroccan-style mint tea with fresh spearmint and green tea. Light and aromatic.',
      ingredients: 'Fresh spearmint, green tea, cane sugar, hot water',
      taste: 'Clean and refreshing with a natural mint sweetness. Soothing and gently aromatic.',
      note: 'Poured from a height the traditional way. Ask us to do it at the table.',
    },
  ],
  fi: [
    {
      name: 'Tyrnimarjatee',
      price: '7,00€',
      image: '/images/menu/Oblipichka.webp',
      description: 'Kuuma tyrnitee hunajalla ja tuoreella appelsiinilla. Kirkas, lämmittävä ja hieman hapan.',
      ingredients: 'Tyrnit, hunaja, tuore appelsiini, kuuma vesi',
      taste: 'Kirkas ja hapan luonnollisella hunajan makeudella. Lämmittävä ilman raskautta.',
      note: 'Täynnä C- ja E-vitamiinia. Suomalais-aasialainen klassikko.',
    },
    {
      name: 'Vadelma & Mangotee',
      price: '6,50€',
      image: '/images/menu/MangoTea.webp',
      description: 'Värikäs marjatee tuoreilla vadelmilla, mangolla ja rosmariinilla. Makea, hedelmäinen ja syvän punainen.',
      ingredients: 'Tuoreet vadelmat, mangopalaset, rosmariini, hunaja, kuuma vesi',
      taste: 'Makea ja hedelmäinen kerroksisella marjaisen syvyydellä. Rosmariini tuo odottamattoman yrttisen vivahteen.',
      note: 'Menumme näyttävin juoma. Vaikea vastustaa tilaamista kahdesti.',
    },
    {
      name: 'Marjatee',
      price: '6,50€',
      image: '/images/menu/BerryTea.webp',
      description: 'Lämmittävä sekoitus pohjoismaisia metsämarjoja hunajalla ja ripaus kanelia.',
      ingredients: 'Mustikat, puolukat, karpalot, hunaja, kaneli, kuuma vesi',
      taste: 'Syvä ja hillomaiinen luonnollisella marjaisen makeudella. Lämmittävät mausteet asettuvat jokaiseen siemaisuun.',
      note: 'Valmistettu pohjoismaisista marjoista. Yksinkertaista, rehellistä ja syvän lohduttavaa.',
    },
    {
      name: 'Marokkolainen Tee',
      price: '6,50€',
      image: '/images/menu/Mrocco.webp',
      description: 'Perinteinen marokkolainen minttutee tuoreella piparmintulla ja vihreällä teellä. Kevyt ja tuoksuva.',
      ingredients: 'Tuore piparminttu, vihreä tee, ruokosokeri, kuuma vesi',
      taste: 'Raikas ja virkistävä luonnollisella mintun makeudella. Rauhoittava ja hennon tuoksuva.',
      note: 'Kaadetaan perinteiseen tapaan korkealta. Pyydä meitä tekemään se pöydässä.',
    },
  ],
};

// =============================================================================
// SODA VARIANTS — Translated per language
// =============================================================================

export const SODA_VARIANTS: Record<Language, TeaVariant[]> = {
  en: [
    {
      name: 'Coca-Cola',
      price: '2,75€',
      image: '/images/menu/cola.webp',
      description: 'The original and the classic. Served ice cold in a glass.',
      ingredients: 'Coca-Cola 330ml',
      taste: 'You already know what it tastes like. That is the point.',
      note: 'Ice optional. We recommend it.',
    },
    {
      name: 'Fanta',
      price: '2,75€',
      image: '/images/menu/Fanta.webp',
      description: 'Orange Fanta, cold and bubbly. Bright citrus flavor in every sip.',
      ingredients: 'Fanta Orange 330ml',
      taste: 'Sweet and citrusy with a candy orange character. Crowd-pleasing every time.',
      note: 'Great alongside spicy dishes — the sweetness balances the heat.',
    },
    {
      name: 'Sprite',
      price: '2,75€',
      image: '/images/menu/Sprite.webp',
      description: 'Crisp lemon-lime soda. Clean, cold, and refreshingly bubbly.',
      ingredients: 'Sprite 330ml',
      taste: 'Light and refreshing with a clean citrus finish. Palate-cleansing between bites.',
      note: 'The best call if you want something neutral alongside a rich and heavy meal.',
    },
  ],
  fi: [
    {
      name: 'Coca-Cola',
      price: '2,75€',
      image: '/images/menu/cola.webp',
      description: 'Alkuperäinen ja klassinen. Tarjoillaan jääkylmänä lasissa.',
      ingredients: 'Coca-Cola 330ml',
      taste: 'Tiedät jo miltä se maistuu. Siinä on koko pointti.',
      note: 'Jäillä tai ilman. Suosittelemme jäillä.',
    },
    {
      name: 'Fanta',
      price: '2,75€',
      image: '/images/menu/Fanta.webp',
      description: 'Appelsiini-Fanta, kylmänä ja kuplivana. Kirkas sitrusmaku jokaisessa siemaisussa.',
      ingredients: 'Fanta Orange 330ml',
      taste: 'Makea ja sitruksinen karkkimaisen appelsiinin luonteella. Kaikkien suosikki.',
      note: 'Loistava tulisten ruokien kanssa — makeus tasapainottaa tulisuuden.',
    },
    {
      name: 'Sprite',
      price: '2,75€',
      image: '/images/menu/Sprite.webp',
      description: 'Raikas sitruuna-limettisooda. Puhdas, kylmä ja virkistävästi kuplivaa.',
      ingredients: 'Sprite 330ml',
      taste: 'Kevyt ja virkistävä puhtaalla sitruksisen limettin loppumaulla. Puhdistaa suun aterioiden välissä.',
      note: 'Paras valinta jos haluat jotain puhdasta ja neutraalia rikkaan aterian kanssa.',
    },
  ],
};

// =============================================================================
// DISH DETAILS — Translated per language
// =============================================================================

export const DISH_DETAILS: Record<Language, Record<string, DishDetail>> = {
  en: {
    m1: {
      ingredients: 'Lamb, yellow carrots, chickpeas, raisins, cumin, barberries, rice',
      taste: 'Rich and savory with a subtle sweetness from the carrots and raisins. The lamb falls apart after slow-cooking.',
      pair: 'Goes well with a fresh tomato-onion salad and green tea.',
    },
    m2: {
      ingredients: 'Hand-pulled noodles, beef, bell peppers, tomatoes, onions, garlic, chili',
      taste: 'Smoky and bold from the wok. Chewy noodles with a slight char. Available spicy or mild.',
      pair: 'Try it with Tyrnitee — the tartness cuts through the richness.',
    },
    m3: {
      ingredients: 'Hand-pulled noodles, beef, tomatoes, potatoes, bell peppers, herbs, broth',
      taste: 'Warming and hearty. A deep, slow-simmered broth with thick, chewy noodles.',
      pair: 'Our most ordered dish. Perfect on a cold Helsinki evening.',
    },
    m4: {
      ingredients: 'Hand-pulled noodles, zucchini, bell peppers, tomatoes, onions, seasonal vegetables',
      taste: 'Light but satisfying. The vegetables keep their bite, and the noodles are fresh-pulled.',
      pair: 'Our vegetarian option — fully plant-based.',
    },
    m5: {
      ingredients: 'Beef or lamb, potatoes, onions, cumin, coriander, black pepper',
      taste: 'Comfort food at its best. The meat gets tender and golden in the cast-iron kazan.',
      pair: 'A hearty, no-fuss dish. Pairs well with bread and pickles.',
    },
    d1: {
      ingredients: 'Diced beef, onions, cumin, black pepper, dough wrapper',
      taste: 'Juicy and steaming. The filling stays moist inside the thick dumpling skin.',
      pair: 'Served with sour cream. Dip generously.',
    },
    d2: {
      ingredients: 'Kazy (horse meat), flat noodles, potatoes, carrots, onion broth',
      taste: 'Mild and meaty. The horse meat is lean and tender, and the broth ties everything together.',
      pair: 'A traditional Kazakh dish — eaten with hands in the old days.',
    },
    d3: {
      ingredients: 'Layered pastry dough, beef or chicken, onions, spices',
      taste: 'Crispy, flaky layers outside. Hot savory filling inside. Baked fresh to order.',
      pair: 'Great as a snack or starter. Have one while waiting for your main.',
    },
    s1: {
      ingredients: 'Beef, potatoes, carrots, tomatoes, fresh herbs, black pepper',
      taste: 'Clean and restorative. A clear, honest broth with big chunks of everything.',
      pair: 'The kind of soup that fixes a bad day. Served with bread.',
    },
    s2: {
      ingredients: 'Mixed meats, pickled cucumbers, olives, lemon, sour cream, tomato paste',
      taste: 'Tangy, salty, and complex. Every spoonful hits different — sour, savory, smoky.',
      pair: 'A classic Eastern European soup. The sour cream on top is essential.',
    },

  },
  fi: {
    m1: {
      ingredients: 'Lammas, keltaiset porkkanat, kikherneet, rusinat, kumina, berberis, riisi',
      taste: 'Runsas ja suolainen hienoisella makeudella porkkanoista ja rusinoista. Lammas hajoaa pitkän haudutuksen jälkeen.',
      pair: 'Sopii hyvin tuoreen tomaatti-sipulisalaatin ja vihreän teen kanssa.',
    },
    m2: {
      ingredients: 'Käsin vedetyt nuudelit, nauta, paprika, tomaatit, sipulit, valkosipuli, chili',
      taste: 'Savuinen ja rohkea wokista. Sitkeät nuudelit kevyellä karamellilla. Saatavana tulisena tai mietona.',
      pair: 'Kokeile Tyrniteen kanssa — hapokkuus leikkaa rasvaisen maun.',
    },
    m3: {
      ingredients: 'Käsin vedetyt nuudelit, nauta, tomaatit, perunat, paprika, yrtit, liemi',
      taste: 'Lämmittävä ja täyttävä. Syvä, pitkään haudutettu liemi paksuilla, sitkeillä nuudeleilla.',
      pair: 'Suosituin annoksemme. Täydellinen kylmänä Helsinki-iltana.',
    },
    m4: {
      ingredients: 'Käsin vedetyt nuudelit, kesäkurpitsa, paprika, tomaatit, sipulit, kauden vihannekset',
      taste: 'Kevyt mutta täyttävä. Vihannekset säilyttävät pureutuvuutensa, ja nuudelit ovat tuoreeltaan vedettyjä.',
      pair: 'Kasvisvaihtoehto — täysin kasvisruokaa.',
    },
    m5: {
      ingredients: 'Nauta tai lammas, perunat, sipulit, kumina, korianteri, mustapippuri',
      taste: 'Lohturuokaa parhaimmillaan. Liha muuttuu pehmeäksi ja kullankeltaiseksi valurautaisessa kazanissa.',
      pair: 'Runsas, mutkaton annos. Sopii hyvin leivän ja pikkelöityjen kanssa.',
    },
    d1: {
      ingredients: 'Kuutioitu nauta, sipulit, kumina, mustapippuri, taikina',
      taste: 'Mehukas ja höyryävä. Täyte pysyy kosteana paksun taikinan sisällä.',
      pair: 'Tarjoillaan smetanan kanssa. Dipattavaksi runsaasti.',
    },
    d2: {
      ingredients: 'Kazy (hevosliha), leveät nuudelit, perunat, porkkanat, sipuliliemi',
      taste: 'Mieto ja lihaisa. Hevosliha on vähärasvaista ja mureaa, ja liemi sitoo kaiken yhteen.',
      pair: 'Perinteinen kazakstanilainen ruokalaji — ennen syötiin käsin.',
    },
    d3: {
      ingredients: 'Kerrostaikina, nauta tai kana, sipulit, mausteet',
      taste: 'Rapeat, kerroksiset kuoret ulkona. Kuuma suolainen täyte sisällä. Leivotaan tilauksesta.',
      pair: 'Loistava välipala tai alkupala. Syö yksi pääruokaa odottaessa.',
    },
    s1: {
      ingredients: 'Nauta, perunat, porkkanat, tomaatit, tuoreet yrtit, mustapippuri',
      taste: 'Raikas ja elinvoimainen. Kirkas, rehellinen liemi isoilla paloilla kaikkea.',
      pair: 'Sellainen keitto, joka korjaa huonon päivän. Tarjoillaan leivän kanssa.',
    },
    s2: {
      ingredients: 'Sekaliha, suolakurkut, oliivit, sitruuna, smetana, tomaattipasta',
      taste: 'Hapan, suolainen ja monimuotoinen. Jokainen lusikallinen maistuu eri tavalla — hapan, suolainen, savuinen.',
      pair: 'Klassinen itäeurooppalainen keitto. Smetana päällä on välttämätön.',
    },
  },
};
