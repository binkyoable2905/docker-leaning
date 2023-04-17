# Use the official MySQL image as the base image
FROM mysql:5.7

# Set the root password for MySQL
ENV MYSQL_ROOT_PASSWORD 123456a

# Copy SQL script to create database and table
COPY init.sql /docker-entrypoint-initdb.d/

# Expose port 3306 for MySQL connections
EXPOSE 3306