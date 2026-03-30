import mysql.connector

def connect_to_database():
    connection = mysql.connector.connect(
        host="localhost",
        user="admin",
        password="password123",
        database="example_db"
    )
    return connection

db_connection = connect_to_database()
