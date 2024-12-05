# EmployWise Frontend Assignment

This is a **React-based user management application** developed as part of the EmployWise assignment. It integrates with the **Reqres API** to provide authentication, user listing, editing, and deletion features. The app is fully responsive, user-friendly, and implements token-based authentication with protected routes.

![Screenshot 2024-12-05 224417](https://github.com/user-attachments/assets/a947f2b5-a554-449d-a87f-d907c403c3f7)

![Screenshot 2024-12-05 224428](https://github.com/user-attachments/assets/4098c8ea-461f-43f4-9993-b1ed18c78ada)

![Screenshot 2024-12-05 224436](https://github.com/user-attachments/assets/055a17aa-8e96-4789-ad77-1a52075c112a)

---

## 🛠️ Features

### Level 1: Authentication
- A login screen where users can log in using the following credentials:
  - **Email**: `eve.holt@reqres.in`
  - **Password**: `cityslicka`
- Token persistence using `localStorage`.
- Redirects to the users list upon successful login.

### Level 2: User List
- Displays a paginated list of users.
- Provides a search bar for client-side filtering by name or email.
- Allows navigation between pages.

### Level 3: User Editing and Deletion
- Users can edit their details (first name, last name, email) via a modal.
- Users can be deleted from the list.
- Updates and deletions are reflected immediately in the UI.

---

## 🔧 Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/employwise-frontend.git
    ```

2. Navigate into the project directory:

    ```bash
    cd employwise-frontend
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

    The app will be available at `http://localhost:3000`.

---

## 🚀 Usage

1. Open the app in the browser.
2. Login using the following credentials:
   - **Email**: `eve.holt@reqres.in`
   - **Password**: `cityslicka`
3. After logging in, you will be redirected to the **User List** page.
4. Use the **Search bar** to filter users by name or email.
5. You can edit or delete a user by clicking the **Edit** or **Delete** buttons next to each user.

---

## ⚙️ Technologies Used

- **React**: Frontend framework.
- **Axios**: For making HTTP requests to the Reqres API.
- **Styled-components**: For CSS-in-JS and component-based styling.
- **React Router**: For navigation and route protection.
- **React Hooks**: For managing state and side effects.

---

## 🔒 Authentication Flow

1. On the login page, users can log in using the credentials provided.
2. After a successful login, a **token** is stored in `localStorage`.
3. Protected routes are accessible only if a valid token exists.
4. Users are redirected to the login page if the token is missing or expired.

---

## 📱 Responsiveness

The application is fully responsive and works on both **desktop** and **mobile** devices. Media queries are used to adjust the layout and ensure a seamless user experience across different screen sizes.

