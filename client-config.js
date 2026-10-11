/* DIÉLLE CLIENT MOODBOARDS
   Duplicate a client entry to add a new wedding.
   The entry name (e.g. "sample-wedding") is the shareable link's ?client= value.
   Image filenames are relative to the website root.
*/
window.DIELLE_CLIENTS = {
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
        id: "ceremony", eyebrow: "Environment I", title: "The Ceremony", tone: "blush",
        introduction: "A beautiful beginning, with thoughtful details and a romantic sense of occasion.",
        groups: [
          { title: "The Setting", description: "An inviting ceremony setting with a striking focal point and carefully considered seating.", images: [
            { src: "images/sample-wedding/ceremony-1.jpg", caption: "Ceremony inspiration" },
            { src: "images/sample-wedding/ceremony-2.jpg", caption: "Aisle and floral details" }
          ] },
          { title: "Floral Direction", description: "Layered blooms, natural movement and elegant proportions.", images: [
            { src: "images/sample-wedding/ceremony-3.jpg", caption: "Floral inspiration" }
          ] }
        ]
      },
      {
        id: "predrinks", eyebrow: "Environment II", title: "Predrinks", tone: "sand",
        introduction: "A relaxed transition for guests to mingle, unwind and enjoy.",
        groups: [
          { title: "Lounge & Styling", description: "Comfortable gathering spaces and considered styling details.", images: [
            { src: "images/sample-wedding/predrinks-1.jpg", caption: "Lounge inspiration" },
            { src: "images/sample-wedding/predrinks-2.jpg", caption: "Bar and drinks presentation" }
          ] }
        ]
      },
      {
        id: "reception", eyebrow: "Environment III", title: "The Reception", tone: "ivory",
        introduction: "A beautifully layered space where candlelight, florals and texture set the scene for celebration.",
        groups: [
          { title: "The Environment", description: "A cohesive reception atmosphere, from lighting to spatial design.", images: [
            { src: "images/sample-wedding/reception-1.jpg", caption: "Reception setting" },
            { src: "images/sample-wedding/reception-2.jpg", caption: "Statement details" }
          ] },
          { title: "Tablescapes", description: "Beautifully styled tables, thoughtful place settings and candlelight.", images: [
            { src: "images/sample-wedding/reception-3.jpg", caption: "Table inspiration" }
          ] }
        ]
      }
    ]
  }
};
