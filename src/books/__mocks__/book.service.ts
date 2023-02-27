export const BookService = jest.fn().mockReturnValue({

    createBook: jest.fn(dto => {
        return {
            id: "0ab2272c-5201-44f6-8420-ea4eb9e65c8d",
            ...dto
        }
    }),

    getBooks: jest.fn().mockResolvedValue([{
        id: "0ab2272c-5201-44f6-8420-ea4eb9e65c8d",
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        isbn: '978-0547928227',
        price: 15,
    }]),

    getBookById: jest.fn().mockResolvedValue({
        id: "0ab2272c-5201-44f6-8420-ea4eb9e65c8d",
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        isbn: '978-0547928227',
        price: 15,
    }),

    deleteBook: jest.fn().mockReturnValue({ success: true }),

})