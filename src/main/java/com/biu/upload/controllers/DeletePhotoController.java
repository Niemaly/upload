package com.biu.upload.controllers;

import com.biu.upload.service.CloudinaryConnection;
import com.biu.upload.model.UserModel;
import com.biu.upload.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@ComponentScan
@RestController
public class DeletePhotoController {

    @Autowired
    CloudinaryConnection cloudinaryConnection;

    @Autowired
    ImageService imageService;

    @DeleteMapping("/deletePhoto")
    public void deletePhoto(@AuthenticationPrincipal UserModel user, @RequestParam(value = "url") String url) {

        imageService.getAllPhotos().stream().forEach(e -> {
            if (e.getWatermarkUrl().equals(url)){
                cloudinaryConnection.deletePhoto(e.getNoChangesUrl());
            }
        });
    }
}