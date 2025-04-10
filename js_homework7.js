let text = "Wonderful Joyful Happiness Time Task Apple";
let result = text.match(/\b(?!\w*[Aa])\w{6,}\b/g);

console.log(result);
