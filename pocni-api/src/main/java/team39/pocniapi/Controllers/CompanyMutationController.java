package team39.pocniapi.Controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;
import team39.pocniapi.Service.CompanyService;
import team39.pocniapi.domain.ApplicantCreateDto;
import team39.pocniapi.domain.ApplicantDto;
import team39.pocniapi.domain.CompanyCreateDto;
import team39.pocniapi.domain.CompanyDto;

@Controller
@RequiredArgsConstructor
public class CompanyMutationController {

    private final CompanyService companyService;
    @MutationMapping
    public CompanyDto createCompany(@Argument CompanyCreateDto input) {
        return companyService.create(input);
    }

    @MutationMapping
    public void deleteCompany(@Argument Long id) {
        companyService.deleteById(id);
    }

    @MutationMapping
    public CompanyDto addApplicantToCompany(@Argument Long companyId,@Argument Long applicantId) {
        return companyService.apply(companyId, applicantId);
    }
}
