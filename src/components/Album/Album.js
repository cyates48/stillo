import React, { useEffect, useState } from "react";
import { DataStore, Storage } from "aws-amplify";
import { Album as AlbumModel } from "../../models";

const initialState = { albumName: "", albumId: "" };

const Album = () => {
  const [formState, setFormState] = useState(initialState);
  const [albums, setAlbums] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchAlbums();
    fetchPhotos();
  }, []);

  function setAlbumName(value) {
    setFormState({ ...formState, albumName: value });
  }

  function setAlbumId(value) {
    setFormState({ ...formState, albumId: value });
  }

  const onPhotoUploaded = (e) => {
    setFile(e.target.files[0]);
  };

  async function fetchAlbums() {
    try {
      const albums = await DataStore.query(AlbumModel);
      console.log("albums: ", albums);
      setAlbums(albums);
    } catch (err) {
      console.log("error fetching albums with API: ", err);
    }
  }

  const createAlbum = async () => {
    try {
      const result = await DataStore.save(
        new AlbumModel({ name: formState.albumName })
      );
      console.log("album Created: ", result);
      setAlbumName("");
      setAlbums([...albums, result]);
      Storage.put(`${result.id}/`)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log("error in creating album: " + err);
    }
  };

  const uploadPhoto = async () => {
    Storage.put(`${formState.albumId}/` + file.name, file)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    setFile(null);
    setAlbumId("");
  };

  const fetchPhotos = async () => {
    try {
      const result = await Storage.get(
        "a3b51c83-4a73-46d3-8ad9-f8d0917df6bd/curry.jpg"
      );
      console.log("fetched photo: ", result);
    } catch (err) {
      console.log("could not fetch photo");
    }
  };

  return (
    <div style={styles.container}>
      <label>Create Album </label>
      <input onChange={(e) => setAlbumName(e.target.value)} />
      <button onClick={createAlbum}>Create Album</button>
      {albums.map((album, i) => (
        <p key={i}>
          {album.name} : {album.id}
        </p>
      ))}
      <br />
      <br />
      <label>Set Album Id</label>
      <input onChange={(e) => setAlbumId(e.target.value)} />
      <br />
      <label>Upload Photo</label>
      <input type="file" onChange={(e) => onPhotoUploaded(e)} />
      <button onClick={uploadPhoto}>Upload Photo</button>
      <img src="https://usercontent64857-test.s3.us-east-2.amazonaws.com/public/a3b51c83-4a73-46d3-8ad9-f8d0917df6bd/curry.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIATWSVL22FL5ZYR7GO%2F20210305%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210305T063607Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJGMEQCIEl0iuyK9zymm7A5T8SUaJVGhFlbMfnq%2B5zl2BbuGY6TAiA%2FP%2BYH%2FfkekoXjmz6BLoidg%2BxgJREjbREp64O4uW8nICrNBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDI1NDY1NTg0NjAyNiIM5shVEv5m3hU%2Frab6KqEERZx83tSL8YIqcEsXJofxBBALpl%2FzIYbOElbHBgYQmtYIHns9PE5sUiIWTZ7Va%2BjnJrIp9XPXSpUoP2tRNkdhoeVM%2Fx63bxr8ACwvP2%2BRwteMAarUqO47d1EEbx5sKZP0UjPCEy2vmjKrc9jN1eNtxGv58oYOeh4M%2BYpT2J5UBNUwW%2BfpjoqpmIWdC%2FGSflU%2FIBtEpBTpRJ4uk6Sm%2BLH9jIWcRTLDV8HofLyihCjc6cfnUmtvkXw1kKd7nKuAGxYCc32I4UqAkbOOL3bvMGV6vX7cDCjXBWCs%2BCDeI9BDlM7hiArpRAaUgQ8Gw5llFWB6i6DucqSBiH5fIRdf2yWuZCHgYIfWXn%2BUeXI6mC60ZohsE2kMpRCCUBNDT%2BN5z%2FBYPK4Ml3qKm70ztIA5eRCyG%2Bbsg0y6Y6QTQxGmBb9B4WChfNpYrEGbAWcF8CXzcBmX0XxlYdIQnG4EkXK0%2F7K4B0Em0ObQp939ru1%2B94CiDzkz3E3UbyDIJS4WWybuAmw6qTIbypRbDx3bHqy6MZ5n75QSFjIT99gTEm3kuutmrnLygssZJXkT%2Bh6er9OB2neYkpzMFQCiFD7oO%2FyXSLNe1Ch0r2cPuehAOuw2vlE1JHgOs1BcR2vYCu%2B6Uhd2%2FEsJODEQhkPK9Y1C0ryCuIkTEw453sq5gHWGClZeVDDlM%2F%2BfRHW3lP5m42ZYXXU5m%2FvbtOP1zXcBKXnXRIYDJtm4Yy4w16KHggY6hgJLZhN6Zayn64w2bUwqn9DIl%2BuzLtv3c2BQwWldsnxDLRb%2F0GKVMsWHcKGc7b7EbTICdeO1iYvDM0jWGc4TGjsnHCsIpkcaG8OGnA42zI7QL18SKSeNk434LAFVkPaiaKIwzKcwmirQwq62%2Fqk4cg9GF7u2%2BwNUfJyzvxs29iefHn3%2F5QTQMROwIdl7wYfohVr41Rgm5FlnVaNSVg2B3W6TnESHg904Q2hQ0HKJ80YDDd%2BvtIwXHkoo5V2qIS%2BRfwFmDAt85tAfvGk9RglfixWE2wPCW0rdq6bRENzpsURVhwp6JByFNQLVgqXFr8%2FpQ%2FamBuj3TqiK8XehUFYDPGX%2B%2Fln3oMni&X-Amz-Signature=2ea2da2f96944d7a7ac02b35e48b5fe7c08caa0185188ad6be8ad9410e72eac5&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js-v3-%40aws-sdk%2Fclient-s3%2F1.0.0-rc.4%20Mozilla%2F5.0%20%28Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_7%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F88.0.4324.150%20Safari%2F537.36%20aws-amplify%2F3.8.9%20js&x-id=GetObject" />
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  todo: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: "bold" },
  todoDescription: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};

export default Album;
