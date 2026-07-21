package com.cognizant.account.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @GetMapping("/{accountNumber}")
    public Map<String, Object> getAccountDetails(@PathVariable String accountNumber) {
        Map<String, Object> response = new HashMap<>();
        response.put("accountNumber", accountNumber);
        response.put("accountType", "Savings");
        response.put("balance", 75000.0);
        return response;
    }
}