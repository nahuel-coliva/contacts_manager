package com.example.contactsmanager.service;

import com.example.contactsmanager.entity.Contact;
import java.util.List;

public interface ContactService {

    List<Contact> findAll();

    Contact create(Contact contact);

    void deleteById(Long id);
}
