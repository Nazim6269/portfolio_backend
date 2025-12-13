import mongoose, { Document, Schema } from "mongoose";

interface IProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  screenshots: string[];
  demoLink: string;
  githubLink: string;
}

interface IProjectCategory extends Document {
  id: number;
  category: string;
  data: IProject[];
}

const ProjectSchema: Schema = new Schema<IProject>({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [{ type: String, required: true }],
  screenshots: [{ type: String }],
  demoLink: { type: String },
  githubLink: { type: String },
});

const ProjectCategorySchema: Schema = new Schema<IProjectCategory>({
  id: { type: Number, required: true, unique: true },
  category: { type: String, required: true },
  data: [ProjectSchema],
});

export const projectModel =
  mongoose.models?.Projects ??
  mongoose.model<IProjectCategory>("Projects", ProjectCategorySchema);
