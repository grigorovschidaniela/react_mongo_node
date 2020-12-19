'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: String, 
    author: String,
    pageNumber: Number
});

module.exports = mongoose.model('Book', BookSchema);