const bookSelection = {
    isGenreSuitable(genre, age) {
      if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
        return `Books with ${genre} genre are not suitable for kids at ${age} age`;
      } else {
        return `Those books are suitable`;
      }
    },
    isItAffordable(price, budget) {
      if (typeof price !== "number" || typeof budget !== "number") {
        throw new Error("Invalid input");
      }
  
      let result = budget - price;
  
      if (result < 0) {
        return "You don't have enough money";
      } else {
        return `Book bought. You have ${result}$ left`;
      }
    },
    suitableTitles(array, wantedGenre) {
      let resultArr = [];
  
      if (!Array.isArray(array) || typeof wantedGenre !== "string") {
        throw new Error("Invalid input");
      }
      array.map((obj) => {
        if (obj.genre === wantedGenre) {
          resultArr.push(obj.title);
        }
      });
      return resultArr;
    },
  };

  let {expect}=require('chai')

  describe('bookSelection tests',()=>{
      describe('isGenre tests',()=>{
         it('Must be correct',()=>{

         expect(bookSelection.isGenreSuitable('Thriller',12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age')
         })
         it('invalid genre',()=>{
             expect(bookSelection.isGenreSuitable('ssa',10)).to.equal('Those books are suitable')
         })
         it('invalid age',()=>{
            expect(bookSelection.isGenreSuitable('Thriller',13)).to.equal('Those books are suitable')
         })
        })
        describe('isItAffortable',()=>{
            it('correct',()=>{
                expect(bookSelection.isItAffordable(1,2)).to.equal('Book bought. You have 1$ left')
            })
            it('does not work',()=>{
                expect(bookSelection.isItAffordable(3,2)).to.equal("You don't have enough money")
            })
        })
        describe(' suitableTitles',()=>{
            it('works',()=>{
                expect(bookSelection.suitableTitles([{title:'Da Vinchi',genre:'Thriller'}],'Thriller'))
                .to.equal(['Da Vinchi'])
            })
            it('works',()=>{
                expect(bookSelection.suitableTitles([{title:'Da Vinchi',genre:'Thriller'}],'Thrill'))
                .to.equal([])
            })
        })
  })

  