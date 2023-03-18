package Erdison.Dosti.Ristorante.Repository;

import Erdison.Dosti.Ristorante.Entity.Role;
import Erdison.Dosti.Ristorante.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo  extends JpaRepository<Role,Long> {
    Role findByName(String name);
}
