// optie 1
const logos = [
  {
    logo: "/image-1.svg",
    letter: "/image-letter-1.svg",
  },
  {
    logo: "/image-2.svg",
    letter: "/image-letter-2.svg",
  },
];

// optie 2 met <img id="logo" />
$logo = document.getElementById("logo"); // img
$logo.src = `/GF-logo-2023-${randomIndex}.svg`;

// optie 2 met <div id="logo-container"></div>
$logo2 = document.getElementById("logo-container"); // div
$logo2.innerHTML = `<img src="/GF-logo-2023-${randomIndex}.svg" />`;
