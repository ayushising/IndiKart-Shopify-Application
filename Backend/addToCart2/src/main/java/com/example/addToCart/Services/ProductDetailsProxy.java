package com.example.addToCart.Services;

import java.util.UUID;

import org.springframework.cloud.openfeign.FeignClient;
//import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.addToCart.Entity.Product;

@Component
@FeignClient(name="product-details", url="localhost:8082")
public interface ProductDetailsProxy {
	
	@GetMapping("/shopify/products/getId/{productId}")
	public Product getProductById(@PathVariable UUID productId);

}
