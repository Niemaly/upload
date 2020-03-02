package com.biu.upload.service;


import com.biu.upload.repository.UserModelRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import org.springframework.stereotype.Service;

@Service
public class UserDetailsServisImplementation implements UserDetailsService {

    private UserModelRepository userModelRepository;


    @Autowired
    public UserDetailsServisImplementation(UserModelRepository userModelRepository) {
        this.userModelRepository = userModelRepository;

    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return userModelRepository.findByUsername(s);
    }




}
