const testimonio = [
  {
    name: "LordMegatron",
    photoUrl:
      "https://scontent.fvsa1-2.fna.fbcdn.net/v/t39.30808-6/240513106_4291951554200596_1683310416178300657_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nvwmYr_bqwkAX_fc_BH&_nc_ht=scontent.fvsa1-2.fna&oh=00_AT9uSVToHDFQWzQcmTUzXkr4jEPG54n2PKOu6DCfS1bpwA&oe=62688ADE",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam amet sint ipsam, consectetur exercitationem velit quod beatae recusandae adipisci, id neque dicta necessitatibus soluta, laudantium alias sapiente libero tempora facilis?.",
  },
  {
    name: "Boyka",
    photoUrl:
      "https://scontent.fvsa1-2.fna.fbcdn.net/v/t39.30808-6/273528266_1364766540618898_2034142996575194905_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=s5-kemPsDb4AX9YZT-U&_nc_ht=scontent.fvsa1-2.fna&oh=00_AT9iiGVRegSwokbAtcV1hMBI6gO0fQGKncL4YUPeeIVtdQ&oe=62691642",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam amet sint ipsam, consectetur exercitationem velit quod beatae recusandae adipisci, id neque dicta necessitatibus soluta, laudantium alias sapiente libero tempora facilis?.",
  },
  {
    name: "Danger",
    photoUrl:
      "https://scontent.fvsa1-1.fna.fbcdn.net/v/t39.30808-6/275521983_3008732149437734_166831737385082443_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hszO6qMks14AX-sVepM&tn=ES6fJXEBob0gTdK6&_nc_ht=scontent.fvsa1-1.fna&oh=00_AT-CyElP47kM51OB02oZXTe4hCUuzNvok0lgT1E-tFO4oQ&oe=626886DB",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam amet sint ipsam, consectetur exercitationem velit quod beatae recusandae adipisci, id neque dicta necessitatibus soluta, laudantium alias sapiente libero tempora facilis?.",
  },
  {
    name: "Dystopia",
    photoUrl:
      "https://scontent.fvsa1-1.fna.fbcdn.net/v/t39.30808-6/249010826_4515222025235252_2123411264235186066_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGVZQ0n-bP4RIovJdqtVVxQZIrcOMod5vBkitw4yh3m8IRN-NREhoyxIU4sRI-clhkH4mNGpKbvt3SY7A2oqF-G&_nc_ohc=sUu0AaCymdEAX87cUwU&_nc_ht=scontent.fvsa1-1.fna&oh=4533b7207d5a9287e761718c9cc5e0b8&oe=61A2CA52",
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
