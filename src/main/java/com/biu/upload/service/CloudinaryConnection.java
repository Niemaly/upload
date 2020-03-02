package com.biu.upload.service;
import com.biu.upload.exceptions.NoCloudinaryConnectionException;
import com.biu.upload.model.ImageModel;
import com.biu.upload.model.UrlStringOperation;
import com.cloudinary.*;
import com.cloudinary.transformation.Layer;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

@Service
public class CloudinaryConnection {

        private ImageService imageService;

        final String cloud_name = "dd3lypx5s";
        final String api_key = "122714744874168";
        final String api_secret = "HunIuPm87ljZbXpnczKswN4HdpM";
        private Cloudinary cloudinary;

    @Autowired
    public CloudinaryConnection(ImageService imageService) {
        cloudinary = new Cloudinary(ObjectUtils.asMap(
                "cloud_name", cloud_name,
                "api_key", api_key,
                "api_secret", api_secret));
        this.imageService = imageService;
    }

    public CloudinaryConnection() {
    }

    public void uploadPhoto(String filepath, String userName) throws NoCloudinaryConnectionException {
        Map uploadResult = null;
        File toUpload = new File(filepath);
        ImageModel imageModel;
        Date date;

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");

        try {
            uploadResult = cloudinary.uploader().upload(toUpload, ObjectUtils.emptyMap());
        } catch (IOException e) {
            System.out.println("problem with upload the file to cloudinary");
            e.printStackTrace();
        }

        if (uploadResult != null) {
            date = new Date();
            String url =uploadResult.get("url").toString();
            imageModel = new ImageModel(url, userName);
            imageModel.setData(dateFormat.format(date));
            imageModel.setWatermarkUrl(generatePhotoWithWatermarkUrl(UrlStringOperation.getPublicImageTagFromUrl(url)));

            imageService.saveToDatabase(imageModel);
            uploadResult.clear();
        } else{
            throw new NoCloudinaryConnectionException("no cloudonary connection "+ dateFormat.format(new Date()));
        }
    }



    private String generatePhotoWithWatermarkUrl(String publicTagOfPhoto){
        return cloudinary.url().transformation(new Transformation().overlay(new Layer().publicId("icon2")).width(0.6).gravity("north_east").opacity(60)).imageTag(publicTagOfPhoto).split("'")[1];
    }

    public void deletePhoto(String url){
        Map deleteResult=null;
        try {
            String rowId = UrlStringOperation.getRowId(url);

            deleteResult = cloudinary.uploader().destroy(rowId, ObjectUtils.emptyMap());
            imageService.deleteImageFromDB(url);

        } catch (IOException e) {
            System.out.println("file not exist");
            e.printStackTrace();
        }
        deleteResult.clear();
    }
}
