package com.biu.upload.repository;

import com.biu.upload.model.ImageModel;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ImageModelRepository  extends JpaRepository<ImageModel, Long> {

}