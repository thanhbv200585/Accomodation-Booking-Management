package com.quyvx.accommodationbooking.controller;

import com.quyvx.accommodationbooking.dto.HotelDto;
import com.quyvx.accommodationbooking.model.Hotel;
import com.quyvx.accommodationbooking.service.hotel.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class GuestController {

    @Autowired
    private HotelService hotelService;

    @GetMapping("/hotels")
    public List<HotelDto> viewHotel(@RequestParam(defaultValue = "0") Integer pageNumber,
                                        @RequestParam(defaultValue = "10") Integer pageSize,
                                        @RequestParam(defaultValue = "assess") String sortBy

    ){
        Pageable pageable = PageRequest.of(pageNumber, pageSize, Sort.by(sortBy).descending());
        Page<Hotel> hotels = hotelService.findAll(pageable);
        List<HotelDto> hotelDtos = new ArrayList<>();
        for (Hotel hotel : hotels){
            HotelDto tempHotel = new HotelDto();
            tempHotel.setId(hotel.getId());
            tempHotel.setNameHotel(hotel.getName());
            tempHotel.setLocation(hotel.getLocation());
            tempHotel.setScore(hotel.getScore());
            tempHotel.setShortDescription(hotel.getShortDescription());
            tempHotel.setDetailDescription(hotel.getDetailDescription());
            tempHotel.setAssess(hotel.getAssess());
            tempHotel.setAvatarHotel(hotel.getAvatarHotel());
            tempHotel.setNumberRating(hotel.getNumberRating());
            hotelDtos.add(tempHotel);
        }
        return hotelDtos;
    }


}
