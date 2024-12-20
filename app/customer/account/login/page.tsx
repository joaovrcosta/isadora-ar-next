'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginTab } from '@/components/login-tab';
import { Button } from '@/components/shadcn/ui/button';
import { Input } from '@/components/shadcn/ui/input';
import { Label } from '@/components/shadcn/ui/label';
import Link from 'next/link';

const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'O e-mail é obrigatório' })
    .email({ message: 'Formato de e-mail inválido' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' }),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: LoginFormData) => {
    console.log('Dados do formulário:', data);
  };

  return (
    <div className="mt-32 flex items-center justify-center">
      <div className="mb-[40px] w-[360px] flex-col px-3">
        <div className="mb-[40px] flex items-center justify-center">
          <LoginTab />
        </div>
        <div className="space-y-8">
          <div className="w-full">
            <Label className="flex gap-1">
              <span className="text-sm font-semibold text-[#686868]">
                E-mail
              </span>
              <span className="text-red-700">*</span>
            </Label>
            <Input />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <Label className="flex gap-1">
              <span className="text-sm font-semibold text-[#686868]">
                Senha
              </span>
              <span className="text-red-700">*</span>
            </Label>
            <Input />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-[40px] mt-[20px] text-right">
          <p className="text-xs text-[#abb3b6]">¿Olvidaste la contraseña?</p>
        </div>
        <Button
          type="submit"
          className="h-[42px] w-full rounded-none font-bold"
          disabled={!isValid} // Desativa se o formulário for inválido
        >
          INGRESSAR
        </Button>
        <div className="mt-6 flex items-center justify-center">
          <p className="text-xs">¿Todavía no tenés cuenta? Registrate</p>
        </div>
      </div>
    </div>
  );
}
