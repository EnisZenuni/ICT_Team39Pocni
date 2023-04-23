package team39.pocniapi.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NonNull;
import lombok.Value;
import lombok.extern.jackson.Jacksonized;

@Builder
@Value
@Getter
@Jacksonized
public class CompanyCreateDto {

    @NonNull String companyName;

    @NonNull String companyDescription;

    @NonNull String companyIdentificator;

    @NonNull
    String password;
}
