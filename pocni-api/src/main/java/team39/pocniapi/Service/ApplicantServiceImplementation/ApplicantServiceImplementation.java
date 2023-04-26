package team39.pocniapi.Service.ApplicantServiceImplementation;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import team39.pocniapi.Repository.ApplicantRepository;
import team39.pocniapi.Service.ApplicantService;
import team39.pocniapi.domain.Applicant;
import team39.pocniapi.domain.ApplicantCreateDto;
import team39.pocniapi.domain.ApplicantDto;
import team39.pocniapi.domain.ApplicantMapper;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ApplicantServiceImplementation implements ApplicantService {
    private final ApplicantRepository applicantRepository;

    @Transactional
    @Override
    public ApplicantDto create(ApplicantCreateDto applicantCreateDto) {
        Applicant applicant = ApplicantMapper.toApplicantFromCreateApplicant(applicantCreateDto);
        return ApplicantMapper.toDto(applicantRepository.save(applicant));
    }

    @Transactional
    @Override
    public void deleteById(Long id) {
        applicantRepository.deleteById(id);
    }

    @Override
    public List<ApplicantDto> applicants() {
        return ApplicantMapper.toDto(applicantRepository.findAll());
    }

    @Override
    public ApplicantDto getApplicant(Long id) {
       return (ApplicantMapper.toDto(applicantRepository.getReferenceById(id)));
    }


}