package team39.pocniapi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import team39.pocniapi.domain.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

}
