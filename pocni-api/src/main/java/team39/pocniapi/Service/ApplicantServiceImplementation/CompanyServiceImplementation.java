package team39.pocniapi.Service.ApplicantServiceImplementation;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import team39.pocniapi.Repository.ApplicantRepository;
import team39.pocniapi.Repository.CompanyRepository;
import team39.pocniapi.Service.CompanyService;
import team39.pocniapi.domain.*;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CompanyServiceImplementation implements CompanyService {

    private final CompanyRepository companyRepository;
    private final ApplicantRepository applicantRepository;
    @Override
    public CompanyDto getCompany(Long id) {
        return (CompanyMapper.toDto(companyRepository.getReferenceById(id)));
    }

    @Transactional
    @Override
    public CompanyDto create(CompanyCreateDto companyCreateDto) {
        Company company = CompanyMapper.toCompanyFromCreateCompany(companyCreateDto);
        return CompanyMapper.toDto(companyRepository.save(company));
    }

    @Override
    public void deleteById(Long id) {
        companyRepository.deleteById(id);
    }

    @Transactional
    @Override
    public CompanyDto apply(Long companyId, Long applicantId) {
        Company company = companyRepository.getReferenceById(companyId);
        company.getApplicants().add(applicantRepository.getReferenceById(applicantId));
        return CompanyMapper.toDto(companyRepository.save(company));
    }

    @Override
    public List<CompanyDto> companies() {
        return CompanyMapper.toDto(companyRepository.findAll());
    }
}
