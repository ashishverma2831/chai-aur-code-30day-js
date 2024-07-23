// Day 7 : Objects

// Task 1
const book = {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988
}
console.log(book);

// Task 2
console.log(book.title);
console.log(book['author']);

// Task 3
const book1 = {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    titleAndAuthor: function(){
        return this.title+' by '+this.author;
    },
    updateYear: function(year){
        this.year = year;
    }
}
console.log(book1.titleAndAuthor());

// Task 4
book1.updateYear(2020);
console.log(book1);

// Task 5
const library = {
    name:'abcd',
    books: [
        {
            title: 'Book1',
            author: 'Book1 author',
            year: 1958
        },
        {
            title: 'Book2',
            author: 'Book2 author',
            year: 1968
        },
        {
            title: 'Book3',
            author: 'Book3 author',
            year: 1988
        }
    ]
}
console.log(library);

// Task 6
console.log(library.name);
console.log(library.books.map(x=>x.title));

// Task 7
const book2 = {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    titleAndYear : function(){
        return this.title+' by '+this.year;
    }
}
console.log(book2.titleAndYear(  ));

// Task 8
for (const key in book2) {
    console.log(key, book2[key]);
}

// Task 9
const book3 = {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    price: 20
}
console.log(Object.keys(book3));
console.log(Object.values(book3));