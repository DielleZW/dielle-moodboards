/* DIÉLLE CLIENT MOODBOARDS
   Each wedding has its own unique client link.
   Example: ?client=deanne-devan

   Image filenames are relative to the website root.
*/

window.DIELLE_CLIENTS = {

  // ==========================================
  // SAMPLE WEDDING
  // ==========================================

  "sample-wedding": {

    couple: "Your Names Here",
    date: "Your Wedding Date",
    venue: "Wedding Venue",
    kicker: "A wedding design story",

    introduction: "A thoughtful celebration shaped by your story, with beautifully layered spaces and memorable details.",

    colors: [
      { name: "Ivory", hex: "#F4EFE7" },
      { name: "Champagne", hex: "#D8C9B8" },
      { name: "Sage", hex: "#B8BDA9" },
      { name: "Dusty Rose", hex: "#D9BDB4" },
      { name: "Taupe", hex: "#746E62" }
    ],

    paletteNote: "An elegant balance of warmth, natural textures and understated romance.",

    sections: [

      {
        id: "ceremony",
        eyebrow: "Environment I",
        title: "The Ceremony",
        tone: "blush",

        introduction: "A beautiful beginning, with thoughtful details and a romantic sense of occasion.",

        groups: [

          {
            title: "The Setting",
            description: "An inviting ceremony setting with a striking focal point and carefully considered seating.",

            images: [
              {
                src: "images/sample-wedding/ceremony-1.jpg",
                caption: "Ceremony inspiration"
              },
              {
                src: "images/sample-wedding/ceremony-2.jpg",
                caption: "Aisle and floral details"
              }
            ]
          },

          {
            title: "Floral Direction",
            description: "Layered blooms, natural movement and elegant proportions.",

            images: [
              {
                src: "images/sample-wedding/ceremony-3.jpg",
                caption: "Floral inspiration"
              }
            ]
          }

        ]
      },


{
  id: "predrinks",
  eyebrow: "Environment II",
  title: "Predrinks",
  tone: "ivory",

  introduction: "A journey across Lake Kariba becomes part of the celebration itself. Guests will travel by boat to the reception, enjoying the natural beauty of the lake alongside live saxophone music, canapés and signature his-and-hers cocktails.",

  groups: [
    {
      title: "A Journey Across the Lake",

      description: "The boat and surrounding landscape set the scene for a relaxed transition from ceremony to reception, giving guests time to mingle, enjoy the views and take in Lake Kariba.",

      images: [
        {
          src: "images/deanne-devan/predrinks-boat-1.png",
          caption: "The boat experience"
        },
        {
          src: "images/deanne-devan/predrinks-boat-2.png",
          caption: "Lake Kariba setting"
        },
        {
          src: "images/deanne-devan/predrinks-boat-3.png",
          caption: "Relaxed onboard atmosphere"
        },
        {
          src: "images/deanne-devan/predrinks-boat-4.png",
          caption: "A journey across the lake"
        }
      ]
    },

    {
      title: "The Bar",

      description: "DIÉLLE's styling will focus on the bar presentation, with a personalised menu and a soft floral arrangement bringing the wedding palette onto the boat. White flowers, pale blue tones and fresh greenery keep the look elegant while still feeling natural and appropriate to the setting.",

      images: [
        {
          src: "images/deanne-devan/predrinks-bar-menu.png",
          caption: "Personalised bar menu"
        },
        {
          src: "images/deanne-devan/predrinks-bar-florals.png",
          caption: "Bar floral styling"
        }
      ]
    }
  ]
},

      {
        id: "reception",
        eyebrow: "Environment III",
        title: "The Reception",
        tone: "ivory",

        introduction: "A beautifully layered space where candlelight, florals and texture set the scene for celebration.",

        groups: [

          {
            title: "The Environment",
            description: "A cohesive reception atmosphere, from lighting to spatial design.",

            images: [
              {
                src: "images/sample-wedding/reception-1.jpg",
                caption: "Reception setting"
              },
              {
                src: "images/sample-wedding/reception-2.jpg",
                caption: "Statement details"
              }
            ]
          },

          {
            title: "Tablescapes",
            description: "Beautifully styled tables, thoughtful place settings and candlelight.",

            images: [
              {
                src: "images/sample-wedding/reception-3.jpg",
                caption: "Table inspiration"
              }
            ]
          }

        ]
      }

    ]
  },


  // ==========================================
  // DEANNE & DEVAN
  // ==========================================

  "deanne-devan": {

    couple: "Deanne & Devan",
    date: "18 December 2026",
    venue: "KSL Beach, Kariba",
    kicker: "A lakeside wedding design story",

    introduction: "A romantic lakeside celebration grounded in natural textures, soft whites and fresh greenery.",

    colors: [
      { name: "Ivory", hex: "#F4EFE7" },
      { name: "Sand", hex: "#D9C9B1" },
      { name: "Sage", hex: "#A9B49A" },
      { name: "Warm Stone", hex: "#B8A596" },
      { name: "Olive", hex: "#737D61" }
    ],

    paletteNote: "White florals, natural jute, soft fabric and lush greenery complement the sandy shoreline.",

    sections: [

      // ======================================
      // CEREMONY
      // ======================================

      {
        id: "ceremony",
        eyebrow: "Environment I",
        title: "The Ceremony",
        tone: "sand",

        introduction: "A romantic ceremony on the sand at KSL Beach. Natural textures, soft ivory draping, white florals and lush greenery create an elegant setting overlooking Lake Kariba.",

        groups: [

          {
            title: "The Beach Setting",

            description: "The lakeshore provides the natural backdrop, with the ceremony designed to feel organic, romantic and connected to the surrounding landscape.",

            images: [
              {
                src: "images/deanne-devan/deanne dev ceremony.png",
                caption: "Overall ceremony direction"
              },
              {
                src: "images/deanne-devan/aisle.png",
                caption: "Ceremony setting inspiration"
              }
            ]
          },

          {
            title: "Aisle & Seating",

            description: "A natural jute aisle runs across the sand, softened by intermittent clusters of greenery and white flowers. Wooden benches are finished with relaxed ivory fabric draping.",

            images: [
              {
                src: "images/deanne-devan/ceremony.png",
                caption: "Jute aisle and floral direction"
              },
              {
                src: "images/deanne-devan/seating.png",
                caption: "White-draped wooden bench seating"
              }
            ]
          },

          {
            title: "The Altar",

                        description: "An oversized wooden cross draped in flowing ivory fabric forms the focal point of the ceremony, surrounded by white flowers and greenery.",

            images: [
              {
                src: "images/deanne-devan/altar.png",
                caption: "Oversized wooden cross and altar design"
              },
              {
                src: "images/deanne-devan/florals.png",
                caption: "White floral and greenery direction"
              }
            ]
          }

        ]
      },

      {
        id: "predrinks",
        eyebrow: "Environment II",
        title: "Predrinks",
        tone: "ivory",
        introduction: "A journey across Lake Kariba becomes part of the celebration itself. Guests will travel by boat to the reception, enjoying the natural beauty of the lake alongside live saxophone music, canapés and signature his-and-hers cocktails.",
        groups: []
      },

      {
        id: "reception",
        eyebrow: "Environment III",
        title: "The Reception",
        tone: "sage",
        introduction: "Design direction to follow.",
        groups: []
      }

    ]
  }

};
