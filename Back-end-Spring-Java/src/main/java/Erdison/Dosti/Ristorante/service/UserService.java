package Erdison.Dosti.Ristorante.service;

import Erdison.Dosti.Ristorante.Entity.Role;
import Erdison.Dosti.Ristorante.Entity.User;

import java.util.List;

public interface UserService {

    User saveUser(User user);
    Role saveRole(Role role);
     void addRoleToUser(String username, String roleName);
     User getUser(String username);
     List<User> getUsers();
}
