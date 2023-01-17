package com.axis.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

//@EnableFeignClients
@EnableDiscoveryClient
@SpringBootApplication
public class Axisdemo12Application {

	public static void main(String[] args) {
		SpringApplication.run(Axisdemo12Application.class, args);
	}

}
