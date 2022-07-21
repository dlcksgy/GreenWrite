package com.greenwrite.member;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class controller {
	
	@Autowired
	private service service;

	@GetMapping("/test")
	public String index() {
			return "Hello java spring boot!123";
	}
	
	@GetMapping("/userList")
	public List<entity> list() {
		return service.findAll();
	}
}