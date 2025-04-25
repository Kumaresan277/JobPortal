package com.kumaresan.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kumaresan.app.model.Job;
import com.kumaresan.app.repository.JobRepository;
import com.kumaresan.app.service.JobService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/jobs")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class JobController {
	@Autowired
	private final JobService jobService;
	
	@GetMapping("/all")
	public List<Job> getAllJobs() {
		
		return jobService.getAllJobs();
	}
	
	@PostMapping("/add")
	public Job addJob(@RequestBody Job job) {
		return jobService.addJob(job);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteJob(@PathVariable Long id) {
		jobService.deleteJob(id);
	}

}
