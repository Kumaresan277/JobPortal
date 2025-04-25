package com.kumaresan.app.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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

public class Job {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String title;
	private String company;
	private String location;

	@Column(length = 1000)
	private String description;

	
	  public Long getId() { return id; }
	  
	  public void setId(Long id) { this.id = id; }
	  
	  public String getTitle() { return title; }
	  
	  public void setTitle(String title) { this.title = title; }
	  
	  public String getCompany() { return company; }
	  
	  public void setCompany(String company) { this.company = company; }
	  
	  public String getLocation() { return location; }
	  
	  public void setLocation(String location) { this.location = location; }
	  
	  public String getDescription() { return description; }
	  
	  public void setDescription(String description) { this.description =
	  description; }
	 
}
