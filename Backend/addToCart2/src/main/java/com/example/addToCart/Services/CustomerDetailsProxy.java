package com.example.addToCart.Services;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.addToCart.Entity.User;


@Component
@FeignClient(name="Customer",url="localhost:9091")
public interface CustomerDetailsProxy {
	@GetMapping("shopify/user/getId/{userId}")
	public User getUser(@PathVariable String userId);

}
