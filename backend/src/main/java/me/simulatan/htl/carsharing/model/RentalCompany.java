package me.simulatan.htl.carsharing.model;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;

@Entity
@Table(name = "CAR_RENTAL_COMPANY")
public class RentalCompany extends PanacheEntityBase {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	public Long getId() {
		return id;
	}

	public String city;
	public String name;
	public String address;
	public String plz;
}
