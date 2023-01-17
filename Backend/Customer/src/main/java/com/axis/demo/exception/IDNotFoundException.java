package com.axis.demo.exception;

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
