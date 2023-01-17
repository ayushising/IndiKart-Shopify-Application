package com.axis.demo.service;

import java.util.List;
import java.util.Optional;

import com.axis.demo.model.User;

public interface UserService {
	public User addUser(User user) ;
	public User getUserByID(String userId);
	public String deleteUserbyID(String userId);
	public List<User> getAll();
	


}
