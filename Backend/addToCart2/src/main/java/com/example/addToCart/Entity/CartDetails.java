package com.example.addToCart.Entity;

import java.util.ArrayList;
import java.util.UUID;

import lombok.Getter;
import lombok.Setter;

public class CartDetails {
		
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	private String userId;
	private String userName;
	private String userEmail;
	private ArrayList<Product> list;
	public  double total=0.0;
	
		
	public double getTotal() {
		return total;
	}
	public void setTotal(double total) {
		this.total = total;
	}
		public String getUserId() {
		return userId;
	}
	public void setUserId(String userId2) {
		this.userId = userId2;
	}
	public ArrayList<Product> getList() {
		return list;
	}
	public void setList(ArrayList<Product> list) {
		this.list = list;
	}
	public CartDetails(String userId, ArrayList<Product> list) {
		super();
		this.userId = userId;
		this.list = list;
	}
	public CartDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
