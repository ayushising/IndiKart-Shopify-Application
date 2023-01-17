package com.axis.demo.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.demo.model.User;
import com.axis.demo.service.UserService;

@CrossOrigin
@RequestMapping("/shopify/user")
@RestController
public class Controller {
	@Autowired
	UserService User;
	
	@GetMapping("/hello")
	public String hello() {
		return "hello";
	}
	
	//Add a customer
	@PostMapping("/save")
	public ResponseEntity<User> saveUserDetail(@RequestBody User user) {
		User user2=User.addUser(user);
				
		return new ResponseEntity <User> (user2,HttpStatus.OK);
	}
	
	//Get By Id
	@GetMapping("/getId/{userId}")
	public User getUser(@PathVariable String userId) {
		User user2=User.getUserByID(userId);
		return user2;
	}	
	//Delete Customers
	@DeleteMapping("/remove/{userId}")
	public String deleteUser(@PathVariable  String userId) {
		return User.deleteUserbyID(userId);
	}
	
	//Get All User
	@GetMapping("/get")
	public List<User> getAllUser(){
		return User.getAll();
		
	}
	

}
