# Use an official Python runtime as a parent image
FROM node:8.11.1

# Set the working directory to /app
WORKDIR /dist

# Copy the current directory contents into the container at /app
COPY . /dist

# Install any needed packages specified in requirements.txt
RUN npm install
RUN npm install -g @angular/cli@7.1.1

# Make port 80 available to the world outside this container
EXPOSE 4200

# Run app.py when the container launches
CMD ng serve
