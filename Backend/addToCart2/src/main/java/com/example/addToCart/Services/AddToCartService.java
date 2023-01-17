package com.example.addToCart.Services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.addToCart.Entity.Cart;
import com.example.addToCart.Entity.CartDetails;
import com.example.addToCart.Entity.Product;
import com.example.addToCart.Entity.User;
import com.example.addToCart.Repository.AddToCartRepo;

@Service
public class AddToCartService {

	@Autowired
	AddToCartRepo addToCartRepo;
	
	@Autowired
	ProductDetailsProxy productDetailsProxy;
	
	@Autowired
	CustomerDetailsProxy customerDetailsProxy;

	public Object addItemTOCartService(Cart cart) {
		return addToCartRepo.save(cart);
	}
	
	public void removeItemFromCartService(Cart cart) {
		addToCartRepo.delete(cart);
	}

	public CartDetails displayAllProductsInCart(String userId) {
		
		CartDetails cartDetails=new CartDetails();
		cartDetails.setUserId(userId);
		System.out.println("indisipaly"+userId);
		
		User user=customerDetailsProxy.getUser(userId);
		cartDetails.setUserName(user.name);

		cartDetails.setUserEmail(user.email);
		
		
		ArrayList<Cart> cartList = addToCartRepo.findByuserId(userId);
		ArrayList<Product> productList=new ArrayList<Product>();
			
		for(int i=0;i<cartList.size();i++) {
			Product product=productDetailsProxy.getProductById(cartList.get(i).getProductId());
			productList.add(product);
			cartDetails.total+=product.pPrice;
//			System.out.print(cartDetails.total);
		}
		cartDetails.setList(productList);	
		
		return cartDetails;
		
	}
}
