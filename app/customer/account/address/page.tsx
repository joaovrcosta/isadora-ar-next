'use client';

import { useState } from 'react';
import Card from '@/components/account/card';
import { SidebarAccount } from '@/components/account/sidebar';
import { Button } from '@/components/shadcn/ui/button';
import { Input } from '@/components/shadcn/ui/input';
import { Label } from '@/components/shadcn/ui/label';
import { MapPin } from 'lucide-react';

export default function AddressPage() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    street: '',
    number: '',
    phone: '',
    document: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    surname: '',
    street: '',
    number: '',
    phone: '',
    document: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: typeof errors = {
      name: '',
      surname: '',
      street: '',
      number: '',
      phone: '',
      document: '',
    };

    if (!formData.name.trim()) newErrors.name = 'O nome é obrigatório';
    if (!formData.surname.trim())
      newErrors.surname = 'O sobrenome é obrigatório';
    if (!formData.street.trim()) newErrors.street = 'A rua é obrigatória';
    if (!formData.number.trim()) newErrors.number = 'O número é obrigatório';
    if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = 'Informe um número válido';
    } else if (formData.phone.length < 10) {
      newErrors.phone = 'Mínimo de 10 dígitos';
    }
    if (!formData.document.trim())
      newErrors.document = 'O documento é obrigatório';

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Dados do formulário:', formData);
      alert('Formulário enviado com sucesso!');
    }
  };

  return (
    <div className="mt-20 flex flex-col space-x-0 bg-[#eee] md:mt-24 lg:mt-24 lg:flex-row xl:mt-24 xl:flex-row">
      <SidebarAccount />
      <main className="h-full w-full bg-[#eee] px-4 py-12 lg:px-12 xl:px-24">
        <Card
          icon={<MapPin size={24} />}
          title="Mis direcciones"
          className="mb-8 h-full max-w-[825px]"
        >
          <form onSubmit={handleSubmit}>
            {/* Nome e Rua */}
            <div className="mb-7 flex space-x-12">
              <div className="w-full">
                <Label className="flex gap-1">
                  <span className="text-xs font-semibold">Nome</span>
                  <span className="text-red-700">*</span>
                </Label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-xs text-red-600">{errors.name}</p>
                )}
              </div>
              <div className="w-full">
                <Label className="flex gap-1">
                  <span className="text-xs font-semibold">Calle</span>
                  <span className="text-red-700">*</span>
                </Label>
                <Input
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                />
                {errors.street && (
                  <p className="text-xs text-red-600">{errors.street}</p>
                )}
              </div>
            </div>

            {/* Sobrenome e Número */}
            <div className="mb-7 flex space-x-12">
              <div className="w-full">
                <Label className="flex gap-1">
                  <span className="text-xs font-semibold">Apellido</span>
                  <span className="text-red-700">*</span>
                </Label>
                <Input
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                />
                {errors.surname && (
                  <p className="text-xs text-red-600">{errors.surname}</p>
                )}
              </div>
              <div className="w-full">
                <Label className="flex gap-1">
                  <span className="text-xs font-semibold">Número</span>
                  <span className="text-red-700">*</span>
                </Label>
                <Input
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                />
                {errors.number && (
                  <p className="text-xs text-red-600">{errors.number}</p>
                )}
              </div>
            </div>

            {/* Celular e Documento */}
            <div className="mb-7 flex space-x-12">
              <div className="w-full">
                <Label className="flex gap-1">
                  <span className="text-xs font-semibold">Celular</span>
                  <span className="text-red-700">*</span>
                </Label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p className="text-xs text-red-600">{errors.phone}</p>
                )}
              </div>
              <div className="w-full">
                <Label className="flex gap-1">
                  <span className="text-xs font-semibold">Documento</span>
                  <span className="text-red-700">*</span>
                </Label>
                <Input
                  name="document"
                  value={formData.document}
                  onChange={handleChange}
                />
                {errors.document && (
                  <p className="text-xs text-red-600">{errors.document}</p>
                )}
              </div>
            </div>

            {/* Botão de submissão */}
            <div className="flex items-center justify-center">
              <Button
                type="submit"
                className="h-[42px] w-[165px] rounded-none text-[12px]"
              >
                SALVAR DADOS
              </Button>
            </div>
          </form>
        </Card>
      </main>
    </div>
  );
}
