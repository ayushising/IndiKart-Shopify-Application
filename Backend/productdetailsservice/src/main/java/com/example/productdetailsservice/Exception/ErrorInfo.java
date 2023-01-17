package com.example.productdetailsservice.Exception;


import java.time.LocalDateTime;

public class ErrorInfo {
	
	private String errorMessage;
	private String httpStatus;;
	private LocalDateTime dateTime;
	
	
	public String getErrorMessage() {
		return errorMessage;
	}
	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	public String getHttpStatus() {
		return httpStatus;
	}
	public void setHttpStatus(String httpStatus) {
		this.httpStatus = httpStatus;
	}
	public LocalDateTime getDateTime() {
		return dateTime;
	}
	public void setDateTime(LocalDateTime dateTime) {
		this.dateTime = dateTime;
	}
	public ErrorInfo(String errorMessage, String httpStatus, LocalDateTime dateTime) {
		super();
		this.errorMessage = errorMessage;
		this.httpStatus = httpStatus;
		this.dateTime = dateTime;
	}
	public ErrorInfo() {
		super();
		// TODO Auto-generated constructor stub
	}
	

}
