package com.axis.demo.exception;

public class UserException extends RuntimeException{
	String msg;

	public UserException(String msg) {
		super();
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}


}
