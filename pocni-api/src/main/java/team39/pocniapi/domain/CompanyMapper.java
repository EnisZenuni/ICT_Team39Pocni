package team39.pocniapi.domain;

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
}
