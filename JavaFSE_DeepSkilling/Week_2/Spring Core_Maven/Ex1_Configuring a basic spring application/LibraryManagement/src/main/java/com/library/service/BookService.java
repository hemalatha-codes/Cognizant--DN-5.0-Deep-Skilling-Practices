package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Setter Injection required for XML configuration
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void processLibraryRequest() {
        System.out.println("Service: Processing library request.");
        bookRepository.fetchBooks();
    }
}