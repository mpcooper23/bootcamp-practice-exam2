# bootcamp-practice-exam2

### Required Practice Exam

#### In this practice exam, you will create a series of functions for a program that manages a physical media movie collection.

1. Every movie object has a property of `digitalCode` that is currently set to null. Create a function called `setDigitalCode` that takes in two parameters - `array` and `value`; `array` represents an array of movie objects; `value` represents the value we want to apply to the `digitalCode` property (this will always be either true or false). This function should iterate through the input array BACKWARDS and only access every other movie as iterates. As it iterates, it should set the current movie's `digitalCode` property to the input `value`. This function should return the input array at the end.
```
setDigitalCode(collection, true);

// => [ {set to true}, {}, {set to true}, {}, {set to true}]
```
2. Create a function called `filterByGenreTag` that takes in two parameters - `array` and `tag`; `array` represents an array of movie objects; `tag` represents a string of a certain genre designation. This function should use the native filter method to return a new array of only the movie objects that contain the input genre tag.
```
const horror = filterByGenreTag(collection, 'Horror');
console.log(horror); // => [{Psycho}, {The Thing}, {Fright Night}]
```
3. Create a function called `filterBySpecialFeatureType` that takes in two parameters - `array` and `type`. `array` represents an array of movie objects; `type` represents a string describing the type of special feature. This function should use the native filter method to return a new array of only the movie objects that contain that type of special feature.
```
const interviews = filterBySpecialFeatureType(collection, 'Interview');
console.log(interviews); // => [{Rear Window}, {Big Trouble in Little China}, {Fright Night}]
```
4. Create a function called `getTopSpecialFeature` that takes in one parameter - `array` and `title`. `array` represents an array of movie objects; `title` represents a string of the title of a film. This function should use recursion to iterate through the array. If a movie with the title is found, the function should return a string of the movie's title followed by the title of the first special feature in the film's `specialFeatures` array. If no movie is found matching that title, the function should return "no movie found matching that title".
```
const feature = getTopSpecialFeature(collection, 'Psycho');
console.log(feature); // => "Psycho Special Feature: The Making of Psycho"

const feature2 = getTopSpecialFeature(collection, "Blue Velvet");
console.log(feature2); // => "no movie found matching that title"
```
5. Create a function called `mapTitles` that takes in one parameter - `array` - which represents an array of movie objects. This function should use the native map method to return a new array of the movie's title, year, and director as strings.
```
const titles = mapTitles(collection);
console.log(titles); 
// =>
[
    "Rear Window (1954) - dir. Alfred Hitchcock",
    "Psycho (1960) - dir. Alfred Hitchcock",
    "The Thing (1982) - dir. John Carpenter",
    "Big Trouble in Little China (1986) - dir. John Carpenter",
    "Fright Night (1985) - dir. Tom Holland"
]
```
6. Create a function called `mapSpecialFeatures` that takes in one parameter - `array` - which represents an array of movie objects. This function should use the native map method to return a new array subarrays. Each subarray in the array that is returned should be the strings of the titles of special features.
```
const specialFeatures = mapSpecialFeatures(collection);
console.log(specialFeatures);
// =>
[
    ["Rear Window Ethics: An Original Documetnary", "Feature Commentary with John Fawell", "Hitchcock/Truffaut Interview Excerpts"],
    ["The Making of Psycho", "Feature Commentary with Stephen Rebello"],
    ["Feature Commentary with Star Kurt Russell and Director John Carpenter"],
    ["Audio Commentary with Director John Carpenter and Actor Kurt Russell", "Deleted Scenes", "Vintage Interviews with Cast and Crew"],
    ["'You're So Cool, Brewster!' Documentary", "First Ever Fright Night Reunion Panel"]
]
```
7. Create a function called `createNonsenseString` that takes in two parameters - `array` and `index`. `array` represents an array of movie objects, and `index` represents the index of a string. This function should use the native reduce method to iterate over the array and accumulate a string by accessing the `index` of each movie's title and adding it to an output string.
```
const string = createNonsenseString(collection, 1);
console.log(string); // => 'eshir' 

(`e` is at the 1 index of 'Rear Window', `s` is at the 1 index of 'Psycho', etc...)
```
8. Create a function called `getValues` that takes in two parameters - `object` and `props`. `object` represents an individual movie object and `props` represents an array of keys that exist in the object. This function should return a new array of the values that exist at those keys.
```
const rearWindowValues = getValues(collection[0], ['title', 'year', 'director']);
console.log(rearWindowValues); // => ['Rear Window', 1954, 'Alfred Hitchcock']
```