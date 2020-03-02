package com.biu.upload.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ImageModel {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String watermarkUrl;
    private String userWhoAddPhoto;
    private String data;
    private String noChangesUrl;

    public String getWatermarkUrl() {
        return watermarkUrl;
    }

    public void setWatermarkUrl(String watermarkUrl) {
        this.watermarkUrl = watermarkUrl;
    }



    public ImageModel() {
    }

    public ImageModel(String url, String userWhoAddPhoto) {
        this.noChangesUrl = url;
        this.userWhoAddPhoto = userWhoAddPhoto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNoChangesUrl() {
        return noChangesUrl;
    }

    public void setNoChangesUrl(String noChangesUrl) {
        this.noChangesUrl = noChangesUrl;
    }

    public String getUserWhoAddPhoto() {
        return userWhoAddPhoto;
    }

    public void setUserWhoAddPhoto(String userWhoAddPhoto) {
        this.userWhoAddPhoto = userWhoAddPhoto;
    }


    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }



}
