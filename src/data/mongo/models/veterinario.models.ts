import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { generarId } from "../../../config";

const veterinarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  telefono: {
    type: String,
    default: null,
    trim: true,
  },
  web: {
    type: String,
    default: null,
  },
  token: {
    type: String,
    default: generarId(),
  },
  confirmado: {
    type: Boolean,
    default: false,
  },
});

export const VeterinarioModel = mongoose.model(
  "Veterinario",
  veterinarioSchema
);
