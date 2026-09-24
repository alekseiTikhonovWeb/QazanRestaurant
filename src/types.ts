export type Language = 'en' | 'fi';

export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category: 'mains' | 'dumplings' | 'soups' | 'drinks';
  dietary?: string[]; // e.g., ['M', 'G', 'VEG']
}

export interface Review {
  id: number;
  text: string;
  author: string;
  rating: number;
}

export interface TeaVariant {
  name: string;
  price: string;
  image: string;
  description: string;
  ingredients: string;
  taste: string;
  note: string;
}

export interface DishDetail {
  ingredients: string;
  taste: string;
  pair: string;
}

export interface Translations {
  nav: {
    home: string;
    history: string;
    menu: string;
    chef: string;
    book: string;
    mains: string;
    dumplings: string;
    soups: string;
    drinks: string;
  };
  hero: {
    subtitle: string;
    title_main: string;
    title_sub: string;
    desc: string;
  };
  about: {
    tag: string;
    title_main: string;
    title_sub: string;
    title_end: string;
    p1: string;
    p2: string;
    read_more: string;
  };
  menu: {
    title: string;
    tag: string;
    full_menu: string;
  };
  chef: {
    tag: string;
    quote: string;
    desc: string;
    name: string;
  };
  reviews: {
    subtitle: string;
    title: string;
  };
  reservation: {
    title: string;
    subtitle: string;
    btn_submit: string;
  };
  footer: {
    desc: string;
    contact: string;
    hours_title: string;
    social: string;
    days_weekdays: string;
    days_weekend: string;
  };
  menu_page: {
    title: string;
    subtitle: string;
    view_details: string;
    no_items: string;
    all_category: string;
  };
  modal: {
    tea_collection: string;
    soda_collection: string;
    of: string;
    whats_in_it: string;
    how_it_tastes: string;
    good_to_know: string;
  };
  story_page: {
    hero_title: string;
    hero_subtitle: string;
    section1_tag: string;
    section1_title: string;
    section1_text: string;
    section2_tag: string;
    section2_title: string;
    section2_text: string;
    values_title: string;
    value1_title: string;
    value1_desc: string;
    value2_title: string;
    value2_desc: string;
    value3_title: string;
    value3_desc: string;
  };
  chatbot: {
    greeting: string;
    btn_book: string;
    btn_order: string;
    btn_faq: string;
    btn_contact: string;
    back: string;
    order_title: string;
    faq_title: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    concierge: string;
    guest_service: string;
  };
  not_found: {
    title: string;
    text: string;
    back: string;
  };
}
