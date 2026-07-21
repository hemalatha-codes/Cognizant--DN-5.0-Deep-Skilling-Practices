
package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(SpringLearnApplication.class, args);
        
        // Call the method to load and print your XML bean data
        displayCountry();
    }

    public static void displayCountry() {
        LOGGER.info("--- [START] Executing displayCountry() Method ---");
        
        // Load the context XML configuration file
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        
        // Fetch the configured Country bean instance
        Country country = context.getBean("country", Country.class);
        
        // Log out the country details
        LOGGER.debug("Country : {}", country.toString());
        
        LOGGER.info("--- [END] displayCountry() Execution Finished ---");
        context.close ();
    }
}