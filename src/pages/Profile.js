import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { auth } from "../firebase/firebase";
import PDFUploader from "./PDFUploader";

function Profile() {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [refresh, setRefresh] = useState(false); // State to trigger refresh

  useEffect(() => {
    const fetchDocument = async () => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setPdfUrl(docSnap.data().pdf);
      } else {
        console.error("No such document!");
      }
    };

    fetchDocument();
  }, [refresh]); // Depend on the refresh state

  const handleUploadSuccess = () => {
    setRefresh(!refresh); // Toggle the refresh state to trigger re-fetching the document
  };

  return (
    <div className="container">
      <PDFUploader onUploadSuccess={handleUploadSuccess} />
      <div>
        {pdfUrl ? (
          <iframe
            src={pdfUrl}
            width="100%"
            height="600px"
            style={{ border: "none" }}
          ></iframe>
        ) : (
          <p>No PDF found</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
