import sqlite3

def get_user_data(username):
    # Insecure code: vulnerable to SQL injection
    query = f"SELECT * FROM users WHERE username = '{username}'"
    
    conn = sqlite3.connect('example.db')
    cursor = conn.cursor()
    cursor.execute(query)
    
    return cursor.fetchall()

if __name__ == "__main__":
    user_input = input("Enter username: ")
    data = get_user_data(user_input)
    print(data)
