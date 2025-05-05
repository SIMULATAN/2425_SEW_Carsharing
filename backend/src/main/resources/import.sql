-- Insert data into car_rental_company
INSERT INTO car_rental_company (name, address, plz, city) VALUES ('City Car Rentals', 'Main Street 123', '12345', 'Berlin');
INSERT INTO car_rental_company (name, address, plz, city) VALUES ('Eco Mobility', 'Green Avenue 42', '54321', 'Hamburg');
INSERT INTO car_rental_company (name, address, plz, city) VALUES ('Fast Wheels', 'Highway Road 99', '67890', 'Munich');
INSERT INTO car_rental_company (name, address, plz, city) VALUES ('Urban Drive', 'Downtown 7', '13579', 'Cologne');
INSERT INTO car_rental_company (name, address, plz, city) VALUES ('Green Ride', 'Park Lane 23', '24680', 'Stuttgart');
INSERT INTO car_rental_company (name, address, plz, city) VALUES ('Speedy Rentals', 'Airport Road 5', '11223', 'Düsseldorf');
INSERT INTO car_rental_company (name, address, plz, city) VALUES ('Luxury Cars', 'Rich Street 10', '33445', 'Frankfurt');
INSERT INTO car_rental_company (name, address, plz, city) VALUES ('Family Vans', 'Suburb 45', '55667', 'Leipzig');
INSERT INTO car_rental_company (name, address, plz, city) VALUES ('Budget Rides', 'Economy Ave 12', '77889', 'Dortmund');
INSERT INTO car_rental_company (name, address, plz, city) VALUES ('City Wheels', 'Downtown 8', '99000', 'Bremen');

-- Insert data into vehicle
INSERT INTO vehicle (brand, model, licensePlate, status, type, companyId) VALUES ('Tesla', 'Model 3', 'ABC-123', 'AVAILABLE', 'SEDAN', 1);
INSERT INTO vehicle (brand, model, licensePlate, status, type, companyId) VALUES ('Volkswagen', 'Golf', 'XYZ-789', 'UNAVAILABLE', 'COMPACT', 2);
INSERT INTO vehicle (brand, model, licensePlate, status, type, companyId) VALUES ('Ford', 'Fiesta', 'JKL-456', 'AVAILABLE', 'COMPACT', 3);
INSERT INTO vehicle (brand, model, licensePlate, status, type, companyId) VALUES ('Audi', 'A4', 'MNO-321', 'AVAILABLE', 'SEDAN', 4);
INSERT INTO vehicle (brand, model, licensePlate, status, type, companyId) VALUES ( 'Mercedes', 'C-Class', 'PQR-654', 'UNAVAILABLE', 'SEDAN', 5);
INSERT INTO vehicle (brand, model, licensePlate, status, type, companyId) VALUES ('BMW', 'X5', 'STU-987', 'AVAILABLE', 'SUV', 6);
INSERT INTO vehicle (brand, model, licensePlate, status, type, companyId) VALUES ('Hyundai', 'i30', 'VWX-741', 'AVAILABLE', 'COMPACT', 7);
INSERT INTO vehicle (brand, model, licensePlate, status, type, companyId) VALUES ('Kia', 'Sportage', 'YZA-852', 'UNAVAILABLE', 'SUV', 8);
INSERT INTO vehicle (brand, model, licensePlate, status, type, companyId) VALUES ('Renault', 'Clio', 'BCD-963', 'AVAILABLE', 'COMPACT', 9);
INSERT INTO vehicle (brand, model, licensePlate, status, type, companyId) VALUES ('Peugeot', '208', 'EFG-159', 'UNAVAILABLE', 'COMPACT', 10);

-- Insert data into customer
INSERT INTO customer (firstName, lastName, email, phoneNumber) VALUES ( 'John', 'Doe', 'john@example.com', '+491234567890');
INSERT INTO customer (firstName, lastName, email, phoneNumber) VALUES ( 'Jane', 'Smith', 'jane@example.com', '+491234567891');
INSERT INTO customer (firstName, lastName, email, phoneNumber) VALUES ( 'Michael', 'Johnson', 'michael@example.com', '+491234567892');
INSERT INTO customer (firstName, lastName, email, phoneNumber) VALUES ( 'Susan', 'White', 'susan@example.com', '+491234567893');
INSERT INTO customer (firstName, lastName, email, phoneNumber) VALUES ( 'David', 'Brown', 'david@example.com', '+491234567894');
INSERT INTO customer (firstName, lastName, email, phoneNumber) VALUES ( 'Linda', 'Clark', 'linda@example.com', '+491234567895');
INSERT INTO customer (firstName, lastName, email, phoneNumber) VALUES ( 'Robert', 'Wilson', 'robert@example.com', '+491234567896');
INSERT INTO customer (firstName, lastName, email, phoneNumber) VALUES ( 'Nancy', 'Davis', 'nancy@example.com', '+491234567897');
INSERT INTO customer (firstName, lastName, email, phoneNumber) VALUES ( 'Kevin', 'Miller', 'kevin@example.com', '+491234567898');
INSERT INTO customer (firstName, lastName, email, phoneNumber) VALUES ( 'Sarah', 'Hall', 'sarah@example.com', '+491234567899');

-- Insert data into booking
INSERT INTO booking (customerId, vehicleId, startDate, endDate) VALUES (1, 1, '2025-04-01 10:00:00', '2025-04-02 10:00:00');
INSERT INTO booking (customerId, vehicleId, startDate, endDate) VALUES (2, 2, '2025-04-03 12:00:00', '2025-04-04 14:00:00');
INSERT INTO booking (customerId, vehicleId, startDate, endDate) VALUES (3, 3, '2025-04-05 09:00:00', '2025-04-06 11:00:00');
INSERT INTO booking (customerId, vehicleId, startDate, endDate) VALUES (4, 4, '2025-04-07 08:00:00', '2025-04-08 16:00:00');
INSERT INTO booking (customerId, vehicleId, startDate, endDate) VALUES (5, 5, '2025-04-09 07:00:00', '2025-04-10 15:00:00');
INSERT INTO booking (customerId, vehicleId, startDate, endDate) VALUES (6, 6, '2025-04-11 06:00:00', '2025-04-12 14:00:00');
INSERT INTO booking (customerId, vehicleId, startDate, endDate) VALUES (7, 7, '2025-04-13 12:00:00', '2025-04-14 13:00:00');
INSERT INTO booking (customerId, vehicleId, startDate, endDate) VALUES (8, 8, '2025-04-15 11:00:00', '2025-04-16 12:00:00');
INSERT INTO booking (customerId, vehicleId, startDate, endDate) VALUES (9, 9, '2025-04-17 10:00:00', '2025-04-18 11:00:00');
INSERT INTO booking (customerId, vehicleId, startDate, endDate) VALUES (10, 10, '2025-04-19 09:00:00', '2025-04-20 10:00:00');
