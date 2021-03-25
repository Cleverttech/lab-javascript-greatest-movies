// Iteration 1: All directors? - Get the array of all directors.
let getAllDirectors = ( movies ) => {
    let mappedArr = movies.map((movie)=>{
         return movie.director
    })
    return mappedArr;
    // for iteration 1.1 remove duplicates
}

let howManyMovies = ( movies ) => {
    if (movies.length == 0 || movies.director !== "Steven Spielberg"){
       return 0;
    }
   let bestMovies  = movies.filter((el , index) => {
       let count = 0;
       let genres = el.genre;
        if(el.director !== "Steven Spielberg" && genres.includes(!"Drama")){  
            count += 0;
        }else if(el.director !== "Steven Spielberg"){
             count += 1;
        }else {
            count += 2;
        }
  return count;
     });
     return bestMovies;
  }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
 let ratesAverage = (movies) => {
    // if (movies.length === 0){
    //     return 0;
    //  }
     let total = movies.reduce((acc, el , index) => {
         return acc + Number(el.rate || 0)
     }, 0)

     let average = total != 0 ? total/movies.length : 0

     return Math.round(average *100) / 100
   
 }

// Iteration 4: Drama movies - Get the average of Drama Movies

 // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
 

 let orderByYear = ( movies ) => {
let clonedMovies = JSON.parse(JSON.stringify( movies ));
   clonedMovies.sort((a , b) => {
       if (a.year > b.year){
         return 1;
       }else if (a.year < b.year) {
         return -1;
       }else{
           if(a.title > b.title) {
              return 1;
           }else if (a.title < b.title) {
              return -1;
           }else {
              return 0;
           }
       }
   }) 
   return clonedMovies;
 }



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
