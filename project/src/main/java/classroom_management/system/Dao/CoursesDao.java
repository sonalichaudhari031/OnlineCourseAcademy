package classroom_management.system.Dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Repository;

import classroom_management.system.Entity.Course;

   
@Repository
public class CoursesDao {
	@Autowired
	SessionFactory factory;
	


	public List<Course>getAllCourses() 
	{
	Session session = factory.openSession();  
		Criteria criteria = session.createCriteria(Course.class);
		List<Course> allList = criteria.list();
		
		return allList ;
	}
	


	public void insertdata(Course course) {
	
		System.out.println("HELLO four");
		Session session = factory.openSession();
	    Transaction tx = session.beginTransaction();
		session.save(course);
		tx.commit();
	}



	public void updated(Course course) {
		
		Session session = factory.openSession();
		Transaction tx = session.beginTransaction();
		session.update(course);
		tx.commit();
	}



	public void deletdalldata(Course course) {
		
		Session session = factory.openSession();
		Transaction tx = session.beginTransaction();
		session.delete(course);
		tx.commit();
		
	}



		
		public List<Course> findid(int id) {
		
        Session session = factory.openSession();

        Criteria criteria = session.createCriteria(Course.class);
		List<Course> alldata = criteria.list();
		
		return alldata ;
        
		
		}



		public void updatedid(int id) {
		Session session = factory.openSession();
		Transaction tx = session.beginTransaction();
	    Course  course= session.load(Course.class,id);
	    session.update(course);                
	    tx.commit();
			
		}

	
	
	
   public void deletedata(int id) {
	Session session = factory.openSession();
	Transaction tx = session.beginTransaction();
	Course Courses =  session.load(Course.class, id);
		session.delete(Courses);
	tx.commit();
		
	}


}



	
		



	

