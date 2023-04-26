package team39.pocniapi.Controllers;

import lombok.RequiredArgsConstructor;
import java.util.List;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import team39.pocniapi.Service.ApplicantService;
import team39.pocniapi.domain.ApplicantDto;

@Controller
@RequiredArgsConstructor
public class ApplicantQueryController {
    private final ApplicantService applicantService;

    @QueryMapping
    public ApplicantDto applicant(@Argument Long id) {
        return applicantService.getApplicant(id);
    }
    @QueryMapping
    public List<ApplicantDto> applicants() {
        return applicantService.applicants();
    }
}
