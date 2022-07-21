package com.greenwrite.member;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class service {

	@Autowired
	private repository repository;
	
	public List<entity> findAll() {
		return repository.findAll();
	}
}
