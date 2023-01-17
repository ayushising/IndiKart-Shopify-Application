package com.example.addToCart.Entity;

import java.math.BigInteger;
import java.util.UUID;

import lombok.Getter;
import lombok.Setter;

public class Product {

@Getter @Setter
public BigInteger id;

public UUID productID;
public String pName;
public String pDescription;
public String pCategory;
public String pBrand;
public double pPrice;
public double pRating;
public String pImageURL;
	
}
