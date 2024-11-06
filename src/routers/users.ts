import { Router } from 'express';
import { getUsers } from '../controllers/users';

/**
 * @swagger
 * tags:
 *   name: Comic Books
 *   description: Comic book routes
 */
const router: Router = Router();

// GET all comic books
/**
 * @openapi
 * /comic_books:
 *   get:
 *     description: Get a list of all the comic books.
 *     tags: [Comic Books]
 *     responses:
 *       200:
 *         description: Returns a JSON list of all the comic books.
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