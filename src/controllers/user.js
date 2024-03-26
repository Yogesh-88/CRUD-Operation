import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
const prisma = new PrismaClient();
export const getUsers = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();
    res.status(StatusCodes.OK).json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const createUser = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;

  try {
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });

    res.status(StatusCodes.CREATED).json({ user });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const updateUser = async (req, res, next) => {
  const userId = parseInt(req.params.userId);
  const name = req.body.name;
  const email = req.body.email;

  try {
    const isUserPresent = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!isUserPresent) {
      res.status(StatusCodes.NOT_FOUND).json({ error: "User not found" });
      return;
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name: name,
        email: email,
      },
    });

    res.status(StatusCodes.OK).json({ user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  console.log("hii");
  const userId = parseInt(req.params.userId);
  console.log(userId);
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    res.status(204).json({
      msg: "User Deleted",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const findById = async (req, res, next) => {
  const userId = parseInt(req.params.userId);

  try {
    if (isNaN(userId)) {
      res.status(400).json({ error: "Invalid userId" });
      return;
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error("Error finding user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
