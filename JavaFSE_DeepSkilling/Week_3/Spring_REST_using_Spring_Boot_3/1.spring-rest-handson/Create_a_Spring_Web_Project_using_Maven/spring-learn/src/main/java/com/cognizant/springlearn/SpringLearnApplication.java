
package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringLearnApplication {

    // Initialize SLF4J Logger for structural tracking logs
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        // 1. Log the initiation sequence of the application launch
        LOGGER.info("--- [START] main() method sequence has initiated execution ---");

        // 2. Launch the underlying Spring Boot framework container environment
        SpringApplication.run(SpringLearnApplication.class, args);

        // 3. Log completion confirmation message
        LOGGER.info("--- [SUCCESS] SpringLearnApplication context started up completely ---");
    }
}