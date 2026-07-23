package com.example.contactsmanager.service;

import com.example.contactsmanager.dto.ContactRequest;
import com.example.contactsmanager.dto.ContactResponse;
import java.util.List;

public interface ContactService {

    List<ContactResponse> findAll();

    ContactResponse create(ContactRequest contact);

    void deleteById(Long id);
}
