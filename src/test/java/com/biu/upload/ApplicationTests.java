package com.biu.upload;

import com.biu.upload.service.CloudinaryConnection;
import com.biu.upload.service.ImageService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApplicationTests {

    CloudinaryConnection cloudinaryConnection = new CloudinaryConnection();

    public ApplicationTests() {
    }

    @Bean
    public CloudinaryConnection cloudinaryConnection(ImageService imageService){
        return new CloudinaryConnection();
    }
}
