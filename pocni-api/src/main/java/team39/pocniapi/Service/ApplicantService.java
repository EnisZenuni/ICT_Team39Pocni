package team39.pocniapi.Service;

import team39.pocniapi.domain.Applicant;
import team39.pocniapi.domain.ApplicantCreateDto;
import team39.pocniapi.domain.ApplicantDto;

import java.util.Optional;

public interface ApplicantService {

    Optional<ApplicantDto> getApplicant(Long id);

    ApplicantDto create(ApplicantCreateDto applicantCreateDto);

}
