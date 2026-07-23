package com.example.contactsmanager.dto;

public record ContactRequest(
        String name,
        String surname,
        String email,
        String phone
) {
}
