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
    <div className="flex bg-sky-500 justify-center items-center my-20 -mx-52 text-white">
      <div className="w-[50%]">
        <h2 className="font-bold text-3xl">CONTACT US</h2>
      </div>
      <div className="w-[50%] p-20">
        <form onSubmit={handleSubmit(onFormSubmit)}>
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
          {errors.fullName && <div> {errors.fullName.message} </div>}
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
          {errors.email && <div> {errors.email.message} </div>}
          <input
            type="number"
            placeholder="05555555555"
            {...register("phoneNumber", {
              required: "Lütfen telefon numaranızı yazınız",
              validate: { phoneNumberValidation },
            })}
          />
          {errors.phoneNumber && <div> {errors.phoneNumber.message} </div>}
          <input type="text" {...register("message")} />
          <button disabled={!isValid} type="submit">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
}
