package com.quyvx.accommodationbooking.dto.account;

import com.quyvx.accommodationbooking.model.Role;
import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ViewAccountDto {
    private String userName;
    private Role role;
    private String name;
    private String address;
    private String phone;
}
