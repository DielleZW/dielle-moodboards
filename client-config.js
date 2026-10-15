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
},

  // ==========================================
  // SANIYAH & BILAL
  // ==========================================

  "saniyah-bilal": {

    couple: "Saniyah & Bilal",
    date: "27 March 2027",
    venue: "Wild Geese",
    kicker: "A Nikah reception luncheon design story",

    introduction: "A Garden in Celebration. A richly layered Nikah luncheon inspired by the romance of an abundant garden. Deep olive drapery and sweeping cream fabric transform the venue, while oversized fringed chandeliers and warm lighting create a sense of grandeur overhead. Below, wine, dusty mauve, blush and fresh green florals spill organically across the tables, creating an atmosphere that feels elegant, abundant and wonderfully alive.",

    colors: [
      { name: "Wine", hex: "#651F30" },
      { name: "Dusty Mauve", hex: "#A8697A" },
      { name: "Blush", hex: "#DFC0C3" },
      { name: "Cream", hex: "#EDDFCA" },
      { name: "Sage", hex: "#B7BB88" },
      { name: "Olive", hex: "#6E6B41" }
    ],

    paletteNote: "Deep wine and burgundy meet dusty mauve, blush and soft cream, balanced by fresh greens and rich olive. Natural moss, exposed wood, silver detailing and warm candlelight complete the garden-inspired palette.",

    sections: [

      // ======================================
      // PRE-RECEPTION
      // ======================================

      {
        id: "pre-reception",
        eyebrow: "The Welcome",
        title: "Pre-Reception",
        tone: "ivory",

        introduction: "The experience begins with a fresh and elegant welcome, offering guests their first glimpse of the celebration. This space is intentionally softer and more restrained, saving the grand botanical reveal for the main reception.",

        groups: [
          {
            title: "Welcome Drinks & Refreshments",
            description: "A beautifully styled drinks station combining clear glass, natural wood, soft blush flowers and greenery. Fresh juices, lemonade, iced tea, infused waters and signature mocktails will be presented with considered garnishes, personalised signage and polished service.",

            images: [
              {
                src: "images/saniyah-bilal/palette-and-table-direction.jpeg",
                caption: "Natural textures and soft botanical styling inspiration"
              }
            ]
          },

          {
            title: "The First Impression",
            description: "A relaxed and refined welcome that introduces the floral palette through subtle blush accents and natural greenery. The atmosphere should feel inviting and thoughtfully styled without revealing the full scale of the reception design.",

            images: []
          }
        ]
      },

      // ======================================
      // GRAND ENTRANCE
      // ======================================

      {
        id: "entrance",
        eyebrow: "Environment I",
        title: "The Grand Entrance",
        tone: "sage",

        introduction: "A dramatic architectural entrance in rich olive drapery creates the first major statement of the celebration. Layered fabric, sculptural floral forms and organic greenery draw guests into the garden-inspired world beyond.",

        groups: [
          {
            title: "The Olive Draped Entrance",
            description: "Floor-to-ceiling olive fabric transforms the entrance into a dramatic, tunnel-like opening. Multiple layers of drapery are swept back to create depth, movement and a sense of anticipation.",

            images: [
              {
                src: "images/saniyah-bilal/entrance-olive-draping-1.png",
                caption: "Statement olive drapery entrance"
              },
              {
                src: "images/saniyah-bilal/entrance-olive-draping-2.jpeg",
                caption: "Layered architectural drapery inspiration"
              }
            ]
          },

          {
            title: "Botanical Entrance Styling",
            description: "Natural moss-covered floral mounds, ferns, grasses and statement burgundy flowers soften the base of the drapery. The arrangements should feel as though they are growing organically from the ground.",

            images: [
              {
                src: "images/saniyah-bilal/florals-statement-1.png",
                caption: "Rich sculptural floral inspiration"
              }
            ]
          }
        ]
      },

      // ======================================
      // MAIN VENUE
      // ======================================

      {
        id: "venue",
        eyebrow: "Environment II",
        title: "The Reception Atmosphere",
        tone: "ivory",

        introduction: "The main luncheon space is designed to feel like stepping into an extraordinary garden. Sweeping olive and cream drapery, oversized statement chandeliers, sculptural greenery and abundant florals create a dramatic yet elegant environment for 300 guests.",

        groups: [
          {
            title: "A Garden Within the Venue",
            description: "The reception will be transformed through a combination of olive-green drapery, warm cream fabrics, layered floral installations and natural greenery. The scale of the design will create a sense of grandeur while preserving a romantic and organic atmosphere.",

            images: [
              {
                src: "images/saniyah-bilal/reception-olive-draping-trees-1.jpeg",
                caption: "Olive draping and statement greenery installations"
              },
              {
                src: "images/saniyah-bilal/draping-olive-cream-ceiling-1.png",
                caption: "Sweeping fabric and dramatic venue atmosphere"
              }
            ]
          },

          {
            title: "Statement Greenery Installations",
            description: "Tree-inspired greenery installations and sculptural botanical features introduce height and movement throughout the room, creating the impression of a garden growing within the reception space.",

            images: []
          }
        ]
      },

      // ======================================
      // DRAPERY & LIGHTING
      // ======================================

      {
        id: "drapery-lighting",
        eyebrow: "The Atmosphere",
        title: "Drapery & Statement Lighting",
        tone: "sand",

        introduction: "Overhead treatments become a defining feature of the design. Flowing olive and cream fabric, spectacular three-metre fringed chandeliers and warm suspended bulbs bring softness, drama and a beautiful sense of scale.",

        groups: [
          {
            title: "Sweeping Drapery",
            description: "Olive-green and cream fabrics will sweep across the ceiling in generous, sculptural sections. The drapery creates a softened architectural canopy that visually connects the entrance, dining area and sweetheart table.",

            images: [
              {
                src: "images/saniyah-bilal/draping-cream-ceiling-1.png",
                caption: "Soft cream ceiling drapery"
              },
              {
                src: "images/saniyah-bilal/draping-olive-cream-ceiling-1.png",
                caption: "Olive and cream overhead fabric treatment"
              }
            ]
          },

          {
            title: "Three-Metre Fringed Chandeliers",
            description: "Oversized chandeliers, approximately three metres in scale, will feature layers of olive and cream fringe with warm naked bulbs suspended within. These statement installations create visual impact while introducing softness, texture and movement overhead.",

            images: [
              {
                src: "images/saniyah-bilal/lighting-fringe-chandelier-1.png",
                caption: "Oversized fringe chandelier inspiration"
              },
              {
                src: "images/saniyah-bilal/lighting-fringe-chandeliers-2.jpeg",
                caption: "Statement chandeliers and warm suspended lighting"
              }
            ]
          }
        ]
      },

      // ======================================
      // TABLE LAYOUT
      // ======================================

      {
        id: "table-layout",
        eyebrow: "The Dining Experience",
        title: "Table Layout & Seating",
        tone: "ivory",

        introduction: "A carefully considered combination of flowing serpentine tables and classic round tables creates movement throughout the reception. The layout feels organic and visually interesting while comfortably accommodating the scale of the celebration.",

        groups: [
          {
            title: "Serpentine Tables",
            description: "Flowing serpentine tables feature exposed natural wooden surfaces, continuous moss runners, sculptural flowers, orchids, calla lilies and small amber candleholders. The botanical styling follows every curve of the tables, creating a continuous garden-like installation.",

            images: [
              {
                src: "images/saniyah-bilal/tables-serpentine-florals-1.png",
                caption: "Serpentine tables with flowing botanical arrangements"
              },
              {
                src: "images/saniyah-bilal/tables-long-burgundy-florals-1.png",
                caption: "Rich burgundy floral styling on elongated tables"
              }
            ]
          },

          {
            title: "Round Tables & Seating",
            description: "Classic round tables will be dressed in softly draped champagne and ivory-toned linen, with coordinating floral arrangements at varying heights. Clear Chiavari chairs keep the setting contemporary and visually light, allowing the florals and drapery to remain the focal points.",

            images: [
              {
                src: "images/saniyah-bilal/tables-round-florals-1.png",
                caption: "Round-table floral and dining inspiration"
              }
            ]
          }
        ]
      },

      // ======================================
      // FLORAL DESIGN
      // ======================================

      {
        id: "florals",
        eyebrow: "The Botanical Story",
        title: "Table Styling & Florals",
        tone: "sage",

        introduction: "The floral design celebrates the richness of an abundant garden. Sculptural burgundy, wine, dusty mauve and blush flowers are layered with fresh greens, natural moss and delicate movement to create arrangements that feel expressive, romantic and alive.",

        groups: [
          {
            title: "Sculptural Floral Direction",
            description: "A considered mixture of hydrangeas, anthuriums, orchids, calla lilies, roses and other sculptural seasonal blooms creates depth, shape and movement. Deep burgundy flowers anchor the palette, while blush, mauve and cream tones soften the overall effect.",

            images: [
              {
                src: "images/saniyah-bilal/florals-sculptural-1.png",
                caption: "Sculptural garden-inspired floral forms"
              },
              {
                src: "images/saniyah-bilal/florals-statement-1.png",
                caption: "Rich statement floral direction"
              }
            ]
          },

          {
            title: "Organic Garden Tablescapes",
            description: "Arrangements will feel naturally layered rather than rigid or uniform. Flowers emerge from moss, intertwine with greenery and extend across the tables in varied heights, creating a sense of an abundant garden brought indoors.",

            images: [
              {
                src: "images/saniyah-bilal/florals-garden-table-1.jpeg",
                caption: "Organic floral styling and garden-inspired tablescape"
              },
              {
                src: "images/saniyah-bilal/tables-serpentine-florals-1.png",
                caption: "Continuous moss and floral styling"
              }
            ]
          }
        ]
      },

      // ======================================
      // PLACE SETTINGS
      // ======================================

      {
        id: "place-settings",
        eyebrow: "The Finishing Touches",
        title: "The Place Setting",
        tone: "sand",

        introduction: "Each place setting brings a refined balance to the richness of the floral design. Soft champagne tones, polished silver detailing, delicate glassware and natural textures create an elegant and cohesive dining experience.",

        groups: [
          {
            title: "Tableware & Dining Details",
            description: "Silver cutlery and silver-toned hardware are paired with elegant crockery and clear glassware. Soft neutral napkins and carefully considered stationery complement the champagne linens and botanical centrepieces. The overall look is refined and contemporary, avoiding black or gold hardware.",

            images: [
              {
                src: "images/saniyah-bilal/palette-and-table-direction.jpeg",
                caption: "Coordinated table styling and palette direction"
              }
            ]
          }
        ]
      },

      // ======================================
      // SWEETHEART TABLE
      // ======================================

      {
        id: "sweetheart",
        eyebrow: "The Focal Point",
        title: "The Sweetheart Table",
        tone: "blush",

        introduction: "The sweetheart table will be a beautifully considered focal point, framed by sculptural olive and cream drapery, an abundant floral meadow and warm statement lighting.",

        groups: [
          {
            title: "Drapery & Floral Meadow",
            description: "Layered olive and cream fabric creates a romantic backdrop behind the couple. A low, abundant meadow of burgundy, blush and green flowers grows naturally across the front of the setting, softened by candlelight and coordinated with the botanical styling throughout the venue.",

            images: [
              {
                src: "images/saniyah-bilal/head-table-olive-draping-1.jpeg",
                caption: "Sweetheart table drapery and focal-point inspiration"
              },
              {
                src: "images/saniyah-bilal/florals-statement-1.png",
                caption: "Rich floral meadow inspiration"
              }
            ]
          }
        ]
      },

      // ======================================
      // FOOD STATION
      // ======================================

      {
        id: "food-station",
        eyebrow: "The Hospitality Experience",
        title: "The Food Station",
        tone: "ivory",

        introduction: "The food presentation will be treated as part of the wider reception design, with elegant serving arrangements and botanical styling that complement the garden-inspired atmosphere.",

        groups: [
          {
            title: "A Beautifully Presented Luncheon",
            description: "The food service area will incorporate coordinated linens, refined serving pieces, subtle floral arrangements and considered signage. The styling will feel welcoming and abundant while keeping service practical and accessible for guests.",

            images: []
          }
        ]
      },

      // ======================================
      // DESSERT STATION
      // ======================================

      {
        id: "dessert",
        eyebrow: "A Sweet Finale",
        title: "The Dessert Station",
        tone: "blush",

        introduction: "A beautifully styled dessert station continues the garden story, introducing a sense of softness and abundance through florals, texture and carefully arranged displays.",

        groups: [
          {
            title: "The Garden Dessert Display",
            description: "The dessert area will be designed as a cohesive feature within the reception, with layered display heights, coordinating florals and elegant serving details. Burgundy, blush, cream and fresh greenery connect the display to the wider botanical concept.",

            images: []
          }
        ]
      },

      // ======================================
      // FINISHING DETAILS
      // ======================================

      {
        id: "details",
        eyebrow: "The Complete Experience",
        title: "Finishing Details",
        tone: "sage",

        introduction: "It is the thoughtful details that bring the entire celebration together. From the first welcome through to the final floral arrangement, every element will contribute to a cohesive, memorable and beautifully considered Nikah luncheon.",

        groups: [
          {
            title: "A Cohesive Design Story",
            description: "The rich olive drapery, sculptural flowers, moss textures, clear seating, champagne linens, silver hardware and warm lighting are carried consistently throughout the experience, creating a celebration that feels grand without losing its natural softness.",

            images: [
              {
                src: "images/saniyah-bilal/reception-olive-draping-trees-1.jpeg",
                caption: "The complete garden-inspired reception atmosphere"
              },
              {
                src: "images/saniyah-bilal/florals-garden-table-1.jpeg",
                caption: "Botanical details and organic floral styling"
              }
            ]
          }
        ]
      }

    ]
  }

};

