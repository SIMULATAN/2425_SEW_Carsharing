package me.simulatan.htl.carsharing.dto;

import java.time.Instant;

public record BookingCreateDTO(
	Long customerId,
	Long vehicleId,
	Instant startDate,
	Instant endDate
) {}
