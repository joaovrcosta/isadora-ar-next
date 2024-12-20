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
import { Upload } from 'lucide-react';
import { Button } from '@/components/shadcn/ui/button';

const formSchema = z.object({
  subject: z.string().min(1, 'O assunto é obrigatório.'),
  name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres.'),
  email: z.string().email('Digite um email válido.'),
  orderNumber: z.string().min(1, 'O número do pedido é obrigatório.'),
  ticket: z.string().min(1, 'O ticket de compra é obrigatório.'),
  store: z.string().min(1, 'A loja de preferência é obrigatória.'),
  phoneArea: z.string().min(2, 'Digite o DDD corretamente.'),
  phoneNumber: z.string().min(8, 'Digite o telefone completo.'),
  images: z.array(z.any()).max(3, 'Você pode enviar até 3 imagens.'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
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
    <div className="mb-24 mt-32 flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center space-y-3">
        <h1 className="text-2xl font-semibold">Contato</h1>
        <p className="text-sm">
          Para comunicarte, completá el siguiente formulario.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-16 w-full max-w-[710px] space-y-8"
      >
        {/* Assunto */}
        <div>
          <Label className="mb-3 flex gap-1">
            <span className="text-xs font-semibold">Assunto</span>
            <span className="text-red-700">*</span>
          </Label>
          <Select onValueChange={(value) => setSelectedOption(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Seleccioná una opción" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">
              {errors.subject.message}
            </p>
          )}
        </div>
        {selectedOption ? (
          <>
            {/* Nome e Email */}
            <div className="flex items-center justify-between gap-4">
              <div className="w-full">
                <Label className="flex gap-1">
                  <span className="text-xs font-semibold">
                    Nombre y apellido
                  </span>
                  <span className="text-red-700">*</span>
                </Label>
                <Input {...register('name')} />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <Label className="flex gap-1">
                  <span className="text-xs font-semibold">
                    Correo electrónico
                  </span>
                  <span className="text-red-700">*</span>
                </Label>
                <Input {...register('email')} />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Pedido e Ticket */}
            <div className="flex items-center justify-between gap-4">
              <div className="w-full">
                <Label className="flex gap-1">
                  <span className="text-xs font-semibold">N° de pedido</span>
                  <span className="text-red-700">*</span>
                </Label>
                <Input {...register('orderNumber')} />
                {errors.orderNumber && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.orderNumber.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <Label className="flex gap-1">
                  <span className="text-xs font-semibold">
                    Ticket de compra
                  </span>
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
            <div className="flex items-center justify-between gap-4">
              <div className="w-full">
                <Label className="flex gap-1">
                  <span className="text-xs font-semibold">
                    Tienda de preferencia
                  </span>
                  <span className="text-red-700">*</span>
                </Label>
                <Input {...register('store')} />
                {errors.store && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.store.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <Label className="flex gap-1">
                  <span className="text-xs font-semibold">
                    Teléfono de contacto
                  </span>
                  <span className="text-red-700">*</span>
                </Label>
                <div className="flex gap-4">
                  <Input
                    className="max-w-[80px]"
                    placeholder="11"
                    {...register('phoneArea')}
                  />
                  <Input {...register('phoneNumber')} />
                </div>
                {errors.phoneArea && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phoneArea.message}
                  </p>
                )}
                {errors.phoneNumber && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
            </div>

            {/* Upload de imagens */}
            <div
              className="flex h-[140px] cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-400 transition-colors hover:bg-slate-100"
              onClick={() => {
                const fileUpload = document.getElementById('fileUpload');
                if (fileUpload) fileUpload.click();
              }}
            >
              <Label className="flex gap-1">
                <span className="text-xs font-semibold">
                  Adjuntar imagen de producto
                </span>
                <span className="text-red-700">*</span>
              </Label>
              <p className="mt-2 text-xs text-slate-500">
                Podés adjuntar hasta 3 (tres) imágenes em formato jpg ou png
                hasta 5MB.
              </p>
              <input
                id="fileUpload"
                type="file"
                multiple
                accept=".jpg,.png"
                onChange={handleImageUpload}
                className="hidden"
              />
              {errors.images && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.images.message}
                </p>
              )}
            </div>

            {/* Botão de envio */}
            <div className="flex items-center justify-center">
              <Button type="submit" className="h-[50px] w-[165px] rounded-none">
                ENVIAR
              </Button>
            </div>
          </>
        ) : null}
      </form>
    </div>
  );
}
