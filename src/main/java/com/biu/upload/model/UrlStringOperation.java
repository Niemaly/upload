package com.biu.upload.model;

public class UrlStringOperation {

    public static String getPublicImageTagFromUrl(String url){
        return url.split("/")[7];
    }
    public static String getRowId(String url){
        return  url.split("/")[7].substring(0,20);
    }

}
