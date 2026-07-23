package com.example.contactsmanager.mapper;

import com.example.contactsmanager.dto.ContactRequest;
import com.example.contactsmanager.dto.ContactResponse;
import com.example.contactsmanager.entity.Contact;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ContactMapper {

    @Mapping(target = "id", ignore = true)
    Contact toEntity(ContactRequest request);

    ContactResponse toResponse(Contact contact);

    List<ContactResponse> toResponseList(List<Contact> contacts);
}
