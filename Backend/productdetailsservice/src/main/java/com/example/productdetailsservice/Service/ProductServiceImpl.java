package com.example.productdetailsservice.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.TextCriteria;
import org.springframework.data.mongodb.core.query.TextQuery;
import org.springframework.stereotype.Service;
import com.example.productdetailsservice.Entity.Product;
import com.example.productdetailsservice.Exception.IDNotFoundException;
import com.example.productdetailsservice.Exception.PriceException;
import com.example.productdetailsservice.Exception.ProductAddException;
import com.example.productdetailsservice.Repo.ProductRepo;
import com.example.productdetailsservice.Util.AppConstant;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	ProductRepo productRepo;


	//Add Product
	@Override
	public Product save(Product product) {
		
		if(product.pName=="") {
			throw new ProductAddException(AppConstant.INVALID_NAME);
		}
		if(product.pDescription=="") {
			throw new ProductAddException(AppConstant.DELETE_MESSAGE);
		}
		else if(product.pRating<0.0) {
			throw new ProductAddException(AppConstant.INVALID_RATING_NEG);
		}
		
		else if(product.pPrice<0.0) {
			throw new PriceException(AppConstant.INVALID_PRICE);
		}
//		else if(product.pRating>0.0 || product.pRating<=5.0) {
//			throw new ProductAddException(AppConstant.INVALID_RATING_MESSAGE);
//		}
//
		product.setProductID(UUID.randomUUID());
		return productRepo.save(product);
	
	}

	//Get all products
	@Override
	public ArrayList<Product> findAll() {
		return (ArrayList<Product>) productRepo.findAll();
	}

	//Get By Id
	@Override
	public Product findByproductID(UUID productId) {	
		return productRepo.findByproductID(productId);
	}
	
	
	//Find By name
	@Override
	public List<Product> getProductByName(String pName) {
		List<Product> products =productRepo.findProductByName(pName);

		 return products;
        }
	@Override
	public List<Product> getProductByBrand(String pBrand) {
		List<Product> products =productRepo.findProductByBrand(pBrand);

		return products;
	
	}
	@Override
	public List<Product> getProductByCategory(String pCategory) {
		List<Product> products =productRepo.findProductByCategory(pCategory);

		return products;
	}

	@Override
	public String deleteProduct(UUID productId) {
		
		 productRepo.deleteById(productId);
		return AppConstant.DELETE_MESSAGE;
	}
}
