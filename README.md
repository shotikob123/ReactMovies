# Movie Information Application

This project is a Movie Information Application built using React. It allows users to search for popular movies, view detailed information, register and log in, and manage their favorite movies. The application uses local storage to save user data and session information.

## Features

- Search for popular movies using the TMDb API
- View detailed information about movies
- User registration and login
- Manage favorite movies
- Form validation with `react-hook-form` and `Yup`
- Animations using Framer Motion
- Interaction with local storage for user data and session management
- Responsive design

## Technologies Used

- React
- React Router
- React Hook Form
- Yup
- Axios
- Styled Components
- Framer Motion
- Local Storage

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/movie-info-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd movie-info-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Register a new account or log in with an existing account.
3. Search for popular movies or view detailed information about a specific movie.
4. Add or remove movies from your favorites.

## API Integration

The application integrates with the TMDb API to fetch popular movies and movie details.

- **Endpoints**:
  - Popular Movies: `https://api.themoviedb.org/3/movie/popular`
  - Movie Search: `https://api.themoviedb.org/3/search/movie`
  - Movie Details: `https://api.themoviedb.org/3/movie/{movie_id}`

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository:
    ```bash
    git clone https://github.com/your-username/movie-info-app.git
    ```
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes.
4. Commit your changes:
    ```bash
    git commit -m 'Add some feature'
    ```
5. Push to the branch:
    ```bash
    git push origin feature-name
    ```
6. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
