import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma/index"
import { AuthRequest } from "../../models/interfaces/auth/AuthRequests";