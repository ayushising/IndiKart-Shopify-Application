package com.example.productdetailsservice.Repo;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.productdetailsservice.Entity.Product;

@Repository
public interface ProductRepo extends MongoRepository<Product, BigInteger> {
	

	Product save(Product product);
	ArrayList<Product> findAll();
	Product findByproductID(UUID productId);
	
	
	@org.springframework.data.mongodb.repository.Query("{pName : ?0}")
	public List<Product> findProductByName(String pName);
	
	@org.springframework.data.mongodb.repository.Query("{pBrand : ?0}")
	public List<Product> findProductByBrand(String pBrand);
	
	@org.springframework.data.mongodb.repository.Query("{pCategory : ?0}")
	public List<Product> findProductByCategory(String pCategory);
	void deleteById(UUID productId);

	
}
