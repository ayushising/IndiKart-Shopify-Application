package com.axis.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.axis.demo.model.User;

public interface UserRepository extends MongoRepository<User,String> {
	
	@org.springframework.data.mongodb.repository.Query("{email: ?0}")
	public User findByEmail(String email);


}
