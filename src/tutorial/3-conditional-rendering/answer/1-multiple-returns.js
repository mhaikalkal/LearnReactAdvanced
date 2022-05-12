import React, { useState, useEffect } from "react";
// success
const url = "https://api.github.com/users/mhaikalkal";
// error
// const url = "https://api.github.com/users/aksjfgaskjfg";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("User");

  useEffect(() => {
    fetch(url)
      // ubah jadi json
      .then((response) => {
        // status 200 (OK) jadi kalau datanya ada, maka lanjut.
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(response.statusText);
        }
      })
      // ambil json jadi param bernama user, lalu kelola
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      // kalau error maka jalankan ini.
      // kelemahan fetch (built-in js) adalah dia nge handle network / internet kita
      // bukan error status dari response nya
      // maka catch gaakan ke trigger. Aneh kan? jadi caranya
      // kita ambil error status dari then pertama lalu oper response status nya,
      .catch((error) => console.log(`Oops : ` + error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }

  return (
    <div>
      <h3>{user}</h3>
    </div>
  );
};

export default MultipleReturns;
