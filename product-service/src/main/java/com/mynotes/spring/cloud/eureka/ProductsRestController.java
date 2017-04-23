package com.mynotes.spring.cloud.eureka;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
public class ProductsRestController {
	
	@RequestMapping(value = "/categories", method = RequestMethod.GET)
	@ResponseBody
	public List<Categories> getContact() {
		List<Categories> list=new ArrayList<Categories>();
		list.add(new Categories("Mobile"));
		list.add(new Categories("Laptops"));
		list.add(new Categories("Games"));
		
		return list;
	}
	

}
