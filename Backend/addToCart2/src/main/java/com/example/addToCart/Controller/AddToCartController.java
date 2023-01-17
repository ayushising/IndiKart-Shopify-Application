package com.example.addToCart.Controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.addToCart.Entity.Cart;
import com.example.addToCart.Entity.CartDetails;
import com.example.addToCart.Services.AddToCartService;


@CrossOrigin
@RestController
@RequestMapping("/shopify/cart")
public class AddToCartController {
	
	@Autowired
	AddToCartService addToCartService;
	
	@PostMapping("/add")
	public Object addToCart(@RequestBody Cart cart) {
		System.out.println("added");

		return addToCartService.addItemTOCartService(cart);
	}
	
	@PostMapping("/remove")
	public void removeFromCart(@RequestBody Cart cart) {
		addToCartService.removeItemFromCartService(cart);
	}
	
	@GetMapping("/show/{userId}")
	public CartDetails showItems(@PathVariable String userId) {
//		System.out.println(userId);

		return addToCartService.displayAllProductsInCart(userId);
	}
}
