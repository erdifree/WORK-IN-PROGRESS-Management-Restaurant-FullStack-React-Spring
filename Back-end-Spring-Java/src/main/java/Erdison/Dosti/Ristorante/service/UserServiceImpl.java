package Erdison.Dosti.Ristorante.service;

import Erdison.Dosti.Ristorante.Entity.Role;
import Erdison.Dosti.Ristorante.Entity.User;
import Erdison.Dosti.Ristorante.Repository.RoleRepo;
import Erdison.Dosti.Ristorante.Repository.UserRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.bridge.MessageUtil;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.rmi.server.LogStream.log;


@Service @RequiredArgsConstructor @Transactional @Slf4j
public class UserServiceImpl implements UserService {
    private final UserRepo userRepo;
    private final RoleRepo roleRepo;

    @Override
    public User saveUser(User user) {


        log.info("Saving new user {} to the database",user.getName());

        return userRepo.save(user);
    }

    @Override
    public Role saveRole(Role role) {
        log.info("Saving new role{} to the database", role.getName());
        return roleRepo.save(role);
    }

    @Override
    public void addRoleToUser(String username, String roleName) {
        log.info("Adding role {} to user{}", roleName, username);
     User user= userRepo.findByUsername(username);
     Role role = roleRepo.findByName(roleName);
     user.getRolse().add(role);
    }

    @Override
    public User getUser(String username) {
        log.info("Fetching user{}", username);
        return  userRepo.findByUsername(username);
    }

    @Override
    public List<User> getUsers() {
        log.info("Fetching all user{}");
        return userRepo.findAll();
    }
}
