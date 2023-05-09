package com.quyvx.accommodationbooking.dto.hotel;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
public class HotelDto {
    @NotNull(message = "Name Hotel should not be null")
    private String nameHotel;
    @NotNull(message = "Location should not be null")
    private String location;
    private String shortDescription;
    private String detailDescription;
    @NotNull(message = "Assess should not be null")
    private int assess;
    private String avatarHotel;
}
