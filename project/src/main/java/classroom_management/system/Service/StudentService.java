package classroom_management.system.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import classroom_management.system.Dao.StudentDao;
import classroom_management.system.Entity.Student;


@Service
public class StudentService {

	@Autowired
  StudentDao dao ;

	

	public List<Student> fetchAllstudent()
	{
		List<Student> allDataList = dao.allstudentList();
		
		return allDataList;

}

	public void insertalldata(Student student) 
	{

		dao.insertdata(student);
	}

	public void updateddata(Student student) {
		dao.updatedD(student);	
}

	public void deletd(Student student) {
		dao.deletedata(student);
		
	}
}