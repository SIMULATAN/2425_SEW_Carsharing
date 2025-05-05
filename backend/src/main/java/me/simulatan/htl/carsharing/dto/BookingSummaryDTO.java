package me.simulatan.htl.carsharing.dto;

import me.simulatan.htl.carsharing.model.CarType;

import java.time.Instant;

public record BookingSummaryDTO(
	Long id,
	String firstName,
	String lastName,
	String carBrand,
	CarType carType,
	String company,
	Instant startDate,
	Instant endDate
) {}
