import mongoose, { Schema } from "mongoose";

export interface ISkills {
  id: number;
  name: string;
  status: string;
  img: string;
  icon: string;
}

const skillsSchema: Schema<ISkills> = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
});

export const skillModel =
  mongoose.models?.skills ?? mongoose.model<ISkills>("Skills", skillsSchema);
