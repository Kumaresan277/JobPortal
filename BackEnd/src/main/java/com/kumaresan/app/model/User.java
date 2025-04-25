package com.kumaresan.app.model;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String username;
	private String password;
	@Enumerated(EnumType.STRING)
	private Role role;
	
	
	  public Long getId() { return id; } public void setId(Long id) { this.id = id;
	  } public String getUsername() { return username; } public void
	  setUsername(String username) { this.username = username; } public String
	  getPassword() { return password; } public void setPassword(String password) {
	  this.password = password; } public Role getRole() { return role; } public
	  void setRole(Role role) { this.role = role; }
	 
	
}
