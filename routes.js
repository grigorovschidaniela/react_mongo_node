  
'use strict';

const Book = require('./models/Books');

module.exports = [
	{
		method: 'GET',
		path: '/api/books',
		handler: async (request, h) => {
			try {
				const books = await Book.find().exec();
				return h.response(books);
			} catch (error) {
				return h.response(error).code(500);
			}
		}
	},
	{
		method: 'GET',
		path: '/api/books/insert',
		handler: async (request, h) => {
			try {
				const book = new Book({
                    name: 'Steal Like An Artist',
                    author: 'Austin Kleon',
                    pageNumber: 160
				});

				const result = await book.save();
            	return h.response(result)
			} catch (error) {
				return h.response(error).code(500);
			}

		}
	}
];