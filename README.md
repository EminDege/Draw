# Draw App

Draw App is a React application that allows users to conduct different types of draws or selections, such as a classic draw, Christmas draw, grouping, and pairing draws. Users can input participant names and select various options to customize the draw result. The app provides a dynamic and interactive interface for managing participants, drawing winners, and making pairings or groups based on the selected options.

## Features

- **Classic Draw**: Randomly selects winners from the input list.
- **Christmas Draw**: Randomly pairs members without matching the same person as before.
- **Grouping Draw**: Divides participants into groups of a specified size.
- **Pairing Draw**: Pairs participants from two input lists.
- **Customization Options**: Filter participants who should be paired or not paired with others.
- **Dynamic Interface**: The app reacts to the selected draw type and shows appropriate input fields and options.

## Demo

A demo of the app can be viewed [here](#) (link to live demo, if available).

## Installation

1. Clone this repository to your local machine.
   
   ```bash
   git clone https://github.com/EminDege/draw.git
   cd draw
2.Install dependencies using npm or yarn.
  npm install
3.Run the app locally.
  npm start

Usage
Select the draw type: Choose from Classic, Christmas, Grouping, or Pairing draw.

Input participants: Add the names of participants in the provided text area (one name per line).

Customize the draw: Depending on the draw type, you will be given options like selecting the number of winners, group sizes, and pairing preferences.

Run the draw: Click the "Draw" button to generate the results.

Draw Types
Classic Draw: Randomly selects the specified number of winners.

Christmas Draw: Randomly assigns participants to other participants, ensuring that no one is paired with themselves.

Grouping Draw: Divides participants into groups of a specified size.

Pairing Draw: Pairs participants from two different lists.

Additional Options
Number of Winners: Specify how many winners to draw (only for Classic Draw).

Group Size: Define the size of each group (only for Grouping Draw).

Match: Specify participants who should be paired together.

Don't Match: Specify participants who should not be paired together
