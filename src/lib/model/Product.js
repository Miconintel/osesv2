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
  price: {
    type: Number,
    default: 2.0,
  },
  discountPrice: {
    type: Number,
    set: (value) => {
      if (value === null) {
        return 0;
      }

      return value;
    },
  },
  coverImage: {
    type: String,
    set: (value) => {
      if (value === null) {
        return "placeholder.jpg";
      }

      return value;
    },
    // default: "placeholder.jpg",
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

  slug: String,
  inStock: {
    type: Boolean,
    default: true,
  },
};

// creating schema
const productSchema = mongoose.Schema(schemaOptions, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

// virtuals

productSchema.virtual("promo").get(function () {
  if (!this.discountPrice > 0) return 0;
  const percentOffPrice = this.price - this.discountPrice;
  const percentageOff = Math.ceil((percentOffPrice * 100) / this.price);
  return percentageOff;
});
// schema midllewares

productSchema.pre("save", async function (next, options) {
  // because I am accepting next I have to call it, else, I can choose not to accept it in async function and not
  // call it.

  this.slug = this.name + "-" + this.category.toLowerCase();
  next();
});

// productSchema.post("save", async function (doc, next) {
//   next();
// });

productSchema.pre("find", function () {
  console.log("i pre finds");
});

productSchema.post("find", async function () {
  console.log("i post fiddnd");
});

// creating model

export const Product =
  mongoose.models?.Product || mongoose.model("Product", productSchema);
