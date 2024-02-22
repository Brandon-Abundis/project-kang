import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { auth } from "../firebase/firebase";

function PDFViewer() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchDocument = async () => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUserData(docSnap.data());
      } else {
        console.error("No such document!");
      }
    };

    fetchDocument();
  }, []);

  // Render your component based on userData
  return (
    <div>
      {userData ? (
        // Render the element from the document data
        <div>{userData.pdf}</div> // Replace 'someField' with the actual field name you want to display
      ) : (
        <p>No document found</p>
      )}
    </div>
  );
}

export default PDFViewer();
