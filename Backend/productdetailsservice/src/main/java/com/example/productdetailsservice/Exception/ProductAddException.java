package com.example.productdetailsservice.Exception;

public class ProductAddException extends RuntimeException{
	String msg;

	public ProductAddException(String msg) {
		super();
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}
	


}
