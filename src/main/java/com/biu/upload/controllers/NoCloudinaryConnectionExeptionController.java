package com.biu.upload.controllers;

import com.biu.upload.exceptions.NoCloudinaryConnectionException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class NoCloudinaryConnectionExeptionController {

    @ExceptionHandler(value = NoCloudinaryConnectionException.class)
    public ResponseEntity<Object> exception(NoCloudinaryConnectionException exception) {
        return new ResponseEntity<>("No access to cloud with photos", HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
