import { useActionState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import { getErrorMessage } from "../utils/apiError";
import { Field } from "../components/Field";
import { errorCls, primaryBtn } from "../ui";

export function Login() {
  const navigate = useNavigate();
  const { login: saveToken } = useAuth();

  const [error, submit, pending] = useActionState(
    async (_: string | null, form: FormData) => {
      try {
        const { token } = await login({
          email: form.get("email") as string,
          password: form.get("password") as string,
        });
        saveToken(token);
        navigate("/equipment?page=1&size=5");
        return null;
      } catch (err) {
        return getErrorMessage(err);
      }
    },
    null,
  );

  return (
    <main>
      <form action={submit}>
        <h1> Iniciar sesion</h1>
        {error && <p className={errorCls}> {error} </p>}

        <Field label="Email" name="email" type="email" />
        <Field label="Contrasena" name="password" type="password" />

        <button
          type="submit"
          disabled={pending}
          className={`{primaryBtn} w-full`}
        >
          {pending ? "Ingresando... " : "Ingresar"}
        </button>

        <p className="text-sm">
          ¿Aun no tienes una cuenta?{" "}
          <Link to="/register" className="text-violet-500 hover:underline">
            Registrate^^!
          </Link>
        </p>
      </form>
    </main>
  );
}
