package com.quyvx.accommodationbooking.dto.account;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ViewAccountDto {
    private String userName;
    private String role;
    private String name;
    private String address;
    private String phone;
}
