import React, { useState, useEffect } from "react";
import Camera from "react-dom-camera";
import { v4 as uuidv4 } from "uuid";

export default function WebcamCapture() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // THIS TESTS OUT CREATING A BLOB AND THEN
    // ACCESSING IT. NOTE: FETCH WORKS BEST
    // const obj = { hello: "world" };
    // const blob = new Blob([JSON.stringify(obj, null, 2)], {
    //   type: "application/json"
    // });
    // let url = URL.createObjectURL(blob);
    // console.log("blob, URL", blob, url);
    // DIFFERENT WAYS OF RETREIVING BLOB DATA
    // fetch(url)
    //   .then(response => response.blob())
    //   .then(blob => console.log("fetched data as blob", blob));
    //
    // THIS DIDNT WORK AS EXPECTED
    //
    // new Response(blob).text().then((text) => {
    //   console.log("blob Response.text", text);
    // });
    // new Response(blob).arrayBuffer().then((buffer) => {
    //   let data = new Uint8Array(buffer);
    //   console.log("blob Response arrayBuffer", data);
    // });
  }, []);

  const serverURL =
    "https://drupal894.syntapse.co.uk/jsonapi/node/article/field_image";

  const postImage = async (url, body) => {
    console.log("serverjs postRequest request", url, body.length);

    // basic http authentication
    let login = "api";
    let password = "api123#";
    let auth = `Basic ` + btoa(`${login}:${password}`);
    let filename = "camera-test-" + uuidv4() + ".png";
    console.log("postImage.filename = ", filename);

    const requestHeaders = new Headers({
      Accept: "application/vnd.api+json",
      "Content-Type": "application/octet-stream",
      "Content-Disposition": `file; filename="${filename}"`,
      Authorization: auth
    });

    let data = undefined;
    try {
      console.log("serverjs calling fetch (POST)");
      const response = await fetch(url, {
        method: "post",
        headers: requestHeaders,
        body: body,
        mode: "cors"
      });
      data = await response.json();
      console.log("serverjs response.json received", data);
    } catch (e) {
      console.log("serverjs criticial post error: ", e);
    }

    console.log(
      `serverjs postRequest worked! JSON:API file id = '${data.data.id}'`
    );
    return data;
  };

  return (
    <div className="App">
      <Camera
        onTakePhoto={(blobURL) => {
          console.log("blob", blobURL);
          setImages([blobURL, ...images]);
          fetch(blobURL)
            .then((response) => response.blob())
            .then((blob) => {
              blob.arrayBuffer().then((buffer) => {
                const array = new Uint8Array(buffer);
                console.log(
                  "blob retrieved",
                  blob,
                  "array length",
                  array.length
                );
                // postImage(serverURL, array);
              });
            });
        }}
      /> 
      <div className="gallery">
        {images.map((image, idx) => (
          <img key={idx} alt="test" className="thumbnail" src={image} />
        ))}
      </div>
    </div>
  );
}
