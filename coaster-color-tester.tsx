"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Structure: baseColors[colorIndex].accents[accentType] = image path
const baseColors = [
  {
    name: "Pearl Snow White",
    color: "#F8F8FF",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/pearl-snow-white_0b37a7ba-5780-4964-b181-7dcc4d49e3ae.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Pearl_Snow_White-gold.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Pearl_Snow_White_f9458d19-bc3d-46f0-b629-5b9a67c05f4d.png",
      copper: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Pearl_Snow_White-copper.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Pearl+Snow+White+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Pearl+Snow+White+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Pearl+Snow+White+Metallic+Copper",
    },
  },
  {
    name: "White Beige Cream",
    color: "#F5F5DC",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/white-beige-cream.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/White_Beige_Cream-gold.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/White_Beige_Cream_a363ac61-c3ba-4de7-89fe-782509aed4dd.png",
      copper: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/White_Beige_Cream-copper.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=White+Beige+Cream+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=White+Beige+Cream+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=White+Beige+Cream+Metallic+Copper",
    },
  },
  {
    name: "Coastal Sand Ivory",
    color: "#FFFFF0",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/coastal-sand-ivory.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Coastal_Sand_Ivory-gold.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Coastal_Sand_Ivory_7b22f173-fc01-4422-a34f-0dc87681c5ce.png",
      copper: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Coastal_Sand_Ivory-copper.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Coastal+Sand+Ivory+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Coastal+Sand+Ivory+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Coastal+Sand+Ivory+Metallic+Copper",
    },
  },
  {
    name: "Tahitian Sand Deep Beige",
    color: "#D2B48C",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/tahitian_sand_deep_beige.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Tahitian_Sand_Beige.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Tahitian_Sand_Beige_061e05ca-60f9-4166-ba9e-ae29075989ba.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Tahitian_Sand_Beige_779a807d-ad3a-4481-b707-9ead5a7aef79.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Tahitian+Sand+Deep+Beige+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Tahitian+Sand+Deep+Beige+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Tahitian+Sand+Deep+Beige+Metallic+Copper",
    },
  },
  {
    name: "Marigold Sun Yellow",
    color: "#FFD700",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/marigold-sun-yellow.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Marigold_Sun_Yellow.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Marigold_Sun_Yellow_26f658a0-fbbb-464d-a3d4-4656fe6ac127.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Marigold_Sun_Yellow_e56d48b0-c3fd-4756-b6cf-04492bfd5b1f.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Marigold+Sun+Yellow+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Marigold+Sun+Yellow+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Marigold+Sun+Yellow+Metallic+Copper",
    },
  },
  {
    name: "Apricot Honey Yellow",
    color: "#FFCC5C",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/apricot-honey-yellow.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Apricot_Honey_Yellow.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Apricot_Honey_Yellow_ed850759-cd47-42c8-ad96-c813d93de4ba.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Apricot_Honey_Yellow_d891d27c-6908-4b6c-898d-26faebb385d2.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Apricot+Honey+Yellow+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Apricot+Honey+Yellow+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Apricot+Honey+Yellow+Metallic+Copper",
    },
  },
  {
    name: "Mango Pineapple Yellow",
    color: "#FFCC33",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/mango-pineapple-yellow.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Mango_Pineapple_Yellow.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Mango_Pineapple_Yellow_5d199bc2-1d20-4e7c-936b-9df565bab80a.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Mango_Pineapple_Yellow_f7960a1b-cb11-4022-963a-893a3c2a24a2.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Mango+Pineapple+Yellow+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Mango+Pineapple+Yellow+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Mango+Pineapple+Yellow+Metallic+Copper",
    },
  },
  {
    name: "Glowy Blush Peach",
    color: "#FFCBA4",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/glowly-blush-peach.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Glowy_Blush_Peach.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Glowy_Blush_Peach_86afdbdd-4b89-4263-beb2-18db3c1e2295.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Glowy_Blush_Peach_c4d9d963-165d-4f73-971d-571badf38b62.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Glowy+Blush+Peach+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Glowy+Blush+Peach+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Glowy+Blush+Peach+Metallic+Copper",
    },
  },
  {
    name: "California Poppy Orange",
    color: "#FF8C00",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/california-poppy-orange.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/California_Poppy_Orange.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/California_Poppy_Orange_241bf68d-c090-48ab-ac7a-7c4dcd21b506.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/California_Poppy_Orange_62f76792-66ae-4dc7-8e29-bd7ed5049517.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=California+Poppy+Orange+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=California+Poppy+Orange+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=California+Poppy+Orange+Metallic+Copper",
    },
  },
  {
    name: "Pumpkin Spice Orange",
    color: "#FF7518",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/pumpkin-spice-orange.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Pumpkin_Spice_Orange.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Pumpkin_Spice_Orange_2ead9300-f1a9-480e-8e5e-82140843a348.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Pumpkin_Spice_Orange_469177e7-a349-4476-afb4-77d678ff425e.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Pumpkin+Spice+Orange+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Pumpkin+Spice+Orange+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Pumpkin+Spice+Orange+Metallic+Copper",
    },
  },
  {
    name: "Caramel Toffee Orange",
    color: "#D2691E",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/caramel-toffee-orange.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Caramel_Toffee_Orange.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Caramel_Toffee_Orange_263c73ea-8493-4d30-b7d2-53a9af4d9033.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Caramel_Toffee_Orange_5235faef-b24f-4064-94ea-90f1d413843f.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Caramel+Toffee+Orange+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Caramel+Toffee+Orange+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Caramel+Toffee+Orange+Metallic+Copper",
    },
  },
  {
    name: "Chocolate Mocha Brown",
    color: "#8B4513",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/chocolate-mocha-brown.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Chocolate_Mocha_Brown.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Chocolate_Mocha_Brown_6a5216ba-7c35-4c1b-b0e2-01f4556f719f.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Chocolate_Mocha_Brown_8a0ed9ba-95e2-40bb-947f-783782d75993.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Chocolate+Mocha+Brown+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Chocolate+Mocha+Brown+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Chocolate+Mocha+Brown+Metallic+Copper",
    },
  },
  {
    name: "Crimson Cherry Red",
    color: "#DC143C",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/crimson-cherry-red.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Crimson_Cherry_Red.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Crimson_Cherry_Red_e2e545e1-a01f-4aa4-90e4-3175ba27b77c.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Crimson_Cherry_Red_fad688e9-698b-446e-bfd2-f1362bd933a3.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Crimson+Cherry+Red+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Crimson+Cherry+Red+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Crimson+Cherry+Red+Metallic+Copper",
    },
  },
  {
    name: "Fuchsia Hot Pink",
    color: "#FF1493",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/fuchsia-hot-pink.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Fuchsia_Hot_Pink.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Fuchsia_Hot_Pink_e49ccbe5-83f1-4afc-8dc7-ef4f86b443a0.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Fuchsia_Hot_Pink_5b4e0232-8d45-41aa-9a78-113d06743121.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Fuchsia+Hot+Pink+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Fuchsia+Hot+Pink+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Fuchsia+Hot+Pink+Metallic+Copper",
    },
  },
  {
    name: "Cherry Blossom Pink",
    color: "#FFB7C5",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/cherry-blossom-pink.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Cherry_Blossom_Pink.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Cherry_Blossom_Pink_4370959c-a8a4-4cc0-b07e-6e9c5a2399f6.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Cherry_Blossom_Pink_09cdcc65-1e1f-462f-b129-126881feb010.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Cherry+Blossom+Pink+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Cherry+Blossom+Pink+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Cherry+Blossom+Pink+Metallic+Copper",
    },
  },
  {
    name: "Obsidian Midnight Purple",
    color: "#2F1B69",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/obsidian-midnight-purple.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Obsidian_Midnight_Purple.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Obsidian_Midnight_Purple_64e38bb4-e54e-4b48-b917-0b78c7a9b005.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Obsidian_Midnight_Purple_0f65f98c-1673-4e30-873c-84e351459ba8.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Obsidian+Midnight+Purple+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Obsidian+Midnight+Purple+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Obsidian+Midnight+Purple+Metallic+Copper",
    },
  },
  {
    name: "Amethyst Royal Indigo",
    color: "#6A0DAD",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/amethyst-royal-indigo.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Amethyst_Royal_Indigo.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Amethyst_Royal_Indigo_8a96f70b-fa2b-4be3-a09c-b30242d16109.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Amethyst_Royal_Indigo_f9a7dbea-972c-40a1-bf72-98864dad1852.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Amethyst+Royal+Indigo+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Amethyst+Royal+Indigo+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Amethyst+Royal+Indigo+Metallic+Copper",
    },
  },
  {
    name: "Amethyst Royal Indigo Plum",
    color: "#8E4585",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/amethyst-royal-indigo-plum.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Amethyst_Royal_Indigo_Plum.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Amethyst_Royal_Indigo_Plum_bda46065-b93f-47f6-b5d1-8f083cc14114.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Amethyst_Royal_Indigo_Plum_ee125332-6d6d-462d-9835-4a7daae0b7dd.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Amethyst+Royal+Indigo+Plum+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Amethyst+Royal+Indigo+Plum+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Amethyst+Royal+Indigo+Plum+Metallic+Copper",
    },
  },
  {
    name: "Royal Velvet Petunia",
    color: "#9932CC",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/royal-velvet-petunia.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Royal_Velvet_Petunia.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Royal_Velvet_Petunia_bbda4afc-c2e3-4dc3-bf06-6b533d9e657f.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Royal_Velvet_Petunia_02f511cc-edf6-4e79-a515-13bf3eca4027.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Royal+Velvet+Petunia+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Royal+Velvet+Petunia+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Royal+Velvet+Petunia+Metallic+Copper",
    },
  },
  {
    name: "Mystic Violet Iris",
    color: "#8A2BE2",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/mystic-violet-iris.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Mystic_Violet_Iris.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Mystic_Violet_Iris_f9b7130b-4133-4f59-9234-dfd4b3540bee.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Mystic_Violet_Iris_abe5a325-d73c-4fdb-9f20-8927c79aa91f.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Mystic+Violet+Iris+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Mystic+Violet+Iris+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Mystic+Violet+Iris+Metallic+Copper",
    },
  },
  {
    name: "Mauve Rose Lilac",
    color: "#E0B0FF",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/mauve-rose-lilac.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Mauve_Rose_Lilac.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Mauve_Rose_Lilac_838509a0-1769-41c5-aa93-803729317211.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Mauve_Rose_Lilac_d7421258-b0fc-4524-bb7d-1670408d6631.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Mauve+Rose+Lilac+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Mauve+Rose+Lilac+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Mauve+Rose+Lilac+Metallic+Copper",
    },
  },
  {
    name: "Moonlight Orchid Lavender",
    color: "#E6E6FA",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/moonlight-orchid-lavender.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Moonlight_Orchid_Lavender-gold.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Moonlight_Orchid_Lavender_7c97bcf2-1c5c-43cf-82db-daea7692dfb1.png",
      copper: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Moonlight_Orchid_Lavender-copper.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Moonlight+Orchid+Lavender+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Moonlight+Orchid+Lavender+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Moonlight+Orchid+Lavender+Metallic+Copper",
    },
  },
  {
    name: "Pacific Ocean Blue",
    color: "#0077BE",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/pacific-ocean-blue.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Pacific_Ocean_Blue.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Pacific_Ocean_Blue_c782641b-94be-4fdc-b291-e5d3b5ee4ec3.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Pacific_Ocean_Blue_39a62ba4-6c10-4b5f-a516-c465c7661ad3.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Pacific+Ocean+Blue+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Pacific+Ocean+Blue+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Pacific+Ocean+Blue+Metallic+Copper",
    },
  },
  {
    name: "Deep Ocean Blue",
    color: "#003366",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/deep-ocean-blue.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Deep_Ocean_Blue.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Deep_Ocean_Blue_9f6cf7c2-9cb3-4eba-baf1-1d2f8dfc4aa0.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Deep_Ocean_Blue_dce60c0b-34e5-43ec-bbd7-268ca6f3ca7a.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Deep+Ocean+Blue+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Deep+Ocean+Blue+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Deep+Ocean+Blue+Metallic+Copper",
    },
  },
  {
    name: "Baby Sky Blue",
    color: "#87CEEB",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/baby-sky-blue.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Baby_Sky_Blue.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Baby_Sky_Blue_62d6abc1-635d-4917-9269-310fdd6b7502.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Baby_Sky_Blue_71910e38-d010-44a2-b612-8f310fda3947.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Baby+Sky+Blue+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Baby+Sky+Blue+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Baby+Sky+Blue+Metallic+Copper",
    },
  },
  {
    name: "Caribbean Cerulean Blue",
    color: "#007BA7",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/caribbean-cerulean-blue.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Caribbean_Cerulean_Blue.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Caribbean_Cerulean_Blue_80b736da-ec86-4a20-b5c9-0cc69e3ced36.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Caribbean_Cerulean_Blue_c08b8155-78f4-454a-808c-22b1a2e9244e.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Caribbean+Cerulean+Blue+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Caribbean+Cerulean+Blue+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Caribbean+Cerulean+Blue+Metallic+Copper",
    },
  },
  {
    name: "Orchid Azure Blue",
    color: "#4169E1",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/orchid-azure-blue.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Orchid_Azure_Blue.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Orchid_Azure_Blue_85c02f2d-b50f-404b-8a69-52ebe2acd9fc.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Orchid_Azure_Blue_34a0889f-0ec8-4e4e-ad57-3cad5a7d5ce7.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Orchid+Azure+Blue+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Orchid+Azure+Blue+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Orchid+Azure+Blue+Metallic+Copper",
    },
  },
  {
    name: "Sea Glass Turquoise",
    color: "#40E0D0",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/sea-glass-turquoise.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Sea_Glass_Turquoise.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Sea_Glass_Turquoise_2ebfa8ca-d7ff-40a1-9670-fe78e37b83fc.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Sea_Glass_Turquoise_b5cf088e-8830-43a8-876c-318f3af4fe7f.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Sea+Glass+Turquoise+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Sea+Glass+Turquoise+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Sea+Glass+Turquoise+Metallic+Copper",
    },
  },
  {
    name: "Deep Tealwood Pine",
    color: "#355E3B",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/deep-tealwood-pine.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Deep_Tealwood_Pine.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Deep_Tealwood_Pine_1f18237f-3300-4c2b-bae9-3c684d33192b.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Deep_Tealwood_Pine_e88b777a-31e6-40e3-91c3-384997f8d1b7.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Deep+Tealwood+Pine+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Deep+Tealwood+Pine+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Deep+Tealwood+Pine+Metallic+Copper",
    },
  },
  {
    name: "Mermaid Aqua Green",
    color: "#7FFFD4",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/mermaid-aqua-green.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Mermaid_Aqua_Green.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Mermaid_Aqua_Green_0689c74f-aa72-47b1-8c66-b83e513ce058.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Mermaid_Aqua_Green_0dde3faf-b6da-4c25-98c8-8f2df0273aba.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Mermaid+Aqua+Green+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Mermaid+Aqua+Green+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Mermaid+Aqua+Green+Metallic+Copper",
    },
  },
  {
    name: "Coral Reef Teal",
    color: "#008080",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/coral-reef-teal.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Coral_Reef_Teal.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Coral_Reef_Teal_6a4ae179-2328-4c74-b89e-7bb057e0d974.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Coral_Reef_Teal_c0f05fda-fe3d-45b3-a7a1-8aa370747a07.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Coral+Reef+Teal+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Coral+Reef+Teal+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Coral+Reef+Teal+Metallic+Copper",
    },
  },
  {
    name: "Seafoam Misty Green",
    color: "#93E9BE",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/seafoam-misty-green.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Seafoam_Misty_Green.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Seafoam_Misty_Green_379adb5d-72c0-4aad-96b5-0780791543f9.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Seafoam_Misty_Green_e00507b1-616a-4c10-9964-0f36821b5c21.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Seafoam+Misty+Green+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Seafoam+Misty+Green+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Seafoam+Misty+Green+Metallic+Copper",
    },
  },
  {
    name: "Deep ocean Sea Green",
    color: "#2E8B57",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/deep-ocean-sea-green.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Deep_Ocean_Sea_Green.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Deep_Ocean_Sea_Green_2d5492ee-a601-4fd2-b828-b7d4a16a9c02.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Deep_Ocean_Sea_Green_336fa95b-65ea-4618-ae59-5f509c2449b5.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Deep+ocean+Sea+Green+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Deep+ocean+Sea+Green+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Deep+ocean+Sea+Green+Metallic+Copper",
    },
  },
  {
    name: "Forest Olive Green",
    color: "#556B2F",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/forest-olive-green.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Forest_Olive_Green.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Forest_Olive_Green_bf421739-604f-4e67-9dca-bf9a682426a4.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Forest_Olive_Green_e86afb89-5a15-482f-b210-025a69c760b9.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Forest+Olive+Green+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Forest+Olive+Green+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Forest+Olive+Green+Metallic+Copper",
    },
  },
  {
    name: "Canopy Olive Moss",
    color: "#8FBC8F",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/canopy-olive-moss.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Canopy_Olive_Moss.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Canopy_Olive_Moss_981e463a-8ca7-4f46-8672-97f4a6276c83.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Canopy_Olive_Moss_40df6b08-0ed5-4d3f-98f1-f7b41f4e11d7.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Canopy+Olive+Moss+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Canopy+Olive+Moss+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Canopy+Olive+Moss+Metallic+Copper",
    },
  },
  {
    name: "Hunter Cascade Pine",
    color: "#355E3B",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/hunter-cascade-pine.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Hunter_Cascade_Pine.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Hunter_Cascade_Pine_a19124ef-9f13-4653-ab5c-32aa04b5292c.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Hunter_Cascade_Pine_dd8088de-6982-4ad0-94d4-7f10a6f13113.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Hunter+Cascade+Pine+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Hunter+Cascade+Pine+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Hunter+Cascade+Pine+Metallic+Copper",
    },
  },
  {
    name: "Garden Fern Willow",
    color: "#4F7942",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/garden-fern-willow.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Garden_Fern_Willow.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Garden_Fern_Willow_8c7f0fa9-a3fd-491f-a624-9026188514b6.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Garden_Fern_Willow_605b23a2-160f-4110-b7d7-bc60f97b04d5.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Garden+Fern+Willow+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Garden+Fern+Willow+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Garden+Fern+Willow+Metallic+Copper",
    },
  },
  {
    name: "Sage Mint Green",
    color: "#9CAF88",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/sage-mint-green.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Sage_Mint_Green.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Sage_Mint_Green_def45c41-408f-4a61-aae1-6f1c21f349df.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Sage_Mint_Green_697739aa-0ac6-4dc1-9c5c-b9f9cfcb4ec2.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Sage+Mint+Green+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Sage+Mint+Green+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Sage+Mint+Green+Metallic+Copper",
    },
  },
  {
    name: "Botanical Green Meadow",
    color: "#7CB342",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/botanical-meadow-green.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Botanical_Green_Meadow.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Botanical_Green_Meadow_40641f5c-3a07-44ad-808b-d91417cfe08b.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Botanical_Green_Meadow_802f38cc-5f4a-4061-8054-0f6cd0844363.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Botanical+Green+Meadow+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Botanical+Green+Meadow+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Botanical+Green+Meadow+Metallic+Copper",
    },
  },
  {
    name: "Herbal Aloe Green",
    color: "#8FBC8F",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/herbal-aloe-green.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Herbal_Aloe_Green.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Herbal_Aloe_Green_6c0481a0-b299-4e84-ab48-a2e457ad89b1.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Herbal_Aloe_Green_a9778906-1f13-4c82-96b2-2d6328768621.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Herbal+Aloe+Green+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Herbal+Aloe+Green+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Herbal+Aloe+Green+Metallic+Copper",
    },
  },
  {
    name: "Midnight Raven Black",
    color: "#000000",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/midnight-raven-black.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Midnight_Black_Raven.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Midnight_Black_Raven_267cea98-1c55-466b-9e78-ba213c768630.png",
      copper:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Midnight_Black_Raven_ad4738d5-de56-401f-ae43-70fd558aa83c.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Midnight+Raven+Black+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Midnight+Raven+Black+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Midnight+Raven+Black+Metallic+Copper",
    },
  },
  {
    name: "Iridescent White Opal",
    color: "linear-gradient(45deg, #FFFFFF 0%, #E6E6FA 25%, #F0F8FF 50%, #FFFACD 75%, #FFFFFF 100%)",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/iridescent-white-opal.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Iridescent_White_Opal-gold.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Iridescent_White_Opal_ff221953-784c-43b8-81ad-93da3b00516d.png",
      copper: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Iridescent_White_Opal-copper.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Iridescent+White+Opal+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Iridescent+White+Opal+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Iridescent+White+Opal+Metallic+Copper",
    },
  },
  {
    name: "Iridescent Pink Opal",
    color: "linear-gradient(45deg, #FFB6C1 0%, #FFC0CB 25%, #FFCCCB 50%, #FFE4E1 75%, #FFB6C1 100%)",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/iridescent-pink-opal.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Iridescent_Pink_Opal-gold.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Iridescent_Pink_Opal_49fe04b3-4060-432a-bf27-181c53db4767.png",
      copper: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Iridescent_Pink_Opal-copper.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Iridescent+Pink+Opal+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Iridescent+Pink+Opal+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Iridescent+Pink+Opal+Metallic+Copper",
    },
  },
  {
    name: "Iridescent Purple Opal",
    color: "linear-gradient(45deg, #DDA0DD 0%, #E6E6FA 25%, #D8BFD8 50%, #DDA0DD 75%, #E6E6FA 100%)",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/iridescent-purple-opal.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Iridescent_Purple_Opal-gold.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Iridescent_Purple_Opal_642226a3-c8c9-41f0-958e-016024bfe41f.png",
      copper: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Iridescent_Purple_Opal-copper.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Iridescent+Purple+Opal+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Iridescent+Purple+Opal+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Iridescent+Purple+Opal+Metallic+Copper",
    },
  },
  {
    name: "Iridescent Green Opal",
    color: "linear-gradient(45deg, #98FB98 0%, #90EE90 25%, #8FBC8F 50%, #98FB98 75%, #90EE90 100%)",
    imageUrl: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/iridescent-green-opal.png",
    accents: {
      gold: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Iridescent_Green_Opal-gold.png",
      silver:
        "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Iridescent_Green_Opal_68288cb6-7906-4abd-bdce-c6b13f81853e.png",
      copper: "https://cdn.shopify.com/s/files/1/0600/6397/3548/files/Iridescent_Green_Opal-copper.png",
      "metallic-gold": "/placeholder.svg?height=200&width=200&text=Iridescent+Green+Opal+Metallic+Gold",
      "metallic-silver": "/placeholder.svg?height=200&width=200&text=Iridescent+Green+Opal+Metallic+Silver",
      "metallic-copper": "/placeholder.svg?height=200&width=200&text=Iridescent+Green+Opal+Metallic+Copper",
    },
  },
]

const accentColors = [
  {
    name: "Gold Leaf Flakes",
    key: "gold",
    metallic: "url('https://cdn.shopify.com/s/files/1/0600/6397/3548/files/gold.png')",
    isImage: true,
  },
  {
    name: "Silver Leaf Flakes",
    key: "silver",
    metallic: "url('https://cdn.shopify.com/s/files/1/0600/6397/3548/files/silver.png')",
    isImage: true,
  },
  {
    name: "Copper Leaf Flakes",
    key: "copper",
    metallic: "url('https://cdn.shopify.com/s/files/1/0600/6397/3548/files/copper.png')",
    isImage: true,
  },
]

function getThumbnailColor(color) {
  if (color.imageUrl) {
    return `url('${color.imageUrl}') center/cover`
  }
  return color.color
}

export default function CoasterColorTester() {
  const [selectedBaseColor, setSelectedBaseColor] = useState(baseColors[0])
  const [selectedAccentColor, setSelectedAccentColor] = useState(accentColors[0])

  // Get the actual coaster image for the current combination
  const getCurrentCoasterImage = () => {
    console.log("Selected base:", selectedBaseColor.name)
    console.log("Selected accent:", selectedAccentColor.key)

    // Use the accent mapping from the selected base color
    const defaultImage = selectedBaseColor.accents[selectedAccentColor.key as keyof typeof selectedBaseColor.accents]
    console.log("Using image:", defaultImage)
    return defaultImage
  }

  // Get thumbnail image for color selection (we'll use the gold version as default)
  const getThumbnailImage = (color) => {
    return color.accents.gold
  }

  // Create a visual preview combining base color and accent
  const getPreviewStyle = () => {
    const baseColor = selectedBaseColor.color
    const accentColor = selectedAccentColor.metallic

    return {
      background: `radial-gradient(circle at 30% 30%, ${accentColor.includes("gradient") ? "#FFD700" : accentColor} 0%, ${accentColor.includes("gradient") ? "#FFD700" : accentColor} 15%, ${baseColor} 25%, ${baseColor} 100%)`,
    }
  }

  return (
    <div className="min-h-screen p-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          
          
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Preview Section - Takes up 2 columns (left side, larger) */}
          <div className="lg:col-span-2">
            <Card className="w-full h-full">
              <CardHeader>
                <CardTitle className="text-center tracking-wider font-semibold">{"PREVIEW"}</CardTitle>
                <CardDescription className="text-center">
                  {selectedBaseColor.name} with {selectedAccentColor.name} accent
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center space-y-6 bg-transparent text-transparent min-h-[600px]">
                {/* Product Image Preview */}
                <div className="relative flex justify-center items-center rounded-lg p-4 bg-transparent text-transparent">
                  <img
                    src={getCurrentCoasterImage() || "/placeholder.svg"}
                    alt={`${selectedBaseColor.name} with ${selectedAccentColor.name} accent`}
                    className="w-[32rem] h-[32rem] object-contain object-center rounded-lg shadow-2xl mx-auto bg-transparent text-transparent border-transparent"
                    style={{
                      backgroundColor: "transparent",
                      mixBlendMode: "multiply",
                    }}
                    onLoad={() => console.log("Image loaded successfully:", getCurrentCoasterImage())}
                    onError={(e) => {
                      console.log("Image failed to load:", getCurrentCoasterImage())
                      console.log("Error details:", e)
                    }}
                  />
                </div>

                {/* Disclaimer Text */}
                <div className="text-center max-w-md mx-auto">
                  <p className="text-sm text-gray-600 italic">
                    *Please note: the light area on the right side is a glare from the lighting and not part of the
                    actual coaster design or function
                  </p>
                </div>

                {/* Color Info */}
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <div
                      className="w-6 h-6 rounded-full border-2 border-gray-300"
                      style={{
                        backgroundColor: selectedBaseColor.imageUrl ? "transparent" : selectedBaseColor.color,
                        backgroundImage: selectedBaseColor.imageUrl ? `url('${selectedBaseColor.imageUrl}')` : "none",
                        backgroundSize: selectedBaseColor.imageUrl ? "cover" : "auto",
                        backgroundPosition: selectedBaseColor.imageUrl ? "center" : "initial",
                        backgroundRepeat: selectedBaseColor.imageUrl ? "no-repeat" : "initial",
                      }}
                    />
                    <Badge variant="secondary">{selectedBaseColor.name}</Badge>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div
                      className="w-6 h-6 rounded border-2 border-gray-300"
                      style={{
                        backgroundColor: selectedAccentColor.isImage ? "transparent" : selectedAccentColor.metallic,
                        backgroundImage: selectedAccentColor.isImage ? selectedAccentColor.metallic : "none",
                        backgroundSize: selectedAccentColor.isImage ? "cover" : "auto",
                        backgroundPosition: selectedAccentColor.isImage ? "center" : "initial",
                        backgroundRepeat: selectedAccentColor.isImage ? "no-repeat" : "initial",
                      }}
                    />
                    <Badge variant="outline">{selectedAccentColor.name} Accent</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Color Selection Section - Takes up 1 column (right side) */}
          <div className="lg:col-span-1 space-y-6">
            {/* Base Colors */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center tracking-wider">{"COASTER COLORS"}</CardTitle>
                <CardDescription className="text-center">Select your pigment color </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-6 gap-2">
                  {baseColors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedBaseColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all hover:scale-110 ${
                        selectedBaseColor.name === color.name
                          ? "border-gray-900 ring-2 ring-gray-900 ring-offset-2"
                          : "border-gray-300 hover:border-gray-500"
                      }`}
                      title={color.name}
                      style={{
                        backgroundColor: color.imageUrl ? "transparent" : color.color,
                        backgroundImage: color.imageUrl ? `url('${color.imageUrl}')` : "none",
                        backgroundSize: color.imageUrl ? "cover" : "auto",
                        backgroundPosition: color.imageUrl ? "center" : "initial",
                        backgroundRepeat: color.imageUrl ? "no-repeat" : "initial",
                      }}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Selected: <span className="font-medium">{selectedBaseColor.name}</span>
                </p>
              </CardContent>
            </Card>

            {/* Accent Colors */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Accent Color</CardTitle>
                <CardDescription className="text-center">
                  Please select an accent color to compliment the center and rim edge of your coasters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center gap-4">
                  {accentColors.map((accent) => (
                    <div key={accent.name} className="flex flex-col items-center space-y-2">
                      <button
                        onClick={() => setSelectedAccentColor(accent)}
                        className={`w-20 h-20 rounded-full border-2 transition-all hover:scale-110 ${
                          selectedAccentColor.name === accent.name
                            ? "border-gray-900 ring-2 ring-gray-900 ring-offset-2"
                            : "border-gray-300 hover:border-gray-500"
                        }`}
                        style={{
                          backgroundColor: accent.isImage ? "transparent" : accent.metallic,
                          backgroundImage: accent.isImage ? accent.metallic : "none",
                          backgroundSize: accent.isImage ? "cover" : "auto",
                          backgroundPosition: accent.isImage ? "center" : "initial",
                          backgroundRepeat: accent.isImage ? "no-repeat" : "initial",
                        }}
                      />
                      <p className="text-xs font-medium text-center leading-tight">{accent.name}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-3 text-center">
                  Selected: <span className="font-medium">{selectedAccentColor.name}</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
