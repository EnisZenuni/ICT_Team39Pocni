package team39.pocniapi.Service;

import team39.pocniapi.domain.ApplicantCreateDto;
import team39.pocniapi.domain.ApplicantDto;


public interface ApplicantService {

    ApplicantDto getApplicant(Long id);

    ApplicantDto create(ApplicantCreateDto applicantCreateDto);

    void deleteById(Long id);

}
