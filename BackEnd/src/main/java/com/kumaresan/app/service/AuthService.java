package com.kumaresan.app.service;

import org.springframework.stereotype.Service;

import com.kumaresan.app.dto.AuthRequest;
import com.kumaresan.app.dto.AuthResponse;
import com.kumaresan.app.dto.RegisterRequest;
import com.kumaresan.app.model.Role;
import com.kumaresan.app.model.User;
import com.kumaresan.app.repository.UserRepository;
import com.kumaresan.app.security.JWTUtil;

import lombok.RequiredArgsConstructor;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;


@Service
@RequiredArgsConstructor
public class AuthService {
	private final UserRepository userRepo;
	private final PasswordEncoder encoder;
	private final JWTUtil jwtUtil;
	
	
	public AuthResponse register(RegisterRequest request) {
		
		User user = User.builder()
				.username(request.getUsername())
				.password(encoder.encode(request.getPassword()))
				.role(Role.valueOf(request.getRole().toUpperCase()))
				.build();
		
		userRepo.save(user);
		String token = jwtUtil.generateToken(user);
		return AuthResponse.builder()
				.token(token)
				.build();
	}
	
	public AuthResponse login(AuthRequest request) {
		User user = userRepo.findByUsername(request.getUsername())
				.orElseThrow(() -> new UsernameNotFoundException("User not found"));
		
		if(!encoder.matches(request.getPassword(), user.getPassword())) {
			throw new BadCredentialsException("Invali Credentials");
		}
		
		String token = jwtUtil.generateToken(user);
		return AuthResponse.builder().token(token).build();
	}
}
