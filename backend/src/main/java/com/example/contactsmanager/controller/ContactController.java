package com.example.contactsmanager.controller;

import com.example.contactsmanager.dto.ContactRequest;
import com.example.contactsmanager.dto.ContactResponse;
import com.example.contactsmanager.service.ContactService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contacts")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @GetMapping
    public List<ContactResponse> getAllContacts() {
        return contactService.findAll();
    }

    @PostMapping
    public ContactResponse createContact(@RequestBody ContactRequest contact) {
        return contactService.create(contact);
    }

    @PutMapping("/{id}")
    public ContactResponse updateContact(@PathVariable Long id, @RequestBody ContactRequest contact) {
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteContact(@PathVariable Long id) {
        contactService.deleteById(id);
    }
}
