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
        tone: "sand",

        introduction: "A relaxed transition for guests to mingle, unwind and enjoy.",

        groups: [
          {
            title: "Lounge & Styling",
            description: "Comfortable gathering spaces and considered styling details.",

            images: [
              {
                src: "images/sample-wedding/predrinks-1.jpg",
                caption: "Lounge inspiration"
              },
              {
                src: "images/sample-wedding/predrinks-2.jpg",
                caption: "Bar and drinks presentation"
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

    introduction: "A romantic lakeside celebration grounded in natural textures, soft whites, fresh greenery and touches of light blue.",

    colors: [
      { name: "Ivory", hex: "#F4EFE7" },
      { name: "Light Blue", hex: "#AFC4D4" },
      { name: "Sage", hex: "#A9B49A" },
      { name: "Deep Green", hex: "#4F5A47" },
      { name: "Muted Gold", hex: "#B99A62" }
    ],

    paletteNote: "Soft ivory and light blue are layered with fresh greens and deeper botanical tones, finished with touches of muted gold and warm candlelight.",

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


      // ======================================
      // PREDRINKS
      // ======================================

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


      // ======================================
      // RECEPTION
      // ======================================

      {
        id: "reception",
        eyebrow: "Environment III",
        title: "The Reception",
        tone: "sage",

        introduction: "A fairy-garden-inspired evening beneath a black transparent clearspan tent. Warm lighting, cascading greenery, soft touches of light blue and layers of candlelight will transform the space as day turns to night, creating a reception that feels romantic, organic and full of atmosphere.",

        groups: [

          // --------------------------------------
          // TENT ATMOSPHERE
          // --------------------------------------

          {
            title: "The Tent Atmosphere",

            description: "A black transparent clearspan tent allows the surrounding landscape and night sky to remain part of the experience. The dark structure creates a dramatic contrast against warm lighting, cream textiles, fresh greenery and candlelight, giving the reception an intimate feeling while remaining connected to the outdoors.",

            images: [
              {
                src: "images/deanne-devan/reception-tent-1.png",
                caption: "Black clearspan tent and evening atmosphere"
              },
              {
                src: "images/deanne-devan/reception-tent-2.png",
                caption: "Warm, intimate reception atmosphere"
              }
            ]
          },


          // --------------------------------------
          // LIGHTING DETAIL
          // --------------------------------------

          {
            title: "Lighting Detail",

            description: "Lighting will be a defining part of the reception. Oversized cream fringed chandeliers will hang at varying heights throughout the tent, layered with warm fairy lights and naked bulbs. The combination brings softness, movement and texture overhead while creating a warm glow across the room.",

            images: [
              {
                src: "images/deanne-devan/reception-lighting-1.png",
                caption: "Oversized cream fringed chandeliers"
              },
              {
                src: "images/deanne-devan/reception-lighting-2.png",
                caption: "Fringe, greenery and warm suspended lighting"
              }
            ]
          },


          // --------------------------------------
          // TABLE LAYOUT
          // --------------------------------------

          {
            title: "Table Layout & Serpentine Design",

            description: "A combination of round and rectangular tables will create an organic, less formal layout. Selected round tables will be positioned together to create a flowing serpentine formation through the tent. The serpentine tables will carry a continuous trail of fresh greenery and light blue hydrangeas, following the curves of the tables and creating a garden-like path through the reception.",

            images: [
              {
                src: "images/deanne-devan/reception-layout-1.png",
                caption: "Mixed round and rectangular table layout"
              },
              {
                src: "images/deanne-devan/reception-layout-2.png",
                caption: "Serpentine table and floral direction"
              }
            ]
          },


          // --------------------------------------
          // TABLE STYLING & FLORALS
          // --------------------------------------

          {
            title: "Table Styling & Florals",

            description: "The tables will feel like individual moments within a fairy garden rather than identical repeated settings. Different tables will feature a mix of delicate bud vases and bowls, flowers emerging naturally through beds of moss, fresh greenery and tables dominated by layers of candlelight. Light blue florals will appear softly throughout the room, balanced by fresh greens and ivory flowers.",

            images: [
              {
                src: "images/deanne-devan/reception-florals-1.png",
                caption: "Fairy-garden floral design growing through natural moss"
              },
              {
                src: "images/deanne-devan/reception-florals-2.png",
                caption: "Moss bowls and delicate mismatched bud vases"
              },
              {
                src: "images/deanne-devan/reception-florals-3.png",
                caption: "Candle-led table styling"
              }
            ]
          },


          // --------------------------------------
          // PLACE SETTING
          // --------------------------------------

          {
            title: "The Place Setting",

            description: "Each place setting brings the natural and refined elements of the design together. A bleached woven placemat is layered with a soft light blue napkin, finished with an ivory ribbon place name. Matt gold cutlery adds warmth while crystal-cut glassware catches and reflects the candlelight and overhead lighting.",

            images: [
              {
                src: "images/deanne-devan/reception-place-setting-1.png",
                caption: "Bleached placemat, light blue napkin and ribbon place name"
              },
              {
                src: "images/deanne-devan/reception-place-setting-2.png",
                caption: "Matt gold cutlery and crystal-cut glassware"
              }
            ]
          },


          // --------------------------------------
          // HEAD TABLE
          // --------------------------------------

          {
            title: "The Head Table",

            description: "The head table will be softly draped to create a romantic focal point within the reception. Fresh greenery, touches of pale blue florals and abundant candlelight will run across the table, while the layered lighting overhead frames the couple within the wider reception design.",

            images: [
              {
                src: "images/deanne-devan/reception-head-table-1.png",
                caption: "Draped head table with greenery, pale blue florals and candlelight"
              }
            ]
          },


          // --------------------------------------
          // BAR & DANCEFLOOR
          // --------------------------------------

          {
            title: "The Bar & Dancefloor",

            description: "The bar and dancefloor become their own statement environment as the evening moves into celebration. A suspended installation of fresh greenery, mirror balls and warm naked bulbs will sit above the space. The matt white dancefloor will catch the moving reflections from the mirror balls, while a patterned blue bar front introduces another layer of the wedding palette and creates a striking focal point.",

            images: [
              {
                src: "images/deanne-devan/reception-bar-1.png",
                caption: "Patterned blue statement bar"
              },
              {
                src: "images/deanne-devan/reception-dancefloor-1.png",
                caption: "Mirror balls, greenery and naked bulb installation"
              },
              {
                src: "images/deanne-devan/reception-dancefloor-2.png",
                caption: "Matt white dancefloor with reflected mirror-ball light"
              }
            ]
          }

        ]
      }

    ]
  }

};
