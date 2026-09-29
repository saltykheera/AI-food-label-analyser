/**
 * NutriLens AI — Mock Data Store
 */

export const PRODUCTS = {
  chobani: {
    id: 'chobani',
    name: 'Greek Yogurt - Plain Non-Fat',
    brand: 'Chobani • 3/4 Cup (170g) serving',
    category: 'Dairy',
    score: 96,
    grade: 'Grade A • Minimal Processing',
    scoreColor: '#10b981',
    nova_group: 1,
    nova_label: 'Unprocessed or minimally processed foods',
    verdict: 'An exceptional, protein-dense whole food with zero added sugars and live probiotic cultures.',
    positives: [
      'High protein content (16g per serving)',
      'Zero added sugars and fat-free',
      'Contains live and active probiotic cultures',
      'Good source of calcium (200mg)'
    ],
    negatives: [
      'Naturally contains dairy sugars (lactose)'
    ],
    nutrition: {
      cal: '90 kcal', calTag: 'Calorie Light', calType: 'good',
      sugar: '5g', sugarTag: 'Naturally Occurring', sugarType: 'good',
      fat: '0g', fatTag: 'Zero Fat', fatType: 'good',
      sodium: '65mg', sodiumTag: 'Low Sodium', sodiumType: 'good',
      protein: '16g', proteinTag: 'High Protein', proteinType: 'good'
    },
    ingredients: [
      { name: 'Cultured Grade A Non-Fat Milk', type: 'allergen', allergenKey: 'dairy', id: 'milk' },
      { name: 'Live Active Probiotic Cultures', type: 'clean', id: 'vanilla' }
    ],
    additives: {
      title: 'NOVA 1: Whole Food Formulation',
      desc: 'Simple, clean formulation consisting only of cultured grade A non-fat milk and active cultures. No added sugars, gums, or synthetic preservatives.',
      icon: '✨'
    },
    allergenTags: ['dairy'],
    isVegan: false,
    hasPalmOil: false,
    hasAdditives: false,
    swap: null
  },
  bar: {
    id: 'bar',
    name: 'Organic SuperGreen Protein Bowl',
    brand: 'Kairo Nutrition • 1 Cup (28g) serving',
    category: 'Plant-Based Protein',
    score: 92,
    grade: 'Grade A • Excellent',
    scoreColor: '#1ba673',
    nutrition: {
      cal: '210 kcal', calTag: 'Optimal', calType: 'good',
      sugar: '2g', sugarTag: 'Very Low', sugarType: 'good',
      fat: '2g (Sat 1g)', fatTag: 'Healthy', fatType: 'good',
      sodium: '24mg', sodiumTag: 'Low Sodium', sodiumType: 'good',
      protein: '24g', proteinTag: 'High', proteinType: 'good'
    },
    ingredients: [
      { name: 'Pea Protein Isolate', type: 'clean', id: 'pea-protein' },
      { name: 'Spirulina Powder', type: 'clean', id: 'spirulina' },
      { name: 'Organic Quinoa Flour', type: 'clean', id: 'quinoa' },
      { name: 'Organic Chia Seeds', type: 'clean', id: 'chia' },
      { name: 'Natural Vanilla Extract', type: 'clean', id: 'vanilla' },
      { name: 'Stevia Leaf Extract', type: 'clean', id: 'stevia' }
    ],
    additives: {
      title: 'Zero Hazardous Additives Detected',
      desc: 'All 18 ingredients are natural whole-foods or non-synthetic plant isolates. Free from synthetic food dyes, petroleum derivatives, and artificial sweeteners.',
      icon: '🌿'
    },
    allergenTags: [],
    isVegan: true,
    hasPalmOil: false,
    hasAdditives: false,
    swap: null
  },

  spread: {
    id: 'spread',
    name: 'Choco-Hazelnut Breakfast Spread',
    brand: 'Continental Sweet • 2 tbsp (37g) serving',
    category: 'Confectionery / Ultra-Processed',
    score: 34,
    grade: 'Grade E • Ultra-Processed Hazard',
    scoreColor: '#ff5530',
    nutrition: {
      cal: '200 kcal', calTag: 'High Density', calType: 'warning',
      sugar: '21g', sugarTag: '56% Sugar (Critical)', sugarType: 'danger',
      fat: '11g (Sat 3.5g)', fatTag: 'High Saturated', fatType: 'warning',
      sodium: '15mg', sodiumTag: 'Low', sodiumType: 'good',
      protein: '2g', proteinTag: 'Very Low', proteinType: 'warning'
    },
    ingredients: [
      { name: 'Refined White Sugar (56%)', type: 'caution', id: 'sugar' },
      { name: 'Palm Oil (32%)', type: 'caution', id: 'palmoil' },
      { name: 'Hazelnuts (13%)', type: 'allergen', allergenKey: 'peanuts', id: 'hazelnuts' },
      { name: 'Skimmed Milk Powder', type: 'allergen', allergenKey: 'dairy', id: 'milk' },
      { name: 'Fat-Reduced Cocoa Powder', type: 'clean', id: 'cocoa' },
      { name: 'Emulsifier (Soy Lecithin)', type: 'allergen', allergenKey: 'soy', id: 'soy-lecithin' },
      { name: 'Vanillin (Synthetic Flavor)', type: 'caution', id: 'vanillin' }
    ],
    additives: {
      title: '2 Industrial Additives & 88% Saturated Fat / Sugar',
      desc: 'Contains synthetic vanillin flavor compound and soy lecithin emulsifier. Over 56% refined sugar content exceeds the WHO recommended daily limit in just 2 servings.',
      icon: '⚠️'
    },
    allergenTags: ['peanuts', 'dairy', 'soy'],
    isVegan: false,
    hasPalmOil: true,
    hasAdditives: true,
    swap: {
      title: 'Organic Stoneground Hazelnut & Cacao Butter',
      desc: 'Zero palm oil, 85% less sugar, sweetened with monk fruit, certified dairy-free & vegan.',
      delta: '+58 Health Score Boost'
    }
  },

  salad: {
    id: 'salad',
    name: 'Artisan Caesar Salad Dressing',
    brand: 'Gourmet Kitchen • 2 tbsp (30ml) serving',
    category: 'Dressing / Condiment',
    score: 56,
    grade: 'Grade C • Moderate Processing',
    scoreColor: '#F59E0B',
    nutrition: {
      cal: '150 kcal', calTag: 'Caloric', calType: 'warning',
      sugar: '1g', sugarTag: 'Low', sugarType: 'good',
      fat: '16g (Sat 2.5g)', fatTag: 'High Fat', fatType: 'warning',
      sodium: '290mg', sodiumTag: 'High Sodium', sodiumType: 'warning',
      protein: '1g', proteinTag: 'Minimal', proteinType: 'warning'
    },
    ingredients: [
      { name: 'Canola Oil', type: 'clean', id: 'canola' },
      { name: 'Filtered Water', type: 'clean', id: 'water' },
      { name: 'Pasteurized Egg Yolk', type: 'allergen', allergenKey: 'dairy', id: 'egg' },
      { name: 'Anchovy Paste (Fish)', type: 'allergen', allergenKey: 'fish', id: 'anchovy' },
      { name: 'Xanthan Gum (Thickener)', type: 'caution', id: 'xanthan' },
      { name: 'Potassium Sorbate (E202)', type: 'caution', id: 'potassium-sorbate' },
      { name: 'Sodium Benzoate Preservative', type: 'caution', id: 'sodium-benzoate' },
      { name: 'Sulfites (Trace)', type: 'caution', id: 'sulfites' }
    ],
    additives: {
      title: 'Contains 2 Chemical Preservatives (E202, Sodium Benzoate)',
      desc: 'Includes synthetic antimicrobials to extend ambient shelf-life to 18 months. Anchovies and egg yolks pose direct allergy triggers.',
      icon: '🧪'
    },
    allergenTags: ['dairy', 'fish'],
    isVegan: false,
    hasPalmOil: false,
    hasAdditives: true,
    swap: {
      title: 'Cold-Pressed Avocado Oil Goddess Dressing',
      desc: 'Zero chemical preservatives, 100% plant-based, clean herb infusion, heart-healthy monounsaturated fats.',
      delta: '+32 Health Score Boost'
    }
  }
};

export const JARGON_DICTIONARY = {
  'pea-protein': {
    title: 'Pea Protein Isolate',
    cat: 'Plant Protein Source',
    safety: 'Safe & Clean',
    safetyClass: 'safety-good',
    plain: 'A pure, concentrated powder made by isolating the protein from yellow split peas.',
    why: 'Boosts protein density without relying on dairy, whey, or animal products.',
    impact: 'Hypoallergenic, easy to digest, and environmentally sustainable.',
    alt: 'Hemp seed protein, organic brown rice protein, pumpkin seed protein.'
  },
  'spirulina': {
    title: 'Spirulina Powder',
    cat: 'Superfood Algae',
    safety: 'Safe & Nutrient Dense',
    safetyClass: 'safety-good',
    plain: 'A nutrient-rich blue-green algae harvested from fresh alkaline lakes.',
    why: 'Adds natural vitamins, B-complex, and potent antioxidants like phycocyanin.',
    impact: 'Anti-inflammatory benefits and supports natural cellular detox.',
    alt: 'Chlorella powder, matcha green tea, wheatgrass.'
  },
  'quinoa': {
    title: 'Organic Quinoa Flour',
    cat: 'Ancient Whole Grain',
    safety: 'Safe & Clean',
    safetyClass: 'safety-good',
    plain: 'Finely ground whole quinoa seeds, naturally free of gluten.',
    why: 'Provides complex carbohydrates, dietary fiber, and all 9 essential amino acids.',
    impact: 'Low glycemic response; doesn’t spike blood glucose rapidly.',
    alt: 'Oat flour, almond flour, buckwheat flour.'
  },
  'chia': {
    title: 'Organic Chia Seeds',
    cat: 'Omega-3 Seed',
    safety: 'Safe & Clean',
    safetyClass: 'safety-good',
    plain: 'Tiny edible seeds from the Salvia hispanica plant.',
    why: 'Provides soluble prebiotic fiber and plant-based ALA Omega-3 fats.',
    impact: 'Promotes sustained gut microbiome health and steady energy.',
    alt: 'Flaxseeds, hemp hearts, basil seeds.'
  },
  'vanilla': {
    title: 'Natural Vanilla Extract',
    cat: 'Natural Flavoring',
    safety: 'Safe',
    safetyClass: 'safety-good',
    plain: 'Flavors extracted directly from cured orchid vanilla beans.',
    why: 'Imparts warmth and sweetness naturally without artificial chemicals.',
    impact: 'Completely natural and safe for daily intake.',
    alt: 'Vanilla bean powder, tonka bean.'
  },
  'stevia': {
    title: 'Stevia Leaf Extract',
    cat: 'Natural Non-Nutritive Sweetener',
    safety: 'Safe & Clean',
    safetyClass: 'safety-good',
    plain: 'Sweet compounds extracted from the leaves of the Stevia rebaudiana plant.',
    why: 'Provides 200x the sweetness of sugar with zero calories and zero glycemic spike.',
    impact: 'Safe for diabetics and keto regimes; avoids tooth decay.',
    alt: 'Monk fruit extract (Luo Han Guo).'
  },
  'sugar': {
    title: 'Refined White Sugar (Sucrose)',
    cat: 'Refined Carbohydrate',
    safety: 'Caution: High Glycemic',
    safetyClass: 'safety-warning',
    plain: 'Highly processed crystallized sucrose extracted from sugar cane or sugar beets.',
    why: 'Cheap filler that induces strong dopamine sweetness response.',
    impact: 'Promotes rapid insulin spikes, visceral fat accumulation, and dental cavities.',
    alt: 'Raw honey, dates, maple syrup, monk fruit.'
  },
  'palmoil': {
    title: 'Fractionated Palm Oil',
    cat: 'Industrial Vegetable Fat',
    safety: 'Caution / Flagged',
    safetyClass: 'safety-warning',
    plain: 'Oil extracted from the fruit of oil palms, typically chemically bleached and deodorized.',
    why: 'Semi-solid at room temperature, preventing chocolate and spreads from melting.',
    impact: '50% saturated fat (palmitic acid); frequently linked to heart disease risk and deforestation.',
    alt: 'Extra virgin olive oil, cold-pressed avocado oil, sunflower butter.'
  },
  'hazelnuts': {
    title: 'Roasted Hazelnuts (Tree Nuts)',
    cat: 'Allergen / Tree Nut',
    safety: 'Allergen Alert 🚨',
    safetyClass: 'safety-danger',
    plain: 'The edible nut of the hazel tree.',
    why: 'Gives roasted nutty flavor and creamy texture when ground into paste.',
    impact: 'Major Food Allergen! Can trigger hives, swelling, or life-threatening anaphylaxis.',
    alt: 'Roasted sunflower seeds (SunButter), pumpkin seed butter.'
  },
  'milk': {
    title: 'Skimmed Milk Powder',
    cat: 'Dairy Derivative / Allergen',
    safety: 'Allergen Alert 🚨',
    safetyClass: 'safety-danger',
    plain: 'Dehydrated cow milk solids containing concentrated lactose and milk proteins.',
    why: 'Inexpensive bulking agent that creates a dairy milk texture.',
    impact: 'Triggers lactose intolerance (bloating, cramps) and cow milk protein allergy (casein reaction).',
    alt: 'Oat milk powder, coconut milk powder, almond flour.'
  },
  'cocoa': {
    title: 'Fat-Reduced Cocoa Powder',
    cat: 'Cocoa Solid',
    safety: 'Safe',
    safetyClass: 'safety-good',
    plain: 'Cocoa beans roasted and pressed to remove the majority of cocoa butter fat.',
    why: 'Provides chocolate taste and dark rich coloring.',
    impact: 'Contains theobromine and polyphenols; good antioxidant profile.',
    alt: 'Raw cacao powder, carob powder.'
  },
  'soy-lecithin': {
    title: 'Soy Lecithin (E322)',
    cat: 'Emulsifier / Soy Derivative',
    safety: 'Allergen & Additive Alert ⚠️',
    safetyClass: 'safety-warning',
    plain: 'A fatty substance extracted during chemical processing of soybean oil.',
    why: 'Prevents cocoa butter and vegetable oils from separating over long shelf periods.',
    impact: 'May trigger reactions in individuals with severe soy allergies; some gut inflammation concerns.',
    alt: 'Sunflower lecithin, egg yolk, acacia fiber.'
  },
  'vanillin': {
    title: 'Synthetic Vanillin',
    cat: 'Artificial Flavor Compound',
    safety: 'Artificial Additive',
    safetyClass: 'safety-warning',
    plain: 'A synthetic chemical synthesized from petrochemical guaiacol or wood pulp lignin.',
    why: 'Costs 95% less than real vanilla bean extract.',
    impact: 'Can trigger headaches or mild allergic skin reactions in hypersensitive individuals.',
    alt: 'Pure Madagascar vanilla extract, vanilla paste.'
  },
  'canola': {
    title: 'Canola Oil (Rapeseed)',
    cat: 'Refined Seed Oil',
    safety: 'Moderate',
    safetyClass: 'safety-good',
    plain: 'Oil extracted from genetically bred rapeseed plants, often refined with heat and solvent.',
    why: 'Neutral flavor base for salad dressings and mayonnaise.',
    impact: 'High in Omega-6 fats relative to Omega-3; heavily processed.',
    alt: 'Cold-pressed extra virgin olive oil, avocado oil.'
  },
  'water': {
    title: 'Filtered Water',
    cat: 'Liquid Base',
    safety: 'Safe & Essential',
    safetyClass: 'safety-good',
    plain: 'Purified H2O.',
    why: 'Hydration and ingredient dispersion.',
    impact: 'Pure and vital.',
    alt: 'N/A'
  },
  'egg': {
    title: 'Pasteurized Egg Yolk',
    cat: 'Animal Allergen',
    safety: 'Allergen Alert 🚨',
    safetyClass: 'safety-warning',
    plain: 'The nutrient-dense yellow portion of chicken eggs, heated to kill bacteria.',
    why: 'Natural emulsifier that suspends vinegar and oil into a creamy sauce.',
    impact: 'Common allergen for children and adults; not suitable for vegans.',
    alt: 'Aquafaba (chickpea water), sunflower lecithin.'
  },
  'anchovy': {
    title: 'Anchovy Paste (Salted Fish)',
    cat: 'Fish Allergen',
    safety: 'Allergen Alert 🚨',
    safetyClass: 'safety-danger',
    plain: 'Crushed and salted small pelagic forage fish.',
    why: 'Traditional umami flavor foundation for Caesar dressings.',
    impact: 'Major allergen! Can cause severe reaction in individuals with finfish allergy.',
    alt: 'Fermented white miso paste, capers, nutritional yeast.'
  },
  'xanthan': {
    title: 'Xanthan Gum (E415)',
    cat: 'Hydrocolloid Thickener',
    safety: 'Generally Safe',
    safetyClass: 'safety-good',
    plain: 'A polysaccharide produced by fermenting simple sugars with Xanthomonas campestris bacteria.',
    why: 'Gives dressing viscosity and prevents ingredients from sinking to the bottom.',
    impact: 'Safe for most; in high doses may cause digestive gas in sensitive guts.',
    alt: 'Guar gum, arrowroot, chia gel.'
  },
  'potassium-sorbate': {
    title: 'Potassium Sorbate (E202)',
    cat: 'Chemical Preservative',
    safety: 'Synthetic Additive ⚠️',
    safetyClass: 'safety-warning',
    plain: 'The potassium salt of sorbic acid synthesized in laboratories.',
    why: 'Inhibits mold, yeast, and fungal growth to keep bottled dressing stable without refrigeration.',
    impact: 'Some studies note potential cellular DNA stress; can trigger contact dermatitis.',
    alt: 'Natural rosemary extract, citric acid, vinegar.'
  },
  'sodium-benzoate': {
    title: 'Sodium Benzoate (E211)',
    cat: 'Chemical Preservative',
    safety: 'Synthetic Additive ⚠️',
    safetyClass: 'safety-warning',
    plain: 'Sodium salt of benzoic acid.',
    why: 'Prevents bacterial spoilage in acidic foods.',
    impact: 'When combined with Vitamin C (ascorbic acid), can form trace levels of carcinogenic benzene.',
    alt: 'Cultured dextrose, cold-pressure processing (HPP).'
  },
  'sulfites': {
    title: 'Sulfites (Sulfur Dioxide)',
    cat: 'Preservative / Allergen',
    safety: 'Asthma Trigger Alert ⚠️',
    safetyClass: 'safety-warning',
    plain: 'Inorganic sulfur compounds used to preserve color and freshness in sauces and wine.',
    why: 'Prevents enzymatic browning and oxidation.',
    impact: 'Can trigger severe bronchial asthma attacks in sulfite-sensitive people.',
    alt: 'Lemon juice, ascorbic acid (Vitamin C).'
  }
};

export const INITIAL_HISTORY_ITEMS = [
  {
    id: 'hist-1',
    time: 'Today, 1:15 PM',
    context: 'Lunch',
    icon: '🥣',
    thumbClass: 'thumb-green',
    name: 'Organic SuperGreen Bowl (Kairo Nutrition)',
    meta: 'Pea protein, chia, spirulina • 210 kcal • 24g Protein',
    statusTag: 'Safe For You',
    statusClass: 'tag-safe',
    score: 92,
    scoreClass: 'score-high',
    type: 'healthy'
  },
  {
    id: 'hist-2',
    time: 'Yesterday, 4:20 PM',
    context: 'Snack',
    icon: '🍫',
    thumbClass: 'thumb-red',
    name: 'Choco-Hazelnut Breakfast Spread',
    meta: 'High sugar (56%), palm oil, soy lecithin',
    statusTag: 'Dairy & Soy Flagged',
    statusClass: 'tag-hazard',
    score: 34,
    scoreClass: 'score-low',
    type: 'flagged'
  },
  {
    id: 'hist-3',
    time: 'Sep 6, 8:40 AM',
    context: 'Breakfast',
    icon: '🥛',
    thumbClass: 'thumb-green',
    name: 'Unsweetened Organic Almond Milk',
    meta: 'Filtered water, organic sprouted almonds, sea salt • 40 kcal',
    statusTag: 'Clean Ingredients',
    statusClass: 'tag-safe',
    score: 95,
    scoreClass: 'score-high',
    type: 'healthy'
  },
  {
    id: 'hist-4',
    time: 'Sep 5, 7:10 PM',
    context: 'Dinner',
    icon: '🥗',
    thumbClass: 'thumb-amber',
    name: 'Artisan Caesar Dressing Kit',
    meta: 'Canola oil, anchovies, potassium sorbate preservative',
    statusTag: 'Fish & Preservatives',
    statusClass: 'tag-caution',
    score: 56,
    scoreClass: 'score-mid',
    type: 'flagged'
  }
];

export const FAQ_DATA = [
  {
    q: 'How accurate is the AI OCR when scanning curved bottles or crumpled packaging?',
    a: 'NutriLens AI uses a multi-frame neural OCR engine that performs perspective rectification, de-warping, and contrast normalization in real time. It achieves a 99.4% character extraction accuracy on curved surfaces like tin cans, rounded plastic bottles, and reflective metallic snack pouches.'
  },
  {
    q: 'How does the Allergy Guardian detect hidden or derivative allergens?',
    a: 'Our database contains over 12,000 indexed food substances with mapped biochemical family trees. If you configure a Dairy allergy, the system flags not just "milk", but also casein, caseinate, whey protein, lactoglobulin, and clarified butter oil. It also scans the regulatory "may contain" and cross-contact disclaimers.'
  },
  {
    q: 'How is the 0–100 Health Score calculated?',
    a: 'Our scoring algorithm builds upon scientifically validated systems including the British Food Standards Agency model, Nutri-Score, and the NOVA food classification. Points are awarded for whole fiber, plant diversity, protein, and essential micronutrients, while deductions are applied for added refined sugars, high sodium, industrial emulsifiers, and synthetic chemical additives.'
  },
  {
    q: 'Can I scan my own photos or take pictures without installing an app?',
    a: 'Yes! You can use our web-based scanner right from your mobile Safari or Chrome browser without downloading anything. Simply click "Scan Food Label" to open your phone camera or upload a saved label photo.'
  },
  {
    q: 'Is my personal health and food history data kept private?',
    a: 'Your privacy is strictly protected. We never sell, monetize, or share your scanned food history or allergy data with insurance companies, ad networks, or third-party food brands. All scans are encrypted end-to-end.'
  }
];
