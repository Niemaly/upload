package com.biu.upload.controllers;
import com.biu.upload.service.CloudinaryConnection;
import com.biu.upload.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;


@ComponentScan
@RestController
public class MainPageController {

    @Autowired
    CloudinaryConnection cloudinaryConnection;

    @Autowired
    ImageService imageService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView mainpage(ModelAndView model){

        model.setViewName("index");
        return model;
    }




}
