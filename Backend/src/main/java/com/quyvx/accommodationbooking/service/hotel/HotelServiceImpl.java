package com.quyvx.accommodationbooking.service.hotel;

import com.quyvx.accommodationbooking.model.Hotel;
import com.quyvx.accommodationbooking.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelServiceImpl implements HotelService{

    @Autowired
    private HotelRepository hotelRepository;

    @Override
    public String save(Hotel hotel) {
        hotelRepository.save(hotel);
        return "Hotel has been added.";
    }

    @Override
    public List<Hotel> findByAccountId(Long account_id, Pageable pageable) {
        return hotelRepository.findByAccountId(account_id, pageable);
    }
}
