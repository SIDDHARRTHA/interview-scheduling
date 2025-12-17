# 🗓️ Interview Scheduling System

A **full-stack Interview Slot Scheduling System** built using **Java Spring Boot**, **MySQL**, and **Node.js (Express + EJS)** that allows interviewers to define weekly availability and candidates to book interview slots seamlessly.

---

## 👤 Author

**Siddharrtha Shankar**  
🔗 GitHub: https://github.com/SIDDHARRTHA

---

## 📌 Project Overview

This system enables:

- Interviewers to define **weekly availability**
- Automatic generation of **30-minute interview slots** for the next **2 weeks**
- Candidates to **view available slots** and **book exactly one slot**
- Prevention of **overbooking**, **duplicate bookings**, and **invalid availability**
- Slot updates with **safe regeneration logic**

---

## 🏗️ Architecture

```

Frontend (Node.js + Express + EJS)
|
| REST API
↓
Backend (Spring Boot)
|
↓
MySQL Database

```

---

## 🛠️ Tech Stack

### Backend
- Java 17
- Spring Boot 3.x
- Spring Data JPA (Hibernate)
- MySQL
- Maven

### Frontend
- Node.js
- Express.js
- EJS (Server-side rendering)
- Axios / Fetch API

### Database
- MySQL
- InnoDB (Foreign Key Support)

---

## ✨ Key Features

### ✅ Availability Management
- Add / Edit weekly availability
- Validates: `startTime < endTime`
- Prevents invalid schedules

### ✅ Slot Generation
- Auto-generates slots for **next 14 days**
- Slot duration: **30 minutes**
- Deletes old slots before regeneration (safe update)

### ✅ Slot Booking
- One booking per candidate email
- Prevents booking when slot is full
- Transaction-safe booking logic

### ✅ Error Handling
- Slot full handling
- Duplicate booking prevention
- Proper HTTP status codes

---

## 📂 Project Structure

```

interview-scheduling/
│
├── backend/
│   ├── src/main/java/com/app/interview/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── model/
│   │   ├── repository/
│   │   ├── exception/
│   │   └── config/
│   └── src/main/resources/
│
├── frontend/
│   ├── app.js
│   ├── package.json
│   └── views/
│       ├── availability.ejs
│       └── slots.ejs
│
├── database/
│   └── schema.sql
│
├── README.md
└── .gitignore

````

---

## 🧠 API Endpoints

### Availability
| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/api/availability` | Get all availability |
| POST | `/api/availability` | Add availability |
| PUT | `/api/availability/{id}` | Update availability |

### Slots
| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/api/slots/by-availability/{id}` | Get slots for availability |

### Booking
| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/book/{slotId}?email=` | Book a slot |

---

## 🗄️ Database Design

### weekly_availability
- `id`
- `day_of_week`
- `start_time`
- `end_time`
- `capacity`

### interview_slot
- `id`
- `start_time`
- `end_time`
- `capacity`
- `booked`
- `availability_id (FK)`

### booking
- `id`
- `candidate_email (unique)`
- `slot_id (FK)`

---

## 🚀 How to Run the Project

### 1️⃣ Database Setup
```sql
CREATE DATABASE interview_db;
````

Run `database/schema.sql`

---

### 2️⃣ Backend Setup

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

Backend runs on: `http://localhost:8080`

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on: `http://localhost:3000`

---

## 🧪 How to Test

1. Open `http://localhost:3000`
2. Add weekly availability
3. View generated slots
4. Book a slot using email
5. Try duplicate booking (blocked ✅)
6. Try full slot booking (blocked ✅)

---

## 🔐 Data Integrity & Safety

* Foreign key constraints enforced
* Transactional booking
* Slot regeneration handled safely
* Invalid data blocked at backend level

---

## 📝 Future Enhancements

* Delete availability
* Max interviews per week
* Admin authentication
* Pagination for slots
* Docker support

---

## 📜 License

This project is for **educational and interview evaluation purposes**.

---

## ⭐ Final Notes

This project demonstrates:

* Clean API design
* Proper DB schema
* Transaction safety
* Real-world scheduling logic
* Full-stack integration

