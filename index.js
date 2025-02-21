
const collection = [
    {
        title: 'Rear Window',
        year: 1954,
        director: 'Alfred Hitchcock',
        digitalCode: null,
        genreTags: ['Mystery', 'Suspense'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: "Rear Window Ethics: An Original Documentary"
            },
            {
                type: 'Commentary',
                title: 'Feature Commentary with John Fawell'
            },
            {
                type: 'Interview',
                title: 'Hitchcock/Truffaut Interview Excerpts'
            }
        ]
    },
    {
        title: 'Psycho',
        year: 1960,
        director: 'Alfred Hitchcock',
        digitalCode: null,
        genreTags: ['Horror', 'Suspense'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: 'The Making of Psycho'
            },
            {
                type: 'Commentary',
                title: 'Feature Commentary with Stephen Rebello'
            }
        ]
    },
    {
        title: 'The Thing',
        year: '1982',
        director: 'John Carpenter',
        digitalCode: null,
        genreTags: ['Horror', 'Science Fiction'],
        specialFeatures: [
            {
                type: 'Commentary',
                title: 'Feature Commentary with Star Kurt Russell and Director John Carpenter'
            },
        ]
    },
    {
        title: 'Big Trouble in Little China',
        year: 1986,
        director: 'John Carpenter',
        digitalCode: null,
        genreTags: ['Comedy', 'Fantasy'],
        specialFeatures: [
            {
                type: 'Commentary',
                title: 'Audio Commentary with Director John Carpenter and Actor Kurt Russell'
            },
            {
                type: 'Alternate Edits',
                title: 'Deleted Scenes'
            },
            {
                type: 'Interview',
                title: 'Vintage Interviews with Cast and Crew'
            }
        ]
    },
    {
        title: 'Fright Night',
        year: 1985,
        director: 'Tom Holland',
        digitalCode: null,
        genreTags: ['Horror', 'Vampire'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: "'You're So Cool, Brewster!' Documentary"
            },
            {
                type: 'Interview',
                title: 'First Ever Fright Night Reunion Panel'
            }
        ]
    }
];

// PROBLEM #1 
/*1. Every movie object has a property of `digitalCode` that is currently set to null. Create a function called `setDigitalCode` that takes in two parameters 
- `array` and `value`; `array` represents an array of movie objects; `value` represents the value we want to apply to the `digitalCode` property 
(this will always be either true or false). This function should iterate through the input array BACKWARDS and only access every other movie as iterates. 
As it iterates, it should set the current movie's `digitalCode` property to the input `value`. This function should return the input array at the end.
```
setDigitalCode(collection, true);

// => [ {set to true}, {}, {set to true}, {}, {set to true}]
I: array, value
O: input array, no output array needed
C: reverse loop and assign every other item (i.e. loop iteration) to set digitalcode value
*/


const setDigitalCode = function(array, value){

   for (let i = array.length - 1; i >= 0; i -= 2){
array[i].digitalCode = value
}
return array
};



// PROBLEM #2 //

/*Create a function called filterByGenreTag that takes in two parameters - array and tag; 
array represents an array of movie objects; tag represents a string of a certain genre designation. 
This function should use the native filter method to return a new array of only the movie objects 
that contain the input genre tag.
const horror = filterByGenreTag(collection, 'Horror');
console.log(horror); // => [{Psycho}, {The Thing}, {Fright Night}]*/

const filterByGenreTag = function(array, tag){
    return array.filter(movie => {
        if(movie.genreTags.includes(tag)){//use INCLUDES
            return 1
        }else{
            return 0
        } 
    })
};



// PROBLEM #3 //
/* Create a function called filterBySpecialFeatureType that takes in two parameters - array and type. 
array represents an array of movie objects; type represents a string describing the type of special feature. 
This function should use the native filter method to return a new array of only the movie objects that contain 
that type of special feature.
const interviews = filterBySpecialFeatureType(collection, 'Interview');
console.log(interviews); // => [{Rear Window}, {Big Trouble in Little China}, {Fright Night}] */

const filterBySpecialFeatureType = function(array, type) {
    return array.filter(movie => {
      // Check if any special feature in the movie matches the specified type
      return movie.specialFeatures && movie.specialFeatures.filter(feature => feature.type === type);
    });
  };
  
  // Example usage:
  //const interviews = filterBySpecialFeatureType(collection, 'Interview');
  //console.log(interviews);
  // Output: [
  //   { title: "Rear Window", ... },
  //   { title: "Big Trouble in Little China", ... },
  //   { title: "Fright Night", ... }
  // ]
  
 


// PROBLEM #4 //
/**
 * Create a function called getTopSpecialFeature that takes in one parameter - array and title. 
 * array represents an array of movie objects; title represents a string of the title of a film. 
 * This function should use recursion to iterate through the array. If a movie with the title is 
 * found, the function should return a string of the movie's title followed by the title of the 
 * first special feature in the film's specialFeatures array. If no movie is found matching that 
 * title, the function should return "no movie found matching that title".

 *
 */

const getTopSpecialFeature = function(array, title){
    //base

if(array.length === 0){
    return 'no matching title found';
}
    //recursion

if(array[0].title === title){
    return `${array[0].title} Special Feature: ${array[0].specialFeatures[0].title}`;
}

    return getTopSpecialFeature(array.slice(1), title)
};


// PROBLEM #5 //

/**
 * Create a function called mapTitles that takes in one parameter - array - which represents an array of movie objects. 
 * This function should use the native map method to return a new array of the movie's title, year, and director as strings.
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
 */

const mapTitles = function(array){
    return array.map(movie => {
        let title = movie.title
        let year = movie.year
        let director = movie.director
        return `${title} (${year}) - dir. ${director}`
    })
};



// PROBLEM #6 //
/**
 * Create a function called mapSpecialFeatures that takes in one parameter - array - which represents an array of movie objects. 
 * This function should use the native map method to return a new array subarrays. Each subarray in the array that is returned 
 * should be the strings of the titles of special features.
 * I: array
 * 0: array of subarrays
 */

const mapSpecialFeatures = function(array){
    return array.map(movie => {
        let newArr = []
        if(movie.specialFeatures)
        for(let i = 0; i < movie.specialFeatures.length; i++){
            newArr.push(movie.specialFeatures[i].title)
        }
        return newArr
    })
};


// PROBLEM #7 //

/**
 * Create a function called createNonsenseString that takes in two parameters - array and index. array represents an array of movie objects, 
 * and index represents the index of a string. This function should use the native reduce method to iterate over the array and accumulate a 
 * string by accessing the index of each movie's title and adding it to an output string.
const string = createNonsenseString(collection, 1);
console.log(string); // => 'eshir' 

(`e` is at the 1 index of 'Rear Window', `s` is at the 1 index of 'Psycho', etc...)

I: arr and index
O: output string with the inputted indexes forming the characters
C:reduce
 */

const createNonsenseString = function(array, index){
    return array.reduce((acc, current) => {
        if(array[index].title)
acc += current.title[index];
return acc;
    }, '')
};

// PROBLEM #8 //

/**
 * Create a function called getValues that takes in two parameters - object and props. object represents an individual movie object and props 
 represents an array of keys that exist in the object. This function should return a new array of the values that exist at those keys.

const rearWindowValues = getValues(collection[0], ['title', 'year', 'director']);
console.log(rearWindowValues); // => ['Rear Window', 1954, 'Alfred Hitchcock']
 */

const getValues = function(object, props) {
    let newArr = [];
    
    for (let i = 0; i < props.length; i++) {
      const key = props[i];
      if (object.hasOwnProperty(key)) {
        newArr.push(object[key]);
      }
    }
    
    return newArr;
  };
  
  // Example usage:
  const rearWindowValues = getValues(collection[0], ['title', 'year', 'director']);
  console.log(rearWindowValues); // Output: ['Rear Window', 1954, 'Alfred Hitchcock']
  