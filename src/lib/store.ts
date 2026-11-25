export const STORE = {
  name: "Meat City Supermarket",
  street: "15 W Fairview Ave",
  city: "Montgomery, AL 36105",
  phone: "(334) 676-1433",
  phoneHref: "tel:+13346761433",
  hours: "8 AM – 8 PM, every day",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=15+W+Fairview+Ave+Montgomery+AL+36105",
  mapEmbed: "https://www.google.com/maps?q=15+W+Fairview+Ave,+Montgomery,+AL+36105&output=embed",
};

export const AISLES = [
  { title: "The Meat Counter", tag: "our specialty", img: "/images/meat.jpg", text: "Fresh-cut beef, pork and chicken, steaks, ribs and family packs at prices that make sense." },
  { title: "Butcher Favorites", tag: "grill ready", img: "/images/more-meat.jpg", text: "Marinated cuts, sausages, carne asada and party-size packs for cookouts." },
  { title: "Fresh Produce", tag: "picked daily", img: "/images/produce.jpg", text: "A big produce section with everyday fruits and veggies plus chiles, tomatillos and more." },
  { title: "Dairy & Cold", tag: "stay chill", img: "/images/dairy.jpg", text: "Milk, eggs, cheese, crema, yogurt and the cold drinks you came in for." },
  { title: "Grocery Aisles", tag: "the essentials", img: "/images/aisles.jpg", text: "Pantry staples, snacks, spices and Mexican groceries all in one stop." },
];

/** Current in-store deal: mix and match any five items from these departments. */
export const SALE = {
  count: 5,
  price: "$19.99",
  departments: ["Meat", "Produce", "Dairy", "Frozen"],
} as const;

/** What shoppers can buy in bulk. */
export const BULK = {
  meat: "Family packs and big cuts of beef, pork and chicken, perfect for cookouts and stocking the freezer.",
  mexican: ["Spices", "Snacks", "Drinks", "& more"],
} as const;

/** Mexican spices page: what's on the spice racks (no prices shown, per the owner). */
export const SPICES = {
  brands: ["Mi Costeñita", "Órale!"],
  photos: [
    { src: "/images/spices-1.jpg", alt: "Mi Costeñita spice island with chile bags and herb packets at Meat City" },
    { src: "/images/spices-2.jpg", alt: "Órale! rack of ancho, guajillo, New Mexico and árbol chile bags" },
    { src: "/images/spices-3.jpg", alt: "Mi Costeñita botanas and dried chiles island with corn husks on top" },
    { src: "/images/spices-4.jpg", alt: "Long aisle of ground spices, adobo and sazón jars" },
  ],
  groups: [
    {
      emoji: "🌶️", title: "Dried chiles", tag: "bring the heat",
      items: [["Guajillo", "mild & fruity"], ["Ancho", "sweet & smoky"], ["New Mexico", "earthy, gentle heat"], ["Chile de árbol", "hot & sharp"], ["Puya", "bright & spicy"], ["Chiltepín", "tiny but fiery"]],
    },
    {
      emoji: "🫙", title: "Spices & herbs", tag: "whole or ground",
      items: [["Comino", "warm & earthy"], ["Canela entera", "sweet cinnamon sticks"], ["Anís estrella", "licorice-sweet"], ["Ajo granulado", "toasty garlic"], ["Laurel", "bay leaf, herbal"], ["Epazote", "bold, for beans"], ["Tomillo", "thyme, woodsy"], ["Ajonjolí", "sesame, nutty"], ["Birria & menudo mix", "ready-to-go blends"], ["Adobo & sazón", "all-purpose seasoning"]],
    },
    {
      emoji: "🍵", title: "Teas & kitchen extras", tag: "abuela approved",
      items: [["Flor de manzanilla", "calming chamomile"], ["Hierbabuena", "cool mint"], ["Flor de Jamaica", "tart hibiscus"], ["Té de limón", "lemongrass, citrusy"], ["Rosa de Castilla", "soft & floral"], ["Hoja para tamal", "corn husks for tamales"], ["Pepitas", "pumpkin seeds"]],
    },
  ],
} as const;
