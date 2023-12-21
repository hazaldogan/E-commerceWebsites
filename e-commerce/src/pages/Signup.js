import React from "react";
import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            placeholder="Full Name"
            {...register("Full Name", {
              required: "Please enter your full name.",
              min: 3,
            })}
          />
          {errors.fullName && <p>{errors.fullName.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            {...register("Email", {
              required: "Please enter your email.",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email address.",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            {...register("Password", {
              required: "Please enter your password.",
              max: 8,
              min: 8,
              pattern: {
                value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message:
                  "Password needs to be min 8 character including numbers, lower case, upper case and special chars.",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            {...register("Confirm Password", {
              required: "Please enter your password.",
              max: 8,
              min: 8,
              pattern: {
                value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message:
                  "Password needs to be min 8 character including numbers, lower case, upper case and special chars.",
              },
            })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>
        <div>
          <label htmlFor="phone">Mobile Phone</label>
          <input
            id="phone"
            type="tel"
            placeholder="Mobile number"
            {...register("Mobile number", {
              required: "Please enter your phone number",
              minLength: 6,
              maxLength: 12,
            })}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <select className="input-field" id="role" {...register("role")}>
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
            <option value="store">Store</option>
          </select>
          {errors.role && <p className="input-error">{errors.role.message}</p>}
        </div>
        <div className="hidden">
          <div>
            <input
              type="text"
              placeholder="Store Name"
              {...register("Store Name", { min: 3 })}
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Store Phone"
              {...register("Store Phone", {})}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Store Tax ID"
              {...register("Store Tax ID", { pattern: TXXXXVXXXXXX })}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Store Bank Account"
              {...register("Store Bank Account", {})}
            />
          </div>

          <input disabled={!isValid} type="submit" />
        </div>
      </form>
    </div>
  );
}
