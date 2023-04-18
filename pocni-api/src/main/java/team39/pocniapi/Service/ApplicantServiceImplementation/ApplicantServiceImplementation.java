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

import java.util.Optional;

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

    @Override
    public Optional<ApplicantDto> getApplicant(Long id) {
        return Optional.of(ApplicantMapper.toDto(applicantRepository.findById(id).orElseThrow()));
    }
}