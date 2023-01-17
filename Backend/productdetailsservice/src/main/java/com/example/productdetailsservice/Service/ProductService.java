package com.example.productdetailsservice.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.example.productdetailsservice.Entity.Product;

public interface ProductService {
	public Product save(Product product);
	public ArrayList<Product> findAll();
	public Product findByproductID(UUID productId);
	public List<Product> getProductByName(String pName);
	public List<Product> getProductByBrand(String pBrand);
	public List<Product> getProductByCategory(String pCategory);
	public String deleteProduct(UUID productId);


}
