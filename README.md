Got it 👍
Below is a **fully rewritten, clean, professional README.md** with your **3 images perfectly placed**.
You can **copy–paste this entire content directly** into `README.md` and push.

---

```md
# 🗓️ Interview Scheduling System

A **full-stack Interview Slot Scheduling System** built using **Java Spring Boot**, **MySQL**, and **Node.js (Express + EJS)**.  
This system allows interviewers to define weekly availability and enables candidates to seamlessly book interview slots with full data integrity and race-condition safety.

---

## 👤 Author

**Siddharrtha Shankar**  
🔗 GitHub: https://github.com/SIDDHARRTHA

---

## 📌 Project Overview

This application is designed to solve real-world interview scheduling problems by providing a reliable, transaction-safe booking flow.

### Core Capabilities
- Interviewers define **weekly availability**
- System auto-generates **30-minute interview slots** for the **next 14 days**
- Candidates can **book exactly one interview slot**
- Prevents **overbooking**, **duplicate bookings**, and **invalid schedules**
- Safe slot regeneration on availability updates

---

## 🖼️ Application Screenshots

### 🔹 Main Dashboard
<p align="center">
  <img src="./assets/main.png" width="700" />
</p>

### 🔹 Availability After Edit
<p align="center">
  <img src="./assets/afteredit.png" width="700" />
</p>

### 🔹 Available Interview Slots
<p align="center">
  <img src="./assets/slots.png" width="700" />
</p>

---

## 🏗️ System Architecture

```

Frontend (Node.js + Express + EJS)
|
| REST APIs
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
- EJS (Server-side Rendering)
- Axios / Fetch API

### Database
- MySQL
- InnoDB Engine (FK + Transactions)

---

## ✨ Key Features

### ✅ Availability Management
- Create and update weekly availability
- Validates `startTime < endTime`
- Prevents overlapping or invalid schedules

### ✅ Slot Generation
- Auto-generates slots for the next **2 weeks**
- Fixed slot duration: **30 minutes**
- Old slots removed safely before regeneration

### ✅ Slot Booking
- One booking per candidate email
- Slot capacity enforcement
- Transaction-safe booking logic

### ✅ Error Handling & Validation
- Slot full exception handling
- Duplicate booking prevention
- Proper HTTP status codes and messages

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
├── assets/
│   ├── main.png
│   ├── afteredit.png
│   └── slots.png
│
├── README.md
└── .gitignore

````

---

## 🧠 API Endpoints

### Availability APIs
| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/api/availability` | Fetch all availability |
| POST | `/api/availability` | Add new availability |
| PUT | `/api/availability/{id}` | Update availability |

### Slot APIs
| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/api/slots/by-availability/{id}` | Fetch slots |

### Booking API
| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/book/{slotId}?email=` | Book interview slot |

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
- `availability_id` (FK)

### booking
- `id`
- `candidate_email` (UNIQUE)
- `slot_id` (FK)

---

## 🚀 How to Run the Project

### 1️⃣ Database Setup
```sql
CREATE DATABASE interview_db;
````

Run:

```
database/schema.sql
```

---

### 2️⃣ Backend Setup

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

Backend URL:

```
http://localhost:8080
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend URL:

```
http://localhost:3000
```

---

## 🧪 Testing Flow

1. Open frontend URL
2. Add weekly availability
3. View auto-generated slots
4. Book a slot using candidate email
5. Try duplicate booking (blocked ✅)
6. Try full slot booking (blocked ✅)

---

## 🔐 Data Integrity & Safety

* Foreign key constraints enforced
* Transactional slot booking
* Safe slot regeneration
* Backend-level validations

---

## 📝 Future Enhancements

* Delete availability support
* Maximum interviews per week constraint
* Admin authentication
* Slot pagination
* Docker & deployment support

---

## 📜 License

This project is created for **educational and interview evaluation purposes**.

---

## ⭐ Final Notes

This project demonstrates:

* Clean REST API design
* Proper database schema
* Race condition handling
* Real-world scheduling logic
* Full-stack system integration