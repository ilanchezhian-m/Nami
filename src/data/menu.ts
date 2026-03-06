export const restaurantData = {
    restaurant: {
        en: {
            name: "Nami's Kitchen",
            tagline: "The fragrance of Chettinad soil and the taste of its spices on a single leaf! Home-style cooking.",
            description: "Chettinad special full meals and gravies/curries (Kulambus)."
        },
        ta: {
            name: "நமிஸ் கிச்சன்",
            tagline: "செட்டிநாடு மண்ணின் வாசமும் சுவாரஸ்யமான மசாலாக்களின் சுவையும் ஒரே இலையில்! வீட்டு முறை சமையல்.",
            description: "செட்டிநாடு சிறப்பு முழு சாப்பாடு மற்றும் குழம்பு வகைகள்."
        }
    },
    info: {
        en: {
            dietary: "Pure Vegetarian Only",
            services: "Parcel / Takeaway Available",
            // bulkOrders: "We undertake customized bulk orders for all vegetarian events.",
            timing: "We serve both morning and evening meals.",
            location: "Lakshmi Nagar & Bhavani"
        },
        ta: {
            dietary: "சைவம் மட்டும்",
            services: "பார்சல் வசதி உண்டு",
            // bulkOrders: "அனைத்து சைவ விசேஷங்களுக்கும் ஆர்டரின் பேரில் உணவு சமைத்து தரப்படும்.",
            timing: "காலை மற்றும் இரவு உணவுகள் கிடைக்கும்.",
            location: "லட்சுமி நகர் & பவானி"
        }
    },
    menu: {
        lunch_special: {
            price: 100,
            en: { name: "South Indian Meals", items: ["Sambar", "Poriyal", "Kootu", "Rasam", "Kara Kuzhambu", "Curd", "Appalam"] },
            ta: { name: "தென்னிந்திய சாப்பாடு", items: ["சாம்பார்", "பொரியல்", "கூட்டு", "ரசம்", "காரக்குழம்பு", "தயிர்", "அப்பளம்"] }
        },
        variety_rice: [
            {
                price: 45,
                en: { name: "Lemon Rice" },
                ta: { name: "எலுமிச்சை சாதம்" }
            },
            {
                price: 45,
                en: { name: "Curd Rice" },
                ta: { name: "தயிர் சாதம்" }
            },
            {
                price: 45,
                en: { name: "Tamarind Rice" },
                ta: { name: "புளி சாதம்" }
            },
            {
                price: 50,
                en: { name: "Tomato Rice" },
                ta: { name: "தக்காளி சாதம்" }
            },
            {
                price: 70,
                en: { name: "Veg Biryani", extra: "Gravy included" },
                ta: { name: "வெஜிடபிள் பிரியாணி", extra: "கிரேவியுடன்" }
            },
            {
                price: 75,
                en: { name: "Kalan Rice", extra: "Gravy included" },
                ta: { name: "காளான் சாதம்", extra: "கிரேவியுடன்" }
            }
        ],
        tiffin_items: [
            {
                price: 30,
                en: { name: "Idli", quantity: "2 pcs" },
                ta: { name: "இட்லி", quantity: "2 எண்ணிக்கை" }
            },
            {
                price: 40,
                en: { name: "Dosa", quantity: "2 pcs" },
                ta: { name: "தோசை", quantity: "2 எண்ணிக்கை" }
            },
            {
                price: 40,
                en: { name: "Chapathi", quantity: "2 pcs" },
                ta: { name: "சப்பாத்தி", quantity: "2 எண்ணிக்கை" }
            },
            {
                price: 60,
                en: { name: "Poori", quantity: "2 pcs" },
                ta: { name: "பூரி", quantity: "2 எண்ணிக்கை" }
            },
            {
                price: 45,
                en: { name: "Pongal", quantity: "1 bowl" },
                ta: { name: "பொங்கல்", quantity: "1 கிண்ணம்" }
            },
            {
                price: 45,
                en: { name: "Khichdi", quantity: "1 bowl" },
                ta: { name: "கிச்சடி", quantity: "1 கிண்ணம்" }
            },
            {
                price: 45,
                en: { name: "Upma", quantity: "1 bowl" },
                ta: { name: "உப்புமா", quantity: "1 கிண்ணம்" }
            }
        ]
    },
    contact: {
        en: { callLabel: "To Order, Call Us" },
        ta: { callLabel: "ஆர்டர் செய்ய, அழைக்கவும்" },
        phones: ["8220391997", "9952139577", "9345940995"]
    },
    ui: {
        en: {
            lunchTitle: "Lunch Special",
            varietyTitle: "Variety Rice",
            tiffinTitle: "Tiffin Items"
        },
        ta: {
            lunchTitle: "மதிய உணவு",
            varietyTitle: "கலவை சாதம்",
            tiffinTitle: "சிற்றுண்டி"
        }
    }
};
