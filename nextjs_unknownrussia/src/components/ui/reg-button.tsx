"use client";

import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CustomInput } from "./custom-input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn, formatDateTime } from "@/lib/utils";

export function RegistrationButton({ title, movieId, date, className }: any) {
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setisLoading(true);
    try {
      // Filter out empty fields
      const filteredData = Object.fromEntries(
        Object.entries(data).filter(([_, value]) => value)
      );

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/visitors`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: { ...filteredData, movie: { connect: [movieId] } },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      setisLoading(false);
      // Handle success here, possibly reset form or show a success message
      router.push("/success");
    } catch (error) {
      setisLoading(false);
      // Handle errors here, such as showing an error message
      console.error("Registration failed:", error);
      router.push("/error");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            "w-fit rounded-sm px-4 py-2 text-lg bg-blue-600 text-white uppercase tracking-tighter transition ease-in-out duration-200 hover:bg-opacity-80",
            className
          )}
        >
          Зарегистрироваться
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[340px] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Регистрация на показ</DialogTitle>
          <DialogDescription className="font-bold">{title}</DialogDescription>
          {date && (
            <DialogDescription className="text-sm font-light">
              {formatDateTime(date)}
            </DialogDescription>
          )}
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-8"
        >
          <div className="flex flex-wrap gap-2">
            <CustomInput
              type="text"
              label="Имя"
              name="firstname"
              register={register}
              errors={errors}
              required
            />
            <CustomInput
              type="text"
              label="Фамилия"
              name="lastname"
              register={register}
              errors={errors}
              required
            />
            <CustomInput
              type="text"
              label="E-mail"
              name="email"
              register={register}
              errors={errors}
              required
            />
          </div>
          <DialogFooter>
            <button
              type="submit"
              className="w-fit rounded-sm px-4 py-2 text-lg bg-blue-600 text-white uppercase tracking-tighter transition ease-in-out duration-200 hover:bg-opacity-80 disabled:pointer-events-none disabled:opacity-60"
              disabled={isLoading}
            >
              Зарегистрироваться
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
