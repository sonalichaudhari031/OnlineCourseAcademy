package classroom_management.system.Entity;


import java.util.Set;

import javax.persistence.*;


	@Entity
	@Table(name = "course")
	public class Course {
	
		
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id ;
	private String title;
	private String Name;
	private String email;
	private  long num;
	protected Course() {
		super();
		// TODO Auto-generated constructor stub
	}
	protected Course(int id, String title, String name, String email, long num) {
		super();
		this.id = id;
		this.title = title;
		Name = name;
		this.email = email;
		this.num = num;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getNum() {
		return num;
	}
	public void setNum(long num) {
		this.num = num;
	}
	@Override
	public String toString() {
		return "Course [id=" + id + ", title=" + title + ", Name=" + Name + ", email=" + email + ", num=" + num + "]";
	}
	
	
	
	}
	
	
	
		
		
	