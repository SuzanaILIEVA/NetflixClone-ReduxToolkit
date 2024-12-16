# Netflix Clone

This is a Netflix Clone built using React Native with state management powered by Redux Toolkit. The app implements key features such as movie search, trending lists, and navigation, showcasing modern React Native development best practices.

### Features

- User-Friendly UI: A visually appealing interface with responsive layouts.
- Real-time search with debounce functionality.
- Clear search results with a single tap.
- Smooth Navigation: Powered by React Navigation with bottom tabs and stack navigation.
- API Integration:
  Integrated with The Movie Database (TMDB) API for fetching movies and their details.
- Global State Management: Used Redux Toolkit for seamless and scalable state management.

### Technologies & Libraries Used

##### Core Frameworks & State Management

- React Native 18.3.1: Core framework for building the app.
- Redux Toolkit 2.4.0: State management for handling movies, search results, and global app state.
- React Redux 9.1.2: Integration of Redux with React components.

### Navigation

- @react-navigation/native 7.0.13: Core library for navigation.
- @react-navigation/bottom-tabs 7.1.3: Bottom tab navigation for easy switching between screens.
- @react-navigation/native-stack 7.1.14: Stack navigation for smooth screen transitions.
- react-native-screens 4.3.0: Improves performance by optimizing screen transitions.

### UI & Styling

- react-native-linear-gradient 2.8.3: Adds gradient backgrounds for a modern and polished look.
- react-native-vector-icons 10.2.0: Provides beautiful icons for UI elements like search and clear buttons.
- react-native-safe-area-context 5.0.0: Ensures the app respects safe areas for a seamless user experience.

### Networking

Axios 1.7.9: For making HTTP requests to fetch data from the TMDB API.

### Form Handling & Validation

- Formik 2.4.6: Simplifies form handling for user inputs like movie search.
- Yup 1.5.0: Schema validation for input validation (e.g., ensuring valid search terms).

### Utility Libraries

- Lodash 4.17.21: Utility functions for better data manipulation and performance optimization.
- Debouncing: Used to optimize API calls during search.

# Gif

![](./src/assets/images/netflixCloneToolkit.gif)
