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
console.log(feature2); // => "no movie found that title"
```
5. 