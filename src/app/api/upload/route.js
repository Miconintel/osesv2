import path from "path";
import { writeFile } from "fs/promises";
import { Buffer } from "node:buffer";
import { NextResponse } from "next/server";
import sharp from "sharp";
import { Product } from "@/lib/model/Product";
import { connectDb } from "@/lib/utilities/util";

export const POST = async (request, { params }) => {
  let fileName;
  try {
    const formData = await request.formData();
    // texts

    const { name, category, description, image } = Object.fromEntries(formData);

    console.log({
      name,
      category,
      description,
      image,
    });

    // files
    const handleFile = async (formData) => {
      const file = formData.get("image");
      if (!file) return;
      const fileArrayBuffer = await file.arrayBuffer();
      const fileBuffer = Buffer.from(fileArrayBuffer);

      // writefile
      // console.log(__dirname);
      // console.log(process.cwd());
      fileName = file.name.replaceAll(" ", "_");

      const fileFormat = await sharp(fileBuffer)
        .resize(200, 300, {
          width: 200,
          height: 200,
          fit: "contain",
        })
        .toFormat("jpeg")
        .jpeg({ quality: 100 })
        .toFile(path.join(process.cwd(), `public/images/${fileName}`));

      console.log(fileFormat);
    };

    handleFile(formData);

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
      coverImage: fileName || null,
    };

    const data = await Product.create(document);
    console.log(data);

    return NextResponse.json(
      {
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
