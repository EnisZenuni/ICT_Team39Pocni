package team39.pocniapi.Controllers;


import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;
import team39.pocniapi.Service.ApplicantService;
import team39.pocniapi.domain.ApplicantCreateDto;
import team39.pocniapi.domain.ApplicantDto;

@Controller
@RequiredArgsConstructor
public class ApplicantMutationController {
    private final ApplicantService applicantService;

    @MutationMapping
    public ApplicantDto createApplicant(@Argument ApplicantCreateDto input) {
        return applicantService.create(input);
    }

    @MutationMapping
    public void deleteApplicant(@Argument Long id) {
        applicantService.deleteById(id);
    }
}
