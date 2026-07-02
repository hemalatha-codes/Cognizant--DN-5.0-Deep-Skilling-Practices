package com.cognizant.springlearn.security; // Verify this matches your folder structure

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Disable CSRF for REST testing
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/authenticate").permitAll() // <-- Crucial line: Allows bypass
                        .anyRequest().authenticated()
                );
        return http.build();
    }
}
