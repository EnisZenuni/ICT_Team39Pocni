package team39.pocniapi.Service.ApplicantServiceImplementation;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import team39.pocniapi.Repository.CompanyRepository;
import team39.pocniapi.Service.CompanyService;
import team39.pocniapi.domain.*;

@Service
@RequiredArgsConstructor
public class CompanyServiceImplementation implements CompanyService {

    private final CompanyRepository companyRepository;
    @Override
    public CompanyDto getCompany(Long id) {
        return (CompanyMapper.toDto(companyRepository.getReferenceById(id)));
    }

    @Override
    public CompanyDto create(CompanyCreateDto companyCreateDto) {
        Company company = CompanyMapper.toCompanyFromCreateCompany(companyCreateDto);
        return CompanyMapper.toDto(companyRepository.save(company));
    }

    @Override
    public void deleteById(Long id) {
        companyRepository.deleteById(id);
    }
}
