package com.example.contactsmanager.dto;

public record ContactResponse(
        Long id,
        String name,
        String surname,
        String email,
        String phone
) {
}
