import mongoose from "mongoose";

// declaring schema options

const schemaOptions = {
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  coverImage: {
    type: String,
    default: "placeholder.jpg",
  },
  images: {
    type: [String],
  },

  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, "rating must not be less than one"],
    max: [5, "rating must not be more than 5"],
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
};

// creating schema
const productSchema = mongoose.Schema(schemaOptions, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

// schema midllewares

productSchema.pre("save", async (next, doc) => {
  console.log(doc);
});

// creating model

export const Product =
  mongoose.models?.Product || mongoose.model("Product", productSchema);
