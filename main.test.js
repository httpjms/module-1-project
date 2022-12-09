import { sort, search, newsList } from "./main.js";

//Example testing for search function
test("Check if null", () => {
  expect(newsList.isNull).not.toBeNull();
});

test ("Check if newslist array contains this valus", () => {
  expect(newsList).toContain("What books should an aspiring journalist read?");
});

test ("Check if news list is complete", () => {
expect(newsList).toEqual(["What films should an aspiring journalist watch?",
"Buried underpants and tea bags help scientists evaluate soil",
"Decoder: Mining asteroids for minerals can help spare Earth",
"Media glare can enrich tennis pros yet imperil mental health",
"'Nightmare' TV show 'Euphoria — health threat or high art?",
"Decoder: Armenia in a bind as Ukraine war resets global order",
"What books should an aspiring journalist read?",
"Marie Colvin shined a light on war-torn corners of the world",])
});

test("to check function search", () => {
expect(search)

})