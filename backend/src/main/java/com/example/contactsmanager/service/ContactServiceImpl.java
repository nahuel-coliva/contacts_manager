package com.example.contactsmanager.service;

import com.example.contactsmanager.dto.ContactRequest;
import com.example.contactsmanager.dto.ContactResponse;
import com.example.contactsmanager.entity.Contact;
import com.example.contactsmanager.mapper.ContactMapper;
import com.example.contactsmanager.repository.ContactRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Service
@Primary
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {

    private final ContactRepository contactRepository;
    private final ContactMapper contactMapper;

    @Override
    public List<ContactResponse> findAll() {
        return contactMapper.toResponseList(contactRepository.findAll());
    }

    @Override
    public ContactResponse create(ContactRequest contact) {
        Contact new_contact = contactMapper.toEntity(contact);
        return contactMapper.toResponse(contactRepository.save(new_contact));
    }

    @Override
    public void deleteById(Long id) {
        contactRepository.deleteById(id);
    }
}
