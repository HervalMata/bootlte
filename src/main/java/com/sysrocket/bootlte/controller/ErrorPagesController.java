package com.sysrocket.bootlte.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ErrorPagesController {

	@RequestMapping("/404")
	public String notFound() {
		return "/error/404";
	}
	
	@RequestMapping("/500")
	public String forbidden() {
		return "/error/500";
	}
	
}
