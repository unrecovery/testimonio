const testimonio = [
  {
    name: "Kevin Gabriel Rodriguez",
    photoUrl:
      "https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/326576314_3527382187506577_7170234514544723272_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEi2LmYCYS7VIVRINpTUCzI4qin9dM6LeTiqKf10zot5CRjBRROjnA_n4QhFDysjSQB8LoJ73jrTCN_SW1h4TGc&_nc_ohc=BipcnLIOuJMAX_xqskS&_nc_ht=scontent.fvsa3-1.fna&oh=00_AfDdpP2b8BhuhJ2yxGKhnnQtUISKOSCN4N1Hm7t_p8-Tjg&oe=63D436FE",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam amet sint ipsam, consectetur exercitationem velit quod beatae recusandae adipisci, id neque dicta necessitatibus soluta, laudantium alias sapiente libero tempora facilis?.",
  },
  {
    name: "Antonio Olivares Lopez",
    photoUrl:
      "https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/300346590_5402735603122180_5314634653162439486_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF9G8K4BYLmUzVFYI0IWXS2mRGTRXovIXSZEZNFei8hdIbvQmB0kTGwYVWQ4EHsgPm-u-fC1LuC_lx02ChA2_gO&_nc_ohc=3yGtitrqAKAAX8Sgzoc&_nc_ht=scontent.fvsa3-1.fna&oh=00_AfB9G7GFKS1kkFGPGKGno4PZ9WuiXbY47uzvP9FOfemW8g&oe=63D4DD99",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam amet sint ipsam, consectetur exercitationem velit quod beatae recusandae adipisci, id neque dicta necessitatibus soluta, laudantium alias sapiente libero tempora facilis?.",
  },
  {
    name: "Zury Sadai Cardona",
    photoUrl:
      "https://scontent.fvsa3-1.fna.fbcdn.net/v/t39.30808-6/322378667_1329843844259977_108572744361866741_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFEshLHILEhx4_jplnJoO04B6M6AhacPJMHozoCFpw8k4nUwcT6Y4Ds54pgpKhiqnQX9ik01lSnGKdsdTQprUwZ&_nc_ohc=uP0z5C1dxdQAX-raLCY&_nc_oc=AQmDU_ol5NlrEXwZB4jYRQ9aNKaMBX-Cu-lY5JeJQ9bFrw-BwxHShEVRvDPNSeMzYQBeTE86Fzdnqbnkye5__Ysg&_nc_ht=scontent.fvsa3-1.fna&oh=00_AfDijUYbtd7HLyC7TSMJrM-iBaCqJAti1Hk1gIKIOC2c3A&oe=63D3D043",
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
