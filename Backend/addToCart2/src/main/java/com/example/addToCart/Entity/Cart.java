package com.example.addToCart.Entity;

import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection="Cart")
public class Cart {

	@Id
	
	public String id;

   	public String userId;
    
	public UUID productId;

	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Cart(String id, String userId, UUID productId) {
		super();
		this.id = id;
		this.userId = userId;
		this.productId = productId;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public UUID getProductId() {
		return productId;
	}

	public void setProductId(UUID productId) {
		this.productId = productId;
	}

}
