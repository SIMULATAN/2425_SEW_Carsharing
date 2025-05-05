package me.simulatan.htl.carsharing.model;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;

@Entity
public class Vehicle extends PanacheEntityBase {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	public Long getId() {
		return id;
	}

	public String brand;
	@Enumerated(EnumType.STRING)
	public CarType type;
	@ManyToOne
	@JoinColumn(name = "companyId")
	public RentalCompany carRentalCompany;
	public String licensePlate;
	public String model;
	@Enumerated(EnumType.STRING)
	public Status status;
}
