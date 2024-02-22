import React, { useState } from "react";
import { storage, db, auth } from "../firebase/firebase"; // Ensure you have firebase configs set up here
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { Button, ProgressBar, Container, Row, Col } from "react-bootstrap";
import { v4 } from "uuid";
import PropTypes from "prop-types";
//import { Document, Page } from "react-pdf";

const PDFUploader = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const onFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const onFileUpload = () => {
    const storageRef = ref(
      storage,
      `pdfs/${auth.currentUser.uid}/${v4() + "_" + file.name}`,
    );
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        if (progress === 100) {
          setTimeout(() => {
            setProgress(0); // a state to hide the bar
            setFile(null);
          }, 2000);
        }
      },
      (error) => {
        console.error("Upload failed:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
          const userDocRef = doc(db, "users", auth.currentUser.uid);
          updateDoc(userDocRef, {
            pdf: downloadURL,
          }).then(() => {
            onUploadSuccess();
          });
        });
      },
    );
  };

  return (
    <Container>
      <Row>
        <Col>
          <input type="file" onChange={onFileChange} accept="application/pdf" />
          <Button onClick={onFileUpload}>Upload</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {progress > 0 && (
            <ProgressBar now={progress} label={`${progress.toFixed(2)}%`} />
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={url} />
          {/*{url && (
            <Document file={url}>
              <Page pageNumber={1} />
            </Document>
          )} */}
        </Col>
      </Row>
    </Container>
  );
};

PDFUploader.propTypes = {
  onUploadSuccess: PropTypes.func.isRequired, // Define the type and requirement of the prop
};

export default PDFUploader;
