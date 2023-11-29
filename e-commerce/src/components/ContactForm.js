import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    mode: "onChange",
  });

  const phoneNumberValidation = (value) => {
    if (!(value[0] == 0 && value.length === 11)) {
      return "Lütfen telefon numaranızı başında 0 koyarak, 11 karakter olarak yazınız";
    }
    return true;
  };

  const onFormSubmit = (formData, e) => {
    e.target.reset();
    console.log(formData);
    toast.info("En kısa sürede sizinle iletişime geçeceğiz.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="flex flex-wrap gap-10 border border-gray-400 rounded-md p-14 justify-center items-center my-20 ">
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <label className="d-block">
          Adınız:
          <input
            type="text"
            {...register("fullName", {
              required: "Lütfen adınızı yazınız",
              minLength: {
                value: 3,
                message: "En az 3 karakter giriniz.",
              },
            })}
          />
        </label>
        {errors.fullName && <div> {errors.fullName.message} </div>}

        <label className="d-block">
          Email Adresiniz:
          <input
            type="email"
            {...register("email", {
              required: "Lütfen emailinizi yazınız",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Lütfen geçerli bir email adresi giriniz",
              },
            })}
          />
        </label>
        {errors.email && <div> {errors.email.message} </div>}
        <label className="d-block">
          Telefon Numaranız:
          <input
            type="number"
            placeholder="05555555555"
            {...register("phoneNumber", {
              required: "Lütfen telefon numaranızı yazınız",
              validate: { phoneNumberValidation },
            })}
          />
        </label>
        {errors.phoneNumber && <div> {errors.phoneNumber.message} </div>}
        <label className="d-block">
          Notunuz:
          <input type="text" {...register("message")} />
        </label>
        <button disabled={!isValid} type="submit">
          Gönder
        </button>
      </form>
    </div>
  );
}
