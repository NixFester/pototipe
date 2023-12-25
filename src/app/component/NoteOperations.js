"use client";
import { useEffect, useState } from "react";
import "../../styles/evernote.modules.scss";
import { app, database,auth } from "../../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider 
} from "firebase/auth";
export default function NoteOperations() {
  const provider = new GoogleAuthProvider();

  const dbInstance = collection(database, "notes");

  const [user, setUser] = useState(null);
  const [isInputVisible, setInputVisible] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDesc, setNoteDesc] = useState("");

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user)
        console.log({ credential, token, user });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential });
      });
  };

  const logout = () => {
    auth.signOut();
    console.log("logout");
  };

  const addDesc = (value) => {
    setNoteDesc(value);
  };
  const inputToggle = () => {
    setInputVisible(!isInputVisible);
  };
  const saveNote = () => {
    addDoc(dbInstance, {
      noteTitle: noteTitle,
      noteDesc: noteDesc,
    }).then(() => {
      setNoteTitle("");
      setNoteDesc("");
    });
  };
  useEffect(() => {
    getDocs(dbInstance).then((data) => {
      console.log(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  }, [dbInstance]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // set react state 'user' to user
        const uid = user.uid;
            console.log({ uid });
        setUser(user);
      } else {
        // set react state 'user' to null
        setUser(null);
        console.log('No user');
      }
    });
  }, [user]);

  return (
    <>
      <div className={"btnContainer"}>
        <button className={"button"} onClick={inputToggle}>
          Add a New Note
        </button>
      </div>
      <div className={"btnContainer"}>
        {user!==null?(<button className={"button"} onClick={logout}>
          Logout
        </button>):
        (<button className={"button"} onClick={login}>
          Login
        </button>)}
      </div>
      {user !== null ? (
        <div>
          <p>Kamu Logged </p>
        </div>
      ) : (
        <div>
          <p>Kamu blm loggin</p>
        </div>
      )}

      {isInputVisible ? (
        <div className={"inputContainer"}>
          <input
            className={"input"}
            placeholder="Enter the Title.."
            onChange={(e) => setNoteTitle(e.target.value)}
            value={noteTitle}
          />
          <div className={"ReactQuill"}>
            <ReactQuill onChange={addDesc} value={noteDesc} />
          </div>
          <button className={"saveBtn"} onClick={saveNote}>
            Save Note
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
