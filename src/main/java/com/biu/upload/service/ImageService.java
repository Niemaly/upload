package com.biu.upload.service;

import com.biu.upload.model.ImageModel;
import com.biu.upload.repository.ImageModelRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ImageService {
    ImageModelRepository imageModelRepository;

    public ImageService() {
    }

    @Autowired
    public ImageService(ImageModelRepository imageModelRepository) {
        this.imageModelRepository = imageModelRepository;
    }

    public void saveToDatabase(ImageModel... images){
        for (ImageModel imageElement: images) {
            imageModelRepository.save(imageElement);
        }
    }

    public List<ImageModel> getAllPhotos(){
       return imageModelRepository.findAll();
    }

    public List<ImageModel> getAllUserPhotos(String user){

        return imageModelRepository.findAll().stream().filter(e-> e.getUserWhoAddPhoto().equals(user)).collect(Collectors.toList());
    }

    public void deleteImageFromDB (String url){

        ImageModel imageModel = (ImageModel) imageModelRepository.findAll().stream().filter(e->e.getNoChangesUrl().equals(url)).toArray()[0];
        imageModelRepository.deleteById(imageModel.getId());

    }


}
