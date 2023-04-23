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
public class ApplicantCreateDto {
    @NonNull String firstName;

    @NonNull String lastName;

    @NonNull String email;

    @NonNull String password;

    @NonNull String skills;
}