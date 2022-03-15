import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { auth } from "../firebase-config";
import { selectUser } from "../reducers/userSlice";
import { login, logout } from "../reducers/userSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";

const Login = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => console.log("Вы вошли"))
        .catch((err) => alert(err));
    }
  };
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            id: authUser.uid,
            name: authUser.displayName ? "Татьяна" : "Татьяна",
            pic: authUser.photoURL ? authUser.photoURL : "https://picsum.photos/536/354",
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <section>
      <form action="" onSubmit={handleLogin}>
        <h1>Войти</h1>
        <input
          type="email"
          // required="true"
          placeholder="Почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          // required="true"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" className="button_main" value="Войти" />
      </form>
    </section>
  );
};

export default Login;
