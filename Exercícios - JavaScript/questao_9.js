function authors(booksByCategory) {
    let allAuthors = new Set();

    booksByCategory.forEach(category => {
        category.books.forEach(book => {
            allAuthors.add(book.author);
        });
    });

    return Array.from(allAuthors);
}

const booksByCategory = [
    {
        category: "Romance",
        books: [
            { title: "O Sol Também é Uma Estrela", author: "Nicola Yoon" },
            { title: "O Noivo da Minha Melhor Amiga", author: "Emily Gin" },
            { title: "Orgulho e Preconceito", author: "Jane Austen" },
        ],
    },
    {
        category: "Fantasia",
        books: [
            { title: "Harry Potter e a Pedra Filosofal", author: "J.K. Rowling" },
            { title: "O Hobbit", author: "J.R.R. Tolkien" },
            { title: "Eragon", author: "Christopher Paolini" },
            { title: "O Nome do Vento", author: "Patrick Rothfuss" },
        ],
    },
    {
        category: "Suspense",
        books: [
            { title: "A Garota no Trem", author: "Paula Hawkins" },
            { title: "O Silêncio dos Inocentes", author: "Thomas Harris" },
        ],
    },
    {
        category: "Ficção Científica",
        books: [
            { title: "Duna", author: "Frank Herbert" },
            { title: "Neuromancer", author: "William Gibson" },
            { title: "Fundação", author: "Isaac Asimov" },
            { title: "1984", author: "George Orwell" },
            { title: "O Fim da Infância", author: "Arthur C. Clarke" },
        ],
    },
];

let uniqueAuthors = authors(booksByCategory);
console.log(uniqueAuthors);
