package team39.pocniapi.domain;

public interface ApplicantMapper {
    static ApplicantDto toDto(Applicant applicant) {
        return ApplicantDto.builder().id(applicant.getId()).
                firstName(applicant.getFirstName()).
                lastName(applicant.getLastName()).
                email(applicant.getEmail()).
                dateOfBirth(applicant.getDateOfBirth())
                .skills((applicant.getSkills()))
                .build();
    }

    static Applicant toApplicantFromCreateApplicant(ApplicantCreateDto applicantCreateDto) {
        return Applicant.builder()
                .firstName(applicantCreateDto.getFirstName())
                .lastName(applicantCreateDto.getLastName())
                .email(applicantCreateDto.getEmail())
                .password(applicantCreateDto.getPassword())
                .skills(applicantCreateDto.getSkills())
                .build();
    }
}