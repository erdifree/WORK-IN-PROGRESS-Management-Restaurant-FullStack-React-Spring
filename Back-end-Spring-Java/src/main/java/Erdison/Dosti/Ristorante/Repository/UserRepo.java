package Erdison.Dosti.Ristorante.Repository;

import Erdison.Dosti.Ristorante.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Long> {
    User  findByUsername(String username);
}
