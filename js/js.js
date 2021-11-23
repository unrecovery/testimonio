const testimonio = [
  {
    name: "LordMegatron",
    photoUrl:
      "https://scontent.fvsa1-1.fna.fbcdn.net/v/t39.30808-6/240513106_4291951554200596_1683310416178300657_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGQ9YHVm61PDozNUNNFImotqIluFrpIisuoiW4WukiKy_Zo_nKNwPluZzSQxXcRYfk-2nnyaCGNBOq9qSMrQ6x7&_nc_ohc=c2Bx1nFDEYIAX-0w2r1&tn=lA-_dOb-ntJjFlNJ&_nc_ht=scontent.fvsa1-1.fna&oh=b3a139947897b36706f61ad55315607e&oe=61A2C9DE",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam amet sint ipsam, consectetur exercitationem velit quod beatae recusandae adipisci, id neque dicta necessitatibus soluta, laudantium alias sapiente libero tempora facilis?.",
  },
  {
    name: "Winning",
    photoUrl:
      "https://scontent.fvsa1-1.fna.fbcdn.net/v/t39.30808-6/244142150_2894135747564042_5393753293837592828_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHvMmGXUCQqi66hwMp2T8rSp-dc8SPa5Ran51zxI9rlFpPrDpkPwjh8LmbCCROk8tLVp0eb_hi5rGlOEgFNztOm&_nc_ohc=dQIhihWz-NkAX_jS9ub&_nc_ht=scontent.fvsa1-1.fna&oh=a230b09d91d6f5aa1db97d781fb090dc&oe=61A29AF2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam amet sint ipsam, consectetur exercitationem velit quod beatae recusandae adipisci, id neque dicta necessitatibus soluta, laudantium alias sapiente libero tempora facilis?.",
  },
  {
    name: "Danger",
    photoUrl:
      "https://scontent.fvsa1-1.fna.fbcdn.net/v/t1.6435-9/60795662_1545059828962842_1863815618038333440_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGu0SMCmNpO5iteN3_EfBu24ob1XV2NA0bihvVdXY0DRqddeZ-QDWtqWVDj3V55CUujHgEZ5jZCnMhU70aoz_oT&_nc_ohc=C030TUKx9BoAX-mRsVo&tn=XlEewdt2ZPmoDndI&_nc_ht=scontent.fvsa1-1.fna&oh=b831cadbf2a7f730e1640acf9a772c09&oe=61C13142",
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
