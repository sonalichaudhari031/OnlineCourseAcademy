package classroom_management.system.Dao;

import java.util.List;



import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import classroom_management.system.Entity.Student;
import org.springframework.data.repository.CrudRepository;


@Repository
public class StudentDao {
	
 @Autowired
  SessionFactory factory;

 public List<Student> allstudentList()
 {
	 
	 Session session = factory.openSession();
	 Criteria criteria = session.createCriteria(Student.class);
	 List <Student> studentList = criteria.list();
	 
	return studentList;
	 
 }

public void insertdata(Student student)  {
	
	Session session = factory.openSession();
	Transaction tx =session.beginTransaction();
	session.save(student);
	tx.commit();
	
}

public void updatedD(Student s) {
	
    Session session = factory.openSession();
	
	Student db = session.get(Student.class, s.getId());
	db.setName(s.getName());
		Transaction tx = session.beginTransaction();
	session.update(db);
	tx.commit();
	
}

 public void deletedata(Student student) {

	Session s = factory.openSession();
	Transaction tx = s.beginTransaction();
	Student s1 = s.load(Student.class,student.getId());
	s.delete(s1);
	tx.commit();	
}

}
