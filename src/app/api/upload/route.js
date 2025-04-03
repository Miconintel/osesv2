// YET TO BE SECURED.

import { Buffer } from "node:buffer";
import { NextResponse } from "next/server";
import sharp from "sharp";
import { Product } from "@/lib/model/Product";
import { connectDb } from "@/lib/utilities/util";
import { v4 as uuidv4 } from "uuid";
import { put } from "@vercel/blob";

export const POST = async (request, { params }) => {
  let fileName;
  try {
    const formData = await request.formData();
    // texts

    const { name, category, description, price, discount, image, instock } =
      Object.fromEntries(formData);

    // files
    const handleFile = async (image) => {
      if (!image) return;

      const fileArrayBuffer = await image.arrayBuffer();
      const fileBuffer = Buffer.from(fileArrayBuffer);

      // writefile

      const theName = `${uuidv4()}.jpg`;

      const fileFormat = await sharp(fileBuffer)
        .resize(300, 300, {
          width: 300,
          height: 300,
          fit: "cover",
        })
        .toFormat("jpeg")
        .jpeg({ quality: 100 })
        .toBuffer();

      const { url } = await put(theName, fileFormat, {
        access: "public",
      });

      // return theName;
      return url;
    };

    // handling file
    fileName = await handleFile(image);

    // handling numbwes
    const priceNumber = Number(price);
    const discountNumber = Number(discount);

    //
    //
    // db connect
    connectDb();
    const document = {
      name,
      category,
      description,
      price: priceNumber,
      inStock: instock,
      discountPrice: discountNumber || null,
      coverImage: fileName || null,
    };

    const data = await Product.create(document);

    // revalidatePath("/admin/products"); // Update cached posts

    return NextResponse.json(
      {
        data,
        message: "successfully uploaded",
      },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        error: e.message,
      },
      { status: 500 }
    );
  }
};
