const testimonio = [
  {
    name: "UNRECOVERY",
    photoUrl:
      "https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/311862320_5560422697381841_4394730905241878985_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH6jVFdv-hunNFhRpTjEXcnKydkBavCad8rJ2QFq8Jp37MZX2SrWKnwgqUpMW9yZxbATcPVhayXCEUAfc_4Br6n&_nc_ohc=rRADeEc0cQMAX9Gk9i4&_nc_ht=scontent.fvsa3-1.fna&oh=00_AT9ZN4bWj0EI3ug3foPrMsnM79hHboly-YJmWrNNapIglQ&oe=634F35D9",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam amet sint ipsam, consectetur exercitationem velit quod beatae recusandae adipisci, id neque dicta necessitatibus soluta, laudantium alias sapiente libero tempora facilis?.",
  },
  {
    name: "Boyka",
    photoUrl:
      "https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/306834192_1513752522386965_655899514963334996_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFTT1uFQOI-Qtc_auOianW6NrgLbr8l-qo2uAtuvyX6qjrNw84GS1rLcFygv2wwrOipmeoHhTaxkupUpTWNhTl-&_nc_ohc=_0rSVKFqrM0AX8Vl_Io&_nc_ht=scontent.fvsa3-1.fna&oh=00_AT_z3Q0GEHXvIZKV0aCzS6DFUrt81LPeARsvPCridWvkcA&oe=634E6368",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam amet sint ipsam, consectetur exercitationem velit quod beatae recusandae adipisci, id neque dicta necessitatibus soluta, laudantium alias sapiente libero tempora facilis?.",
  },
  {
    name: "Danger",
    photoUrl:
      "https://scontent.fvsa3-1.fna.fbcdn.net/v/t1.6435-9/60795662_1545059828962842_1863815618038333440_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGu0SMCmNpO5iteN3_EfBu24ob1XV2NA0bihvVdXY0DRqddeZ-QDWtqWVDj3V55CUujHgEZ5jZCnMhU70aoz_oT&_nc_ohc=ogof6VVstDAAX-hTC6z&_nc_ht=scontent.fvsa3-1.fna&oh=00_AT8EdDKzW1n3Ac6UUpuLVXxpsQ5NDKTY3LlNp3UtUzqi3g&oe=63704BC2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam amet sint ipsam, consectetur exercitationem velit quod beatae recusandae adipisci, id neque dicta necessitatibus soluta, laudantium alias sapiente libero tempora facilis?.",
  },
  {
    name: "Dystopia",
    photoUrl:
      "https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/306388654_8813908381968531_1484678057073683557_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFI2dlp4XKmobr219-Up6zPOp7mP7xsPEU6nuY_vGw8RdBPxrQvmGxkxdRitXxzZhSFJUfGGlDvPsAo8gkWzwR7&_nc_ohc=s-JEbKNUrIwAX_Nuuul&_nc_ht=scontent.fvsa3-1.fna&oh=00_AT_UG9KaRnwhWr5vRxUjOS9qWST2HBinH6Vts8HCiRWyaQ&oe=634F32EE",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam amet sint ipsam, consectetur exercitationem velit quod beatae recusandae adipisci, id neque dicta necessitatibus soluta, laudantium alias sapiente libero tempora facilis?.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".texto");
const nameEl = document.querySelector(".name");

let index = 0;

actualiza();

function actualiza() {
  const { name, photoUrl, text } = testimonio[index];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  nameEl.innerText = name;
  index++;
  if (index === testimonio.length) {
    index = 0;
  }
  setTimeout(() => {
    actualiza();
  }, 2000);
}
