<h1 align="center" style="font-weight: bold;">Dogs Life Page</h1>
<p align="center">
<b>Dogs Life Page</b> is a simple project designed to display dog images and provide a complete list of dog breeds using the <b>The Dog API</b>. The purpose is to provide a view of available breeds, showing random dog images along with temperament's information for each breed.
</p>

<h2 style="font-weight: bold;">📍 Features</h2>

- <b>Dog Image Gallery</b>: Displays random dog images with breed information.
- <b>Breed Search</b>: Allows users to search for specific dog breeds.
- <b>Breed List</b>: Displays all available dog breeds with temperament's details.
- <b>Responsive Design</b>: Built with the Angular Material Design System for a modern and responsive user interface.
- <b>Routing</b>: Seamless navigation between pages with Angular Routing.

## 💻 Technologies

- Angular 16
- The Dog API
- Angular Material Design System
- Node.js v20.18.2

## 💡 How to Use

1. Clone the repository:

   ```bash
   git clone https://github.com/dmmscript/DogsLifePage.git
   ```

2. Navigate to the project directory:

   ```bash
   cd DogsLifePage
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a folder called `environments` inside the `src` directory:

   ```bash
   mkdir src/environments
   ```

5. Inside the `src/environments` folder, create a file called `environment.ts` with the following content:

   ```typescript
   export const environment = {
     production: false,
     apiUrl: "https://api.thedogapi.com/v1/images/search?limit=15",
     apiKey: "YOUR_API_KEY", // Replace with your own API key
     breedsUrl: "https://api.thedogapi.com/v1/breeds?",
   };
   ```

6. Start the development server:

   ```bash
   ng serve
   ```

7. Open your browser and go to `http://localhost:4200` to view the application.
