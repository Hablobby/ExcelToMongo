
# ExcelToMongo
**ExcelToMongo** is a simple web application designed to convert Excel files into MongoDB databases. This tool is particularly useful for users looking to upload Excel files and assets without the need for extensive database knowledge or developer intervention. This application serves as a proof of concept for a larger project aimed at simplifying database creation from user-uploaded files.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Docker and Docker Compose installed on your machine.
- Basic understanding of Docker, MongoDB, and Excel file structures.

## Installation

To install **ExcelToMongo**, follow these steps:

1. Clone the repo:
   ```bash
   git clone [repository URL]
   ```
2. Navigate to the cloned repository's directory.

## Running the Project

To run **ExcelToMongo**, use the following command:

```bash
docker-compose up --build
```

This command builds and starts the necessary Docker containers for the application. By default, the application should be accessible on `http://localhost:[PORT]` (replace `[PORT]` with the actual port number specified in your Docker configuration).

## Usage

After starting the application, follow these steps to use **ExcelToMongo**:

1. Access the web interface via your browser.
2. Upload an Excel file in xlsx format.
3. Specify the desired configurations for database creation (if applicable).
4. Click 'Submit' to process the file and create a MongoDB database from its contents.
5. The application will provide a confirmation once the database is successfully created.


## General Function
When a user uploads an Excel file via the /uploadFile endpoint, the backend, it reads the file into a pandas DataFrame, handling any necessary data manipulation. This DataFrame is then directly inserted into a MongoDB database using the async Motor library, with each row in the Excel file becoming a separate document in the created collection. 
