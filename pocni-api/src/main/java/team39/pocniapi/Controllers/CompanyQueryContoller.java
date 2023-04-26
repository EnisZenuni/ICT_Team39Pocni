package team39.pocniapi.Controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import team39.pocniapi.Service.CompanyService;
import team39.pocniapi.domain.ApplicantDto;
import team39.pocniapi.domain.CompanyDto;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class CompanyQueryContoller {

    private final CompanyService companyService;

    @QueryMapping
    CompanyDto company(@Argument Long id){
        return  companyService.getCompany(id);
    }

    @QueryMapping
    public List<CompanyDto> companies() {
        return companyService.companies();
    }
}

