package me.simulatan.htl.carsharing.model;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;

import java.time.Instant;

@Entity
public class Booking extends PanacheEntityBase {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	public Long getId() {
		return id;
	}

	public Instant endDate;
	public Instant startDate;
	@ManyToOne
	@JoinColumn(name = "vehicleId")
	public Vehicle vehicle;
	@ManyToOne
	@JoinColumn(name = "customerId")
	public Customer customer;
}
