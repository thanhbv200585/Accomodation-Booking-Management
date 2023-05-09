package com.quyvx.accommodationbooking.service.account;

import com.quyvx.accommodationbooking.model.Account;
import com.quyvx.accommodationbooking.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountServiceImpl implements AccountService{
    @Autowired
    private AccountRepository accountRepository;

    @Override
    public String save(Account account) {
        Optional<Account> account1 = accountRepository.findByUsername(account.getUsername());
        if(account1.isEmpty()){
            accountRepository.save(account);
            return "Account successfully created.";
        }
        else {
            return "Username already exits.";
        }
    }

    @Override
    public Account updateAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public Account findById(Long id) {
        Optional<Account> account = accountRepository.findById(id);
        if(account.isPresent()){
            return account.get();
        }
        throw new RuntimeException("Account is not found for the id " + id);
    }

    @Override
    public Account findByPhone(String phone) {
        Optional<Account> account = accountRepository.findByPhone(phone);
        if(account.isPresent()){
            return account.get();
        }
        throw new RuntimeException("Account is not found for the phone " + phone);
    }

    @Override
    public Account findByUsername(String username) {
        Optional<Account> account = accountRepository.findByUsername(username);
        if(account.isPresent()){
            return account.get();
        }
        throw new RuntimeException("Account is not found for the username " + username);
    }

}
