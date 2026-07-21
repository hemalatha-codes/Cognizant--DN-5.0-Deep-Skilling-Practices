package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // This is the Setter Method needed for Dependency Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void executeService() {
        System.out.println("Service: Executing business logic.");
        bookRepository.getBookData();
    }
}
