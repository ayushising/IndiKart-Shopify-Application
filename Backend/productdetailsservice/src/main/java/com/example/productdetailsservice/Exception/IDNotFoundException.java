package com.example.productdetailsservice.Exception;

public class IDNotFoundException extends RuntimeException{

	String msg;

	public IDNotFoundException(String msg) {
		super();
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}
	
	
	
}
