# **Pokédex Project**

## **Description**

This project is an interactive Pokédex where users can search for, view, and interact with Pokémon information, such as abilities and images. The project is built using React and utilizes an external API to fetch Pokémon data.

## **Technologies Used**
- **React**: JavaScript library for building user interfaces.
- **CSS**: Styling of the application.
- **PokéAPI**: API to fetch Pokémon data.
- **React Hooks (useState, useEffect)**: For state management and handling side effects.

---

## **Main Components**

### 1. **Searchbar**

**Description**: A search bar where the user can search for a Pokémon by its name.

**Props**:
- `onSearch`: A function that is called when the search button is clicked or the input field value changes.

**Usage Example**:

```jsx
<Searchbar onSearch={handleSearch} />

```

### 2. **Pokemon**

**Description**: Displays the details of a Pokémon, such as its name, ID, image, and abilities.

Props:
- pokemon: An object containing the information of a Pokémon.
**Usage Example:**
```jsx
<Pokemon pokemon={pokemonData} />
```
Logic: This component checks if the Pokémon image exists. If not, it shows a fallback with the initials of the Pokémon's name.

### 3. AvatarFallback
**Description**: Displays the initials of a Pokémon inside a colored circle when no image is available.

Props:

- name: The name of the Pokémon used to generate the initials.
- imageUrl: The URL of the Pokémon's image.

**Usage Example:**
```jsx
<AvatarFallback name={pokemon.name} imageUrl={pokemon.sprites.front_default} />
```

### 4. Pagination Buttons
Description: Navigation buttons to go forward or backward through the pages of results.

Classes:

- pagination-left-button: Button for going back to the previous page.
- pagination-right-button: Button for going to the next page.

## Directory Structure

```jsx
/src
  /components
    AvatarFallback.js   # Fallback image component
    Pokemon.js          # Component to display Pokémon details
    Searchbar.js        # Search bar component
    Pagination.js       # Pagination buttons component
  App.js                # Main component
  index.js              # Entry point of the application
  style.css             # Global styles
```
## Setup Instructions

**1. Clone the repository:**

Clone the repository using the following command:

```bash
git clone https://github.com/DavyL0/desafio-frontend-react.git
```

**2. Install dependencies:**

Navigate to the project directory and install the dependencies:

```bash
cd pokedex
npm install
```
**3. Run the project:**

Start the development server:

```bash
npm start
```
The application will be available at http://localhost:3000.

## Features

- Pokémon Search: Users can search for a Pokémon by name and view detailed information about it.
- Image Fallback: If the Pokémon's image is not available, the initials of the Pokémon's name are shown as a fallback.
- Pagination: Navigate through the list of Pokémon with previous and next buttons.

License
This project is licensed under the MIT License - see the LICENSE file for details.


### **Explanation**

- **Description**: This section explains what the project is and its main features.
- **Technologies Used**: Lists all the technologies and tools used to build the project.
- **Main Components**: Describes the key React components in the application.
- **Directory Structure**: Shows how the files are organized in the project.
- **Setup Instructions**: Provides step-by-step instructions for setting up the project on your local machine.
- **Features**: Lists the main functionalities of the application.
- **Contributing**: Provides guidelines on how to contribute to the project.
- **License**: If you plan to make the project open source, you can add a license. In this example, I used the MIT License.

Feel free to adapt the content as needed and replace any placeholder (like `https://github.com/DavyL0/desafio-frontend-react.git`) with the actual repository URL. This documentation can be saved as `README.md` in the root directory of your project.
