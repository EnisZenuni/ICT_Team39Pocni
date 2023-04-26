package team39.pocniapi.domain;

import java.util.List;
import java.util.stream.Collectors;

public interface CompanyMapper {
    static CompanyDto toDto(Company company) {
        return CompanyDto.builder().id(company.getId()).
                companyName(company.getName()).
                companyDescription(company.getCompanyDescription()).
                companyIdentificator(company.getCompanyIdentificator())
                .applicants(company.getApplicants())
                .build();
    }

    static Company toCompanyFromCreateCompany(CompanyCreateDto companyCreateDto) {
        return Company.builder()
                .Name(companyCreateDto.getCompanyName())
                .companyDescription(companyCreateDto.getCompanyDescription())
                .companyIdentificator(companyCreateDto.getCompanyIdentificator())
                .password(companyCreateDto.getPassword())
                .build();
    }
    static List<CompanyDto> toDto(List<Company> companiesList) {
        return companiesList.stream()
                .map(CompanyMapper::toDto)
                .collect(Collectors.toList());
    }
}
