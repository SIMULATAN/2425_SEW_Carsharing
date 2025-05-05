package me.simulatan.htl.carsharing.dto;

import java.time.Instant;

public record BookingUpdateDTO(
	Instant startDate,
	Instant endDate
) {}
