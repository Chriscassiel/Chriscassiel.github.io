/**
 * Run this in your local environment with firebase-admin
 * or use it as a reference for manual entry in the console.
 */

const motosSample = [
    // --- SUPERBIKE ---
    {
        marca: "BMW",
        modelo: "S 1000 RR",
        año: "2024",
        potencia: "210 CV",
        cilindrada: "999 cc",
        peso: "197",
        tipo: "Superbike",
        imagen: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=2069",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "Ducati",
        modelo: "Panigale V4",
        año: "2024",
        potencia: "215 CV",
        cilindrada: "1103 cc",
        peso: "198",
        tipo: "Superbike",
        imagen: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=2070",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "Honda",
        modelo: "CBR1000RR-R Fireblade SP",
        año: "2024",
        potencia: "218 CV",
        cilindrada: "1000 cc",
        peso: "201",
        tipo: "Superbike",
        imagen: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "Yamaha",
        modelo: "YZF-R1",
        año: "2024",
        potencia: "200 CV",
        cilindrada: "998 cc",
        peso: "201",
        tipo: "Superbike",
        imagen: "https://images.unsplash.com/photo-1609146103525-467988365922?q=80&w=2071",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "Kawasaki",
        modelo: "Ninja ZX-10R",
        año: "2024",
        potencia: "203 CV",
        cilindrada: "998 cc",
        peso: "207",
        tipo: "Superbike",
        imagen: "https://images.unsplash.com/photo-1581452445100-2f1903dfded6?q=80&w=2070",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "Suzuki",
        modelo: "GSX-R1000R",
        año: "2024",
        potencia: "202 CV",
        cilindrada: "1000 cc",
        peso: "202",
        tipo: "Superbike",
        imagen: "https://images.unsplash.com/photo-1644781432070-07bf60d8442e?q=80&w=2070",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "Kawasaki",
        modelo: "Ninja H2 ABS",
        año: "2024",
        potencia: "231 CV",
        cilindrada: "998 cc",
        peso: "238",
        tipo: "Superbike",
        imagen: "https://images.unsplash.com/photo-1590422502621-c148e479c3ac?q=80&w=2070",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },

    // --- NAKED ---
    {
        marca: "KTM",
        modelo: "1390 Super Duke R",
        año: "2024",
        potencia: "190 CV",
        cilindrada: "1350 cc",
        peso: "201",
        tipo: "Naked",
        imagen: "https://images.unsplash.com/photo-1614165936126-2ed18e471b1b?q=80&w=1974",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "Ducati",
        modelo: "Monster",
        año: "2024",
        potencia: "111 CV",
        cilindrada: "937 cc",
        peso: "188",
        tipo: "Naked",
        imagen: "https://images.unsplash.com/photo-1600869009498-8d429f88d4f5?q=80&w=2070",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "Yamaha",
        modelo: "MT-09",
        año: "2024",
        potencia: "119 CV",
        cilindrada: "890 cc",
        peso: "193",
        tipo: "Naked",
        imagen: "https://images.unsplash.com/photo-1614165935397-bb729177301c?q=80&w=1974",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "Triumph",
        modelo: "Street Triple RS",
        año: "2024",
        potencia: "128 CV",
        cilindrada: "765 cc",
        peso: "188",
        tipo: "Naked",
        imagen: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=2070",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "Kawasaki",
        modelo: "Z900RS",
        año: "2024",
        potencia: "111 CV",
        cilindrada: "948 cc",
        peso: "215",
        tipo: "Naked",
        imagen: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2070",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "Honda",
        modelo: "CB750 Hornet",
        año: "2024",
        potencia: "92 CV",
        cilindrada: "755 cc",
        peso: "190",
        tipo: "Naked",
        imagen: "https://images.unsplash.com/photo-1449495169669-7b118f960251?q=80&w=2071",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },

    // --- TRAIL ---
    {
        marca: "BMW",
        modelo: "R 1300 GS",
        año: "2024",
        potencia: "145 CV",
        cilindrada: "1300 cc",
        peso: "237",
        tipo: "Trail",
        imagen: "https://images.unsplash.com/photo-1629828453412-f0ba35b45044?q=80&w=2070",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "Honda",
        modelo: "CRF1100L Africa Twin",
        año: "2024",
        potencia: "102 CV",
        cilindrada: "1084 cc",
        peso: "231",
        tipo: "Trail",
        imagen: "https://images.unsplash.com/photo-1605342935276-80582846f481?q=80&w=2070",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "KTM",
        modelo: "1290 Super Adventure R",
        año: "2024",
        potencia: "160 CV",
        cilindrada: "1301 cc",
        peso: "228",
        tipo: "Trail",
        imagen: "https://images.unsplash.com/photo-1609146522718-ccff43194a02?q=80&w=2071",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "Suzuki",
        modelo: "V-Strom 1050DE",
        año: "2024",
        potencia: "107 CV",
        cilindrada: "1037 cc",
        peso: "252",
        tipo: "Trail",
        imagen: "https://images.unsplash.com/photo-1632766329432-841f391a2718?q=80&w=2070",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "Triumph",
        modelo: "Tiger 1200 GT",
        año: "2024",
        potencia: "150 CV",
        cilindrada: "1160 cc",
        peso: "245",
        tipo: "Trail",
        imagen: "https://images.unsplash.com/photo-1591637333010-025550a24559?q=80&w=2071",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "Ducati",
        modelo: "Multistrada V4",
        año: "2024",
        potencia: "170 CV",
        cilindrada: "1158 cc",
        peso: "240",
        tipo: "Trail",
        imagen: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=2070",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },

    // --- CUSTOM / RETRO ---
    {
        marca: "Harley-Davidson",
        modelo: "Fat Boy 114",
        año: "2024",
        potencia: "95 CV",
        cilindrada: "1868 cc",
        peso: "317",
        tipo: "Custom",
        imagen: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "Indian",
        modelo: "Scout Bobber",
        año: "2024",
        potencia: "100 CV",
        cilindrada: "1133 cc",
        peso: "251",
        tipo: "Custom",
        imagen: "https://images.unsplash.com/photo-1614165936306-382a32eb5b01?q=80&w=1935",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "Triumph",
        modelo: "Bonneville T120",
        año: "2024",
        potencia: "80 CV",
        cilindrada: "1200 cc",
        peso: "236",
        tipo: "Retro",
        imagen: "https://images.unsplash.com/photo-1627407005510-9cc0df08e925?q=80&w=2070",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "Royal Enfield",
        modelo: "Continental GT 650",
        año: "2024",
        potencia: "47 CV",
        cilindrada: "648 cc",
        peso: "214",
        tipo: "Retro",
        imagen: "https://images.unsplash.com/photo-1647416399478-f705e4630a9e?q=80&w=2071",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "Ducati",
        modelo: "Scrambler Icon",
        año: "2024",
        potencia: "73 CV",
        cilindrada: "803 cc",
        peso: "185",
        tipo: "Retro",
        imagen: "https://images.unsplash.com/photo-1600869009498-8d429f88d4f5?q=80&w=2070",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    },
    {
        marca: "BMW",
        modelo: "R 18",
        año: "2024",
        potencia: "91 CV",
        cilindrada: "1802 cc",
        peso: "345",
        tipo: "Custom",
        imagen: "https://images.unsplash.com/photo-1558981420-c532902e58ef?q=80&w=2070",
        enlace_oficial: "https://motos.coches.net/fichas_tecnicas/comparar.aspx"
    }
];

const gearSample = [
    {
        tipo: "casco",
        marca: "Shoei",
        modelo: "X-SPR Pro",
        precio: "899.00",
        imagen: "https://images.unsplash.com/photo-1594951016893-617bc9b69993?q=80&w=2070",
        enlace_oficial: "https://www.motocard.com/"
    }
];

const newsSample = [
    {
        titulo: "Jorge Martín se corona Campeón del Mundo",
        fecha: "2026-02-01",
        categoria: "MotoGP",
        resumen: "Una carrera histórica en Valencia decide el título más ajustado de la década.",
        imagen: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070",
        enlace_oficial: "https://www.motogp.com/"
    }
];

console.log("Estructura de Firestore lista para importar.");
