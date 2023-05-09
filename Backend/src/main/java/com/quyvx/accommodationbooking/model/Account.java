package com.quyvx.accommodationbooking.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Entity
@ToString
@Getter
@Setter
@Table(name = "account")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Username should be not null")
    private String username;

    @NotNull(message = "Password should be not null")
    private String password;

    @NotNull(message = "Role should be not null")
    private String role;

    @NotNull(message = "Name should be not null")
    private String name;

    private String address;

    @NotNull(message = "Phone should be not null")
    private String phone;

    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL)
    private List<Booking> bookings;

    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL)
    private List<Hotel> hotels;

}
