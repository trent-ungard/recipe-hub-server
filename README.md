# Recipe Hub API

This API serves as the backend for the Recipe Hub application. For a high level overview, 
feel free to read architecture decision diagrams in `doc/architecture/decisions`, the project
overview below, and the Mermaid diagrams also below.

## Getting Started

To get started, install all dependencies with `pnpm install`

To run the dev server, run `pnpm dev`

## Purpose

A recipe app without the junk. 

## Features

#### Must Have

- Auth
- The ability to search for a recipe
- The ability to create a recipe
- The ability to favorite a recipe
- The ability to create an ingredient list
- A "time" for every recipe
- A "difficulty" for every recipe
- The ability to delete recipes
- The ability to edit a recipe after it has been posted

####  Should Have

- The ability to add videos to recipes
- The ability to associate videos to recipe steps
- The ability to follow a user
- The ability to associate a recipe to an ingredient list
- The ability to associate an ingreident to a step in a recipe
- The ability to associate necessary equipment to a recipe

#### Could Have

- The ability to share a recipe
- The ability to duplicate a recipe

# Developer Notes

This project uses dotenvx (that's not a typo) to manage env vars. This is installed at the system level instead of the app level and will automatically preload env vars. 