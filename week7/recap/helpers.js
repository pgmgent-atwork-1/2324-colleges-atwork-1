const fetchArtItems = async () => {
  const response = await fetch("https://www.pgm.gent/data/arnequinze/art.json");
  const data = await response.json();
  return data;
};
