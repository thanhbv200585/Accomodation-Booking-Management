package com.quyvx.accommodationbooking.controller;

import com.quyvx.accommodationbooking.dto.HotelDto;
import com.quyvx.accommodationbooking.model.Account;
import com.quyvx.accommodationbooking.model.Hotel;
import com.quyvx.accommodationbooking.service.account.AccountService;
import com.quyvx.accommodationbooking.service.hotel.HotelService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/owner")
public class OwnerController {

    @Autowired
    private HotelService hotelService;
    @Autowired
    private AccountService accountService;

    @PostMapping("/newHotel/{id}")
    public String createHotel(@PathVariable("id") Long id, @RequestBody @Valid HotelDto hotelDto){
        Account account = accountService.findById(id);
        Hotel hotel = new Hotel();
        hotel.setName(hotelDto.getNameHotel());
        hotel.setLocation(hotelDto.getLocation());
        hotel.setShortDescription(hotelDto.getShortDescription());
        hotel.setDetailDescription(hotelDto.getDetailDescription());
        hotel.setAssess(hotelDto.getAssess());
        hotel.setAvatarHotel(hotelDto.getAvatarHotel());
        hotel.setAccount(account);
        return hotelService.save(hotel);
    }

    @GetMapping("/allHotel/{id}")
    public List<HotelDto> getAllHotel(@PathVariable("id") Long id,
                                          @RequestParam(defaultValue = "0") Integer pageNumber,
                                          @RequestParam(defaultValue = "10") Integer pageSize,
                                          @RequestParam(defaultValue = "id") String sortBy
    ){
        Pageable pageable = PageRequest.of(pageNumber, pageSize, Sort.by(sortBy).descending());
        List<Hotel> hotels = hotelService.findByAccountId(id, pageable);
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
