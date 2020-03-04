package com.biu.upload.controllers;

import com.biu.upload.service.CloudinaryConnection;
import com.biu.upload.exceptions.NoCloudinaryConnectionException;
import com.biu.upload.model.UserModel;
import com.biu.upload.service.ImageService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@ComponentScan
@RestController
public class PostingPhotosController {

    @Autowired
    CloudinaryConnection cloudinaryConnection;

    @Autowired
    ImageService imageService;

    private static String UPLOADED_FOLDER = "/home/jacek/Pulpit/photos/";


    @PostMapping("/")
    public String uploadPhotoToServer(@RequestParam("newImage") MultipartFile file,
                                                   RedirectAttributes redirectAttributes, @AuthenticationPrincipal UserModel user) {

        if (file.isEmpty()) {
            redirectAttributes.addFlashAttribute("message", "Please select a file to upload");
            return "error";
        }

        try {
            UUID uuid =  UUID.randomUUID();

            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER + uuid.toString());
            Files.write(path, bytes);

            System.out.println(path);

            redirectAttributes.addFlashAttribute("message",
                    "You successfully uploaded '" + file.getOriginalFilename() + "'");

            try {
                cloudinaryConnection.uploadPhoto(path.toString(), user.getUsername());
            } catch (NoCloudinaryConnectionException e){
                e.printStackTrace();
            }


        } catch (IOException e) {
            e.printStackTrace();
        }

        JSONObject jsonObject = new JSONObject();
        jsonObject.put("src",imageService.getAllUserPhotos(user.getUsername()).get(imageService.getAllUserPhotos(user.getUsername()).size() - 1).getWatermarkUrl() );
        return jsonObject.toString();

    }
}