CREATE TABLE IF NOT EXISTS public.user (
  id SERIAL PRIMARY KEY NOT NULL,
  auth_user_id VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  username VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE,
  deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE IF NOT EXISTS public.recipe (
  id SERIAL PRIMARY KEY NOT NULL,
  recipe_name VARCHAR(255) NOT NULL,
  description TEXT,
  difficulty INT CHECK(difficulty > 1 AND difficulty < 5),
  preparation_time INT CHECK(preparation_time % 30 = 0),
  created_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE,
  deleted_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE IF NOT EXISTS public.favorite (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  recipe_id INT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE,
  deleted_at TIMESTAMP WITH TIME ZONE,
  FOREIGN KEY(user_id) REFERENCES public.user(id) ON DELETE CASCADE,
  FOREIGN KEY(recipe_id) REFERENCES public.recipe(id) ON DELETE CASCADE,
  UNIQUE(user_id, recipe_id)
);

CREATE TABLE IF NOT EXISTS public.instruction (
  id SERIAL PRIMARY KEY,
  recipe_id INT NOT NULL,
  step_number INT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE,
  deleted_at TIMESTAMP WITH TIME ZONE,
  FOREIGN KEY(recipe_id) REFERENCES public.recipe(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS public.ingredient (
  id SERIAL PRIMARY KEY,
  ingredient_name VARCHAR(255) NOT NULL,
  quantity VARCHAR(50),
  unit VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS public.equipment (
  id SERIAL PRIMARY KEY,
  equipment_name VARCHAR(255) NOT NULL,
  description TEXT
);

CREATE TABLE IF NOT EXISTS public.media (
  id SERIAL PRIMARY KEY,
  media_type VARCHAR(50) NOT NULL,
  url TEXT NOT NULL,
  description TEXT
);

CREATE TABLE IF NOT EXISTS public.instructionIngredient (
  id SERIAL PRIMARY KEY,
  instruction_id INT NOT NULL,
  ingredient_id INT NOT NULL,
  FOREIGN KEY(instruction_id) REFERENCES public.instruction(id) ON DELETE CASCADE,
  FOREIGN KEY(ingredient_id) REFERENCES public.ingredient(id) ON DELETE CASCADE,
  UNIQUE(instruction_id, ingredient_id)
);

CREATE TABLE IF NOT EXISTS public.instructionEquipment (
  id SERIAL PRIMARY KEY,
  instruction_id INT NOT NULL,
  equipment_id INT NOT NULL,
  FOREIGN KEY(instruction_id) REFERENCES public.instruction(id) ON DELETE CASCADE,
  FOREIGN KEY(equipment_id) REFERENCES public.equipment(id) ON DELETE CASCADE,
  UNIQUE(instruction_id, equipment_id)
);

CREATE TABLE IF NOT EXISTS public.instructionMedia (
  id SERIAL PRIMARY KEY,
  instruction_id INT NOT NULL,
  media_id INT NOT NULL,
  FOREIGN KEY(instruction_id) REFERENCES public.instruction(id) ON DELETE CASCADE,
  FOREIGN KEY(media_id) REFERENCES public.media(id) ON DELETE CASCADE,
  UNIQUE(instruction_id, media_id)
);