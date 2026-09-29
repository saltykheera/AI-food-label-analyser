/**
 * BTP Case Study Food Label Pre-Determined Dataset & Matcher
 * Optimized for ultra-fast, zero-latency product demonstrations.
 */

export const CASE_STUDY_PRODUCTS = {
  chocos: {
    id: 'chocos',
    name: "Kellogg's Chocos - Chocolate Wheat Cereal",
    brand: "Kellogg's",
    category: 'Breakfast Cereals',
    health_score: 48,
    health_grade: 'D',
    verdict: 'Heavily refined extruded wheat cereal with high sugar content (9g sucrose in just 30g serving, 30% by weight) and moderate dietary fiber.',
    positives: [
      'Fortified with essential micronutrients (Calcium 160mg, Iron 1.5mg, Zinc)',
      'Enriched with B-Complex vitamins (B1, B2, B3, B6, B12)',
      'Low total fat (0.9g per serving) and 0g trans fat'
    ],
    negatives: [
      'High sugar concentration (9.0g sucrose per 30g serve — 30% sugar by weight)',
      'Extruded ultra-processed grain structure with low satiety',
      'Contains allergen Wheat (Gluten)'
    ],
    nutritional_highlights: {
      calories: '116 kcal',
      serving_size: '30g (1 Bowl)',
      sugar: '9.0g',
      protein: '2.7g',
      fat: '0.9g',
      sodium: '100mg',
      fiber: '1.5g'
    },
    nova_group: 4,
    nova_label: 'Ultra-processed food and drink products',
    ingredients_summary: 'Whole wheat flour, sugar, cocoa solids, wheat flour, edible vegetable oil, minerals, vitamins, and antioxidant (INS 320).',
    allergen_warnings: ['Contains Wheat (Gluten)', 'May contain traces of Soy & Milk'],
    matched_file: 'chocos-label.jpg',
    file_sizes: [198582, 38274],
    keywords: ['choco', 'kellogg']
  },

  frooti: {
    id: 'frooti',
    name: "Frooti - Fresh 'N' Juicy Mango Drink",
    brand: 'Parle Agro',
    category: 'Sweetened Fruit Beverage',
    health_score: 24,
    health_grade: 'E',
    verdict: 'High-sugar ultra-processed beverage where over 85% of calories come from added refined sucrose, packing 17.1g of added sugar in a single 125ml box.',
    positives: [
      'Source of Vitamin A (115 mcg per serve, 19% RDA)',
      'Naturally zero fat and zero cholesterol'
    ],
    negatives: [
      'Critical added sugar content (17.1g added sucrose, 34% daily RDA in only 125ml)',
      'Total sugars reach 19.5g with near-zero dietary fiber',
      'Zero protein content and promotes rapid insulin spikes'
    ],
    nutritional_highlights: {
      calories: '78.8 kcal',
      serving_size: '125ml (1 Pack)',
      sugar: '19.5g (17.1g Added)',
      protein: '0.0g',
      fat: '0.0g',
      sodium: '23.8mg',
      fiber: '0.0g'
    },
    nova_group: 4,
    nova_label: 'Ultra-processed food and drink products',
    ingredients_summary: 'Water, Mango pulp (19%), Sugar, Acidity regulator (INS 330), Antioxidant (INS 300), and Permitted Class II Preservatives.',
    allergen_warnings: ['None flagged (Contains preservative sulfites in minor trace)'],
    matched_file: 'frooti-label.jpg',
    file_sizes: [83352, 52350],
    keywords: ['frooti', 'parle']
  },

  lays: {
    id: 'lays',
    name: "Lay's Classic Salted Potato Chips",
    brand: 'Frito-Lay',
    category: 'Savory Snacks & Chips',
    health_score: 45,
    health_grade: 'D',
    verdict: 'Simple 3-ingredient formulation free from artificial dyes or preservatives, but calorie-dense with high fat content (13g) and 210mg sodium.',
    positives: [
      'Clean 3-ingredient formulation: only potatoes, vegetable oil, and salt',
      'Zero artificial preservatives, zero MSG, and zero artificial flavors',
      'Provides 440mg dietary potassium (8% DV)'
    ],
    negatives: [
      'High total fat (13g, 16% DV) with 2g saturated fat per small bag',
      'High caloric density (200 calories per package)',
      'Elevated sodium level (210mg, 9% DV)'
    ],
    nutritional_highlights: {
      calories: '200 kcal',
      serving_size: '1 Package (28.3g)',
      sugar: '< 1g',
      protein: '2.0g',
      fat: '13.0g',
      sodium: '210mg',
      fiber: '2.0g'
    },
    nova_group: 3,
    nova_label: 'Processed foods',
    ingredients_summary: 'Potatoes, Vegetable Oil (Sunflower, Corn and/or Canola Oil), and Salt.',
    allergen_warnings: ['Manufactured in facility handling milk and soy'],
    matched_file: 'lays-label.webp',
    file_sizes: [23620, 46338],
    keywords: ['lay', 'frito']
  },

  maggi: {
    id: 'maggi',
    name: 'Maggi 2-Minute Masala Instant Noodles',
    brand: 'Nestlé',
    category: 'Instant Packaged Noodles',
    health_score: 31,
    health_grade: 'E',
    verdict: 'Ultra-processed deep-fried refined wheat noodles with dangerously high sodium (719.8mg, 36% daily RDA) and 5.7g saturated palm oil fat.',
    positives: [
      'Fortified with Iron (4.83mg, 16% RDA)',
      'Provides 5.7g protein from wheat and spices'
    ],
    negatives: [
      'Critical sodium level (719.8mg per 70g pack — 36% of total daily sodium allowance)',
      'High saturated fat from refined palm oil (5.7g saturated fat — 29% daily RDA)',
      'Refined wheat flour (Maida) base with deep-fat frying during manufacturing',
      'Contains flavour enhancer INS 635 and caramel colour INS 150d'
    ],
    nutritional_highlights: {
      calories: '269 kcal',
      serving_size: '70g (1 Single Pack)',
      sugar: '1.3g',
      protein: '5.7g',
      fat: '8.8g (5.7g Saturated)',
      sodium: '719.8mg',
      fiber: '1.8g'
    },
    nova_group: 4,
    nova_label: 'Ultra-processed food and drink products',
    ingredients_summary: 'Refined wheat flour (Maida), Palm oil, Iodized salt, Wheat gluten, Thickeners (508, 412), Acidity regulators (501(i), 500(i)), Humectant (451(i)). Tastemaker: Mixed spices (25.6%), Hydrolysed groundnut protein, Flavour enhancer (635), Colour (150d).',
    allergen_warnings: ['Contains Wheat (Gluten)', 'Contains Nut (Groundnut/Peanut)', 'May contain Milk, Mustard, Oats, and Soy'],
    matched_file: 'maggi-label.jpg',
    file_sizes: [146667, 232879],
    keywords: ['maggi', 'maggie', 'nestle']
  },

  sting: {
    id: 'sting',
    name: 'Sting - Energy Drink (Berry Blast)',
    brand: 'PepsiCo',
    category: 'Caffeinated Energy Beverages',
    health_score: 18,
    health_grade: 'E',
    verdict: 'High-risk ultra-processed energy drink containing 72mg synthetic caffeine, 17g added refined sugar, and synthetic petroleum dye Red 40.',
    positives: [
      'Fortified with B-Vitamins (B3 1.4mg, B6 0.13mg, B12 0.15mcg)',
      'Zero dietary fat and zero cholesterol'
    ],
    negatives: [
      'High synthetic caffeine content (72mg/bottle) capable of triggering tachycardia and anxiety',
      'Extremely high added sugar (17.0g added sucrose in 250ml, 34% daily RDA)',
      'Contains synthetic petroleum-derived food dye Red 40 (Allura Red INS 129)',
      'High acidity damaging dental enamel',
      'Zero protein, zero dietary fiber, and zero essential nutrients'
    ],
    nutritional_highlights: {
      calories: '70 kcal',
      serving_size: '250ml (1 Bottle)',
      sugar: '17.0g',
      protein: '0.0g',
      fat: '0.0g',
      sodium: '80mg',
      fiber: '0.0g'
    },
    nova_group: 4,
    nova_label: 'Ultra-processed food and drink products',
    ingredients_summary: 'Carbonated water, Sugar, Acidity regulators (INS 330, INS 331), Taurine, Synthetic Caffeine, Preservatives (INS 211, INS 202), Permitted Synthetic Food Colour (INS 129), Inositol, Vitamins (B3, B6, B12).',
    allergen_warnings: ['High Caffeine Hazard (72mg)', 'Not recommended for children, pregnant or lactating women'],
    matched_file: 'sting_label.jpg',
    file_sizes: [64644, 111775],
    keywords: ['sting', 'pepsico']
  },

  justjelly: {
    id: 'justjelly',
    name: 'Alpenliebe Juzt Jelly - Strawberry Soft Candy',
    brand: 'Perfetti Van Melle',
    category: 'Sugar Confectionery / Soft Candy',
    health_score: 22,
    health_grade: 'E',
    verdict: 'Hyper-concentrated sugar confectionery consisting of 62% refined sucrose and liquid glucose syrup colored with synthetic dye Ponceau 4R.',
    positives: [
      'Contains 25% fruit pulp',
      'Fat-free and zero cholesterol'
    ],
    negatives: [
      'Excessive sugar content (62g sugars per 100g, over 60% by weight)',
      'Dominated by refined liquid glucose and invert sugar',
      'Contains synthetic food color Ponceau 4R (INS 124)',
      'Virtually zero protein (0.5g) and zero dietary fiber'
    ],
    nutritional_highlights: {
      calories: '334 kcal',
      serving_size: '100g (1 Pouch)',
      sugar: '62.0g',
      protein: '0.5g',
      fat: '0.1g',
      sodium: '45mg',
      fiber: '0.0g'
    },
    nova_group: 4,
    nova_label: 'Ultra-processed food and drink products',
    ingredients_summary: 'Sugar, Liquid glucose, Fruit pulp (25%), Gelling agent (INS 440), Acidity regulator (INS 330), Synthetic food colour (INS 124) and Added flavour (Strawberry).',
    allergen_warnings: ['Contains Synthetic Food Colour Ponceau 4R (INS 124)'],
    matched_file: 'justjelly-prd.jpg',
    file_sizes: [88712],
    keywords: ['jelly', 'justjelly', 'juzt', 'alpenliebe']
  }
};

/**
 * Match an incoming file to pre-determined case study details
 * Matches by filename substring or exact file size in bytes
 */
export function matchCaseStudyFile(filename = '', fileSize = 0) {
  const lowerName = filename.toLowerCase();

  for (const key of Object.keys(CASE_STUDY_PRODUCTS)) {
    const item = CASE_STUDY_PRODUCTS[key];

    // 1. Check exact file size
    if (fileSize > 0 && item.file_sizes.includes(fileSize)) {
      return {
        is_food: true,
        product_name: item.name,
        brand: item.brand,
        category: item.category,
        health_score: item.health_score,
        health_grade: item.health_grade,
        verdict: item.verdict,
        positives: item.positives,
        negatives: item.negatives,
        nutritional_highlights: item.nutritional_highlights,
        nova_group: item.nova_group,
        nova_label: item.nova_label,
        ingredients_summary: item.ingredients_summary,
        allergen_warnings: item.allergen_warnings,
        _case_study_match: key,
        _source: 'case_study_cache'
      };
    }

    // 2. Check keyword in filename
    for (const kw of item.keywords) {
      if (lowerName.includes(kw)) {
        return {
          is_food: true,
          product_name: item.name,
          brand: item.brand,
          category: item.category,
          health_score: item.health_score,
          health_grade: item.health_grade,
          verdict: item.verdict,
          positives: item.positives,
          negatives: item.negatives,
          nutritional_highlights: item.nutritional_highlights,
          nova_group: item.nova_group,
          nova_label: item.nova_label,
          ingredients_summary: item.ingredients_summary,
          allergen_warnings: item.allergen_warnings,
          _case_study_match: key,
          _source: 'case_study_cache'
        };
      }
    }
  }

  return null;
}

export function formatCaseStudyForDemo(item) {
  if (!item) return null;
  return {
    id: item.id,
    name: item.name,
    brand: `${item.brand} • ${item.nutritional_highlights?.serving_size || ''}`,
    category: item.category,
    score: item.health_score,
    grade: `Grade ${item.health_grade}`,
    scoreColor: item.health_score >= 80 ? '#34c759' : item.health_score >= 50 ? '#ff9f0a' : '#ff3b30',
    nova_group: item.nova_group,
    nova_label: item.nova_label,
    verdict: item.verdict,
    positives: item.positives || [],
    negatives: item.negatives || [],
    nutrition: {
      cal: item.nutritional_highlights?.calories || '—',
      sugar: item.nutritional_highlights?.sugar || '—',
      fat: item.nutritional_highlights?.fat || '—',
      protein: item.nutritional_highlights?.protein || '—',
    },
    allergenTags: item.allergen_warnings || [],
    imagePreview: `/case_study/${item.matched_file}`,
  };
}

export const CASE_STUDY_DEMO_MAP = Object.keys(CASE_STUDY_PRODUCTS).reduce((acc, key) => {
  acc[key] = formatCaseStudyForDemo(CASE_STUDY_PRODUCTS[key]);
  return acc;
}, {});
