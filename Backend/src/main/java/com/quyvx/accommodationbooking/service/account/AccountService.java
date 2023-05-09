package com.quyvx.accommodationbooking.service.account;

import com.quyvx.accommodationbooking.model.Account;

public interface AccountService {
    String save(Account account);

    Account updateAccount(Account account);

    Account findById(Long id);

    Account findByPhone(String phone);

    Account findByUsername(String username);

}
