package team39.pocniapi.Service;


import team39.pocniapi.domain.CompanyCreateDto;
import team39.pocniapi.domain.CompanyDto;

import java.util.List;

public interface CompanyService {

    CompanyDto getCompany(Long id);

    CompanyDto create(CompanyCreateDto companyCreateDto);

    void deleteById(Long id);

    CompanyDto apply(Long companyId, Long applicantId);

    List<CompanyDto> companies();
}
