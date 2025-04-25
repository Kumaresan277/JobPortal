package com.kumaresan.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kumaresan.app.model.Job;

public interface JobRepository extends JpaRepository<Job, Long> {

}
