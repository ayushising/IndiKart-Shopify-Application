package com.example.productdetailsservice.Controller;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.productdetailsservice.Entity.Product;
import com.example.productdetailsservice.Exception.IDNotFoundException;
import com.example.productdetailsservice.Exception.PriceException;
import com.example.productdetailsservice.Service.ProductService;

@RestController
@CrossOrigin
@RequestMapping("/shopify/products")
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	
	//ADD PRODUCT
	@PostMapping("/save")
	public Product saveData(@RequestBody Product product) {
//		if(product.pPrice<0) {
//			throw new PriceException("Price cant be negative");
//		}
		return productService.save(product);
	}
	
	//GET ALL PRODUCTS
	@GetMapping("/getAllProducts")
	public ArrayList<Product> getAllProducts() {
		return productService.findAll();
	}
	
	//GET PRODUCT BY ID
	@GetMapping("/getId/{productId}")
	public ResponseEntity<Product> getProductById(@PathVariable UUID productId) {
		Product product=productService.findByproductID(productId);
		return new ResponseEntity<Product>(product,HttpStatus.OK);
	}
	
	

	//DELETE PRODUCT BY ID
	@DeleteMapping("/product/{productId}")
	public String deleteProduct(@PathVariable  UUID productId) {
		return productService.deleteProduct(productId);
	}
	

	
	
	//SEARCH BY NAME
	@GetMapping("/search/{pName}")
	public List<Product> getProductByName(@PathVariable String pName) {
		return productService.getProductByName(pName);
	}
	
	//SEARCH BY BRAND
	@GetMapping("/searchBrand/{pBrand}")
	public List<Product> getProductByBrand(@PathVariable String pBrand) {
		return productService.getProductByBrand(pBrand);
	}
	
	//SEARCH BY CATEGORY
	@GetMapping("/searchCategory/{pCategory}")
	public List<Product> getProductByCategory(@PathVariable String pCategory) {
		return productService.getProductByCategory(pCategory);
	}
	
	

}
