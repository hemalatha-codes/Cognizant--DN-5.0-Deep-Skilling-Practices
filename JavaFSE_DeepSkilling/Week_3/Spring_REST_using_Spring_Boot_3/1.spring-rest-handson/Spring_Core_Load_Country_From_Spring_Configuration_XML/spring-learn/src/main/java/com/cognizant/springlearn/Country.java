
package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Country {
    private static final Logger LOGGER = LoggerFactory.getLogger(Country.class);

    private String code;
    private String name;

    // Empty parameter constructor with mandatory tracking log
    public Country() {
        LOGGER.debug("Inside Country Constructor.");
    }

    // Getters and Setters with required log messages
    public String getCode() {
        LOGGER.debug("Inside getCode() getter method.");
        return code;
    }

    public void setCode(String code) {
        LOGGER.debug("Inside setCode() setter method with value: {}", code);
        this.code = code;
    }

    public String getName() {
        LOGGER.debug("Inside getName() getter method.");
        return name;
    }

    public void setName(String name) {
        LOGGER.debug("Inside setName() setter method with value: {}", name);
        this.name = name;
    }

    @Override
    public String toString() {
        return "Country [code=" + code + ", name=" + name + "]";
    }
}