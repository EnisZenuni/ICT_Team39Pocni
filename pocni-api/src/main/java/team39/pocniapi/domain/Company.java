package team39.pocniapi.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
@Builder
@Table(name="Company")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @Column(name = "company_name")
    private String Name;

    @NonNull
    private String companyDescription;

    @NonNull
    private String companyIdentificator;

    @NonNull
    private String password;
}
