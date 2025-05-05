package me.simulatan.htl.carsharing.resource;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import me.simulatan.htl.carsharing.model.Vehicle;

import java.util.List;

@Path("vehicles")
public class VehiclesResource {
	@Path("list")
	@GET
	public List<Vehicle> getVehicles() {
		return Vehicle.findAll().list();
	}
}
