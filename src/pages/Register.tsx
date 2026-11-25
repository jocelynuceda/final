import { useActionState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import { getErrorMessage } from "../utils/apiError";
import { Field } from "../components/Field";
import { errorCls, primaryBtn } from "../ui";

export function Register() {
  const navigate = useNavigate();

  const [error, submit, pending] = useActionState(
    async (_: string | null, form: FormData) => {
      try {
        await register({
          name: form.get("name") as string,
          email: form.get("email") as string,
          password: form.get("password") as string,
        });
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
        <h1 className="">Registrate</h1>

        {error && <p className={errorCls}> {error}</p>}

        <Field label="Nombre" name="name" />
        <Field label="Email" name="email" type="email" />
        <Field label="Contrasena" name="password" type="password" />

        <button
          type="submit"
          disabled={pending}
          className={`{primaryBtn} w-full`}
        >
          {pending ? "Registrando... " : "Registrarse"}
        </button>

        <p className="text-sm">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-violet-500 hover:underline">
            Inicia sesion :D!
          </Link>
        </p>
      </form>
    </main>
  );
}
