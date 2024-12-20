'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginTab } from '@/components/login-tab';
import { Button } from '@/components/shadcn/ui/button';
import { Input } from '@/components/shadcn/ui/input';
import { Label } from '@/components/shadcn/ui/label';

const createAccountSchema = z.object({
  name: z.string().nonempty({ message: 'O nome é obrigatório' }),
  surname: z.string().nonempty({ message: 'O sobrenome é obrigatório' }),
  document: z.string().nonempty({ message: 'O documento é obrigatório' }),
  email: z
    .string()
    .nonempty({ message: 'O e-mail é obrigatório' })
    .email({ message: 'Formato de e-mail inválido' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' }),
  confirmPassword: z.string().nonempty({ message: 'Confirme sua senha' }),
  acceptInfo: z.boolean().refine((val) => val === true, {
    message: 'Você precisa aceitar para receber informações.',
  }),
  acceptLoyalty: z.boolean().refine((val) => val === true, {
    message: 'Você precisa aceitar os termos do programa de lealdade.',
  }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: 'Você precisa aceitar os Termos e Políticas de Privacidade.',
  }),
});

type CreateAccountFormData = z.infer<typeof createAccountSchema>;

export default function CreatePage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CreateAccountFormData>({
    resolver: zodResolver(createAccountSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: CreateAccountFormData) => {
    console.log('Dados do formulário:', data);
  };

  return (
    <div className="mt-32 flex items-center justify-center">
      <div className="mb-[40px] w-[360px] flex-col">
        <div className="mb-[40px] flex items-center justify-center">
          <LoginTab />
        </div>
        <div className="mb-6">
          <h3 className="text-sm">Datos personales</h3>
        </div>
        <div className="space-y-8">
          <div className="w-full">
            <Label className="flex gap-1">
              <span className="text-sm font-semibold text-[#686868]">Nome</span>
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
                Sobrenome
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
                Documento
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
          <div className="mb-6">
            <h3 className="text-sm">Datos personales</h3>
          </div>
          <div className="w-full">
            <Label className="flex gap-1">
              <span className="font-semibol text-sm text-[#686868]">
                E-mail
              </span>
              <span className="text-red-700">*</span>
            </Label>
            <Input />
          </div>
          <div className="w-full">
            <Label className="flex gap-1">
              <span className="font-semibol text-sm text-[#686868]">Senha</span>
              <span className="text-red-700">*</span>
            </Label>
            <Input />
          </div>
          <div className="w-full">
            <Label className="flex gap-1">
              <span className="font-semibol text-sm text-[#686868]">
                Repetir senha
              </span>
              <span className="text-red-700">*</span>
            </Label>
            <Input />
          </div>
        </div>
        <div className="mb-[40px] mt-[20px] text-right">
          <p className="text-xs text-[#abb3b6]">¿Olvidaste la contraseña?</p>
        </div>

        <div className="mb-6 space-y-4">
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <Label>
              Acepto recibir información por Email sobre novedades, ofertas,
              descuentos, promociones y eventos.
            </Label>
            {errors.acceptInfo && (
              <p className="mt-1 text-xs text-red-500">
                {errors.acceptInfo.message}
              </p>
            )}
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <Label>
              Acepto formar parte del Programa de Lealtad de Isadora, conocé los{' '}
              <span className="font-bold">Términos y Condiciones.</span>
            </Label>
            {errors.acceptLoyalty && (
              <p className="mt-1 text-xs text-red-500">
                {errors.acceptLoyalty.message}
              </p>
            )}
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <Label>
              Acepto los{' '}
              <span className="font-bold">Términos y Condiciones</span> y las{' '}
              <span className="font-bold">Políticas de Privacidad</span> del
              sitio.
            </Label>
            {errors.acceptTerms && (
              <p className="mt-1 text-xs text-red-500">
                {errors.acceptTerms.message}
              </p>
            )}
          </div>
        </div>

        <Button className="h-[42px] w-full rounded-none font-bold">
          CRIAR CONTA
        </Button>
      </div>
    </div>
  );
}
