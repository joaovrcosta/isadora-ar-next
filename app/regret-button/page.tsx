'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Label } from '@/components/shadcn/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn/ui/select';
import { Input } from '@/components/shadcn/ui/input';
import { Button } from '@/components/shadcn/ui/button';

const formSchema = z.object({
  subject: z.string().min(1, 'O assunto é obrigatório.'),
  name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres.'),
  nickname: z.string().email('Digite um apelido válido.'),
  document: z.string().min(1, 'O documento é obrigatório.'),
  ticket: z.string().min(1, 'O ticket de compra é obrigatório.'),
  email: z.string().min(1, 'E-mail é obrigatório.'),
  reason: z.string().min(2, 'Digite o motivo corretamente.'),
  phoneNumber: z.string().min(8, 'Digite o telefone completo.'),
  images: z.array(z.any()).max(3, 'Você pode enviar até 3 imagens.'),
});

type FormData = z.infer<typeof formSchema>;

export default function RegretButtonPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Dados do formulário:', data);
    alert('Formulário enviado com sucesso!');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setValue('images', Array.from(files));
    }
  };

  return (
    <div className="mb-24 mt-40 flex flex-col items-center justify-center px-4">
      <div className="flex max-w-[730px] flex-col items-center justify-center space-y-3">
        <span className="text-sm tracking-[2px]">Botón de arrepentimiento</span>
        <h1 className="mb-5 text-center text-[22px] font-semibold tracking-[2px]">
          ¿Te arrepentiste y querés cancelar tu compra?
        </h1>
        <p className="text-center text-sm tracking-[2px] text-gray-400">
          Recordá que tenés 15 días corridos desde que recibiste la compra.
        </p>
        <p className="text-center text-sm tracking-[2px] text-gray-400">
          Para poder completar el formulario es necesario el n° de pedido y mail
          con el que registraste la compra.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-16 w-full max-w-[710px] space-y-8"
      >
        {/* Nome e Email */}
        <div className="flex items-center justify-between gap-4">
          <div className="w-full">
            <Label className="flex gap-1">
              <span className="text-xs font-semibold">Nombre</span>
              <span className="text-red-700">*</span>
            </Label>
            <Input {...register('name')} />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="w-full">
            <Label className="flex gap-1">
              <span className="text-xs font-semibold">Apellido</span>
              <span className="text-red-700">*</span>
            </Label>
            <Input {...register('nickname')} />
            {errors.nickname && (
              <p className="mt-1 text-sm text-red-600">
                {errors.nickname.message}
              </p>
            )}
          </div>
        </div>

        {/* Pedido e Ticket */}
        <div className="flex items-center justify-between gap-4">
          <div className="w-full">
            <Label className="flex gap-1">
              <span className="text-xs font-semibold">CPF</span>
              <span className="text-red-700">*</span>
            </Label>
            <Input {...register('document')} />
            {errors.document && (
              <p className="mt-1 text-sm text-red-600">
                {errors.document.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <Label className="flex gap-1">
              <span className="text-xs font-semibold">Pedido #</span>
              <span className="text-red-700">*</span>
            </Label>
            <Input {...register('ticket')} />
            {errors.ticket && (
              <p className="mt-1 text-sm text-red-600">
                {errors.ticket.message}
              </p>
            )}
          </div>
        </div>

        {/* Loja e Telefone */}
        <div className="items-center justify-between gap-4 space-y-10">
          <div className="w-full">
            <Label className="flex gap-1">
              <span className="text-xs font-semibold">E-mail</span>
              <span className="text-red-700">*</span>
            </Label>
            <Input {...register('email')} />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <Label className="flex gap-1">
              <span className="text-xs font-semibold">
                Contanos, ¿por qué querés cancelar la compra?
              </span>
              <span className="text-red-700">*</span>
            </Label>
            <Input {...register('reason')} />
            {errors.reason && (
              <p className="mt-1 text-sm text-red-600">
                {errors.reason.message}
              </p>
            )}
          </div>
        </div>

        {/* Botão de envio */}
        <div className="flex items-center justify-center">
          <Button type="submit" className="h-[50px] w-[180px] rounded-none">
            CANCELAR MEU PEDIDO
          </Button>
        </div>
      </form>
    </div>
  );
}
