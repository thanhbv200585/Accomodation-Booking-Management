package com.quyvx.accommodationbooking.service.hotel;

import com.quyvx.accommodationbooking.model.Hotel;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface HotelService {

    String save(Hotel hotel);
    List<Hotel> findByAccountId(Long account_id, Pageable pageable);


    Page<Hotel> findAll(Pageable pageable);
}
