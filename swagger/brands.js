/**
 * @swagger
 * components:
 *   schemas:
 *     Brand:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Brand's name
 *       example:
 *         name: Samsung
 */

/**
 * @swagger
 * tags:
 *   name: Brands
 *   description: Brands management
 */

/**
 * @swagger
 * /brands:
 *   get:
 *     summary: Get all brands
 *     tags: [Brands]
 *     parameters:
 *       - in: header
 *         name: access_token
 *         schema:
 *           type: string
 *         required: true
 *         description: JWT token
 *     responses:
 *       200:
 *         description: The list of brands
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Brand'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 */

/**
 * @swagger
 * /brands:
 *   post:
 *     summary: Create a brand
 *     tags: [Brands]
 *     parameters:
 *       - in: header
 *         name: access_token
 *         schema:
 *           type: string
 *         required: true
 *         description: JWT token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Brand'
 *     responses:
 *       201:
 *         description: The brand was successfully created
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 */

/**
 * @swagger
 * /brands/{id}:
 *   get:
 *     summary: Get brand by id
 *     tags: [Brands]
 *     parameters:
 *       - in: header
 *         name: access_token
 *         schema:
 *           type: string
 *         required: true
 *         description: JWT token
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Brand's ID
 *     responses:
 *       200:
 *         description: The brand description by id
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *       404:
 *         description: Brand Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 */

/**
 * @swagger
 * /brands/{id}:
 *   put:
 *     summary: Update a brand
 *     tags:
 *       - Brands
 *     parameters:
 *       - in: header
 *         name: access_token
 *         schema:
 *           type: string
 *         required: true
 *         description: JWT token
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Brand's ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Brand'
 *     responses:
 *       200:
 *         description: The brand was updated successfully
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                  type: string
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *       404:
 *         description: Brand Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 */

/**
 * @swagger
 * /brands/{id}:
 *   delete:
 *     summary: Delete a brand
 *     tags: [Brands]
 *     parameters:
 *       - in: header
 *         name: access_token
 *         schema:
 *           type: string
 *         required: true
 *         description: JWT token
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Brand's ID
 *     responses:
 *       200:
 *         description: The brand was deleted
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 */
