package team39.pocniapi.domain;

import lombok.Builder;
import lombok.NonNull;
import lombok.Value;
import lombok.extern.jackson.Jacksonized;

import java.time.LocalDate;

@Builder
@Value
@Jacksonized
public class ApplicantDto {
    Long id;

    @NonNull String firstName;

    @NonNull String lastName;

    @NonNull String email;

    LocalDate dateOfBirth;

    @NonNull String skills;


    public static ApplicantDto toDto(Applicant applicant) {
        return ApplicantDto.builder().id(applicant.getId()).
                firstName(applicant.getFirstName()).
                lastName(applicant.getLastName()).
                email(applicant.getEmail()).
                dateOfBirth(applicant.getDateOfBirth()).build();
    }
}

