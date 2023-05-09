package com.quyvx.accommodationbooking.dto.hotel;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ViewHotelDto {
    private Long id;
    private String nameHotel;
    private String location;
    private float score;
    private String shortDescription;
    private String detailDescription;
    private int assess;
    private int numberRating;
}
