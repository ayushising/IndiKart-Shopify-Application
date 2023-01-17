package com.example.addToCart.Repository;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.addToCart.Entity.Cart;

@Repository
public interface AddToCartRepo extends MongoRepository<Cart, Long>{

	Cart save(Cart cart);
	void delete(Cart cart);
	ArrayList<Cart> findByuserId(String userId);
	
}
