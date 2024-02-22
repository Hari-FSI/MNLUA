import { useState } from "react";
import Head from "next/head";
import PublitioAPI from "publitio_js_sdk";
import axios from "axios";
import Image from "next/image";
export default function Home() {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  function call(event) {
    const publitio = new PublitioAPI(
      "Gab28ewSXjhvtk0NVlZa",
      "1hcvZ0tpa6tSg75x17B2Rqqn8XGQLhDn"
    );
    const api_url = publitio.uploadUrlSigned();

    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "my-uploads");

    axios
      .post(api_url, formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: function (progressEvent) {
          const valeur = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          console.log(valeur + "%");
        }.bind(this),
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data.success == true) {
          console.log("upload ok");
        } else {
          console.log("upload failed");
        }
      });
  }

  /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  /**
   * handleOnSubmit
   * @description Triggers when the main form is submitted
   */

  async function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "my-uploads");

    /* const data = await fetch(
			"https://mlnu.testwala.in/jsonapi/node/article/field_image",
			{
				method: "POST",
				body: formData,
			}
		).then((r) => r.json());

		setImageSrc(data.secure_url);
		setUploadData(data); */

    const response = await fetch(
      "https://mlnu.testwala.in/jsonapi/node/article/field_image",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.

        headers: {
          "Content-Type": "application/octet-stream",
          Accept: "application/vnd.api+json",
          "X-CSRF-Token": "0VzZBIPYyRldtjsnuY0lpve_Dv_HlFG0SXXbhHCrrUw",
          "Content-Disposition": "attachment; filename=file.jpg",
          "data-binary": "@test.jpg",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
          username: "admin",
          password: "admin",
        },

        body: formData, // body data type must match "Content-Type" header
      }
    );

    console.log(response);
  }

  return (
    <div>
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Upload your image to Cloudinary!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Image Uploader</h1>

        <p>Upload your image to Cloudinary!</p>

        <form method="post" onChange={handleOnChange} onSubmit={call}>
          <p>
            <input type="file" name="file" />
          </p>

          {imageSrc && !uploadData && (
            <>
              <Image
                src={imageSrc}
                alt="MNLUA INDUCTION PROGRAMME 2022"
                title="Picture of the author"
                width="360"
                height="280"
              />
              <p>
                <button>Upload Files</button>
              </p>
            </>
          )}

          {uploadData && (
            <code>
              <pre>{JSON.stringify(uploadData, null, 2)}</pre>
            </code>
          )}
        </form>
      </main>

      <footer></footer>
    </div>
  );
}
