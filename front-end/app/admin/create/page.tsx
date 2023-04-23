"use client";
import Card from "@/app/cards/card";
import { app } from "../../config/firebase.config";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

// TODO Get the List of genere from backend or add all the list here itself
const ListOfGenere = ["Metal", "Romance", "Rock", "Rap"];

const CreateSong = () => {
  const [genere, setGenere] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // TODO make your API call here
  };

  const firebaseAuth = getAuth(app);
  useEffect(() => {
    firebaseAuth.onAuthStateChanged(async (userCredentials) => {
      if (
        userCredentials &&
        userCredentials.displayName === "Neffex Official"
      ) {
      } else {
        window.location.href = "/";
      }
    });
  }, []);

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-5">
        <span className="font-bold underline text-2xl">Add Song</span>
        <div className="flex w-full">
          <div className="w-full">
            <form
              className="w-full px-10 flex gap-10 flex-col"
              onSubmit={handleSubmit}
            >
              <div className="flex gap-4">
                <div className="w-full">
                  <FormControl fullWidth>
                    <TextField
                      required
                      id="outlined-basic"
                      className="w-full"
                      label="Song Name"
                      variant="outlined"
                      value={title}
                      onChange={(event) => {
                        setTitle(event.target.value);
                      }}
                    />
                  </FormControl>
                </div>
                <div className="w-full">
                  <FormControl fullWidth>
                    <TextField
                      id="outlined-basic"
                      className="w-full"
                      label="Album Name"
                      variant="outlined"
                    />
                  </FormControl>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-full">
                  <FormControl fullWidth>
                    <TextField
                      required
                      id="outlined-basic"
                      className="w-full"
                      label="Artist Name"
                      variant="outlined"
                    />
                  </FormControl>
                </div>
                <div className="w-full">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Genere
                    </InputLabel>
                    <Select
                      required
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={genere}
                      label="Genere"
                      onChange={(event) => {
                        setGenere(event.target?.value as string);
                      }}
                    >
                      {ListOfGenere.map((gen, index) => {
                        return (
                          <MenuItem key={index} value={index}>
                            {gen}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div>
                <Button
                  variant="outlined"
                  component="label"
                  className={" w-full max-w-xl"}
                >
                  Upload your Song Poster Here*
                  <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={(e) => {
                      handleImageChange(e);
                    }}
                  />
                </Button>
              </div>
              <Button type="submit" variant="contained" className="bg-blue-500">
                Add Song
              </Button>
            </form>
          </div>
          <div className="pr-10">
            <Card
              data={{
                title: title || "Song Name",
                poster: image,
                link: "#",
                type: "",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSong;
