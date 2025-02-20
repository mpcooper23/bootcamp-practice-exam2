
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
O: input array
C: reverse loop and push every other item to set digitalcode value
*/


const setDigitalCode = function(array, value){

   for (let i = array.length - 1; i >= 0; i -= 2){
array[i].digitalCode = value
}
return array
};

// PROBLEM #2 //

const filterByGenreTag = function(){
    
};



// PROBLEM #3 //

const filterBySpecialFeatureType = function(){
    
};


// PROBLEM #4 //

const getTopSpecialFeature = function(array, title){
    
};


// PROBLEM #5 //

const mapTitles = function(){
    
};



// PROBLEM #6 //

const mapSpecialFeatures = function(){
    
};

// PROBLEM #7 //

const createNonsenseString = function(){
    
};

// PROBLEM #8 //

const getValues = function(){
    
};
