import { NextResponse, NextRequest } from "next/server";
import multer from "multer";
import fs from "fs";

// get path
const getPath = () => {
  let path = "./uploads/profiles";

  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
  return path;
};

// storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, getPath());
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// upload
const upload = multer({ storage });

// get profiles
export async function GET() {
  return NextResponse.json({ message: "get all profiles" });
}
// add new profile
export async function POST(req: NextRequest) {
  return new Promise((resolve, reject) => {
    upload.single("profile")(req, {}, async (err) => {
      if (err instanceof multer.MulterError) {
        return resolve(NextResponse.json({ error: "error" }, { status: 400 }));
      } else if (err) {
        return resolve(
          NextResponse.json({ error: "upload file error" }, { status: 400 })
        );
      }
      return resolve(
        NextResponse.json({ message: "image uploaded" }, { status: 400 })
      );
    });
  });
}

// config
export const config = {
  api: {
    bodyParser: false, // Disable default body parsing for file uploads
  },
};
