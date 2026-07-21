package com.cognizant.loan.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/loans")
public class LoanController {

    @GetMapping("/{loanNumber}")
    public Map<String, Object> getLoanDetails(@PathVariable String loanNumber) {
        Map<String, Object> response = new HashMap<>();
        response.put("loanNumber", loanNumber);
        response.put("loanType", "Home Loan");
        response.put("amount", 2500000.0);
        return response;
    }
}