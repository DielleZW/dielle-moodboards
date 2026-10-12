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
  title: "Predrinks | A Journey Across the Lake",
  tone: "ivory",
  introduction: "A celebration that begins long before the reception. Guests will board the boat for a relaxed cruise across Lake Kariba, enjoying live saxophone music, giant games, delicious canapés and signature his-and-hers cocktails. With the beautiful lake as the backdrop, the journey becomes an experience of its own.",
  groups: [
    {
      title: "The Boat Experience",
      description: "The boat provides a relaxed setting for guests to enjoy the scenery, mingle and celebrate as they make their way to the reception.",
      images: [
        {
          src: "images/deanne-devan/predrinks-boat-1.png",
          caption: "The boat and surrounding lake"
        },
        {
          src: "images/deanne-devan/predrinks-boat-2.png",
          caption: "Indoor lounge"
        },
        {
          src: "images/deanne-devan/predrinks-boat-3.png",
          caption: "Outdoor deck"
        },
        {
          src: "images/deanne-devan/predrinks-boat-4.png",
          caption: "Onboard lounge and seating"
        }
      ]
    },
    {
      title: "The Onboard Experience",
      description: "A live saxophonist, giant games, canapés and refreshing drinks create a fun and relaxed atmosphere throughout the cruise.",
      images: []
    },
    {
      title: "The Bar & Floral Styling",
      description: "A personalised soft-blue fabric bar menu, complemented by a delicate arrangement of white flowers, pale-blue hydrangeas and fresh greenery. These understated details are the only decorative styling planned for the boat.",
      images: [
        {
          src: "images/deanne-devan/predrinks-bar-menu.png",
          caption: "Personalised fabric bar menu"
        },
        {
          src: "images/deanne-devan/predrinks-bar-florals.png",
          caption: "Soft blue and white floral arrangement"
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
                src: "images/deanne-devan/ceremony.png",
                caption: "Overall ceremony direction"
              },
              {
                src: "images/deanne-devan/deanne dev ceremony.png",
                caption: "Ceremony setting inspiration"
              }
            ]
          },

          {
            title: "Aisle & Seating",

            description: "A natural jute aisle runs across the sand, softened by intermittent clusters of greenery and white flowers. Wooden benches are finished with relaxed ivory fabric draping.",

            images: [
              {
                src: "images/deanne-devan/aisle.png",
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
        introduction: "Design direction to follow.",
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