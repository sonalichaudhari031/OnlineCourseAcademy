package classroom_management.system.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import classroom_management.system.Dao.CoursesDao;
import classroom_management.system.Entity.Course;





@Service
public class CoursesService {
	
	@Autowired
	CoursesDao dao ;



	public List<Course> gellallcoursesdata() {
		 List<Course> getalldata= dao.getAllCourses();
			
			return getalldata;
	}



	public void insertalldata(Course course) {
		  dao.insertdata(course);
		
		
	}



	public void updatedata(Course course) {
		dao.updated(course);
		
	}



	public void deletedata(Course course) {
		dao.deletdalldata(course);
	}



	public List<Course> getallcourseid(int id) {
		
		return dao.findid(id);
	}



	public void updateid(int id) {
		dao.updatedid(id);
		
	}



	public void deletedataid(int id) {
		dao.deletedata(id);
		
	}



	


	}

	
	
    
	
	
	
	
	
	
	
	
	
	

	


