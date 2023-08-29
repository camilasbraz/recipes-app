# Recipe Application

This is a recipe application that allows users to browse and filter recipes based on ingredients, preparation time, and name. The application provides an interactive user interface to help users find and explore various recipes.

## Technologies Used

- Front-End: React, HTML, CSS
- Back-End: Express.js, Vercel
- Databsae: PostgreSQL, Elephantsql

## Decisions and Considerations

### Front-End (React)

For the front-end development, React was chosen due to its component-based architecture and the ability to create dynamic user interfaces. The application is divided into reusable components, such as recipe cards and filters, to ensure maintainability and scalability.

### Back-End (Firebase)

Firebase was selected as the back-end solution for this project due to its ease of use and features like real-time database capabilities. Firebase provides a way to store recipe data, manage user authentication, and host the application on the web.

## Tutorials

Below are tutorials for each part of the project:

### Front-End Development

1. **Setup React Project:**

   - Use `create-react-app app-name` to create a new React project.
   - Customize the components, styles, and layout according to your project's design.

2. **Implement Filters:**
   - Create filter components for ingredients (multi-select), time range (range input), and name (search input).
   - Update state based on user interactions with these filters.
   - Filter recipes based on selected filters using JavaScript array filtering.

### Back-End Development with Firebase

1. **Set Up Firebase:**

   - Create a Firebase account and set up a new project.
   - Configure Firebase Authentication for user management.

2. **Database Structure:**

   - Design the database structure to store recipe data.
   - Use Firebase Realtime Database to store recipes with relevant information.

3. **Implement Data Fetching:**
   - Use Firebase SDK to fetch recipes from the database.
   - Display fetched data on the front-end.

### Hosting the Application

1. **Deploy to Firebase Hosting:**
   - Use Firebase CLI to deploy the React application to Firebase Hosting.
   - Configure hosting settings and deploy your application to a live URL.

## Usage

To run the application locally:

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the application using `npm start`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
