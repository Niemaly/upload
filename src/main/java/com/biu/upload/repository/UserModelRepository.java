package com.biu.upload.repository;

import com.biu.upload.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserModelRepository extends JpaRepository<UserModel, Long> {

    UserModel findByUsername(String username);

}
