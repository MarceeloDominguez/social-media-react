import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";

export default function ProfileUploader() {
  const [file, setFile] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState<string>("");

  const onDrop = useCallback(() => {}, [file]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} className="cursor-pointer" />

      <div className="cursor-pointer flex-center gap-4">
        <img
          src={"/assets/icons/profile-placeholder.svg"}
          alt="update-image"
          className="h-24 w-24 rounded-full object-cover object-top"
        />
        <p className="text-primary-500 small-regular md:bbase-semibold">
          Change profile photo
        </p>
      </div>
    </div>
  );
}
