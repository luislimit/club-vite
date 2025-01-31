import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { DBContext } from "../context/DBContext";
import Home from "./Home";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dBCtx = useContext(DBContext);

  useEffect(() => {
    setError(dBCtx.error);
  }, [dBCtx.error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    dBCtx.iniciarSesion({ username: username, password: password });
  };

  return (
    <>
      {dBCtx.usuario ? (
        <Home />
      ) : (
        <div style={styles.container}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <h2>{t("IniciaSesion")}</h2>

            {error && <p style={styles.error}>{error}</p>}

            <div style={styles.inputGroup}>
              <label htmlFor="username">{t("Usuario")}:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="password">{t("Contraseña")}:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
              />
            </div>

            <button type="submit" style={styles.button}>
              {t("Acceder")}
            </button>
          </form>
        </div>
      )}
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "300px",
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "15px",
  },
};
