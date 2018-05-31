package ma.maman.jeanne.repository;

import ma.maman.jeanne.domain.FeesAgency;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the FeesAgency entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FeesAgencyRepository extends JpaRepository<FeesAgency, Long> {

}