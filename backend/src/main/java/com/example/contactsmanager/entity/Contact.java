package com.example.contactsmanager.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class Contact {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String surname;
    private String email;
    private String phone;
}
