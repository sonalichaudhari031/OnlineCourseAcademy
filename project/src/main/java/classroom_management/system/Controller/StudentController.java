package classroom_management.system.Controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import classroom_management.system.Entity.Student;
import classroom_management.system.Service.StudentService;


@RestController
public class StudentController {
	
	@Autowired
	StudentService service ;
	
	
	@GetMapping("/Testing")
	public List<Student> fetchAllstudent()
	{
		return service.fetchAllstudent();
		
	}
	
	@PostMapping("/insertData")
	public void insertdata(@RequestBody Student student)
	{
		 service.insertalldata(student);
	}
	
	@PutMapping("/updatedData")
	public void updated(@RequestBody Student student)
	{
		service.updateddata(student);
		
	}
	 
	@DeleteMapping("/deletedata")
	public void deletd(@RequestBody Student student)
	{
		service.deletd(student);
	}
	
	
	
	
	
	
	
}
