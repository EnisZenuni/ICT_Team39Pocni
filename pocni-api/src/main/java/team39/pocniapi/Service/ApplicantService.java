package team39.pocniapi.Service;

import team39.pocniapi.domain.Applicant;
import team39.pocniapi.domain.ApplicantDto;

import java.util.Optional;

public interface ApplicantService {

    ApplicantDto saveApplicant(Applicant applicant);

    Optional<ApplicantDto> getApplicant(Long id);

}
