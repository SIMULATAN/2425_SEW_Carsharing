package me.simulatan.htl.carsharing.model;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;

@Entity
public class Customer extends PanacheEntityBase {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	public Long getId() {
		return id;
	}

	public String firstName;
	public String lastName;
	public String email;
	@Column(name = "phoneNumber")
	public String phone;
}
