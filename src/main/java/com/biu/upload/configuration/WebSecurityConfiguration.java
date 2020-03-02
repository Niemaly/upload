package com.biu.upload.configuration;

import com.biu.upload.model.UserModel;
import com.biu.upload.repository.UserModelRepository;
import com.biu.upload.service.UserDetailsServisImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.EventListener;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;
import java.util.Arrays;


@Configuration
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

    private UserDetailsServisImplementation userDetailsServisImplementation;
    private UserModelRepository userModelRepository;

    @Autowired
    public WebSecurityConfiguration(UserDetailsServisImplementation userDetailsServisImplementation, UserModelRepository userModelRepository ){
        this.userDetailsServisImplementation = userDetailsServisImplementation;
        this.userModelRepository =userModelRepository;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
       // auth.inMemoryAuthentication().withUser(new User("user", passwordEncoder().encode("user"), Collections.singleton(new SimpleGrantedAuthority("USER"))));
        auth.userDetailsService(userDetailsServisImplementation);
    }



    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().authorizeRequests()
                .antMatchers("/").permitAll()
                .antMatchers("/gallery").permitAll()
                .antMatchers("/deletePhoto").hasAuthority("USER")
                .antMatchers("/userGallery").hasAuthority("USER")
                .antMatchers("/response").hasAuthority("USER")
                .anyRequest().permitAll()
                .and().formLogin().permitAll()
                .and().csrf().disable();

    }


    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*","/", "/gallery", "/userGallery"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }


    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }


    @EventListener(ApplicationReadyEvent.class)
    public void setSomeUsers(){
        UserModel user1 = new UserModel("user", passwordEncoder().encode("user"), "USER");
        UserModel user2 = new UserModel("u", passwordEncoder().encode("user"), "USER");
        UserModel user3 = new UserModel("useruser", passwordEncoder().encode("user"), "USER");

        userModelRepository.save(user1);
        userModelRepository.save(user2);
        userModelRepository.save(user3);

    }


    @Bean
    public MultipartResolver multipartResolver() {
        return new StandardServletMultipartResolver();
    }
}
