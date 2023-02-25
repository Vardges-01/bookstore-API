export const BooksService = jest.fn().mockReturnValue({

    createBook: jest.fn(dto => {
        return {
            id: 1,
            ...dto
        }
    }),

    getBooks: jest.fn().mockResolvedValue([{
        id: 1,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        isbn: '978-0547928227',
        price: 9.99,
    }]),

    getBookById: jest.fn().mockResolvedValue({
        id: 1,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        isbn: '978-0547928227',
        price: 9.99,
    }),

    deleteBook: jest.fn().mockReturnValue({ success: true }),

    // save: jest.fn().mockReturnValue({
    //     id: 1,
    //     title: 'The Hobbit 2',
    //     author: 'J.R.R. Tolkien',
    //     isbn: '978-0547928227',
    //     price: 9.99,
    // })

})