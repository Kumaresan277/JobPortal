package com.kumaresan.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kumaresan.app.model.Job;
import com.kumaresan.app.repository.JobRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class JobService {
	@Autowired
	private final JobRepository jobRepository;
	
	public Job addJob(Job job) {
		return jobRepository.save(job);
	}
	
	public void deleteJob(Long id) {
		jobRepository.deleteById(id);
	}
	
	public List<Job> getAllJobs() {
		return jobRepository.findAll();
	}
}
