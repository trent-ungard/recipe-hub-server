import { Router } from 'express';
import { getUsers } from '../controllers/users';

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users routes
 */
const router: Router = Router();

// GET all users
/**
 * @openapi
 * /Users:
 *   get:
 *     description: Get a list of all the comic books.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Returns a JSON list of all Users.
 */
router.route("/:id").get((_: any, res: any) => {
  res.send("Get a user");
});

router.route("/").get(getUsers);

router.route("/").post((_: any, res: any) => {
  res.send("Create a user");
});

router.route("/:id").put((_: any, res: any) => {
  res.send("Update a user");
});

router.route("/:id").patch((_: any, res: any) => {
  res.send("Update a user");
});

router.route("/:id").delete((_: any, res: any) => {
  res.send("Delete a user");
});

export default router;