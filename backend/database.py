import sqlite3
import os
from datetime import datetime

DB_PATH = os.path.join(os.path.dirname(__file__), 'crafzio.db')

def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Enquiries table for Contact Page & "Let's Talk" modal
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS enquiries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            company TEXT,
            email TEXT NOT NULL,
            phone TEXT,
            service_type TEXT,
            message TEXT NOT NULL,
            status TEXT DEFAULT 'New',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    # Careers applications table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS job_applications (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            role TEXT,
            experience TEXT,
            portfolio_url TEXT,
            notes TEXT,
            status TEXT DEFAULT 'Received',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    # Newsletter / insights subscribers
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS subscribers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')

    conn.commit()
    conn.close()

def insert_enquiry(name, company, email, phone, service_type, message):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO enquiries (name, company, email, phone, service_type, message)
        VALUES (?, ?, ?, ?, ?, ?)
    ''', (name, company, email, phone, service_type, message))
    enquiry_id = cursor.lastrowid
    conn.commit()
    conn.close()
    return enquiry_id

def get_all_enquiries():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM enquiries ORDER BY created_at DESC')
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]

def insert_application(name, email, phone, role, experience, portfolio_url, notes):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO job_applications (name, email, phone, role, experience, portfolio_url, notes)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    ''', (name, email, phone, role, experience, portfolio_url, notes))
    app_id = cursor.lastrowid
    conn.commit()
    conn.close()
    return app_id

def insert_subscriber(email):
    conn = get_db_connection()
    cursor = conn.cursor()
    try:
        cursor.execute('INSERT INTO subscribers (email) VALUES (?)', (email,))
        conn.commit()
        success = True
    except sqlite3.IntegrityError:
        success = False
    finally:
        conn.close()
    return success
