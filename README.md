# Sudoku

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9. This project is purely frontend code. This includes some hard coded predefined values. Based on inputs from user in different cells of sudoku table. Valid messages will display. A user is allowed to do 3 mistakes. After that game will be over. Also, "Well Done" message will display on successful completion.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Classes
It consist of one model class named as "User" in user.ts which defines model of each cell in table.

## Timer

There is a timer in this project which will start when user loads the page and pause as well if user leaves the page and resumes if visited again. Also, Timer will stop if game is over or on successful completion of sudoku.

## Validation and errors

If a user enters any invalid value in cell and making it dirty, it will be marked as red and will be counted as mistake. However if user doesn't enter any value without making it dirty and leaves the cell empty it will not be considered as mistake but will be marked as red.

There are only 3 mistaked allowed. After that game will be over with message display.

If a user pressed submit button without filling the values. It will alert the user by displaying the message of "Values are still require" with number of mistakes left.  

## Landing page

![alt text](https://github.com/shubhygups/sudoku_angular/blob/master/intial_sudoku.JPG)

## Sudoku Complete Successful
![alt text](https://github.com/shubhygups/sudoku_angular/blob/master/complete_sudoku.JPG)

## Sudoku Game over
![alt text](https://github.com/shubhygups/sudoku_angular/blob/master/game_over.JPG)
