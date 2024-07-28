import mongoose, { Schema } from "mongoose";

const pacientSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  propietario: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
    default: new Date(),
  },
  sintomas: {
    type: String,
    required: true,
  },

  veterinario: {
    type: String,

    // type: Schema.Types.ObjectId,
    // ref: "Veterinario",
  },
});

export const PacienteModel = mongoose.model("Paciente", pacientSchema);
