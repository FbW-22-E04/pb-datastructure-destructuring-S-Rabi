var fruit, vegetable, food;
[fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];
console.log(fruit, vegetable, ...food);

//---------------------------------------------------
// 2:
const halloweenCostume = {
  fran: "witch",
  tim: "wolf",
  john: "tiger",
  elina: "cat",
};
const { fran, tim, john, elina } = halloweenCostume;

console.log(fran, tim, john, elina);

//---------------------------------------------------
// 3:
const kH = {
  bestAlbum: "The Remix",
  nationality: "Persian-Canadian",
  bestSong: "Dost dari",
};

function printkHInfo({ bestAlbum, nationality, bestSong }) {
  console.log(
    `KH is ${nationality} singer and thier best album ${bestAlbum} and thier best song is ${bestSong}`
  );
}

printkHInfo(kH);
