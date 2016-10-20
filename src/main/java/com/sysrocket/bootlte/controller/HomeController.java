package com.sysrocket.bootlte.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class HomeController {
	
	@RequestMapping()
    public String list() {
        return "/home/welcome";
    }
	
	@RequestMapping("internal-server-error")
	public String error() {
		throw new RuntimeException();
	}
	
}
