
describe("#setDigitalCode", function(){
    let sandbox = sinon.createSandbox();
    beforeEach(() => {
        sandbox.data = [
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
        ]
        
      });
    afterEach(() => {
        sandbox.restore();
    });

    it('should set the digital code correctly', function(){
        setDigitalCode(sandbox.data, true);
        assert.equal(sandbox.data[4].digitalCode, true);
        assert.equal(sandbox.data[2].digitalCode, true);
        assert.equal(sandbox.data[0].digitalCode, true);
    });
    it('should not set digital code on incorrect items', function(){
        setDigitalCode(sandbox.data, true);
        assert.equal(sandbox.data[1].digitalCode, null);
        assert.equal(sandbox.data[3].digitalCode, null);
    });
});

describe("#filterByGenreTag", function(){
    const result = filterByGenreTag(collection, 'Horror');
    const func = filterByGenreTag.toString();
    it('should return an array', function(){
        assert.equal(Array.isArray(result), true);
    });
    it('should return a correct array of items based on the input tag', function(){
        assert.deepEqual(result, [
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
        ]);
    });
    it('should use the native filter method', function(){
        assert.equal(func.includes('.filter('), true);
    });
});

describe("#filterBySpecialFeatureType", function(){
    const result = filterBySpecialFeatureType(collection, 'Interview');
    const func = filterBySpecialFeatureType.toString();
    it('should return an array', function(){
        assert.equal(Array.isArray(result), true);
    });
    it('should return a correct array of items based on the input type', function(){
        assert.deepEqual(result, [
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
        ]);
    });
    it('should use the native filter method', function(){
        assert.equal(func.includes('.filter('), true);
    });
});

describe("#getTopSpecialFeature", function(){
    const result1 = getTopSpecialFeature(collection, 'Psycho');
    const result2 = getTopSpecialFeature(collection, 'Blue Velvet');
    const func = getTopSpecialFeature.toString();
    it('should return a string', function(){
        assert.equal(typeof result1, 'string');
        assert.equal(typeof result2, 'string');
    });
    it('should return the correct string if the title is found', function(){
        assert.equal(result1, "Psycho Special Feature: The Making of Psycho");
    });
    it('should return the correct string if no matching title is found', function(){
        assert.equal(result2, "no matching title found");
    });
    it('should use recursion', function(){
        assert.equal(func.includes('getTopSpecialFeature('), true);
    });
});

describe("#mapTitles", function(){
    const result = mapTitles(collection);
    const func = mapTitles.toString();
    it('should return an array', function(){
        assert.equal(Array.isArray(result), true);
    });
    it('should return a correct array of strings', function(){
        assert.deepEqual(result, [
            "Rear Window (1954) - dir. Alfred Hitchcock",
            "Psycho (1960) - dir. Alfred Hitchcock",
            "The Thing (1982) - dir. John Carpenter",
            "Big Trouble in Little China (1986) - dir. John Carpenter",
            "Fright Night (1985) - dir. Tom Holland"
        ]);
    });
    it('should use the native map', function(){
        assert.equal(func.includes('.map('), true);
    })
});

describe("#mapSpecialFeatures", function(){
    const result = mapSpecialFeatures(collection);
    const func = mapSpecialFeatures.toString();
    it('should return an array', function(){
        assert.equal(Array.isArray(result), true);
    });
    it('should return a correct array of subarrays', function(){
        assert.deepEqual(result, [
            ["Rear Window Ethics: An Original Documentary", "Feature Commentary with John Fawell", "Hitchcock/Truffaut Interview Excerpts"],
            ["The Making of Psycho", "Feature Commentary with Stephen Rebello"],
            ["Feature Commentary with Star Kurt Russell and Director John Carpenter"],
            ["Audio Commentary with Director John Carpenter and Actor Kurt Russell", "Deleted Scenes", "Vintage Interviews with Cast and Crew"],
            ["'You're So Cool, Brewster!' Documentary", "First Ever Fright Night Reunion Panel"]
        ]);
    });
    it('should use the native map method', function(){
        assert.equal(func.includes('.map('), true);
    });
});

describe("#createNonsenseString", function(){
    const result = createNonsenseString(collection, 1);
    const func = createNonsenseString.toString();
    it('should return a string', function(){
        assert.equal(typeof result, 'string');
    });
    it('should return a correct string based on the input index', function(){
        assert.equal(result, 'eshir');
    });
    it('should use the native reduce method', function(){
        assert.equal(func.includes('.reduce('), true);
    });
});

describe("#getValues", function(){
    const result = getValues(collection[0], ['title', 'year', 'director']);
    it('should return an array', function(){
        assert.equal(Array.isArray(result), true);
    });
    it('should return a correct array of values', function(){
        assert.deepEqual(result, ['Rear Window', 1954, 'Alfred Hitchcock']);
    });
    
});