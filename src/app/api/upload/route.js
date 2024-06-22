import path from "path";
import { writeFile } from "fs/promises";
import { Buffer } from "node:buffer";
import { NextResponse } from "next/server";
import sharp from "sharp";
import { Product } from "@/lib/model/Product";
import { connectDb } from "@/lib/utilities/util";
import { Blob } from "buffer";

// console.log(__dirname);
// console.log(process.cwd());

export const POST = async (request, { params }) => {
  let fileName;
  try {
    const formData = await request.formData();
    // texts

    const { name, category, description, image, price, discount } =
      Object.fromEntries(formData);

    // console.log({
    //   name,
    //   category,
    //   description,
    //   image,
    // });

    // files
    const handleFile = async (image) => {
      // const file = formData.get("image");
      // console.log(image);

      if (!image) return;

      const fileArrayBuffer = await image.arrayBuffer();
      const fileBuffer = Buffer.from(fileArrayBuffer);
      console.log("running");

      // writefile
      // console.log(__dirname);
      // console.log(process.cwd());
      const theName = image.name.replaceAll(" ", "_");

      const fileFormat = await sharp(fileBuffer)
        .resize(300, 300, {
          width: 300,
          height: 300,
          fit: "cover",
        })
        .toFormat("jpeg")
        .jpeg({ quality: 100 })
        .toFile(path.join(process.cwd(), `public/images/${theName}`));

      return theName;
    };

    fileName = await handleFile(image);

    // handling numbwes
    const priceNumber = Number(price);
    const discountNumber = Number(discount);
    // fileName = await handleFile(image);

    //
    //
    //
    //
    // db connect
    connectDb();

    const document = {
      name,
      category,
      description,
      price: priceNumber,
      discountPrice: discountNumber || null,
      coverImage: fileName || null,
    };

    const data = await Product.create(document);
    // console.log(data);

    return NextResponse.json(
      {
        // data,
        message: "successfully uploaded",
      },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        error: "there is a problem",
      },
      { status: 500 }
    );
  }
};
