package classroom_management.system.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import classroom_management.system.Entity.Course;
import classroom_management.system.Service.CoursesService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/courses")
public class CoursesController {

	@Autowired
	CoursesService service ;
	
	
	@GetMapping("getalldata")
	public List<Course> gellallcoursesdata(){
		
		return service.gellallcoursesdata();
		
	}
	
	@PostMapping("/insertdata")
	public void insertdata(@RequestBody Course course)
	{
	     service.insertalldata(course);
	}
     

	@PutMapping("/updateddata")
	 public void updatedata(@RequestBody Course course)
	 {
		 
		 service.updatedata(course);
	 }
     
	@DeleteMapping("/deletddata")
	 public void deletedata(@RequestBody Course course)
	 {
		 service.deletedata(course);
	 }
	
	@GetMapping("Course/{id}")
	public List<Course> getCourseid(@PathVariable int id )
	{
		return service.getallcourseid(id);
	}
	
	@PutMapping("Course/{id}")
	public void updatedid(@PathVariable int id )
	{
		service.updateid(id);
	}
	
	@DeleteMapping("Course/{id}")
	public void deletedataid(@PathVariable int id)
	{
		service.deletedataid(id);
	}
	

}






