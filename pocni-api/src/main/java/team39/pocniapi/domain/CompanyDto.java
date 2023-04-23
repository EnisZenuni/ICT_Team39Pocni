package team39.pocniapi.domain;

import lombok.Builder;
import lombok.NonNull;
import lombok.Value;
import lombok.extern.jackson.Jacksonized;

import java.util.List;

@Builder
@Value
@Jacksonized
public class CompanyDto {
    Long id;

    @NonNull String companyName;

    @NonNull String companyDescription;

    @NonNull String companyIdentificator;

    List<Applicant> applicants;

}
