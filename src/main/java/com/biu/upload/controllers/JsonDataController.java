package com.biu.upload.controllers;

import com.biu.upload.model.UserModel;
import com.biu.upload.service.ImageService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@ComponentScan
@RestController
public class JsonDataController {

    @Autowired
    ImageService imageService;


    @RequestMapping(value = "/gallery", method = RequestMethod.GET, produces = {"application/json;charset=UTF-8"})
    public String allPhotos(@AuthenticationPrincipal UserModel user) {

        JSONObject jsonObject = new JSONObject();

        imageService.getAllPhotos().stream().forEach(e -> {
            JSONObject photoData = new JSONObject();
            photoData.put("src", e.getWatermarkUrl());
            photoData.put("data", e.getData());
            photoData.put("user", e.getUserWhoAddPhoto());
            jsonObject.append("images", photoData);
        });


    //    System.out.println(jsonObject.toString());

        return jsonObject.toString();

    }

    @RequestMapping(value = "/userGallery", method = RequestMethod.GET, produces = {"application/json;charset=UTF-8"})
    public String userPhotos(@AuthenticationPrincipal UserModel user) {

        JSONObject jsonObject = new JSONObject();
        jsonObject.put("user", user.getUsername());

        imageService.getAllPhotos().stream().forEach(e -> {
            if(e.getUserWhoAddPhoto().equals(user.getUsername())){
                JSONObject photoData = new JSONObject();
                photoData.put("src", e.getWatermarkUrl());
                photoData.put("data", e.getData());

                jsonObject.append("images", photoData);
            }
        });

  //      System.out.println(jsonObject.toString());

        return jsonObject.toString();

    }
}