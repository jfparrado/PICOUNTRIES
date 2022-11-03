function FindWordStartingWith(book, query) {
  // Your code here:
}

module.exports = FindWordStartingWith;

// function FindWordStartingWith (book, query) {
//   ​
//       const txt = book.text;
//       query = query.toLowerCase();
//   ​
//       const result = [];

//       for (let i = 0; i < txt.length; i++) {
//          console.log(txt[i]);

//          const sliced = txt.slice(i, i + query.length)
//          console.log(sliced);

//          if(sliced ===  query && (txt[i-1] === ' ' || i === 0)) result.push(i)

//       }
//       return result
//   }
//   ​
//   module.exports = FindWordStartingWith
//   ​
//   const book = {
//       id: 1,
//       text:
//         'Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas'
//     }
//   ​
//   //   const book = {
//   //     id: 1,
//   //     text:
//   //       'Erase una vez un libro de '
//   //   }
//   ​
//   ​
//   //  console.log(FindWordStartingWith(book, 'De'))//([23])
//   //   console.log(FindWordStartingWith(book, 'un'))//([6, 14, 43])
//   //   console.log(FindWordStartingWith(book, 'franco'))//([])
//   //   console.log(FindWordStartingWith(book, 'era'))//([0, 39])
