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
    { src: "/images/spices-1.jpg", alt: "Mi Costeñita spice display with dried chiles and spice packets" },
    { src: "/images/spices-2.jpg", alt: "Dried chile bags and corn husks on the Meat City spice island" },
    { src: "/images/spices-3.jpg", alt: "Rack of Órale! spice packets: cinnamon, cumin, oregano and more" },
  ],
  groups: [
    {
      emoji: "🌶️", title: "Dried chiles", tag: "bring the heat",
      items: [["Guajillo", "mild & fruity"], ["Ancho", "sweet & smoky"], ["Mulato", "rich, for mole"], ["Puya", "bright & spicy"], ["Chile de árbol", "hot"], ["Chile piquín", "tiny but fiery"]],
    },
    {
      emoji: "🫙", title: "Spices & herbs", tag: "whole or ground",
      items: [["Canela", "cinnamon"], ["Comino", "cumin"], ["Orégano", "Mexican oregano"], ["Laurel", "bay leaves"], ["Clavo", "cloves"], ["Pimienta negra", "black pepper"], ["Achiote", "annatto"], ["Anís", "anise"]],
    },
    {
      emoji: "🍵", title: "Teas & kitchen extras", tag: "abuela approved",
      items: [["Manzanilla", "chamomile tea"], ["Hierba buena", "mint tea"], ["Piloncillo", "cane sugar cone"], ["Hoja de maíz", "corn husks for tamales"], ["Chía", "chia seeds"], ["Pepitas", "pumpkin seeds"]],
    },
  ],
} as const;
