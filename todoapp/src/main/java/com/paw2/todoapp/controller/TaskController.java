package com.paw2.ToDoApp.controller;


import com.paw2.ToDoApp.exception.ResourceNotFoundException;
import com.paw2.ToDoApp.model.Task;
import com.paw2.ToDoApp.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class TaskController {
    @Autowired
    private final TaskRepository taskRepository;

    public TaskController(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @GetMapping("/tasks")
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @PostMapping("/tasks")
    public Task createTask(@RequestBody Task task){
        return taskRepository.save(task);
    }

    @GetMapping("/tasks/{id}")
    public ResponseEntity<Task> getTask(@PathVariable Long id){
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not exist with id: " + id));
        return ResponseEntity.ok(task);
    }

    @PutMapping("/tasks/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id,@RequestBody Task taskDetails){
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not exist with id: " + id));
        task.setNote(taskDetails.getNote());
        task.setText(taskDetails.getText());

        Task updatedTask = taskRepository.save(task);
        return ResponseEntity.ok(updatedTask);
    }
}
