package com.kumaresan.app.security;



import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;


import org.springframework.stereotype.Service;

import com.kumaresan.app.model.User;

import io.jsonwebtoken.*;

import io.jsonwebtoken.security.Keys;

@Service
public class JWTUtil {
	private final String SECRET_KEY = "my_secret_key_for_jwt_token_generation_which_should_be_long";
	private final long expiration = 1000 * 60 * 60 *10;
	
	
	private Key getKey() {
		return Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
	}
	
	/*
	 * private String extractUsername(String token) { return extractClaim(token,
	 * Claims::getSubject); }
	 */
	
	private Date extractionExpiration(String token) {
		return extractClaim(token, Claims::getExpiration);
	}
	
	public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = extractAllClaims(token);
		return claimsResolver.apply(claims);
	}
	
	private Claims extractAllClaims(String token) {
		return Jwts
				.parserBuilder()
				.setSigningKey(getKey())
				.build()
				.parseClaimsJws(token)
				.getBody();
	}
	
	private boolean isTokenExpired(String token) {
		return extractionExpiration(token).before(new Date());
	}
	
	public String generateToken(User user) {
		return Jwts.builder()
				.setSubject(user.getUsername())
				.claim("role", user.getRole().toString())
				.setIssuedAt(new Date())
				.setExpiration(new Date(System.currentTimeMillis() + expiration))
				.signWith(getKey(), SignatureAlgorithm.HS256)
				.compact();
				
	}
	
	public String extractUsername(String token) {
		return Jwts.parserBuilder()
				.setSigningKey(getKey())
				.build()
				.parseClaimsJws(token)
				.getBody()
				.getSubject();
	}
	
	private String createToken(Map<String, Object> claims, String subject) {
		return Jwts
				.builder()
				.setClaims(claims)
				.setSubject(subject)
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
				.signWith(getKey(), SignatureAlgorithm.HS256)
				.compact();
	}
	
	public boolean validateToken(String token) {
		try {
			Jwts.parserBuilder().setSigningKey(getKey()).build().parseClaimsJws(token);
			return true;
		}
		catch (JwtException e) {
			return false;
		}
		
	}
	
	
}
