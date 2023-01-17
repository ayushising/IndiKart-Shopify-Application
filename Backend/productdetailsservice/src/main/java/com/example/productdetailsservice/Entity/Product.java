package com.example.productdetailsservice.Entity;

import java.math.BigInteger;
import java.util.UUID;

import javax.persistence.GeneratedValue;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.TextIndexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.TextScore;

@Document
public class Product {

	@Id
	@GeneratedValue
	public BigInteger id;
	@TextScore
	private Float score;

	
	public UUID productID;
	
	@TextIndexed(weight=5)
	public String pName;
	
	public String pDescription;
	
	@TextIndexed(weight=4)
	public String pCategory;
	
	@TextIndexed(weight=3)
	public String pBrand;
	
	public double pPrice;
	
	
	public double pRating;
	
	public String pImageURL;
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}


	public BigInteger getId() {
		return id;
	}
	public void setId(BigInteger id) {
		this.id = id;
	}
	public UUID getProductID() {
		return productID;
	}
	public void setProductID(UUID productID) {
		this.productID = productID;
	}
	public String getpName() {
		return pName;
	}
	public void setpName(String pName) {
		this.pName = pName;
	}
	public String getpDescription() {
		return pDescription;
	}
	public void setpDescription(String pDescription) {
		this.pDescription = pDescription;
	}
	public String getpCategory() {
		return pCategory;
	}
	public void setpCategory(String pCategory) {
		this.pCategory = pCategory;
	}
	public String getpBrand() {
		return pBrand;
	}
	public void setpBrand(String pBrand) {
		this.pBrand = pBrand;
	}
	public double getpPrice() {
		return pPrice;
	}
	public void setpPrice(double pPrice) {
		this.pPrice = pPrice;
	}
	public Product(BigInteger id, UUID productID, String pName, String pDescription, String pCategory, String pBrand,
			double pPrice, double pRating, String pImageURL) {
		super();
		this.id = id;
		this.productID = productID;
		this.pName = pName;
		this.pDescription = pDescription;
		this.pCategory = pCategory;
		this.pBrand = pBrand;
		this.pPrice = pPrice;
		this.pRating = pRating;
		this.pImageURL = pImageURL;
	}
	public double getpRating() {
		return pRating;
	}
	public void setpRating(double pRating) {
		this.pRating = pRating;
	}
	public String getpImageURL() {
		return pImageURL;
	}
	public void setpImageURL(String pImageURL) {
		this.pImageURL = pImageURL;
	}


	@Override
	public String toString() {
		return "Product [id=" + id + ", productID=" + productID + ", pName=" + pName + ", pDescription=" + pDescription
				+ ", pCategory=" + pCategory + ", pBrand=" + pBrand + ", pPrice=" + pPrice + ", pRating=" + pRating
				+ ", pImageURL=" + pImageURL + "]";
	}



	
}
